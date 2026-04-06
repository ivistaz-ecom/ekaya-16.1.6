/**
 * DOM id on the contact form wrapper (deep links: /takshavi#contact-takshavi).
 * HomePage/Contact and ContactUs/Contact resolve this from usePathname() — same
 * idea as the old code that used pathname for project prefill: parents only
 * render <Contact />. Optional prop sectionId overrides for edge cases.
 */
export const CONTACT_SECTION_ID_BY_PATH = {
  "/": "contactpage",
  "/contact-us": "contact-us",
  "/takshavi": "contact-takshavi",
  "/about-dona-paula": "contact-dona-paula",
  "/about-embrace": "contact-embrace",
  "/about-ellen": "contact-ellen",
  "/vista-do-mar": "contact-vista-do-mar",
  "/about-amora": "contact-amora",
  "/about-lucilia": "contact-lucilia",
  "/about-moira": "contact-moira",
};

export const DEFAULT_CONTACT_SECTION_ID = "contactpage";

export function normalizePathname(pathname) {
  if (pathname == null || pathname === "") return "/";
  let p = String(pathname).split("?")[0].split("#")[0];
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p || "/";
}

export function getContactSectionId(pathname) {
  const p = normalizePathname(pathname);
  if (Object.prototype.hasOwnProperty.call(CONTACT_SECTION_ID_BY_PATH, p)) {
    return CONTACT_SECTION_ID_BY_PATH[p];
  }
  return DEFAULT_CONTACT_SECTION_ID;
}

export function hasContactSectionOnPath(pathname) {
  const p = normalizePathname(pathname);
  return Object.prototype.hasOwnProperty.call(CONTACT_SECTION_ID_BY_PATH, p);
}
