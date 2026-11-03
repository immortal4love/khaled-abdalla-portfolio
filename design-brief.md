# Khaled Abdalla — Tour Guide Portfolio

## Design read
A multilingual portfolio for international travelers and tour operators seeking a personable Egypt-based guide who communicates naturally in Turkish and English; the emotional register is confident, welcoming, cultured, and cinematic rather than museum-institution formal.

## Concept spine
**Journey / waypoints — “Follow the story of Egypt.”** The site behaves like a guided passage: a continuous camera journey through a monumental Egyptian stone-and-water artifact, then clear stops for the guide, tours, expertise, selected field stories, and contact.

## Delivery tier
**cinema** — Lenis/GSAP-style supporting motion with the prebuilt scroll-scrub film as the primary experience. The page remains semantic, accessible, and useful without motion.

## Locked palette
- Lapis night: `#14283F` (primary deep field)
- Limestone: `#F0EDE4` (warm readable light field)
- Nile turquoise: `#4D9994` (the single accent; restrained, not neon)
- Ink: `#182A35`
- Muted: `#A8B5B4`
The lapis/limestone/turquoise combination nods to Egyptian stone, painted tomb ceilings, and Nile light without falling into generic black-and-gold tourist branding. Turquoise is the only accent.

## Locked type
**Outfit + IBM Plex Mono.** Expressive but highly legible contemporary grotesk for display and body; mono reserved for small wayfinding labels, dates, and metadata. No default serif.

## Combinatorial design pick
- Theme paradigm: Bold Studio Solid (lapis field + limestone paper)
- Background character: full-bleed cinematic imagery, with quiet solid-color intervals
- Typography character: expressive display grotesk
- Hero architecture: cinematic centered minimalist, then asymmetric editorial split
- Section system: alternating editorial blocks with gallery-led cadence
- Signature components: diagonal staggered masonry; layered image crop frames; vertical rhythm lines; oversized metrics strip
- Narrative spine: journey / waypoints
- Second-read moment: narrow vertical side-rail note

## Animation mode
**animated-website** — user chose an interactive, cinematic-feeling experience. Higgsfield visual generation returned a plan-tier restriction, so the shipped implementation uses custom vector artwork, scroll progress, and reveal motion rather than claiming to contain a generated film.

## Journey block
- **Journey shape:** `single-shot` — a personal guide portfolio is one continuous story, not a chain of unrelated worlds.
- **Journey:** (1) Establishing: an abstract monumental Egyptian limestone gateway emerges from deep lapis shadow; headline “Egypt, told with a human touch.” (2) Approach: a slow camera push reveals carved hieroglyphic texture and a distant Nile-blue reflection; “Meet your guide.” (3) Detail: the camera glides past carved travel-waypoint marks; “Explore the journeys.” (4) Resolve: the stone opens into a luminous horizon, suggesting a real-world invitation; “Let’s plan your Egypt.”
- **World grammar:** photoreal cinematic architectural sculpture inspired by ancient Egyptian limestone and lapis-painted interiors; one continuous slow forward dolly with subtle orbit; centered focal subject and generous dark negative space; low-key lapis shadows, limestone highlights, restrained turquoise reflection; warm-neutral key from upper left, stable exposure, fine stone texture, no fantasy glyphs that imitate readable text, no modern props.
- **Mobile framing:** central-safe composition, keep gateway and focal carved surfaces inside center 60%; provide 720px mobile encode; keep copy on clean negative space.
- **Delivery budget:** desktop film ≤32 MiB; mobile film ≤16 MiB.
- The visitor’s scroll reveals the “waypoints” of Egypt through custom vector scenes, progress feedback and section transitions, turning the site into a small guided experience rather than a static CV. A generated film is deferred because the image-generation service rejected requests on the current plan.

## Section plan
1. Hero / scroll journey — cinematic centered film and short statement.
2. About — asymmetric editorial split, guide portrait slot (placeholder only until supplied), concise verified biography.
3. Experiences — modular cards for Cairo & Giza, Islamic Cairo, Luxor & Aswan, and tailored itineraries; avoid claiming licenses or unverified availability.
4. Field notes — gallery-led case studies for the Grand Egyptian Museum, Cairo, and Istanbul; generated supporting visuals clearly treated as illustrative until real field photos are supplied.
5. Languages & background — oversized metrics strip, Turkish and English, 12 years living in Istanbul, education and verified career timeline.
6. Contact — quiet closing invitation with WhatsApp CTA placeholder until the user supplies a number.

## Content integrity
Use only established facts: Tourism & Hotels graduate (2005); Klas Hotel Istanbul, Guest Relations Officer (2021–2025); Olbia Travel and Tourism Istanbul, Operations Manager (May 2018–March 2020); lived in Istanbul for 12 years; works in Turkish and English; Egypt-based tour guiding. Do not invent phone, email, social URLs, license/permit status, reviews, client counts, awards, or tour prices. Clearly label generated visuals as illustrative where they could be mistaken for real documentary photographs.

## CTA inventory
- Header: “Plan your visit” — turquoise compact pill, opens WhatsApp only when verified number is supplied; until then anchor to contact section.
- Hero: “Explore the journeys” — text-led waypoint link to experiences.
- Experience cards: “View this journey” — outlined card-specific anchor.
- Contact: “Start a conversation” — primary turquoise action; fallback mail/WhatsApp links hidden until verified details are supplied.
- Language switch: Arabic / English / Türkçe — accessible segmented text controls, preserve selected language across the page.

## Privacy and launch
Standalone website; do not publish to the Higgsfield community feed. A public web URL is required for sharing; no password protection is implied. Do not add unverified personal contact data. QR code will point to the final live URL once deployment succeeds.
