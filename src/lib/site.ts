import { siteContent } from "@/content/siteContent";

export const site = {
  name: siteContent.brand.name,
  domain: siteContent.brand.domain,
  url: siteContent.brand.url,
  email: siteContent.contact.email,
  phone: siteContent.contact.phone,
  telHref: siteContent.contact.telHref,
  whatsappUrl: siteContent.contact.whatsappUrl,
  whatsappText: siteContent.contact.whatsappText,
  founder: siteContent.brand.founder
};

export function whatsappUrl(message?: string) {
  if (!message) {
    return site.whatsappUrl;
  }

  return `${site.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
