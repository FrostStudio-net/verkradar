import assert from "node:assert/strict";
import test from "node:test";

import { isSafeMosfellsbaerTenderUrl, parseMosfellsbaerTenderDetail } from "../_shared/mosfellsbaer-enrichment.js";

test("Mosfellsbær detail parser uses the official rich-text body and canonical URL", () => {
  const url = "https://mos.is/mannlif/um-mosfellsbae/frettir/utbod-grjotgildra-vid-holtastod/";
  const detail = parseMosfellsbaerTenderDetail(`
    <link rel="canonical" href="${url}">
    <div class="main-content"><div class="bde-rich-text-1 bde-rich-text breakdance-rich-text-styles">
      <p>Mosfellsbær óskar eftir tilboðum í gerð grjótgildru við Holtastöð.</p>
      <p><strong>Helstu magntölur:</strong></p><ul><li>Gröftur 180 m3</li><li>Fylling 45 m3</li></ul>
      <p>Tilboðum skal skilað eigi síðar en kl. 11:00 mánudaginn 19. október 2026.</p>
    </div></div>
  `, url);
  assert.equal(detail.buyer, "Mosfellsbær");
  assert.equal(detail.canonical_url, url);
  assert.equal(detail.has_useful_detail, true);
  assert.match(detail.description, /Gröftur 180 m3/);
  assert.match(detail.description, /19\. október 2026/);
});

test("Mosfellsbær enrichment rejects non-official and broad URLs", () => {
  assert.equal(isSafeMosfellsbaerTenderUrl("https://example.com/frettir/tender"), false);
  assert.equal(isSafeMosfellsbaerTenderUrl("https://mos.is/feed/"), false);
  assert.equal(isSafeMosfellsbaerTenderUrl("https://mos.is/mannlif/um-mosfellsbae/frettir/tender/"), true);
});
