import type { ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useMove } from "@use-gesture/react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  useMove(({ xy: [moveX] }) => set({ x: moveX / window.innerWidth }), {
    target: typeof window !== "undefined" ? window : undefined,
  });

  return (
    <animated.h1
      style={{
        backgroundPositionX: x.to([0, 1], ["0%", "200%"]),
        background:
          "linear-gradient(120deg, #6066fa 0%, #ef4444 50%, #8b5cf6 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontSize: "clamp(2rem, 5vw, 3.75rem)",
        fontWeight: 800,
        lineHeight: 1.2,
        margin: "0 0 1rem",
      }}
    >
      {children}
    </animated.h1>
  );
}
