# Popover trigger design proposal

## Problem

The trigger may be:

- a button
- plain text
- a custom React component
- a dark-themed control or a light-themed control

Because of that, the Popover does not know:

1. what color the chevron should be
2. what extra spacing the trigger should reserve for the chevron

## Current behavior

The current pattern in the component library is to render the chevron as part of the Popover trigger and then use CSS to rotate it based on `aria-expanded`.

This is workable for a single popover level, but it couples the visual state to CSS selectors rather than to React state. That becomes difficult to scale when nested popovers and custom trigger components are introduced.

## Recommendation

### Use a Popover-owned trigger shell

The Popover should wrap the trigger content in a container that owns:

- the chevron
- its color
- the spacing reserve
- the open/closed state

This gives the component a clean contract independent of the underlying trigger element.

## Proposed API

```tsx
<Popover placement="bottom-start">
  <Popover.Trigger>
    <Button label="Menu" />
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Item>Item 1</Popover.Item>
    <Popover.Item>Item 2</Popover.Item>
  </Popover.Content>
</Popover>
```

Or, if keeping the current shape:

```tsx
<Popover trigger={<Button label="Menu" />}>
  <Popover.Item>Item 1</Popover.Item>
  <Popover.Item>Item 2</Popover.Item>
</Popover>
```

The important part is that the Popover manages the chevron and its spacing rather than trying to infer these from the child trigger.

## State model

Each Popover instance should own:

```ts
const popoverState = {
  isOpen: boolean,
  toggle: () => void,
  open: () => void,
  close: () => void,
  placement: "bottom-start" | "bottom-end" | "right-start" | "left-start",
};
```

This state is then consumed by the trigger and chevron icons.

## Chevron styling contract

Use CSS variables with a sane default:

```css
.popover-trigger {
  --popover-chevron-color: currentColor;
  --popover-trigger-gap: 0.5rem;
  --popover-trigger-padding-end: 1rem;
}
```

Then:

```css
.popover-trigger-icon {
  color: var(--popover-chevron-color, currentColor);
  transition: transform 0.2s ease;
}

.popover-trigger[data-open="true"] .popover-trigger-icon {
  transform: rotate(180deg);
}
```

This means trigger components can be dark or bright without the Popover guessing.

## Trigger spacing

The wrapper should reserve layout space for the chevron regardless of trigger type:

```css
.popover-trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--popover-trigger-gap, 0.5rem);
  padding-inline-end: var(--popover-trigger-padding-end, 1rem);
}
```

This is more reliable than expecting the trigger element to have its own spacing rules or using a selector like `:has(.button)`.

## Nested Popovers

Nested Popovers should each have their own provider and state. A child popover must be able to open to a different direction without inheriting the parent’s visual or placement logic.

Good example:

- parent popover opens downward
- child submenu opens to the right

This can be modeled by giving each Popover instance its own `placement` and `isOpen` value.

## Why this is better than `closest()`

`closest()` is a workaround for DOM structure, not a component design.

Problems with it:

- couples behavior to specific DOM ancestry
- breaks with nested popovers
- makes custom trigger styling harder to reason about
- hides state logic behind selector-based detection

The Popover context/provider model keeps state explicit and local to the instance.

## Recommendation

Proceed with a Popover context/provider pattern that gives the trigger shell responsibility for:

- chevron color
- chevron spacing
- chevron rotation
- nested popover independence

This is the most maintainable architecture for the component library going forward.
