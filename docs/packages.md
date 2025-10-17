# Packages Data and Feature Display

This document explains how to add or update packages, pricing rules, and how the features are calculated and displayed across the app.

## Where packages live

- File: `src/data/packages.ts`
- Type definitions: `src/types/package.ts`
- Each package is created in the `basePackages` array (without IDs) and then converted to `packages` using `createPackagesWithIds`.

## Package schema (summary)

From `src/types/package.ts` (simplified):

- slug: string
- name: string
- shortDescription: string
- description: string
- priceDisplay: string          // human-readable, must be a plain number with currency (e.g., "£120")
- priceNumeric: number          // numeric value for calculations (VAT, totals)
- hosting: string | null        // hosting notes, or null when not applicable
- packageFeatures: string[]     // short bullet points for cards
- detailFeatures: string[]      // full feature list for the detail page
- category?: string             // optional; not required for UI anymore
- featured?: boolean            // optional badge

## Pricing rules

- priceDisplay must NOT include a trailing plus (+) or suffixes. Use a clean currency + number, e.g., `"£120"`.
- priceNumeric should reflect the numeric value extracted from `priceDisplay`.
- If you change `priceDisplay`, update `priceNumeric` accordingly.
- A helper `parsePriceNumeric(display: string)` exists in `src/data/packages.ts` and is used when constructing the base data.

## Features: how they are shown

There are two feature arrays:

- `packageFeatures`: Short highlights used on cards (overview page)
- `detailFeatures`: Full list shown on the package detail page

### On the packages grid (cards)
- File: `src/components/PackageCard.tsx`
- The card prefers `packageFeatures`. If it is empty, it will fall back to `detailFeatures`.
- It shows the first 2 features and then renders a trailing line with the remaining count:
  - If total features <= 2: only those features are shown; no trailing line is shown.
  - If total features = 3: shows first 2 features, then `+ 1 more feature`.
  - If total features >= 4: shows first 2, then `+ N more features` (pluralized correctly).

### On the package detail page
- File: `src/pages/PackageDetail.tsx`
- The full `detailFeatures` list is displayed with checkmarks.
- If `hosting` is provided, it appears in the sidebar under the guarantees.

## Search results feedback

- File: `src/pages/Packages.tsx`
- The search bar filters by `name` and `description`.
- A result count is shown directly beneath the search input: `N package(s) found`.

## Category usage

- Category is optional. The UI no longer exposes a category filter.
- Badges for category are only shown if a package has a `category` value.

## Adding a new package

1. Open `src/data/packages.ts` and add a new object to `basePackages`.
2. Fill out:
   - `slug`, `name`, `shortDescription`, `description`
   - `priceDisplay` (currency + number only, e.g., `"£149"`)
   - `priceNumeric`: call `parsePriceNumeric("£149")`
   - `hosting`: string or `null`
   - `packageFeatures`: short bullets for the card (2–5 concise items recommended)
   - `detailFeatures`: fuller list for the detail page
   - Optional: `category`, `featured`
3. The `packages` export is generated via `createPackagesWithIds` so you don’t need to add an `id` manually.

## Common pitfalls and checks

- Do not add a `+` suffix to `priceDisplay` (e.g., avoid `"£799+"`). Keep it numeric: `"£799"`.
- If the card shows `+ N more feature(s)` incorrectly, ensure your package has at least 3 total features in either `packageFeatures` or `detailFeatures`.
- If you don’t want a category badge, omit `category`.
- When editing the schema, also review components that read these fields: `PackageCard`, `PackageDetail`, `Checkout`, and `utils/recommendations`.

## Where the logic lives

- Price parsing helper: `src/data/packages.ts` (function `parsePriceNumeric`)
- Card rendering and feature truncation: `src/components/PackageCard.tsx`
- Detail page features and hosting: `src/pages/PackageDetail.tsx`
- Search and result count: `src/pages/Packages.tsx`
