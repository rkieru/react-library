# Popover trigger design

This folder captures the recommended approach for supporting a chevron icon and trigger spacing in the Popover component without relying on DOM inspection.

## Summary

The Popover should own its trigger shell and state, and the chevron should be rendered as part of the Popover trigger contract rather than guessed from the trigger element using `closest()` or CSS `:has()` selectors.

This avoids three problems:

- unknown chevron color
- unknown spacing needs for different trigger styles
- edge cases with nested popovers

## Recommended pattern

### 1. Popover owns state

Each Popover instance should manage its own `isOpen` state and expose it via a React context or props.

### 2. Trigger wrapper owns layout

The Popover should render a wrapper around the trigger content that reserves space for the chevron:

- inline-flex
- align-items: center
- gap or padding-inline-end
- consistent spacing regardless of trigger type

### 3. Chevron is Popover-owned

The chevron should be part of the Popover trigger UI, not a child that must be discovered later.

- default color: `currentColor`
- optional override via CSS variable: `--popover-chevron-color`
- rotate based on the Popover’s own `isOpen` state

### 4. Nested popovers get their own state

A nested Popover should not inspect the parent DOM tree. It should create its own provider and behave independently.

- parent popover = one state
- child popover = separate state
- each popover chooses its own placement and direction

## Why not `closest()`

`closest()` can work as a quick workaround, but it becomes brittle because it assumes a specific DOM structure. Once you have nested Popovers, custom trigger components, or custom trigger styling, the selector becomes hard to maintain and easy to misread.

The state should live in React, not in the browser tree.

## CSS variable contract

Recommended defaults:

```css
.popover-trigger {
  --popover-chevron-color: currentColor;
  --popover-trigger-gap: 0.5rem;
  --popover-trigger-padding-end: 1rem;
}
```

Then the chevron can be styled with:

```css
.popover-trigger-icon {
  color: var(--popover-chevron-color, currentColor);
}
```

This allows a light or dark trigger theme without needing to inspect the trigger component.

## Decision

Use the context/provider model instead of DOM querying. It keeps the code explicit, composable, and correct for nested Popovers.

For the full rationale and proposed API shape, see [popover-trigger-design.md](./popover-trigger-design.md).
