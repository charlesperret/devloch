# Asset to Company Mapping

Source: WordPress media metadata (`https://devlo.ch/wp-json/wp/v2/media`) and original upload names.

## Logos integrated in Home

- `Logo_ABB` -> ABB
- `Logo_Adecco` -> Adecco
- `Logo_Apple` -> Apple
- `Logo_BCF` -> BCF
- `Logo_BHP` -> BHP
- `Logo_DPD` -> DPD
- `Logo_Hublot` -> Hublot
- `Logo_Implenia` -> Implenia
- `Logo_LafargeHolcim` -> LafargeHolcim
- `Logo_Lombard_Odier` -> Lombard Odier
- `Logo_Longines` -> Longines
- `Logo_Merck` -> Merck

## Case-study brands integrated in Home

- `0000_SquareCo_logo` -> Square Co
- `0001_Saporo-logo` -> Saporo
- `0002_Many-Ways_logo` -> Many Ways
- `0003_Locky_Logo` -> Locky
- `0004_Lemanvisio_logo` -> Lemanvisio
- `0005_HIAG_logo` -> HIAG
- `0006_Cegos_logo` -> Cegos
- `0007_CareerLunch_logo` -> CareerLunch
- `0008_Apidae_logo_2` -> Apidae
- `0009_Abacus_logo` -> Abacus

## `Asset_*` files

No file named `Asset_*` is currently present in this repository.
When `Asset_*` files are added, use:

- `identifyCompanyFromAssetName()` in `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/brand-assets.ts`
- This resolves known upload stems to their company names.
