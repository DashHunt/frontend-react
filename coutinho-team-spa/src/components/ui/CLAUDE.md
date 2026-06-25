# UI Primitives — `src/components/ui/`

Reusable, domain-agnostic building blocks. No business logic or hardcoded content here — all data is passed via props.

---

## Button / ButtonLink

**File:** `Button.tsx`

Two exports sharing identical visual styles. `Button` renders a `<button>`, `ButtonLink` renders an `<a>`.

### Shared props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'ember' \| 'ghost' \| 'outline-ember'` | `'ember'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size |
| `className` | `string` | — | Extra classes (appended, no conflict resolution) |

`Button` also accepts all `<button>` HTML attributes (`type`, `onClick`, `disabled`, etc.).  
`ButtonLink` also accepts all `<a>` HTML attributes (`href`, `target`, `rel`, etc.).

### Variants

| Variant | Use case |
|---|---|
| `ember` | Primary CTA (solid orange) |
| `ghost` | Secondary action (translucent border) |
| `outline-ember` | Tertiary action (ember border, transparent fill) |

```tsx
<Button variant="ember" size="lg" type="submit">Salvar</Button>
<ButtonLink href="#planos" variant="ghost" size="lg">Ver planos</ButtonLink>
<Button variant="outline-ember" onClick={handler}>Escolher plano</Button>
```

---

## StatCard

**File:** `StatCard.tsx`

Displays a large numeric stat with a label below it. Used in the `Sobre` section.

| Prop | Type | Description |
|---|---|---|
| `value` | `string` | Number or text value (e.g. `"+42"`) |
| `label` | `string` | Metric description |

---

## BenefitCard

**File:** `BenefitCard.tsx`

Card with an emoji icon, title, and description. Lifts slightly on hover.

| Prop | Type | Description |
|---|---|---|
| `icon` | `string` | Emoji representing the benefit |
| `title` | `string` | Short title |
| `description` | `string` | Detailed description |

---

## TeamCard

**File:** `TeamCard.tsx`

Coach card with initials avatar, name, role, bio, and Instagram link.

| Prop | Type | Default | Description |
|---|---|---|---|
| `initials` | `string` | — | Avatar initials (e.g. `"CT"`) |
| `name` | `string` | — | Full name |
| `role` | `string` | — | Role/specialty |
| `bio` | `string` | — | Short bio |
| `instagram` | `string` | — | Instagram handle (e.g. `"@treinador"`) |
| `instagramHref` | `string` | `"#"` | Profile URL |

---

## AthleteCard

**File:** `AthleteCard.tsx`

Athlete card with initial avatar, name, and a bordered list of achievements.

| Prop | Type | Description |
|---|---|---|
| `initial` | `string` | Avatar initial (e.g. `"A"`) |
| `name` | `string` | Athlete name |
| `achievements` | `readonly { label: string }[]` | Achievement list (accepts both mutable and readonly arrays) |

---

## TestimonialCard

**File:** `TestimonialCard.tsx`

Testimonial card with avatar initial, student name, category tag, and an italic quote.

| Prop | Type | Description |
|---|---|---|
| `initial` | `string` | Avatar initial |
| `name` | `string` | Student name |
| `tag` | `string` | Category or profile (e.g. `"Sub-23 / 74kg"`) |
| `quote` | `string` | Testimonial text — rendered in italic, no quotes needed |

---

## PlanoCard

**File:** `PlanoCard.tsx`

Pricing plan card. The `featured` variant is elevated with ember border and glow shadow.

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Plan name |
| `tag` | `string` | — | Discount badge (e.g. `"7% OFF"`) |
| `pricePrefix` | `string` | — | Before price (e.g. `"3x"`) |
| `price` | `string` | — | Main price value (e.g. `"R$ 197"`) |
| `priceSuffix` | `string` | — | After price (e.g. `"/mês"`) |
| `note` | `string` | — | Note below the price |
| `badge` | `string` | — | Floating label (e.g. `"Mais vendido"`) |
| `featured` | `boolean` | `false` | Highlighted style with ember border |
| `onSelect` | `(plan: string) => void` | — | Called with `title` when user clicks "Escolher plano" |

---

## Modal

**File:** `Modal.tsx`

Overlay dialog containing the lead form. Closes on outside click, `Escape` key, or the `×` button. Locks body scroll while open.

| Prop | Type | Description |
|---|---|---|
| `isOpen` | `boolean` | Visibility toggle |
| `selectedPlan` | `string` | Pre-selected plan name passed to the form |
| `onClose` | `() => void` | Close callback |

Modal state lives in `App.tsx` and is opened by `Planos` via `onSelectPlan`.

---

## Navbar

**File:** `Navbar.tsx`

Sticky header with logo, anchor nav links, desktop CTA, and a mobile hamburger menu. Manages its own `isOpen` state for the mobile dropdown.

To add or remove nav items, edit the `NAV_LINKS` array at the top of the file.
