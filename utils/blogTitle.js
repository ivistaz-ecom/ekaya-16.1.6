/**
 * Normalizes HTML in blog titles from WordPress.
 * - Fixes invalid </br> to <br /> so line breaks render correctly.
 * Use the result with dangerouslySetInnerHTML so <span class="highlight"> etc. render as HTML.
 */
export function fixBlogTitleHtml(html) {
  if (typeof html !== "string") return html ?? "";
  return html.replace(/<\/br\s*>/gi, "<br />");
}
