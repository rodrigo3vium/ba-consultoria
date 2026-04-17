interface HotmartCheckoutOptions {
  baseUrl: string;
  email?: string;
}

export function buildHotmartCheckoutUrl({ baseUrl, email }: HotmartCheckoutOptions): string {
  const url = new URL(baseUrl);
  if (email) {
    url.searchParams.set('email', email);
  }
  const utmSource = new URLSearchParams(window.location.search).get('utm_source');
  if (utmSource) {
    url.searchParams.set('utm_source', utmSource);
  }
  return url.toString();
}
