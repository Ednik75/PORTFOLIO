// Section en deux colonnes : petit libellé numéroté à gauche, contenu à droite
export default function CaseSection({ number, label, title, children }) {
  return (
    <section className="wrap pb-[88px]">
      <div className="grid gap-4 min-[901px]:grid-cols-[240px_minmax(0,1fr)] min-[901px]:gap-12">
        <span className="cap text-accent">
          {number} — {label}
        </span>
        <div className="flex flex-col gap-4 max-w-[760px]">
          <h2 className="m-0 font-bold text-[30px] min-[901px]:text-[40px] leading-[1.05] tracking-[-0.02em]">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  )
}

// Paragraphe standard d'une section
export function CaseText({ children }) {
  return <p className="m-0 text-lg leading-[1.65] text-text-2">{children}</p>
}
