"use server";

const WEBHOOK = process.env.SHEET_WEBHOOK_URL;

export type SendResult =
  | { ok: true; dryRun?: boolean }
  | { ok: false; error: string };

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

  const payload = { name, grade, phone, message };

  // Dev/preview without ENV: log only, fake success
  if (!WEBHOOK) {
    console.log("[consult — dryRun, no SHEET_WEBHOOK_URL]", payload);
    return { ok: true, dryRun: true };
  }

  try {
    const res = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Apps Script web app responds 200/302 with JSON
      redirect: "follow",
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("sheet webhook non-2xx", res.status);
      return { ok: false, error: "전송 실패. 잠시 후 다시 시도해 주세요." };
    }
    return { ok: true };
  } catch (e) {
    console.error("sheet webhook fetch failed", e);
    return { ok: false, error: "전송 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요." };
  }
}
