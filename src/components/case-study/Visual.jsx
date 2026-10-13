// Une image du projet (WebP, chargement différé) ou, tant qu'elle manque, son placeholder texte
export default function Visual({ visual, className = '', rounded = 'rounded-[22px]', width, height, children }) {
  return (
    <div
      className={`relative overflow-hidden bg-card border border-line flex items-center justify-center ${rounded} ${className}`}
    >
      {children}
      {visual.image ? (
        <img
          src={visual.image}
          alt={visual.alt ?? ''}
          width={width}
          height={height}
          loading="lazy"
          className="size-full object-cover object-top"
        />
      ) : (
        <span className="cap text-text-3 text-center px-4">{visual.placeholder}</span>
      )}
    </div>
  )
}
