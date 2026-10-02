# The `@covalent/icons` Trademark & Provenance Issue: A Complete Explanation

## 1. The plain-language analogy

`@covalent/icons` ships brand marks from Amazon, Azure, Cloudera, HDInsight, Microsoft, JupyterHub, Slack, OpenID, and SAML mixed into a font alongside Covalent's own icons — declared as a single MIT-licensed npm package with no notice file, no provenance record, and no documentation of what permissions were obtained.

## 2. The five concepts need to understand

These are distinct legal and technical concepts to have in mind.

### Copyright

Copyright is a right that attaches automatically to an original creative work the moment it is fixed in a tangible form. The SVG file for `slack.svg` is a creative work. The person or company who drew it owns the copyright. Copyright protects the expression — the specific curves, the paths, the coordinates.

You need the copyright holder's permission to copy, modify, or distribute the work. A license is how that permission is granted.

### Software licenses (MIT, Apache 2.0, etc.)

A software license is a grant of copyright permission from the owner to the public. When Teradata publishes Covalent under MIT, Teradata is granting permission to use, copy, modify, and distribute Covalent's own original code and artwork.

MIT covers what _Teradata authored_. It does not and cannot grant permission to use artwork that Teradata did not author. Only the copyright holder can grant that.

### Trademarks

A trademark is a word, symbol, logo, or combination that identifies the source of goods or services. The Slack bolt, the Amazon smile-and-arrow, the Microsoft four-square grid — these are registered trademarks. Trademarks are governed by trademark law, not copyright law. They exist independently of whether a copyright license is attached.

Unlike copyright, trademark is about use in commerce and brand association. Even if you have copyright permission to reproduce a logo, you may still be prohibited from using it in ways that cause confusion about brand origin or affiliation, dilute the mark, or violate the brand guidelines.

### Brand usage policies (guidelines)

Most major brands publish formal documents that describe exactly how their marks may be reproduced: minimum size, clear space, permitted colors, prohibited modifications (including monochrome rendering in some cases), required attribution, and context restrictions (you cannot imply official partnership without permission).

These policies are not laws, but violating them can trigger legal action. Some brands also require explicit written permission before any use, regardless of the policy text.

### Provenance

Provenance means knowing _where an asset came from_. For each SVG in `libs/icons/svgs`, the relevant questions are: Who drew it? Where was it published? What license or policy applied at that location? When was it retrieved?

Commit `ce9bed45` (June 11, 2024) adds the Amazon, Azure, Cloudera, HDInsight, and Microsoft SVGs with the message "New covalent icons (#2170) — feat: covalent outlined icon versions and other new icons."
Commit `20638ed9` (April 7, 2026) adds OpenID and SAML with the message "feat(icons): added new connection manager icons." Again, no source. Commit `c6e1cd8c` adds Slack. Unknown source.

### Attribution

Attribution is credit — naming the original author and license in the way they require. Many open-source licenses (Creative Commons in particular) require specific attribution text. Even when attribution is not legally required, it is considered good open-source citizenship and helps future maintainers trace provenance.

**Verified fact**: There is no `NOTICES`, `THIRD-PARTY`, or `LICENSE` file anywhere under `libs/icons/`. The `package.json` contains `"license": "MIT"` and nothing else. The build target (in [`libs/icons/project.json`](libs/icons/project.json)) copies `package.json` to `dist/libs/icons` but copies no notice file, because none exists.

---

## 4. Where `libs/icons` fits in the Covalent architecture

Covalent is a Nx monorepo. The workspace is organized under `libs/` (libraries) and `apps/` (applications). `libs/icons` is one library among several.

**Verified fact**: The `libs/icons/package.json` declares the package name `@covalent/icons` with `"license": "MIT"` and `"author": "Teradata UX"`.

**Verified fact**: The `libs/icons/project.json` build target runs four shell commands:

