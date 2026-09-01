import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { renderAdminCompanyMatchList } from "../../../src/pages/adminAiReviews.js";
import { renderMatchDecisionControls } from "../../../src/pages/adminHybridMatching.js";

const css = readFileSync(new URL("../../../styles.css", import.meta.url), "utf8");
const app = readFileSync(new URL("../../../app.js", import.meta.url), "utf8");
const escapeHtml = (value) => String(value ?? "");

function buildMatch(index) {
  return {
    id: `match-${index}`,
    company_id: "company-1",
    opportunity_id: `opportunity-${index}`,
    match_score: 68,
    match_label: "Good match",
    ai_review_status: "not_reviewed",
    opportunities: {
      id: `opportunity-${index}`,
      title: `Long responsive opportunity title ${index} with enough text to wrap naturally without widening the modal`,
    },
  };
}

test("latest matches panel spans the full company detail grid", () => {
  assert.match(app, /class="side-panel admin-company-matches-panel"[\s\S]*<h3>Latest matches<\/h3>/);
  assert.match(css, /\.admin-company-matches-panel\s*{[\s\S]*?grid-column:\s*1\s*\/\s*-1/);
});

test("match cards render the required hierarchy for one or several matches", () => {
  for (const count of [1, 2, 5]) {
    const html = renderAdminCompanyMatchList(
      { latestMatches: Array.from({ length: count }, (_, index) => buildMatch(index + 1)) },
      { escapeHtml, renderMatchDecisionControls },
    );

    assert.equal((html.match(/class="admin-ai-aware-match muted"/g) || []).length, count);
    assert.equal((html.match(/class="admin-match-card-header"/g) || []).length, count);
    assert.equal((html.match(/<h4>Admin decision<\/h4>/g) || []).length, count);
    assert.equal((html.match(/<h4>Match assessment<\/h4>/g) || []).length, count);
    assert.equal((html.match(/>Vista ákvörðun<\/button>/g) || []).length, count);
    assert.equal((html.match(/>Vista mat<\/button>/g) || []).length, count);
  }
});

test("responsive controls protect buttons and collapse to one column on mobile", () => {
  assert.match(css, /\.admin-match-learning-controls \.btn\s*{[\s\S]*?min-width:\s*140px[\s\S]*?white-space:\s*nowrap[\s\S]*?overflow-wrap:\s*normal/);
  assert.match(css, /@media \(max-width: 1180px\)[\s\S]*?\.admin-match-learning-controls form\s*{[\s\S]*?repeat\(2, minmax\(220px, 1fr\)\)/);
  assert.match(css, /@media \(max-width: 700px\)[\s\S]*?\.admin-match-learning-controls form\s*{[\s\S]*?grid-template-columns:\s*1fr[\s\S]*?\.admin-match-learning-controls \.btn\s*{[\s\S]*?width:\s*100%/);
  assert.match(css, /\.admin-match-card-title\s*{[\s\S]*?min-width:\s*0[\s\S]*?overflow-wrap:\s*anywhere[\s\S]*?word-break:\s*normal/);
});
