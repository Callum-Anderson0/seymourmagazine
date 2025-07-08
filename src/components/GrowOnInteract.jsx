import { useRef } from "react";

/**
 * GrowOnInteract wraps a child element and provides a grow-on-hover and pop-on-click animation.
 * Usage:
 * <GrowOnInteract><img ... /></GrowOnInteract>
 */
function GrowOnInteract({ children, hoverScale = 1.05, clickScale = 1.075 }) {
  const ref = useRef(null);

  // Click pop animation
  const handleClick = (e) => {
    if (children.props.onClick) children.props.onClick(e);
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)";
    el.style.transform = `scale(${clickScale})`;
    setTimeout(() => {
      el.style.transition = "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)";
      el.style.transform = "scale(1)";
      setTimeout(() => {
        el.style.transition = null;
        el.style.transform = null;
      }, 250);
    }, 180);
  };

  return (
    <span
      ref={ref}
      style={{ display: "inline-block", cursor: "pointer" }}
      className={`transition-transform duration-500 ease-in-out hover:scale-[${hoverScale}] active:scale-100`}
      onClick={handleClick}
    >
      {children}
    </span>
  );
}

export default GrowOnInteract;
