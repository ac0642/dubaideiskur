export const site = {
  name: "Dubai’de İş Kur",
  domain: "www.dubaideiskur.com",
  url: "https://www.dubaideiskur.com",
  email: "info@dubaideiskur.com",
  phone: "+971 50 000 0000",
  whatsappNumber: "971500000000",
  whatsappText:
    "Merhaba, Dubai’de şirket kuruluşu ve pazar giriş danışmanlığı hakkında bilgi almak istiyorum.",
  founder: "Ahmet Canlı"
};

export function whatsappUrl(message = site.whatsappText) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
