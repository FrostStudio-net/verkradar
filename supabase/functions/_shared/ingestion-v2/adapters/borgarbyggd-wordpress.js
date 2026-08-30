import { assertParsedArray, safeSourcePayload, stripHtml } from "./common.js";
import { extractExplicitDeadline, extractProcurementReference } from "./procurement-metadata.js";

export const borgarbyggdWordpressAdapter = {
  parserName: "borgarbyggd-wordpress",
  parserVersion: "2.0.0",
  parse(input) {
    let posts;
    try {
      posts = typeof input === "string" ? JSON.parse(input) : input;
    } catch (error) {
      const parseError = new Error(`Invalid WordPress JSON: ${error.message}`);
      parseError.code = "V2_PARSER_INVALID_JSON";
      parseError.retryable = false;
      throw parseError;
    }
    if (!Array.isArray(posts)) {
      const parseError = new Error("WordPress fixture must be an array");
      parseError.code = "V2_PARSER_RESULT_INVALID";
      parseError.retryable = false;
      throw parseError;
    }
    return assertParsedArray(posts.map(parsePost), this.parserName);
  },
};

function parsePost(post) {
  const title = stripHtml(post?.title?.rendered);
  const body = stripHtml(post?.content?.rendered || post?.excerpt?.rendered);
  const text = `${title} ${body}`;
  const deadline = extractExplicitDeadline(text);
  const followUp = isFollowUp(text);
  const requestForBids = isRequestForBids(text);
  const procurementType = followUp
    ? "award_or_followup"
    : requestForBids && deadline
      ? "open_tender"
      : "unknown";
  return {
    external_id: String(post?.id || post?.guid?.rendered || post?.link || ""),
    procurement_reference: extractProcurementReference(text),
    discovered_url: post?.link || post?.guid?.rendered || "",
    canonical_url: post?.link || post?.guid?.rendered || "",
    title,
    description: body,
    buyer: "Borgarbyggð",
    deadline,
    publication_date: String(post?.date || "").slice(0, 10) || null,
    source_published_at: post?.date_gmt ? `${post.date_gmt.replace(/Z?$/, "Z")}` : post?.date || null,
    location: "Borgarbyggð",
    safe_source_payload: {
      ...safeSourcePayload(post, ["id", "date", "date_gmt", "slug", "status", "type"]),
      listing_context: "procurement_category",
      source_status: followUp ? "completed" : "unknown",
      shadow_enrichment: {
        enrichment_status: "not_needed",
        procurement_type: procurementType,
        request_for_bids: requestForBids,
        follow_up: followUp,
      },
    },
  };
}

function isFollowUp(value) {
  return /\b(kært|kaert|niðurstaða|nidurstada|samningur\s+gerður|samningur\s+gerdur|samið\s+við|samid\s+vid|lokið|lokid|tilkynning\s+um\s+niðurstöðu|tilkynning\s+um\s+nidurstodu|tilboð\s+opnuð|tilbod\s+opnud|verktaki\s+valinn)\b/i.test(String(value || ""));
}

function isRequestForBids(value) {
  return /(?:óskar|oskar)\s+(?:nú\s+)?eftir\s+tilboðum|auglýsir\s+(?:nú\s+)?(?:eftir\s+tilboðum|.{0,30}útboð)|útboðsgögn|utbodsgogn|skilafrestur\s+tilboða|tilboðum\s+skal\s+skila|útboð/i.test(String(value || ""));
}