```
mkdir -p dist/libs/icons
cp libs/icons/covalent-icons*.scss dist/libs/icons
cp libs/icons/covalent-icons.* dist/libs/icons
cp libs/icons/package.json dist/libs/icons
```

This means exactly these files are published to npm: the font files (TTF, WOFF, SVG), the CSS, the SCSS files, and `package.json`. Nothing else. A `THIRD-PARTY-NOTICES.md` placed at the repo root would not ship. It would have to be added to the `cp` commands, or it must live in `libs/icons/` itself and match one of the copy globs.

The icons library is self-contained — no other library in the repo re-exports it. Consumers install `@covalent/icons` from npm, load the CSS or SCSS, and use class names like `cov-slack` or `cov-product_saml` to display icons as font glyphs. They do not receive the source SVGs; they receive the compiled font.

---

The SVG → IcoMoon → Font → npm pipeline converts the SVG into a font glyph with a monochrome shape. It carries only the geometric paths, remapped to a new Unicode codepoint. Any metadata embedded in the original SVG is discarded. Any color is stripped

---

## 6. Where transformations occur and why they matter for trademark

The key transformations are:

| Stage                | What happens                              | Trademark relevance                                                                             |
| -------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- |
| SVG → IcoMoon        | Colors stripped, single path expected     | Some brand guidelines require official colors. A monochrome version may not be permitted.       |
| IcoMoon → font glyph | Shape assigned to a private-use codepoint | The rendered glyph is structurally a _derivative work_ of the original artwork.                 |
| Font → CSS class     | `cov-slack:before { content: '\e9e5' }`   | The icon is now invocable by anyone who installs the package.                                   |
| CSS → npm            | Shipped globally, without restriction     | Any downstream project can use the mark. Some brand policies prohibit third-party distribution. |

---

### Criterion 1: Research usage terms for all marks

**Owner:** Legal/OSS reviewer, with an engineer doing the initial research to collect the raw policy text.

**Status:** Pending. The 19 known third-party SVGs are identified, but their authoritative source, license, copyright holder, trademark policy, and brand guidelines still need to be researched and confirmed by Legal/OSS.

### Criterion 2: Trace each SVG to a source

**Why:** Provenance determines whether you have copyright permission and under what terms. Git history shows _when_ files entered the repo; it does not show _where the artwork came from_. These are different things.
**Owner:** Engineering with Design (research task).

**Status:** Partially complete. All 380 SVGs have repository-introduction commit evidence, and 309 provisional first-party entries have matching Figma source links. The external authoritative sources for the 19 third-party SVGs are still missing, and 52 provisional first-party entries have no verified Figma source.

### Criterion 3: Recommend a disposition

**Why:** After provenance and policy research, someone must make an explicit, documented decision for each asset. Decisions should not remain implicit.
**Owner:** Legal/OSS signs off; engineering implements.

**Status:** Blocked by criteria 1 and 2. The 19 third-party SVGs remain `pending`; no retain, restrict, replace, or remove decision has been approved by Legal/OSS.

### Criterion 5: Create `THIRD-PARTY-NOTICES.md`

**Why:** Industry standard for open-source packages that incorporate third-party content. Required by many corporate OSS policies. Records credit, source, license, and terms in one place.
**Owner:** Engineering creates the file; legal/OSS approves the content.

**Status:** Partially complete. created a provisional notice covering all 19 identified third-party SVGs. Its license, attribution, policy, and permitted-use sections remain placeholders pending Legal/OSS review.

### Criterion 6: Ensure the notice ships in the npm package

**Why:** A notice file that exists in the repo but not in the published artifact provides incomplete protection. Consumers of `@covalent/icons` need to see the notice to understand what they are incorporating.
**Owner:** Engineering.

**Status:** Complete in this branch. The icons build copies `THIRD-PARTY-NOTICES.md`, `icons.manifest.json`, and the README into `dist/libs/icons`; the notice copy was verified locally.

### Criterion 7: Create `icons.manifest.json`

