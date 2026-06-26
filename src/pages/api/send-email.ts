import type { APIRoute } from 'astro';

export const prerender = false;

const RESEND_API_URL = 'https://api.resend.com/emails';
const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;

const escapeHtml = (value: FormDataEntryValue | null) => {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_EMAIL_TO;
  const fromEmail = import.meta.env.RESEND_FROM_EMAIL || 'Icy Studio <onboarding@resend.dev>';

  if (!apiKey || !toEmail) {
    return new Response(
      JSON.stringify({ success: false, message: 'Email service is not configured.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const formData = await request.formData();

  if (formData.get('botcheck')) {
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = escapeHtml(formData.get('name'));
  const email = escapeHtml(formData.get('email'));
  const message = escapeHtml(formData.get('message'));
  const interests = escapeHtml(formData.get('Interests') || 'Not selected');
  const budget = escapeHtml(formData.get('Budget') || 'Not selected');

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ success: false, message: 'Name, email, and message are required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const attachment = formData.get('attachment');
  const attachments = [];

  if (attachment instanceof File && attachment.size > 0) {
    if (attachment.size > MAX_ATTACHMENT_BYTES) {
      return new Response(
        JSON.stringify({ success: false, message: 'Attachment must be 10MB or smaller.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    attachments.push({
      filename: attachment.name,
      content: arrayBufferToBase64(await attachment.arrayBuffer()),
    });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
      <h2 style="margin: 0 0 16px;">New ICY Studio contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interests:</strong> ${interests}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${message}</p>
    </div>
  `;

  const resendResponse = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `ICY STUDIO NOTIFICATION: Message from ${name}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nInterests: ${interests}\nBudget: ${budget}\n\nMessage:\n${message}`,
      attachments,
    }),
  });

  const resendData = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    return new Response(
      JSON.stringify({
        success: false,
        message: resendData?.message || 'Failed to send email.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  return new Response(JSON.stringify({ success: true, id: resendData.id }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
