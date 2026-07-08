const LEGACY_REPORT_IS_REPLACEMENTS = [
  ["Tender and opportunity report", "Útboðs- og verkefnayfirlit"],
  ["Weekly Opportunity Report", "Útboðs- og verkefnayfirlit"],
  ["Open tenders / quote requests", "Opin útboð / verðfyrirspurnir"],
  ["Possible upcoming opportunities", "Möguleg væntanleg tækifæri"],
  ["Needs review", "Þarfnast staðfestingar"],
  ["Strong match", "Sterk samsvörun"],
  ["Good match", "Góð samsvörun"],
  ["Possible match", "Möguleg samsvörun"],
  ["Weak match", "Veik samsvörun"],
  ["Quality", "Gæði"],
  ["Buyer", "Kaupandi"],
  ["Source", "Heimild"],
  ["Location", "Svæði"],
  ["Deadline", "Skilafrestur"],
  ["Estimated value", "Áætlað verðmæti"],
  ["Value", "Áætlað verðmæti"],
  ["Why this matters", "Af hverju þetta gæti skipt máli"],
  ["Why this fits", "Af hverju þetta gæti skipt máli"],
  ["Risks / things to check", "Atriði til að staðfesta"],
  ["Open source", "Opna heimild"],
  ["Unknown buyer", "Óþekktur kaupandi"],
  ["All Iceland", "Allt landið"],
  ["Not found", "Fannst ekki"],
  ["Not listed", "Ekki gefið upp"]
];

export function localizeLegacyReportContent(value, language) {
  if (language !== "is") return value;
  return LEGACY_REPORT_IS_REPLACEMENTS.reduce(
    (text, [from, to]) => text.replaceAll(from, to),
    String(value || "")
  );
}
