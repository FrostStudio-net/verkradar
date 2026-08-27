import { assertParsedArray, extractDate, safeSourcePayload, stripHtml } from "./common.js";
import { extractProcurementReference } from "./procurement-metadata.js";

export const rikiskaupWordpressAdapter = {
  parserName: "rikiskaup-wordpress",
  parserVersion: "1.0.0",
  parse(input) {
    let posts;
    try { posts = typeof input === "string" ? JSON.parse(input) : input; }
    catch (error) { error.code = "V2_PARSER_INVALID_JSON"; error.retryable = false; throw error; }
    if (!Array.isArray(posts)) throw new Error("WordPress response must be an array");
    return assertParsedArray(posts.map((post) => {
      const title = stripHtml(post?.title?.rendered);
      const body = stripHtml(post?.content?.rendered || post?.excerpt?.rendered);
      const link = post?.link || post?.guid?.rendered || "";
      return {
        external_id: String(post?.id || link),
        procurement_reference: extractProcurementReference(`${title} ${body}`, { allowContextualNumber: true }),
        discovered_url: link,
        canonical_url: link,
        title,
        description: body,
        buyer: null,
        deadline: extractDate(body, ["Tilboðsfrestur", "Skilafrestur"]),
        publication_date: String(post?.date || "").slice(0, 10) || null,
        source_published_at: post?.date || null,
        location: null,
        safe_source_payload: safeSourcePayload(post, ["id", "date", "date_gmt", "slug", "status", "type"]),
      };
    }), this.parserName);
  },
};
