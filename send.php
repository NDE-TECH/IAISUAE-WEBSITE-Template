<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

const RECIPIENT = 'i@iaisindia.com'; // Change only if your mailbox is different.
const MAX_FILE_SIZE = 5242880; // 5 MB

function respond(bool $success, string $message, int $status = 200): never {
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_SLASHES);
    exit;
}
function clean(string $value, int $max = 5000): string {
    $value = trim(str_replace(["\r\0", "\0"], '', $value));
    return function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
}
function field(string $name, int $max = 5000): string {
    return clean((string)($_POST[$name] ?? ''), $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') respond(false, 'Method not allowed.', 405);
if (field('website', 200) !== '') respond(true, 'Thank you.'); // honeypot

$type = field('form_type', 30);
$email = field('email', 150);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) respond(false, 'Please enter a valid email address.', 422);

$allowed = ['inquiry', 'career', 'newsletter'];
if (!in_array($type, $allowed, true)) respond(false, 'Invalid form type.', 422);

$host = preg_replace('/[^a-z0-9.-]/i', '', $_SERVER['HTTP_HOST'] ?? 'iaisuae.com');
$from = 'website@' . ($host ?: 'iaisuae.com');
$headers = [
    'MIME-Version: 1.0',
    'From: IAIS UAE Website <' . $from . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . PHP_VERSION
];

if ($type === 'newsletter') {
    $subject = 'IAIS UAE Newsletter Subscription';
    $body = "New newsletter subscription\n\nEmail: {$email}\nDate: " . date(DATE_RFC2822);
    $sent = mail(RECIPIENT, $subject, $body, implode("\r\n", $headers));
    if (!$sent) respond(false, 'The server could not send email. Enable PHP mail/SMTP on your hosting.', 500);
    respond(true, 'Subscription received.');
}

$name = field('name', 100);
$message = field('message', 5000);
if ($name === '' || $message === '') respond(false, 'Please complete all required fields.', 422);

if ($type === 'inquiry') {
    $subject = 'Website Inquiry — ' . $name;
    $body = "New IAIS UAE website inquiry\n\n" .
        "Name: {$name}\nCompany: " . field('company', 150) . "\nEmail: {$email}\nPhone: " . field('phone', 40) .
        "\nPreferred office: " . field('office', 100) . "\nService: " . field('service', 150) . "\n\nProject details:\n{$message}\n";
    $sent = mail(RECIPIENT, $subject, $body, implode("\r\n", $headers));
    if (!$sent) respond(false, 'The server could not send email. Enable PHP mail/SMTP on your hosting.', 500);
    respond(true, 'Inquiry sent successfully.');
}

$subject = 'Career Application — ' . $name . ' — ' . field('role', 150);
$body = "New IAIS UAE career application\n\nName: {$name}\nEmail: {$email}\nPhone: " . field('phone', 40) .
    "\nRole: " . field('role', 150) . "\nCertifications: " . field('certifications', 500) . "\n\nCover note:\n{$message}\n";

$attachment = $_FILES['attachment'] ?? null;
if (!$attachment || $attachment['error'] !== UPLOAD_ERR_OK) respond(false, 'Please attach your CV.', 422);
if ((int)$attachment['size'] > MAX_FILE_SIZE) respond(false, 'CV must be 5 MB or smaller.', 422);
$ext = strtolower(pathinfo((string)$attachment['name'], PATHINFO_EXTENSION));
if (!in_array($ext, ['pdf', 'doc', 'docx'], true)) respond(false, 'CV must be PDF, DOC or DOCX.', 422);
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file((string)$attachment['tmp_name']) ?: 'application/octet-stream';
$allowedMime = ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/zip','application/octet-stream'];
if (!in_array($mime, $allowedMime, true)) respond(false, 'Unsupported CV file type.', 422);

$boundary = '=_IAIS_' . bin2hex(random_bytes(12));
$headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';
$content = "--{$boundary}\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n{$body}\r\n";
$fileData = chunk_split(base64_encode((string)file_get_contents((string)$attachment['tmp_name'])));
$fileName = preg_replace('/[^A-Za-z0-9._-]/', '_', basename((string)$attachment['name']));
$content .= "--{$boundary}\r\nContent-Type: {$mime}; name=\"{$fileName}\"\r\nContent-Disposition: attachment; filename=\"{$fileName}\"\r\nContent-Transfer-Encoding: base64\r\n\r\n{$fileData}\r\n--{$boundary}--";
$sent = mail(RECIPIENT, $subject, $content, implode("\r\n", $headers));
if (!$sent) respond(false, 'The server could not send email. Enable PHP mail/SMTP on your hosting.', 500);
respond(true, 'Application sent successfully.');
