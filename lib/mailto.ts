// use percent-encoding for subject/body; URLSearchParams uses + for spaces and many mail clients leave those as literal plus signs
export function buildMailtoHref(to: string, subject: string, body: string) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
