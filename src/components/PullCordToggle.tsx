import { useCallback, useRef, useState, type AnimationEvent, type CSSProperties } from "react";
import { useTheme } from "../hooks/use-theme";

const SPRING_EASING = "cubic-bezier(0.34, 1.56, 0.64, 1)";

export function PullCordToggle() {
  const { isDark, toggleTheme } = useTheme();
  const [isPulling, setIsPulling] = useState(false);
  const toggledRef = useRef(false);

  const handlePull = useCallback(() => {
    if (isPulling) return;
    toggledRef.current = false;
    setIsPulling(true);
  }, [isPulling]);

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent<SVGGElement>) => {
      if (event.animationName !== "cord-swing") return;
      if (!toggledRef.current) {
        toggledRef.current = true;
        toggleTheme();
      }
      setIsPulling(false);
    },
    [toggleTheme],
  );

  return (
    <div
      className={`pull-cord ${isPulling ? "is-pulling" : ""}`}
      data-theme={isDark ? "dark" : "light"}
      style={{ "--pull-easing": SPRING_EASING } as CSSProperties}
    >
      <button
        type="button"
        className="pull-cord__trigger"
        onClick={handlePull}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={!isDark}
      >
        <svg
          className="pull-cord__svg"
          viewBox="0 0 48 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect className="pull-cord__mount" x="18" y="0" width="12" height="8" rx="2" />
          <line
            className="pull-cord__mount-shadow"
            x1="24"
            y1="8"
            x2="24"
            y2="10"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <g className="pull-cord__assembly" onAnimationEnd={handleAnimationEnd}>
            <line
              className="pull-cord__string"
              x1="24"
              y1="10"
              x2="24"
              y2="88"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle className="pull-cord__bead" cx="24" cy="96" r="9" />
            <circle className="pull-cord__bead-highlight" cx="21" cy="93" r="2.5" />
            <path
              className="pull-cord__tassel"
              d="M24 105 C20 108 18 112 20 116 C22 114 24 114 24 114 C24 114 26 114 28 116 C30 112 28 108 24 105 Z"
            />
          </g>
        </svg>
        <span className="pull-cord__hint">{isDark ? "Pull for light" : "Pull for dark"}</span>
      </button>
    </div>
  );
}