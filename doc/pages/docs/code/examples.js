import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styles from './styles.module.css'

export function EasterDiv({ children }) {
  const [{ x, y, live }, set] = useSpring(() => ({ x: 0, y: 0, live: false }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    document.body.classList.toggle('dragged', down)
    set({ x: down ? mx : 0, y: down ? my : 0, live: down })
  })

  return (
    <animated.span className={styles.easter} {...bind()} style={{ x, y, zIndex: live.to(a => (a ? 10000 : 0)) }}>
      {children}
    </animated.span>
  )
}
