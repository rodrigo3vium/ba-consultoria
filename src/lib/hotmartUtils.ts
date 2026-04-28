import { getPersistedUtm } from './tracking';

interface HotmartCheckoutOptions {
  baseUrl: string;
  email?: string;
  contactId?: string;
}

export function buildHotmartCheckoutUrl({ baseUrl, email, contactId }: HotmartCheckoutOptions): string {
  const url = new URL(baseUrl);
  if (email) url.searchParams.set('email', email);

  const utm = getPersistedUtm();

  if (utm.source)   url.searchParams.set('utm_source', utm.source);
  if (utm.medium)   url.searchParams.set('utm_medium', utm.medium);
  if (utm.campaign) url.searchParams.set('utm_campaign', utm.campaign);
  if (utm.content)  url.searchParams.set('utm_content', utm.content);
  if (utm.term)     url.searchParams.set('utm_term', utm.term);

  const sckParts: string[] = [];
  if (contactId)    sckParts.push(`cid=${contactId}`);
  if (utm.source)   sckParts.push(`source=${utm.source}`);
  if (utm.medium)   sckParts.push(`medium=${utm.medium}`);
  if (utm.campaign) sckParts.push(`campaign=${utm.campaign}`);
  if (utm.content)  sckParts.push(`content=${utm.content}`);
  if (utm.term)     sckParts.push(`term=${utm.term}`);

  if (sckParts.length) url.searchParams.set('sck', sckParts.join('|'));

  // decodeURI preserva pipe (|) literal no sck — formato esperado pela Hotmart
  return decodeURI(url.toString());
}