**Why:** A machine-readable inventory of every icon — its source, license/terms, attribution text, and modification status — enables automated validation and future governance. It is the foundation for the CI check in criterion 9.
**Owner:** Engineering (structure); legal/OSS (fills in the rights columns).

**Status:** Complete. The manifest schema exists and currently has one entry for each of the 380 source SVGs, including repository, Figma, provenance, license, trademark, and verdict fields.

### Criterion 8: Populate the manifest

**Why:** An empty or template manifest is useless. Every icon needs an entry. First-party icons get a `"source": "Teradata UX"` entry. Third-party icons get their provenance, terms URL, attribution text, and a `"modifications"` field describing the conversion to monochrome font glyph.
**Owner:** Engineering and legal/OSS together.

**Status:** Partially complete. All 380 entries have repository evidence. The 361 first-party classifications and approvals are provisional until Design confirms them. The 19 third-party entries still need authoritative sources, copyright holders, legal terms, and final verdicts.

### Criterion 9: CI validation — every SVG has a manifest entry

**Why:** Without automation, the manifest goes stale as new icons are added. A CI check that fails when an SVG has no matching manifest entry forces every future contributor to document provenance before merging. This breaks the current pattern of adding icons with no record.
**Verified fact:** The Nx project currently has no lint, test, or validation target. Adding one is a new Nx target.
**Owner:** Engineering.

**Status:** Implemented in this branch. The Nx target and CI step validate bidirectional SVG/manifest coverage, approved verdicts, required third-party provenance, and first-party Figma/source consistency. Six focused tests pass. The real compliance check currently fails intentionally on unresolved Legal/OSS fields and pending verdicts.

### Criterion 10: Decide whether brand marks stay in the font or ship as discrete SVGs

**Why:** This is the most architecturally significant decision. It directly affects what consumers can and cannot do, and it may be dictated by the brand owners' policies. If a brand policy requires unmodified official assets, those marks cannot remain in a monochrome font.
**Owner:** Legal/OSS determines which brands require it; engineering designs the delivery mechanism.

**Status:** Pending Legal/OSS review. No delivery change should be implemented until each brand's policy and permitted modifications are confirmed.

### Criterion 11: Update intake documentation

**Why:** All current process documentation (the README) says nothing about provenance, source URL, copyright, or trademark. Future contributors will follow the existing docs. If the docs do not require provenance records, the problem recurs.
**Owner:** Engineering.

**Status:** Complete in this branch. The icons README documents manifest fields, null-value semantics, third-party requirements, provisional first-party review, the compliance check, and notice maintenance.

### Criterion 12: Obtain legal/OSS sign-off

**Why:** Engineers make technical decisions. Brand policies and trademark usage terms are legal decisions. Sign-off creates an audit trail that protects the company and the contributors.
**Owner:** Teradata OSS/legal team. Engineering provides the research; legal makes the call.

**Status:** Pending. No final Legal/OSS reviewer or verdict author is recorded for the third-party assets.

### Criterion 13: Record a GitHub icon decision

**Why:** The GitHub icon request is what triggered this entire review. Once the governance framework is in place, the GitHub decision becomes the first instance of the new process: research GitHub's brand guidelines, document provenance, get legal sign-off, then either add or decline.
**Owner:** Legal/OSS decision; engineering implements.

**Status:** Pending. `git_icon.svg` is classified as third-party and recorded in the manifest and notice, but its authoritative source, usage terms, and Legal/OSS verdict have not been confirmed.

---

## 8. Technical tasks vs. legal/organizational tasks

**Technical tasks (engineering owns):**

- Audit all 372 SVGs and produce a spreadsheet of name, file, paths count, has fill colors, date added, git commit
- Create `icons.manifest.json` structure
- Write the Nx validation target (Node.js or shell script that checks every SVG filename exists in the manifest)
- Update the build target to copy the notice and manifest to `dist/libs/icons`
- Update the README intake section to require provenance fields
- Implement any architectural changes once legal makes its dispositions

