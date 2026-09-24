// Hand-built line icons — chemistry themed, single stroke, currentColor.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function IconFlask(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M19 6h10" />
      <path d="M20 6v11.5L9.5 36.8C8 39.6 10 43 13.2 43h21.6c3.2 0 5.2-3.4 3.7-6.2L28 17.5V6" />
      <path d="M14.5 30h19" />
      <circle cx="24" cy="36" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="38.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconBeaker(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M15 5h18" />
      <path d="M17 5v13L8.4 34.6A4 4 0 0 0 12 40.5h24a4 4 0 0 0 3.6-5.9L31 18V5" />
      <path d="M13.5 27h21" />
    </svg>
  )
}

export function IconAtom(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="24" r="2.6" fill="currentColor" stroke="none" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(120 24 24)" />
    </svg>
  )
}

export function IconDroplet(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 5C24 5 12 21 12 30a12 12 0 0 0 24 0C36 21 24 5 24 5Z" />
      <path d="M18 30a6 6 0 0 0 6 6" />
    </svg>
  )
}

export function IconMicroscope(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M14 42h20" />
      <path d="M22 42c-3-4-3-9 1-12l4-3" />
      <path d="M20 22l9-7" />
      <rect x="24" y="6" width="6" height="11" rx="1.5" transform="rotate(35 27 11.5)" />
      <path d="M13 33a9 9 0 1 0 12-13" />
      <path d="M32 30h7" />
    </svg>
  )
}

export function IconDNA(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M16 5c0 12 16 12 16 24s-16 12-16 24" />
      <path d="M32 5c0 12-16 12-16 24s16 12 16 24" />
      <path d="M17.5 13h13" />
      <path d="M15.5 24h17" />
      <path d="M17.5 35h13" />
    </svg>
  )
}

export function IconHazard(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 5 43 40H5Z" />
      <path d="M24 19v10" />
      <circle cx="24" cy="33.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}
