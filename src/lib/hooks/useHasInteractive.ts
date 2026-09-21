/**
 * @hook `useHasInteractive`
 * @description Returns a `boolean` if the trigger element or one of its descendants matches the defined query;
 * used to determine if additional behavior is needed to make an item interactive.
 */

import React, { useLayoutEffect, useRef, useState } from "react";

function useHasInteractive(
  deps: React.DependencyList = [],
  query = 'button, a, [role="button"], [role="link"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasInteractive, setHasInteractive] = useState(false);

  useLayoutEffect(() => {
    const wrapper = ref.current;

    if (!wrapper) {
      return;
    }

    const element = wrapper.firstElementChild as HTMLElement | null;
    const target = element ?? wrapper;

    setHasInteractive(
      Boolean(target.matches?.(query) || target.querySelector?.(query))
    );
  }, [...deps, query]);

  return [ref, hasInteractive] as const;
}

export default useHasInteractive;
