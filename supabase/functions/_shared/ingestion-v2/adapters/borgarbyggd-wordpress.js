import { assertParsedArray, cleanReference, extractDate, safeSourcePayload, stripHtml } from "./common.js";

export const borgarbyggdWordpressAdapter = {
  parserName: "borgarbyggd-wordpress",
  parserVersion: "1.0.0",
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
  const referenceMatch = `${title} ${body}`.match(/(?:útboðs|verknúmer|tilvísun)\s*:?[ ]*([A-ZÁÉÍÓÚÝÞÐÆÖ0-9][A-ZÁÉÍÓÚÝÞÐÆÖ0-9._/-]{2,})/i);
  return {
    external_id: String(post?.id || post?.guid?.rendered || post?.link || ""),
    procurement_reference: cleanReference(referenceMatch?.[1]) || null,
    discovered_url: post?.link || post?.guid?.rendered || "",
    canonical_url: post?.link || post?.guid?.rendered || "",
    title,
    description: body,
    buyer: "Borgarbyggð",
    deadline: extractDate(post?.content?.rendered || body, ["Tilboðsfrestur", "Skilafrestur"]),
    publication_date: String(post?.date || "").slice(0, 10) || null,
    source_published_at: post?.date_gmt ? `${post.date_gmt.replace(/Z?$/, "Z")}` : post?.date || null,
    location: "Borgarbyggð",
    safe_source_payload: safeSourcePayload(post, ["id", "date", "date_gmt", "slug", "status", "type"]),
  };
}
