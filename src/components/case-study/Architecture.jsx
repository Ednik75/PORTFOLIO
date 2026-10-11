import { Fragment } from 'react'

// Flèche entre deux blocs : horizontale sur grand écran, verticale sur mobile
function Connector() {
  return (
    <div className="flex justify-center text-accent" aria-hidden="true">
      <svg className="hidden min-[901px]:block" width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M2 12h26M22 6l6 6-6 6" />
      </svg>
      <svg className="min-[901px]:hidden" width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2v26M6 22l6 6 6-6" />
      </svg>
    </div>
  )
}

export default function Architecture({ number, blocks }) {
  return (
    <section className="bg-card border-y border-line">
      <div className="wrap py-[88px] flex flex-col gap-9">
        <h2 className="cap m-0 font-normal text-accent">{number} — Architecture</h2>
        <div className="grid gap-2 items-center min-[901px]:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)] min-[901px]:gap-0">
          {blocks.map((block, i) => (
            <Fragment key={block.label}>
              {i > 0 && <Connector />}
              <div
                className={`p-6 rounded-[20px] bg-bg flex flex-col gap-2 ${
                  block.highlight ? 'border-[1.5px] border-accent' : 'border border-line'
                }`}
              >
                <span className="cap text-text-3">{block.label}</span>
                {block.titles.map((title) => (
                  <strong key={title} className="text-xl font-semibold">
                    {title}
                  </strong>
                ))}
                {block.detail && <span className="text-[15px] text-text-2">{block.detail}</span>}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
