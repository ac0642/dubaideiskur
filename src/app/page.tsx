import { siteContent } from "@/content/siteContent";
import { mailtoUrl, site, whatsappUrl } from "@/lib/site";

function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-ink/70">{text}</p>
    </div>
  );
}

function VisualPanel() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/40 bg-night shadow-soft">
      <img
        src="/images/ahmet-canli.jpeg"
        alt="Ahmet Canlı"
        className="h-full min-h-[420px] w-full object-cover"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-night/80 text-white backdrop-blur-xl">
        <div className="section-shell flex min-h-16 items-center justify-between gap-4">
          <a href="#top" className="focus-ring rounded-md text-base font-extrabold">
            {siteContent.brand.name}
          </a>
          <nav aria-label={siteContent.navigation.ariaLabel} className="hidden items-center gap-6 text-sm font-semibold text-white/80 lg:flex">
            {siteContent.navigation.links.map((link) => (
              <a key={link.href} className="hover:text-white" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="cta-primary bg-gold text-night hover:bg-white" href={whatsappUrl()} target="_blank" rel="noreferrer">
            {siteContent.contact.whatsappCtaWithPhone}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-scene relative isolate min-h-[760px] overflow-hidden pt-28 text-white">
          <div className="skyline-mask absolute inset-x-0 bottom-0 -z-10 h-[52%] bg-night/30" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-sand to-transparent" />
          <div className="section-shell grid min-h-[650px] items-center">
            <div className="max-w-4xl py-16">
              <p className="inline-flex min-h-11 items-center rounded-full border border-white/30 bg-white/10 px-4 text-sm font-bold text-white backdrop-blur">
                {siteContent.hero.badge}
              </p>
              <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
                {siteContent.hero.headline}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
                {siteContent.hero.subheadline}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="cta-primary" href="#contact">
                  {siteContent.hero.primaryCta}
                </a>
                <a className="cta-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer">
                  {siteContent.contact.whatsappCtaWithPhone}
                </a>
              </div>
              <p className="mt-4 text-sm font-semibold text-white/75">{siteContent.contact.contactLine}</p>
              <p className="mt-12 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/85 backdrop-blur">
                {siteContent.hero.trustLine}
              </p>
            </div>
          </div>
        </section>

        <section aria-label={siteContent.metrics.ariaLabel} className="section-shell -mt-16 relative z-10">
          <div className="grid overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.metrics.items.map((metric) => (
              <div key={metric.label} className="border-b border-ink/10 p-6 sm:border-r lg:border-b-0">
                <p className="text-3xl font-black text-palm">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">{siteContent.problem.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                {siteContent.problem.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/70">
                {siteContent.problem.text}
              </p>
            </div>
            <div className="grid gap-3">
              {siteContent.problem.bullets.map((problem) => (
                <div key={problem} className="card rounded-2xl p-5">
                  <p className="text-sm font-semibold leading-6 text-ink/75">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="section-shell">
            <SectionIntro
              eyebrow={siteContent.servicesSection.eyebrow}
              title={siteContent.servicesSection.title}
              text={siteContent.servicesSection.text}
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.servicesSection.items.map((service) => (
                <article key={service.title} className="rounded-3xl border border-ink/10 bg-sand p-6">
                  <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <VisualPanel />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">{siteContent.founder.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                {siteContent.founder.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/70">
                {siteContent.founder.text}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {siteContent.founder.credentials.map((item) => (
                  <div key={item} className="rounded-2xl border border-ink/10 bg-white p-4 text-sm font-semibold leading-6 text-ink/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">{siteContent.institutional.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                {siteContent.institutional.title}
              </h2>
            </div>
            <p className="rounded-[28px] bg-sand p-6 text-base leading-8 text-ink/75 sm:p-8">
              {siteContent.institutional.text}
            </p>
          </div>
        </section>

        <section className="bg-night py-20 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">{siteContent.whyDubai.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {siteContent.whyDubai.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                {siteContent.whyDubai.text}
              </p>
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-white/75">
                {siteContent.whyDubai.taxDisclaimer}
              </p>
            </div>
            <div className="grid gap-3">
              {siteContent.whyDubai.bullets.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-6 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="yapi-analizi" className="section-shell py-20">
          <div className="grid gap-10 rounded-[32px] bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">{siteContent.leadForm.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                {siteContent.leadForm.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/70">
                {siteContent.leadForm.text}
              </p>
              <p className="mt-5 rounded-2xl bg-sand p-4 text-sm leading-6 text-ink/70">
                {siteContent.leadForm.note}
              </p>
              <p className="mt-4 text-sm font-semibold text-ink/60">{siteContent.contact.contactLine}</p>
            </div>
            <form action={mailtoUrl(siteContent.leadForm.mailSubject)} method="post" encType="text/plain" className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.leadForm.labels.name}
                  <input className="input" name="ad_soyad" autoComplete="name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.leadForm.labels.email}
                  <input className="input" name="email" type="email" autoComplete="email" required />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.leadForm.labels.activity}
                  <input className="input" name="faaliyet_alani" placeholder={siteContent.leadForm.placeholders.activity} />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.leadForm.labels.structure}
                  <select className="input" name="hedef_yapi" defaultValue="">
                    <option value="" disabled>{siteContent.leadForm.selectPlaceholder}</option>
                    {siteContent.leadForm.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-ink/75">
                {siteContent.leadForm.labels.note}
                <textarea className="input min-h-32 resize-y" name="not" placeholder={siteContent.leadForm.placeholders.note} />
              </label>
              <button className="cta-primary w-full sm:w-auto" type="submit">
                {siteContent.leadForm.submit}
              </button>
              <p className="text-sm font-semibold text-ink/60">{siteContent.contact.contactLine}</p>
            </form>
          </div>
        </section>

        <section id="packages" className="bg-white py-20">
          <div className="section-shell">
            <SectionIntro
              eyebrow={siteContent.packagesSection.eyebrow}
              title={siteContent.packagesSection.title}
              text={siteContent.packagesSection.text}
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {siteContent.packagesSection.items.map((pkg) => (
                <article key={pkg.name} className="rounded-3xl border border-ink/10 bg-sand p-6">
                  <h3 className="text-xl font-bold text-ink">{pkg.name}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-palm">{pkg.audience}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/70">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell py-20">
          <SectionIntro
            eyebrow={siteContent.faqSection.eyebrow}
            title={siteContent.faqSection.title}
            text={siteContent.faqSection.text}
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {siteContent.faqSection.items.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-ink/10 bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-base font-bold text-ink">
                  {faq.q}
                </summary>
                <p className="mt-4 text-sm leading-7 text-ink/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-night py-20 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">{siteContent.contactSection.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {siteContent.contactSection.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                {siteContent.contactSection.text}
              </p>
              <div className="mt-8 grid gap-3 text-sm font-semibold text-white/80">
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/20" href={whatsappUrl()} target="_blank" rel="noreferrer">
                  {siteContent.contactSection.methodLabels.whatsapp}: {site.phone}
                </a>
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/20" href={`mailto:${site.email}`}>
                  {siteContent.contactSection.methodLabels.email}: {site.email}
                </a>
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/20" href={`tel:${site.telHref}`}>
                  {siteContent.contactSection.methodLabels.phone}: {site.phone}
                </a>
              </div>
            </div>
            <form action={mailtoUrl(siteContent.contactSection.mailSubject)} method="post" encType="text/plain" className="rounded-[28px] bg-white p-6 text-ink shadow-soft sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.contactSection.formLabels.name}
                  <input className="input" name="ad_soyad" autoComplete="name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.contactSection.formLabels.phone}
                  <input className="input" name="telefon" autoComplete="tel" />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-ink/75">
                {siteContent.contactSection.formLabels.email}
                <input className="input" name="email" type="email" autoComplete="email" required />
              </label>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-ink/75">
                {siteContent.contactSection.formLabels.message}
                <textarea className="input min-h-36 resize-y" name="mesaj" placeholder={siteContent.contactSection.messagePlaceholder} required />
              </label>
              <button className="cta-primary mt-5 w-full" type="submit">
                {siteContent.contactSection.submit}
              </button>
              <p className="mt-4 text-sm font-semibold text-ink/60">{siteContent.contact.contactLine}</p>
              <p className="mt-4 text-xs leading-5 text-ink/60">
                {siteContent.contactSection.privacy}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-night pb-24 text-white sm:pb-8">
        <div className="section-shell border-t border-white/10 pt-8 text-sm text-white/60">
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <p>{siteContent.footer.copyright}</p>
            <p>{siteContent.footer.text}</p>
            <p>{siteContent.footer.contact}</p>
          </div>
        </div>
      </footer>

      <a
        className="focus-ring fixed inset-x-4 bottom-4 z-50 flex min-h-12 items-center justify-center rounded-full bg-palm px-5 py-3 text-center text-sm font-black text-white shadow-lift sm:hidden"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
      >
        {siteContent.stickyCta.text}
      </a>
    </>
  );
}
