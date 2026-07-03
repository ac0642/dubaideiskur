import { site, whatsappUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-sand text-ink">
      <section className="section-shell flex min-h-screen items-center justify-center py-20">
        <div className="max-w-xl rounded-[28px] bg-white p-8 text-center shadow-soft sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">Sayfa Bulunamadı</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Aradığınız sayfa bulunamadı.</h1>
          <p className="mt-5 text-base leading-7 text-ink/70">
            İsterseniz ana sayfaya dönebilir veya Dubai’de şirket kuruluşu ve pazar giriş danışmanlığı için WhatsApp üzerinden bize yazabilirsiniz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a className="cta-primary" href="/">
              Ana Sayfaya Dön
            </a>
            <a className="cta-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer">
              WhatsApp ile Yazın
            </a>
          </div>
          <p className="mt-6 text-sm font-semibold text-ink/50">{site.domain}</p>
        </div>
      </section>
    </main>
  );
}
