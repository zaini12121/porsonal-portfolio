// Send contact form email via Resend connector gateway
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "zzawar521@gmail.com";
const SITE_NAME = "Muhammad Zain-ul-Abdin · Portfolio";
const BRAND_COLOR = "#7C3AED"; // violet
const BRAND_COLOR_2 = "#06B6D4"; // cyan

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );

const formatTimestamp = (d: Date) => {
  // Pakistan time (PKT, UTC+5)
  const pkt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(d);
  const utc = d.toISOString().replace("T", " ").replace(/\.\d+Z$/, " UTC");
  return { pkt, utc };
};

const buildHtml = (name: string, email: string, message: string, when: Date) => {
  const { pkt, utc } = formatTimestamp(when);
  const initial = escapeHtml(name.charAt(0).toUpperCase() || "?");
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMsg = escapeHtml(message).replace(/\n/g, "<br/>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New portfolio message</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.35);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, ${BRAND_COLOR} 0%, ${BRAND_COLOR_2} 100%);padding:32px 32px 28px;">
              <p style="margin:0;color:rgba(255,255,255,0.85);font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">// new inquiry</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.2;">You have a new message ✉️</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">From your portfolio contact form</p>
            </td>
          </tr>

          <!-- Sender card -->
          <tr>
            <td style="padding:28px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px;">
                <tr>
                  <td width="56" valign="top" style="padding-right:14px;">
                    <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg, ${BRAND_COLOR}, ${BRAND_COLOR_2});color:#fff;font-size:20px;font-weight:700;line-height:48px;text-align:center;">${initial}</div>
                  </td>
                  <td valign="top">
                    <div style="font-size:16px;font-weight:700;color:#0f172a;">${safeName}</div>
                    <a href="mailto:${safeEmail}" style="font-size:13px;color:${BRAND_COLOR};text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:18px 32px 8px;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#64748b;font-weight:600;">Message</p>
              <div style="background:#ffffff;border-left:4px solid ${BRAND_COLOR};padding:16px 18px;border-radius:8px;background:#fafaff;font-size:15px;line-height:1.65;color:#1e293b;white-space:pre-wrap;">${safeMsg}</div>
            </td>
          </tr>

          <!-- Meta -->
          <tr>
            <td style="padding:20px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px dashed #e2e8f0;padding-top:16px;">
                <tr>
                  <td style="font-size:12px;color:#64748b;padding:4px 0;">
                    <strong style="color:#334155;">🕒 Received:</strong> ${pkt} <span style="color:#94a3b8;">(PKT)</span>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:12px;color:#64748b;padding:4px 0;">
                    <strong style="color:#334155;">🌐 UTC:</strong> ${utc}
                  </td>
                </tr>
                <tr>
                  <td style="font-size:12px;color:#64748b;padding:4px 0;">
                    <strong style="color:#334155;">↩️ Reply to:</strong>
                    <a href="mailto:${safeEmail}" style="color:${BRAND_COLOR};text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:20px 32px 32px;">
              <a href="mailto:${safeEmail}?subject=Re%3A%20Your%20message%20on%20my%20portfolio"
                 style="display:inline-block;background:linear-gradient(135deg, ${BRAND_COLOR}, ${BRAND_COLOR_2});color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 24px;border-radius:999px;">
                Reply to ${safeName} →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a;padding:18px 32px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#94a3b8;">
                Sent automatically from <strong style="color:#e2e8f0;">${escapeHtml(SITE_NAME)}</strong>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

const buildText = (name: string, email: string, message: string, when: Date) => {
  const { pkt, utc } = formatTimestamp(when);
  return `New portfolio message

From: ${name} <${email}>
Received: ${pkt} (PKT) / ${utc}

------------------------------
${message}
------------------------------

Reply: ${email}
`;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const body = (await req.json()) as ContactPayload;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (name.length < 2 || name.length > 100) throw new Error("Invalid name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      throw new Error("Invalid email");
    if (message.length < 10 || message.length > 1000) throw new Error("Invalid message");

    const now = new Date();
    const html = buildHtml(name, email, message, now);
    const text = buildText(name, email, message, now);

    const resp = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `📬 New message from ${name} — Portfolio`,
        html,
        text,
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(`Resend error [${resp.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
