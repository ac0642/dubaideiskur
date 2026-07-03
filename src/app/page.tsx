import { mailtoUrl, site, whatsappUrl } from "@/lib/site";

const trustLine =
  "25.500+ B2B görüşme kolaylaştırıldı · 30+ trade mission ve buyer delegation koordine edildi · UAE Embassy Ankara program deneyimi";

const metrics = [
  { value: "26 yıl", label: "kamu ve dış ticaret tecrübesi" },
  { value: "25.500+", label: "B2B görüşme kolaylaştırıldı" },
  { value: "30+", label: "trade mission ve buyer delegation koordine edildi" },
  { value: "2018+", label: "Dubai’de saha deneyimi" }
];

const problems = [
  "Yanlış free zone veya mainland tercihi",
  "Faaliyet kodu ve lisans kapsamının eksik belirlenmesi",
  "Banka hesabı sürecine hazırlıksız başlanması",
  "Vergi, muhasebe ve uyum yükümlülüklerinin sonradan fark edilmesi",
  "Şirket kurulduktan sonra müşteri, distribütör veya iş ortağı bulunamaması"
];

const services = [
  {
    title: "Dubai ve UAE şirket kuruluşu danışmanlığı",
    text: "Faaliyet alanı, lisans kapsamı, ortaklık yapısı ve operasyon ihtiyacına göre kuruluş sürecinin planlanması."
  },
  {
    title: "Free zone ve mainland yapı karşılaştırması",
    text: "Satış modeli, hedef müşteri, vize, ofis, banka ve uyum ihtiyaçlarına göre yapı seçeneklerinin değerlendirilmesi."
  },
  {
    title: "Faaliyet kodu ve lisans seçimi",
    text: "İş modelinin lisans kapsamı, faaliyet kodu ve ileride doğabilecek operasyon kısıtları açısından incelenmesi."
  },
  {
    title: "Banka hesabı hazırlık süreci",
    text: "Banka görüşmeleri öncesinde şirket profili, ticari gerekçe ve belge hazırlığının düzenlenmesi."
  },
  {
    title: "Kurumsal vergi ve muhasebe koordinasyonu",
    text: "Vergi, muhasebe ve uyum başlıklarında yetkin uzmanlarla koordineli ilerlenmesi."
  },
  {
    title: "Pazar araştırması ve fizibilite",
    text: "Sektör, rekabet, fiyatlama, kanal yapısı ve uygulanabilirlik başlıklarında pazar değerlendirmesi."
  },
  {
    title: "B2B matchmaking ve iş ortağı arama",
    text: "Distribütör, alıcı, kurum, iş ortağı ve potansiyel müşteri görüşmelerinin planlanması."
  },
  {
    title: "UAE–Türkiye pazar giriş stratejisi",
    text: "Türkiye’den UAE pazarına açılım için uygulanabilir pazar giriş ve iş geliştirme yol haritası."
  }
];

const experience = [
  "26 yıllık kamu ve dış ticaret tecrübesi",
  "New York ve Dubai Commercial Attaché geçmişi",
  "2018’den beri Dubai’de saha deneyimi",
  "25.500+ B2B görüşmenin kolaylaştırılması",
  "30+ trade mission ve buyer delegation koordinasyonu",
  "UAE Embassy Ankara başta olmak üzere kurumsal program deneyimi"
];

const whyDubai = [
  "Bölgesel ticaret, lojistik, finans, teknoloji ve yatırım açısından güçlü iş merkezi",
  "Birçok şirket yapısında %100 yabancı mülkiyet imkânı",
  "Uluslararası pazarlara erişim ve güçlü bankacılık altyapısı",
  "Türkiye–UAE ticaret ilişkilerinin gelişmesi",
  "Türk girişimciler için bölgesel büyüme ve iş geliştirme fırsatları"
];

