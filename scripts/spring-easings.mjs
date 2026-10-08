// Prints the CSS spring easings used by src/styles/motion.css.
//
// Framer animates hovers and presses with springs. CSS can't run a spring, but
// `linear()` can sample one closely, so we bake each preset from
// src/lib/motion.ts into a `linear()` easing plus its settle duration.
//
// Usage: node scripts/spring-easings.mjs  → paste the output into src/styles/motion.css
import { spring } from 'motion'

// Keep in sync with the spring presets in src/lib/motion.ts.
// `duration` here is in milliseconds (the raw generator API), not seconds.
const presets = {
  base: { duration: 400, bounce: 0.2 },
  snappy: { stiffness: 500, damping: 60, mass: 1 },
  'nav-intro': { stiffness: 200, damping: 40, mass: 1 },
}

// Rough cubic-bezier stand-ins for browsers without `linear()` (Safari < 17.2).
const fallbacks = {
  base: '400ms cubic-bezier(0.25, 1.1, 0.4, 1)',
  snappy: '300ms cubic-bezier(0.2, 0.9, 0.3, 1)',
  'nav-intro': '1000ms cubic-bezier(0.16, 1, 0.3, 1)',
}

const lines = { fallback: [], linear: [] }
for (const [name, options] of Object.entries(presets)) {
  const css = String(spring({ keyframes: [0, 1], ...options }))
  const [duration, ...easing] = css.split(' ')
  const [fallbackDuration, ...fallbackEasing] = fallbacks[name].split(' ')
  lines.fallback.push(
    `  --spring-${name}-duration: ${fallbackDuration};`,
    `  --spring-${name}-easing: ${fallbackEasing.join(' ')};`,
  )
  lines.linear.push(
    `    --spring-${name}-duration: ${duration};`,
    `    --spring-${name}-easing: ${easing.join(' ')};`,
  )
}

console.log(`:root {
${lines.fallback.join('\n')}
}

@supports (transition-timing-function: linear(0, 1)) {
  :root {
${lines.linear.join('\n')}
  }
}`)
