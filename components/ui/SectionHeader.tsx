type SectionHeaderProps = {
  tag: string
  title: React.ReactNode
  subtitle: string
  light?: boolean
  className?: string
}

export function SectionHeader({ tag, title, subtitle, light = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mx-auto mb-14 max-w-2xl text-center ${className}`}>
      <span
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
          light
            ? 'bg-white/10 text-brand-light'
            : 'bg-brand-light text-brand'
        }`}
      >
        <span className={`h-1 w-1 rounded-full ${light ? 'bg-brand-light' : 'bg-brand'}`} />
        {tag}
      </span>
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-sm leading-relaxed sm:text-base ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    </div>
  )
}