const packages = [
  {
    name: "Başlangıç Danışmanlığı",
    audience: "Dubai’de şirket kurmadan önce doğru yönü netleştirmek isteyen girişimciler",
    items: ["Hedef ve faaliyet analizi", "Free zone ve mainland ön değerlendirmesi", "Lisans kapsamı notları", "İlk adım yol haritası"]
  },
  {
    name: "Şirket Kuruluşu Danışmanlığı",
    audience: "Kuruluş sürecini doğru yapı, belge ve hazırlıkla yürütmek isteyen şirketler",
    items: ["Yapı seçimi danışmanlığı", "Faaliyet kodu ve lisans yönlendirmesi", "Banka hazırlık dosyası", "Vergi ve muhasebe koordinasyonu"]
  },
  {
    name: "Market Entry & B2B Growth Program",
    audience: "UAE pazarında müşteri, distribütör veya iş ortağı arayan firmalar",
    items: ["Pazar araştırması", "Hedef müşteri ve kanal haritası", "B2B matchmaking planı", "Takip ve iş geliştirme süreci"]
  }
];

const faqs = [
  {
    q: "Dubai’de şirket kurmak kaç gün sürer?",
    a: "Süre; seçilen yapı, faaliyet alanı, lisans kapsamı, belge hazırlığı ve ilgili kurumların değerlendirme süreçlerine göre değişir. Ön görüşmede hedefinize göre gerçekçi bir zaman planı çıkarılır."
  },
  {
    q: "Free zone mu mainland mi daha uygun?",
    a: "Tek bir doğru cevap yoktur. Hedef müşteri, satış modeli, faaliyet türü, ofis ihtiyacı, vize planı, banka beklentisi ve büyüme hedefi birlikte değerlendirilmelidir."
  },
  {
    q: "Banka hesabı açmak garanti mi?",
    a: "Hayır. Banka hesabı açılışı bankaların kendi değerlendirme süreçlerine bağlıdır. Danışmanlık kapsamında şirket profili, ticari gerekçe ve belge hazırlığının daha sağlıklı sunulması hedeflenir."
  },
  {
    q: "UAE corporate tax nasıl uygulanır?",
    a: "Uygulama; şirket yapısı, faaliyet türü, gelir modeli, free zone durumu ve güncel mevzuata göre değişebilir. Bu nedenle her şirket için ayrı değerlendirme yapılmalıdır."
  },
  {
    q: "Türkiye’de şirketim varken Dubai’de şirket kurabilir miyim?",
    a: "Evet, birçok girişimci ve şirket bu yapıyı değerlendirebilir. Ancak Türkiye’deki mevcut faaliyet, sahiplik yapısı, vergi ve operasyon ilişkisi dikkatle analiz edilmelidir."
  },
  {
    q: "Şirket kurduktan sonra müşteri bulma konusunda destek veriyor musunuz?",
    a: "Evet. Pazar araştırması, hedef müşteri profili, B2B matchmaking, distribütör arama ve takip süreçleri kapsamında iş geliştirme desteği sunulur."
  }
];

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

