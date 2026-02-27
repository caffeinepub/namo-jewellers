# Namo Jewellers — Silver Redesign

## Current State
A One Gram Gold jewellery shop website with a gold/charcoal luxury theme. All copy, images, colours, and product catalogue reference gold jewellery. WhatsApp number is a placeholder (`919999999999`) and the address/contact links are also placeholders.

## Requested Changes (Diff)

### Add
- Real WhatsApp number: +91 91770 66512 (formatted as `919177066512`)
- Real address in ContactSection and Footer: Shop No. 1300, Mahaveer Arcade, Pioneer Bazar, Rizala Bazar, Sai Ram Colony, Bolarum, Secunderabad, Telangana 500010
- Google Maps link pointing to the actual address
- Call link: `tel:+919177066512`
- Silver colour palette tokens (silver, silver-light, silver-dark, moonstone) replacing gold tokens in tailwind config
- New silver-themed AI-generated images for hero banner, product catalogue (6 items), collections (5 cards), about illustration, and contact banner

### Modify
- All copy changed from "One Gram Gold" to "Sterling Silver" / "Silver Jewellery"
- tagline: "A Hub of High Fashion Silver Jewellery"
- HeroSection tagline, sub-tagline, and CTA phone link updated
- CollectionsSection descriptions updated to silver context
- CatalogueSection product names updated to silver designs (e.g. "Silver Bridal Set", "Oxidised Silver Necklace", etc.)
- AboutSection copy updated for silver jewellery positioning
- ContactSection tagline and copy updated
- Footer brand description updated
- WhatsApp number constant updated in CatalogueSection and WhatsAppFloat
- Colour references: replace `gold`/`champagne` design tokens with `silver`/`moonstone` equivalents throughout all component classNames
- tailwind.config.js: replace gold/champagne/ivory/charcoal palette with silver palette
- All existing gold-coloured accents, dividers, badges changed to silver palette

### Remove
- Placeholder phone `tel:+91` replaced with real number
- Placeholder Google Maps link replaced with real address search link
- Placeholder WhatsApp number `919999999999`

## Implementation Plan
1. Update tailwind.config.js with silver palette tokens
2. Generate new silver-themed images via generate_image tool
3. Update CatalogueSection: product names, images, WhatsApp number
4. Update WhatsAppFloat: WhatsApp number
5. Update HeroSection: copy + phone link + image reference
6. Update AboutSection: copy
7. Update CollectionsSection: copy + image references
8. Update ContactSection: address, phone, Maps link, copy
9. Update Footer: address, phone, collections list

## UX Notes
- Silver palette: deep dark background (near-black with cool blue undertone), silver accent instead of gold, off-white "moonstone" text
- Maintain same elegant layout and component structure — only theme + content changes
- All WhatsApp enquiry links must use real number 919177066512