**Legal/organizational tasks (cannot be delegated to engineering):**

- Reading and interpreting each brand's trademark policy
- Determining whether a specific use (monochrome, font, redistributed via npm) is permitted
- Deciding whether to request formal written permission from brand owners
- Signing off on the final dispositions
- Recording the sign-off in the governance trail

**Questions that remain unanswered (must be verified externally):**

- What are the specific terms of each brand's usage policy as of today?
- Does Teradata have any existing agreements with these vendors that address logo use?
- What is Teradata's internal OSS review process and who is the approving reviewer?

---

## 9. Different possible approaches

### Approach 1: Replace third-party marks

Replace all brand-specific icons with generic concepts: a generic "cloud provider" glyph, a generic "identity provider" glyph, etc.

**What it does well:** Eliminates trademark exposure entirely. Completely Teradata-owned content.

**What it does not solve:** Removing these names without a deprecation path would be a breaking change. Applications that show "Amazon data source" with its recognizable icon would lose that visual affordance.

**Risk:** Breaking change requiring a major version bump and migration guide. Reduced usefulness for Teradata product teams who legitimately need recognizable brand icons in their UI.

---

### Approach 2: Discrete official SVG delivery

Keep Covalent-original icons in the font. For brand marks, re-source official assets from each brand's official asset pack and expose them through a separate package or component, preserving their official colors and shapes.

**What it does well:** Architecturally cleanest long-term. Each icon is delivered in the format and colors the brand owner specifies. Official assets are traceable to their source. Downstream consumers receive what the brand actually approves.

**What it does not solve:** Requires a new consumer API. The existing `cov-data_source_type_amazon` font-glyph class names would either have to be deprecated or kept as aliases. Different delivery mechanism for two classes of icons adds complexity.

**Risk:** Significant engineering effort. May still require brand-by-brand policy research and permission before even sourcing the official assets.

---

## 12. Blockers, dependencies, migration risks, and testing requirements

### Blockers

- **Legal/OSS review is a hard blocker for any rights disposition.** Engineering can build governance infrastructure without legal, but cannot make any "retain" or "remove" decisions.

### Migration risks

- **Breaking change risk**: Any icon name that is removed or renamed breaks consumers. The `COV_ICON_LIST` in [`libs/icons/icon-list.ts`](libs/icons/icon-list.ts) is the consumer-facing API for names. Changes here require a deprecation notice and a major version bump per semver.
- **Font codepoint stability**: If IcoMoon reassigns codepoints during a rebuild, consumers who hardcode codepoint values (e.g., in CSS `content: '\e9e5'`) will see the wrong glyph. The `selections.json` in the zip file is what preserves codepoint assignments across rebuilds — it must never be discarded.
- **The `table_synced copy_outlined.svg` file** (with a space in the name) is an anomaly that could cause build or shell script issues. It should be cleaned up separately.

### Testing requirements

- The CI validation script itself needs a test: add a temporary SVG without a manifest entry and verify the check fails.
- After the build update, verify that `dist/libs/icons` contains the notice and manifest files by running `nx build icons` locally and inspecting the output directory.

---

## 14. Concise mental model, questions to ask your team, and first task

### Mental model

Think of `@covalent/icons` as a published book that mixes Teradata's original writing with photographs of other companies' logos. The book is MIT-licensed. The MIT license is Teradata's permission slip for Teradata's writing. It does not cover the photographs. The photographs need their own permission slips, and those permission slips may have conditions ("only print in full color," "add this caption," "not for commercial use") that the current package violates or ignores. Right now, nobody knows which photographs have permission slips, what the conditions are, or where the photographs came from. The goal of this work is to inventory all photographs, find their permission slips, and either comply with the conditions or replace the photographs.

---

## Most important icons to cover :

- openid
- saml
- jupyterhub
- slack
- amazon
- azure
- cloudera
- hdinsight
- microsoft
- git
- python
