export const VEITUR_DPS_SOURCE_URL = "https://www.veitur.is/frettir/oskum-eftir-fleiri-samstarfsadilum-gagnvirkt-innkaupakerfi";
export const VEITUR_DPS_IDENTITY_URL = "https://www.veitur.is/frettir/kynningarfundur-um-gagnvirkt-innkaupakerfi-veitna-21-mars";
export const VEITUR_DPS_REFERENCE = "VEGK-2024-01";
export const VEITUR_DPS_ADMISSION_CLOSE_DATE = "2028-04-08";

function plainText(html) {
  return String(html || "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function includesAll(text, phrases) {
  const normalized = normalize(text);
  return phrases.every((phrase) => normalized.includes(normalize(phrase)));
}

export function parseVeiturDynamicPurchasingSystemPages(statusHtml, identityHtml) {
  const statusText = plainText(statusHtml);
  const identityText = plainText(identityHtml);
  const hasCurrentAdmissionEvidence = includesAll(statusText, [
    "Hægt er að sækja um núna",
    "veitulögnum",
    "jarðvinnu",
    "yfirborðsfrágangi",
    "lokuð útboð",
    "apríl 2028",
  ]);
  const hasExactIdentityEvidence = includesAll(identityText, [
    VEITUR_DPS_REFERENCE,
    "gagnvirku innkaupakerfi",
    "veitulagna",
    "jarðvinnu",
    "yfirborðsfrágangs",
  ]);
  if (!hasCurrentAdmissionEvidence || !hasExactIdentityEvidence) return null;

  const description = [
    "Veitur óska eftir samstarfsaðilum í gagnvirkt innkaupakerfi fyrir veitulagnir, jarðvinnu og yfirborðsfrágang.",
    "Opið er fyrir umsóknir á gildistíma kerfisins til apríl 2028.",
    "Samþykktir aðilar fá þátttökurétt í lokuðum útboðum innan kerfisins.",
  ].join(" ");
  return {
    externalId: VEITUR_DPS_REFERENCE,
    title: `${VEITUR_DPS_REFERENCE} Veitulagnir, jarðvinna og yfirborðsfrágangur - Gagnvirkt innkaupakerfi`,
    link: VEITUR_DPS_SOURCE_URL,
    description,
    content: description,
    buyer: "Veitur",
    categories: ["Jarðvinna & vegir", "Gagnvirkt innkaupakerfi"],
    procurementType: "dynamic_purchasing_system",
    formType: "competition",
    deadline: VEITUR_DPS_ADMISSION_CLOSE_DATE,
    publishedDate: "2024-03-04",
    location: "Reykjavík / Höfuðborgarsvæðið; Suðurland; Vesturland",
    raw: {
      source_page: VEITUR_DPS_SOURCE_URL,
      identity_evidence_url: VEITUR_DPS_IDENTITY_URL,
      source_page_type: "veitur_dynamic_purchasing_system_parent",
      procurement_reference: VEITUR_DPS_REFERENCE,
      procurement_type: "dynamic_purchasing_system",
      form_type: "competition",
      rolling_admission: true,
      admission_closing_date: VEITUR_DPS_ADMISSION_CLOSE_DATE,
      deadline_semantics: "system_admission_closing_date",
      call_offs_are_separate_opportunities: true,
      service_areas: ["Höfuðborgarsvæðið", "Suðurland", "Vesturland"],
      official_status_evidence: "Applications are open through April 2028; approved suppliers receive access to closed call-offs.",
    },
  };
}