function VisualPanel({ label }: { label: string }) {
  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-[28px] border border-white/40 bg-night shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,216,150,0.32),transparent_28%),linear-gradient(135deg,#12352d,#6f4b2e_58%,#d2a251)]" />
      <div className="skyline-mask absolute inset-x-0 bottom-0 h-3/4 bg-white/20" />
      <div className="absolute left-6 top-6 rounded-full border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
        {label}
      </div>
      <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
        <p className="text-sm font-semibold">Görsel alanı</p>
        <p className="mt-1 text-sm text-white/75">
          Ahmet Canlı portre fotoğrafı, Dubai ofis görüntüsü veya gerçek saha çalışması burada kullanılabilir.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-night/80 text-white backdrop-blur-xl">
        <div className="section-shell flex min-h-16 items-center justify-between gap-4">
          <a href="#top" className="focus-ring rounded-md text-base font-extrabold">
            Dubai’de İş Kur
          </a>
          <nav aria-label="Ana menü" className="hidden items-center gap-6 text-sm font-semibold text-white/80 lg:flex">
            <a className="hover:text-white" href="#services">Hizmetler</a>
            <a className="hover:text-white" href="#yapi-analizi">Yapı Analizi</a>
            <a className="hover:text-white" href="#packages">Paketler</a>
            <a className="hover:text-white" href="#faq">Sık Sorular</a>
            <a className="hover:text-white" href="#contact">İletişim</a>
          </nav>
          <a className="cta-primary bg-gold text-night hover:bg-white" href={whatsappUrl()} target="_blank" rel="noreferrer">
            WhatsApp
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
                Dubai ve UAE Şirket Kuruluşu Danışmanlığı
              </p>
              <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
                Dubai’de Şirket Kurmak Yetmez. Pazara Doğru Girmek Gerekir.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
                26 yıllık dış ticaret ve market access tecrübesiyle; Dubai’de şirket kuruluşu, doğru yapı seçimi, pazar araştırması ve B2B iş geliştirme süreçlerinde Türk girişimcilere uçtan uca danışmanlık sunuyoruz.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="cta-primary" href="#contact">
                  Ücretsiz Ön Görüşme Al
                </a>
                <a className="cta-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer">
                  WhatsApp ile Yazın
                </a>
              </div>
              <p className="mt-12 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/85 backdrop-blur">
                {trustLine}
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Güven göstergeleri" className="section-shell -mt-16 relative z-10">
          <div className="grid overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">Sorun</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Dubai’de şirket kurmak kolay görünebilir. Doğru yapı kurmak ise tecrübe ister.
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/70">
                Şirket kuruluşu yalnızca evrak süreci değildir. Doğru lisans, doğru yapı, banka hazırlığı, vergi ve muhasebe uyumu ile pazar erişimi birlikte ele alınmalıdır.
              </p>
            </div>
            <div className="grid gap-3">
              {problems.map((problem) => (
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
              eyebrow="Hizmetler"
              title="Hizmetlerimiz"
              text="Dubai’de şirket kurmak isteyen Türk girişimciler için şirket kuruluşu, doğru yapı seçimi, pazar araştırması, B2B iş geliştirme ve UAE–Türkiye market entry danışmanlığı sunuyoruz."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
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
            <VisualPanel label="Kurucu profil" />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">Kurucu</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Ahmet Canlı Kimdir?
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/70">
                Ahmet Canlı, Turkish Ministry of Trade bünyesinde 26 yıl görev yapmış; New York ve Dubai’de Commercial Attaché olarak çalışmış bir dış ticaret, market access ve business development uzmanıdır. 2018’den beri Dubai’de şirket kuruluşu, pazar araştırması, yatırım danışmanlığı ve B2B matchmaking alanlarında Türk ve uluslararası şirketlere destek vermektedir.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {experience.map((item) => (
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">Kurumsal Deneyim</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                B2B Programlar ve Kurumsal Deneyim
              </h2>
            </div>
            <p className="rounded-[28px] bg-sand p-6 text-base leading-8 text-ink/75 sm:p-8">
              UAE Embassy Ankara başta olmak üzere; kamu kurumları, ticaret odaları, ihracatçı birlikleri, free zone temsilcileri ve özel sektör kuruluşları için gıda, enerji, fintech, mobilya, yapı malzemeleri, teknoloji, sanayi ve yatırım alanlarında B2B matchmaking programları, buyer missions, roadshows ve yatırım toplantıları koordine edilmiştir.
            </p>
          </div>
        </section>

        <section className="bg-night py-20 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Neden Dubai</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Neden Dubai?
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                Dubai; bölgesel ticaret, lojistik, finans, teknoloji ve yatırım açısından güçlü bir iş merkezidir. Birçok şirket yapısında %100 yabancı mülkiyet imkânı, uluslararası pazarlara erişim, güçlü bankacılık altyapısı ve Türkiye–UAE ticaret ilişkilerinin gelişmesi, Dubai’yi Türk girişimciler için cazip bir merkez haline getirmektedir.
              </p>
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-white/75">
                Vergi ve kuruluş avantajları; şirket yapısı, faaliyet türü, free zone, lisans kapsamı ve güncel mevzuata göre değişebilir. Bu nedenle her şirket için ayrı değerlendirme yapılmalıdır.
              </p>
            </div>
            <div className="grid gap-3">
              {whyDubai.map((item) => (
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">Yapı Analizi</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Hangi kuruluş yapısı size daha uygun olabilir?
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/70">
                Kısa formu gönderin. Faaliyet alanınız, hedef müşteriniz, operasyon modeliniz ve banka beklentiniz dikkate alınarak ilk değerlendirme için size dönüş yapılsın.
              </p>
              <p className="mt-5 rounded-2xl bg-sand p-4 text-sm leading-6 text-ink/70">
                Bu ön değerlendirme; faaliyet kapsamı, hedef müşteri, lisans yapısı ve pazara giriş önceliklerini netleştirmek için tasarlanmıştır.
              </p>
            </div>
            <form action={mailtoUrl("Yapı Analizi Talebi")} method="post" encType="text/plain" className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  Ad Soyad
                  <input className="input" name="ad_soyad" autoComplete="name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  E-posta
                  <input className="input" name="email" type="email" autoComplete="email" required />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  Faaliyet alanı
                  <input className="input" name="faaliyet_alani" placeholder="Örn. ihracat, danışmanlık, e-ticaret" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  Hedef yapı
                  <select className="input" name="hedef_yapi" defaultValue="">
                    <option value="" disabled>Seçiniz</option>
                    <option>Free zone</option>
                    <option>Mainland</option>
                    <option>Emin değilim</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-ink/75">
                Kısa not
                <textarea className="input min-h-32 resize-y" name="not" placeholder="Dubai ve UAE hedefinizi, ürün veya hizmetinizi ve zamanlamanızı kısaca yazın" />
              </label>
              <button className="cta-primary w-full sm:w-auto" type="submit">
                Ön Değerlendirme Talep Et
              </button>
            </form>
          </div>
        </section>

        <section id="packages" className="bg-white py-20">
          <div className="section-shell">
            <SectionIntro
              eyebrow="Paketler"
              title="Danışmanlık Paketleri"
              text="Her kapsam; firmanın sektörü, hedef pazarı, kuruluş ihtiyacı ve iş geliştirme önceliklerine göre görüşme sonrasında netleştirilir."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {packages.map((pkg) => (
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
            eyebrow="Sık Sorular"
            title="Sık sorulan sorular"
            text="Dubai’de şirket kuruluşu, banka hazırlığı, vergi uyumu ve pazar giriş sürecinde en kritik kararlar başlangıçta verilir."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">İletişim</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Dubai’ye doğru yapı ve doğru pazar planıyla girin.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                İlk görüşmede hedefiniz, faaliyet alanınız, mevcut hazırlık seviyeniz ve Dubai ile UAE pazarı için en sağlıklı sonraki adım değerlendirilir.
              </p>
              <div className="mt-8 grid gap-3 text-sm font-semibold text-white/80">
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/20" href={whatsappUrl()} target="_blank" rel="noreferrer">
                  WhatsApp: {site.phone}
                </a>
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/20" href={`mailto:${site.email}`}>
                  E-posta: {site.email}
                </a>
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/20" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  Telefon: {site.phone}
                </a>
              </div>
            </div>
            <form action={mailtoUrl("Ön Görüşme Talebi")} method="post" encType="text/plain" className="rounded-[28px] bg-white p-6 text-ink shadow-soft sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  Ad Soyad
                  <input className="input" name="ad_soyad" autoComplete="name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  Telefon
                  <input className="input" name="telefon" autoComplete="tel" />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-ink/75">
                E-posta
                <input className="input" name="email" type="email" autoComplete="email" required />
              </label>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-ink/75">
                Mesaj
                <textarea className="input min-h-36 resize-y" name="mesaj" placeholder="Dubai ve UAE hedefinizi kısaca yazın" required />
              </label>
              <button className="cta-primary mt-5 w-full" type="submit">
                Görüşme Talebi Gönder
              </button>
              <p className="mt-4 text-xs leading-5 text-ink/60">
                Bilgileriniz yalnızca görüşme talebinizi değerlendirmek ve size dönüş yapmak için kullanılır.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-night pb-24 text-white sm:pb-8">
        <div className="section-shell border-t border-white/10 pt-8 text-sm text-white/60">
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <p>© 2026 {site.name}. Tüm hakları saklıdır.</p>
            <p>Dubai ve UAE şirket kuruluşu, pazar araştırması ve B2B iş geliştirme danışmanlığı.</p>
          </div>
        </div>
      </footer>

      <a
        className="focus-ring fixed inset-x-4 bottom-4 z-50 flex min-h-12 items-center justify-center rounded-full bg-palm px-5 py-3 text-center text-sm font-black text-white shadow-lift sm:hidden"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp ile Yazın
      </a>
    </>
  );
}
