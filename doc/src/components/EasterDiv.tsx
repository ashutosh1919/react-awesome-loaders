import type { ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface EasterDivProps {
  children: ReactNode;
}

export function EasterDiv({ children }: EasterDivProps) {
  const [{ x, y, live }, set] = useSpring(() => ({ x: 0, y: 0, live: false }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    document.body.classList.toggle("dragged", down);
    set({ x: down ? mx : 0, y: down ? my : 0, live: down });
  });

  return (
    <animated.span
      {...bind()}
      style={{
        x,
        y,
        zIndex: live.to((a) => (a ? 10000 : 0)),
        touchAction: "none",
      }}
    >
      {children}
    </animated.span>
  );
}
