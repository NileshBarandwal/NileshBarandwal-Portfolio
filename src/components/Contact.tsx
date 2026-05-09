import { siteConfig } from '../data/mockData'

interface ContactLinkProps {
  readonly href: string
  readonly label: string
}

function ContactLink({ href, label }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="font-display text-headline-lg hover:text-primary transition-all duration-500 hover:translate-x-4 flex items-center gap-4"
    >
      {label} <span className="material-symbols-outlined">north_east</span>
    </a>
  )
}

export function Contact() {
  return (
    <section id="contact" className="my-margin px-gutter">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/5 py-16 px-8 md:px-16"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(110, 58, 170, 0.40) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(90, 45, 150, 0.35) 0%, transparent 60%), #0D0B14',
        }}
      >
        <div
          className="absolute top-1/2 left-[20%] -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'rgba(130, 70, 200, 0.22)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute top-1/2 right-[20%] -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'rgba(100, 55, 170, 0.18)', filter: 'blur(60px)' }}
        />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-margin">
          <div className="space-y-stack-md">
            <h2 className="font-display text-display-xl leading-[0.9] tracking-tighter">
              INITIATE
              <br />
              CONTACT
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant opacity-70">
              Open to full-time roles and internships.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <ContactLink href={`mailto:${siteConfig.email}`} label="EMAIL" />
            <ContactLink href={siteConfig.github} label="GITHUB" />
            <ContactLink href={siteConfig.linkedin} label="LINKEDIN" />
          </div>
        </div>
      </div>
    </section>
  )
}
