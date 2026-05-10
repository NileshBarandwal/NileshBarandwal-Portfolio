---
name: Cinematic Portfolio System
colors:
  surface: '#141218'
  surface-dim: '#141218'
  surface-bright: '#3b383e'
  surface-container-lowest: '#0f0d13'
  surface-container-low: '#1d1b20'
  surface-container: '#211f24'
  surface-container-high: '#2b292f'
  surface-container-highest: '#36343a'
  on-surface: '#e6e0e9'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e6e0e9'
  inverse-on-surface: '#322f35'
  outline: '#948e9c'
  outline-variant: '#494551'
  surface-tint: '#cfbcff'
  primary: '#cfbcff'
  on-primary: '#381e72'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#6750a4'
  secondary: '#cdc0e9'
  on-secondary: '#342b4b'
  secondary-container: '#4d4465'
  on-secondary-container: '#bfb2da'
  tertiary: '#e7c365'
  on-tertiary: '#3e2e00'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#141218'
  on-background: '#e6e0e9'
  surface-variant: '#36343a'
typography:
  display:
    fontFamily: Cabinet Grotesk
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Cabinet Grotesk
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h2:
    fontFamily: Cabinet Grotesk
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  metadata:
    fontFamily: Geist Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label:
    fontFamily: Geist Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  container_max: 1280px
  gutter: 1.5rem
---

## Brand & Style

The design system is anchored in a cinematic, gallery-like atmosphere. It prioritizes negative space and precise structural alignment to evoke a sense of high-end craftsmanship. The aesthetic leans into a "Digital Noir" minimalism—where depth is achieved through subtle tonal shifts rather than aggressive shadows or vibrant color. 

The target audience consists of design-conscious peers and premium clients who value detail, legibility, and a quiet confidence in presentation. Every element must feel intentional; there is no decorative noise. The emotional response should be one of calm, focus, and technical sophistication.

## Colors

The palette is strictly controlled to maintain a cinematic depth. **Deep Void** serves as the infinite canvas, while **Surface Lift** provides the subtle elevation needed for interactive containers. 

Contrast is managed through **Charcoal Ink** for high-readability content and **Muted Steel** for supporting metadata. The **Ember Accent** is the only chromatic presence—a warm, terracotta-inspired earth tone used sparingly to guide the eye toward primary actions and critical highlights. No gradients are permitted; color is applied in solid, confident blocks.

## Typography

Typography is used as a structural element. **Cabinet Grotesk** provides a sharp, bold impact for headlines, set with tight tracking to mimic film title cards. **Geist** offers a clean, utilitarian experience for long-form reading, ensuring the portfolio remains accessible and professional. 

**Geist Mono** is utilized for technical details, timestamps, and metadata categories, reinforcing the "systematic" nature of the design. Text hierarchy is primarily achieved through scale and the contrast between Charcoal Ink and Muted Steel.

## Layout & Spacing

The design system employs a fixed-width central container for desktop, ensuring content remains at an optimal reading measure. On larger viewports, generous horizontal margins are used to center the narrative.

The spacing rhythm follows a strict 4px baseline, but prefers larger increments (lg and xl) to maintain the "restrained" atmosphere. Layouts should utilize a 12-column grid for complex pages (like case studies), while simpler views (like a bio) should use a single, centered 8-column column to emphasize focus.

## Elevation & Depth

This design system avoids shadows entirely. Depth is communicated through **Tonal Layering** and **Whisper Borders**. 

1.  **Level 0 (Background):** Deep Void (#0C0C0F).
2.  **Level 1 (Cards/Modals):** Surface Lift (#16161A) with a 1px Whisper Border (rgba(255,255,255,0.06)).
3.  **Interaction:** Elements do not "lift" off the page on hover; instead, borders may slightly increase in opacity, or the Ember Accent may be introduced.

The "Whisper Border" is the primary tool for defining boundaries, acting more like a hairline fracture of light than a traditional stroke.

## Shapes

The shape language is "Subtle Softness." While the system is architectural and sharp, a consistent radius of **0.75rem** is applied to cards, buttons, and input fields to prevent the UI from feeling hostile or overly industrial. 

Structural lines (dividers) are always 1px. Image containers must follow the corner radius of their parent cards to maintain a nested, cohesive appearance.

## Components

### Buttons
Primary CTAs are solid **Ember Accent** with **Deep Void** text for maximum contrast. Secondary actions use the **Surface Lift** background with a **Whisper Border** and **Charcoal Ink** text. All buttons use `label` typography and are height-standardized to 48px.

### Cards
Cards are the primary container for portfolio pieces. They utilize **Surface Lift** backgrounds and 0.75rem rounding. On hover, the 1px Whisper Border may transition to an opacity of 0.12, but no movement or scaling should occur.

### Input Fields
Inputs are minimal: a 1px bottom border using **Muted Steel** by default, transitioning to **Ember Accent** on focus. The background remains **Deep Void** to blend into the layout.

### Chips & Metadata
Tags use **Geist Mono** and are enclosed in a simple **Whisper Border** with no background fill. They serve as quiet indicators of category or technology.

### Lists
Lists are separated by 1px horizontal lines (Whisper Border). Hover states on list items should subtly change the background color from Deep Void to Surface Lift.