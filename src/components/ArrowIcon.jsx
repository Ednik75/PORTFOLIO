// Flèche utilisée par les boutons ronds (décorative : le bouton porte déjà un aria-label)
export default function ArrowIcon({ direction = 'right', size = 20 }) {
  const path = direction === 'left' ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}
