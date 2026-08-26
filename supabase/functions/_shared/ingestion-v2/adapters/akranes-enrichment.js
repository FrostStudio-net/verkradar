export function extractAkranesDetailMetadata(html = "") {
  const text = String(html).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim();
  const deadline = text.match(/(?:tilboðum skal skilað|tilboðsfrestur|skila.*?fyrir)[^.!]{0,180}?(\d{1,2})\.\s*(\d{1,2})\.?\s*(\d{4})?/i);
  let deadlineDate = null;
  if (deadline) { const year = deadline[3] || new Date().getUTCFullYear(); deadlineDate = `${year}-${String(deadline[2]).padStart(2,"0")}-${String(deadline[1]).padStart(2,"0")}`; }
  const reference = text.match(/(?:EES\s+útboð\s*(?:nr\.?|númer)?|útboð\s*(?:nr\.?|númer)?)\s*([A-ZÆÖÁÉÍÓÚÝÞÐ\d][\wÆÖÁÉÍÓÚÝÞÐ-]*)/i)?.[1] || null;
  const followup = /(?:samningur|samþykkt|framleng|opnunarfund|úthluta|verðlaun|tilboði hefur verið tekið)/i.test(text);
  return { deadline: deadlineDate, procurement_reference: reference, tender_status: followup ? "follow_up_or_award" : null, enrichment_status: deadlineDate || reference || followup ? "enriched" : "no_supported_fields" };
}
