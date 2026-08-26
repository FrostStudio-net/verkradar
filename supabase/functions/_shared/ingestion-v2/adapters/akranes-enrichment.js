export function extractAkranesDetailMetadata(html = "") {
  const text = String(html).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim();
  const deadline = text.match(/(?:tilboðum skal skilað|tilboðsfrestur|skila.*?fyrir)[^.!]{0,180}?(\d{1,2})\.\s*(\d{1,2})\.?\s*(\d{4})?/i);
  let deadlineDate = null;
  if (deadline) { const year = deadline[3] || new Date().getUTCFullYear(); deadlineDate = `${year}-${String(deadline[2]).padStart(2,"0")}-${String(deadline[1]).padStart(2,"0")}`; }
  const reference = text.match(/(?:útboðsnúmer|útboðsnummer|útboðs\s*nr\.?|tilvísun|reference|procurement\s+reference)\s*[:#-]?\s*((?:[A-Z]{2,6}-?\d{2,4}(?:-\d{1,4})?)|(?:\d{4}[-/]\d{2,4})|(?:EES\s*\d{4}\/S\s*\d+))/i)?.[1] || text.match(/\bEES\s+útboð\s+(?:nr\.?\s*)?((?:\d{4}[-/]\d{2,4}))\b/i)?.[1] || null;
  const followup = /(?:tilboð\s+opnuð|niðurstaða\s+útboðs|samningur\s+undirritaður|samið\s+við|verksamningur|tilboð\s+voru\s+opnuð|contract\s+signed|award\s+announced)/i.test(text);
  return { deadline: deadlineDate, procurement_reference: reference, tender_status: followup ? "follow_up_or_award" : null, enrichment_status: deadlineDate || reference || followup ? "enriched" : "no_supported_fields" };
}
