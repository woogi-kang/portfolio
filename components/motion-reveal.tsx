"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
}

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MotionLink({ children, ...props }: HTMLMotionProps<"a">) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { y: 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
