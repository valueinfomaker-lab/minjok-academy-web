"use server";

import { Resend } from "resend";

const RESEND_KEY = process.env.RESEND_API_KEY;
const TO = process.env.CONTACT_EMAIL_TO ?? "";
const FROM = process.env.CONTACT_EMAIL_FROM ?? "민족 어학원 <onboarding@resend.dev>";

const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null;

export type SendResult = { ok: true; dryRun?: boolean } | { ok: false; error: string };

export async function sendConsult(formData: FormData): Promise<SendResult> {
  const name = String(formData.get("name") ?? "").trim();
  const grade = String(formData.get("grade") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";

  if (!consent) {
    return { ok: false, error: "개인정보 수집·이용 동의가 필요합니다." };
  }
  if (!name || name.length < 2) {
    return { ok: false, error: "이름을 정확히 입력해 주세요." };
  }
  if (!phone || !/[\d\-\s+()]{9,}/.test(phone)) {
    return { ok: false, error: "연락처를 정확히 입력해 주세요." };
  }
  if (name.length > 100 || phone.length > 40 || message.length > 2000) {
    return { ok: false, error: "입력 길이가 너무 깁니다." };
  }

  // Dev/preview without ENV: just log to server console and pretend success
  if (!resend || !TO) {
    console.log("[consult — dryRun, no RESEND_API_KEY/CONTACT_EMAIL_TO]", {
      name, grade, phone, message,
    });
    return { ok: true, dryRun: true };
  }

  try {
    const html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1E2A4A;">
        <h2 style="margin:0 0 16px;">민족 어학원 — 상담 신청</h2>
        <table style="border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 12px 6px 0;color:#8A95A8;">이름</td><td style="padding:6px 0;font-weight:600;">${esc(name)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#8A95A8;">자녀 학년</td><td style="padding:6px 0;">${esc(grade) || "-"}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#8A95A8;">연락처</td><td style="padding:6px 0;"><a href="tel:${esc(phone)}" style="color:#1E2A4A;">${esc(phone)}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#8A95A8;vertical-align:top;">문의</td><td style="padding:6px 0;white-space:pre-wrap;">${esc(message) || "-"}</td></tr>
        </table>
        <p style="margin-top:24px;color:#8A95A8;font-size:12px;">
          이 메일은 minjok-academy-web.vercel.app 상담 폼에서 자동 전송되었습니다.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: `[민족 어학원 상담] ${name}${grade ? ` (${grade})` : ""}`,
      html,
    });
    return { ok: true };
  } catch (e) {
    console.error("resend send failed", e);
    return { ok: false, error: "전송 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요." };
  }
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
