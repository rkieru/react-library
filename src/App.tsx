import { Fragment } from "react";
import { Button, type ButtonProps } from "./lib/components/button";
import { Popover } from "./lib/components/popover";
import { Navigation } from "./lib/components/navigation";

import { Circle, Menu } from "lucide-react";

import "./App.css";

function App() {
  const buttonMatrix = {
    size: ["medium", "small", "large"],
    variant: ["flat", "outline", "ghost"],
    color: ["primary", "support", "accent"],
  };

  const colors = [
    "primary",
    "support",
    "accent",
    "neutral",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "purple",
    "pink",
  ];
  const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div>
      <h3>Navigation</h3>
      <p>
        Creates a wrapper element to house top-level navigational elements.
        Supports base color palette, as well as being flat or inset.
      </p>

      <div className="app-example-wrapper rows-2">
        <Navigation color="primary" variant="inset">
          <Navigation.Menu>hi</Navigation.Menu>
        </Navigation>
        <Navigation color="support">
          <Navigation.Menu>hi</Navigation.Menu>
        </Navigation>
        <Navigation color="accent">
          <Navigation.Menu>hi</Navigation.Menu>
        </Navigation>
        <Navigation color="neutral">
          <Navigation.Menu>hi</Navigation.Menu>
        </Navigation>
      </div>

      <h3>Button</h3>
      <p>
        A standard alternative to <code>&lt;button&gt;</code>. Supports base
        colors, multiple variants, and (soon) multiple sizes. Icons can be
        assigned to the start or end. This library makes no icon choice, so use
        the icons you prefer.
      </p>

      <div className="app-example-wrapper rows-3">
        {buttonMatrix.color.map((color) => (
          <Fragment key={color}>
            {buttonMatrix.variant.map((variant) => (
              <Button
                key={variant}
                variant={variant as ButtonProps["variant"]}
                color={color as ButtonProps["color"]}
                icon={<Circle />}
                iconEnd={<Circle />}
                label={`${variant.charAt(0).toUpperCase()}${variant.slice(1)}`}
              />
            ))}
          </Fragment>
        ))}
      </div>

      <h3>Popover</h3>
      <p>
        A container that accepts a <code>trigger</code> element. When clicked a
        menu appears. The menu is auto-positioned using CSS Anchoring and the
        Popover API. When an interactive element is detected, the appropriate
        icons are added to the component, but it is possible to add this to a
        non-interactive element. In that situation the element is made
        interactive.
      </p>

      <div className="app-example-wrapper rows-3">
        <Popover trigger={<Button label="Button" icon={<Circle />} />}>
          <Popover.Item>This is plain text.</Popover.Item>
          <Popover.Item>This is plain text.</Popover.Item>

          <a href="#">Google 1</a>

          <Popover.Item
            iconStart={<Circle />}
            iconEnd={<Circle />}
            href="https://google.com"
          >
            Anchor
          </Popover.Item>
        </Popover>

        <Popover
          trigger={
            <p
              style={{
                background: "var(--color-primary-800)",
                color: "var(--color-primary-100)",
                margin: 0,
              }}
            >
              This is plain text
            </p>
          }
        >
          <Popover.Item>This is plain text.</Popover.Item>
          <Popover.Item>This is plain text.</Popover.Item>

          <a href="#">Google 1</a>

          <Popover.Item
            iconStart={<Circle />}
            iconEnd={<Circle />}
            href="https://google.com"
          >
            Anchor
          </Popover.Item>
        </Popover>

        <Popover
          trigger={
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Menu /> Menu
            </span>
          }
        >
          <Popover.Item>This is plain text.</Popover.Item>
          <Popover.Item>This is plain text.</Popover.Item>

          <a href="#">Google 1</a>

          <Popover.Item
            iconStart={<Circle />}
            iconEnd={<Circle />}
            href="https://google.com"
          >
            Anchor
          </Popover.Item>
        </Popover>
      </div>

      <h3>Colors</h3>
      <p>
        The library supports 'primary', 'support', 'accent', and 'neutral' as
        customizable themes. It also supports a set of ROGYBIV colors. All
        colors range from 100 - 900 with 500 being the base color.
      </p>

      <div className="app-example-wrapper rows-10">
        {colors.map((c) => (
          <Fragment key={c}>
            {levels.map((level) => (
              <div
                key={`${c}-${level}`}
                style={{
                  padding: "1rem",
                  backgroundColor: `var(--color-${c}-${level})`,
                  color: `contrast-color(var(--color-${c}-${level}))`,
                }}
              >
                {c}-{level}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
