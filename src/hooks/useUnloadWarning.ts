import { useEffect } from "react";
//display a warning when refreshing the site that there are might be unsaved changes

export default function useUnloadWarning(condition = true) {
  useEffect(() => {
    if (!condition) return;

    const listener = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", listener);

    return () => window.removeEventListener("beforeunload", listener);
  }, [condition]);
}
