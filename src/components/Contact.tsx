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
    <section id="contact" className="px-gutter py-margin">
      <div className="flex flex-col md:flex-row justify-between items-end gap-margin">
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
    </section>
  )
}
