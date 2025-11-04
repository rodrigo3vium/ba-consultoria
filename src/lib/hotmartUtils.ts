/**
 * Utility functions for building Hotmart checkout URLs with UTM parameters
 */

interface HotmartUrlParams {
  baseUrl: string;
  email?: string;
  additionalParams?: Record<string, string>;
}

/**
 * Retrieves UTM parameters from localStorage (first touch) and current URL (last touch)
 */
const getUtmParams = (): Record<string, string> => {
  const utmParams: Record<string, string> = {};
  
  // Get first touch UTMs from localStorage
  const firstTouchSource = localStorage.getItem('_first_touch_source');
  const firstTouchMedium = localStorage.getItem('_first_touch_medium');
  const firstTouchCampaign = localStorage.getItem('_first_touch_campaign');
  const firstTouchTerm = localStorage.getItem('_first_touch_term');
  const firstTouchContent = localStorage.getItem('_first_touch_content');
  
  // Get last touch UTMs from current URL
  const urlParams = new URLSearchParams(window.location.search);
  
  // Priority: Last touch (current URL) > First touch (localStorage)
  // This way we can see the most recent touchpoint while preserving original attribution
  
  // Use first touch as base (original attribution)
  if (firstTouchSource) utmParams.utm_source = firstTouchSource;
  if (firstTouchMedium) utmParams.utm_medium = firstTouchMedium;
  if (firstTouchCampaign) utmParams.utm_campaign = firstTouchCampaign;
  if (firstTouchTerm) utmParams.utm_term = firstTouchTerm;
  if (firstTouchContent) utmParams.utm_content = firstTouchContent;
  
  // Override with last touch if available (most recent interaction)
  const lastTouchSource = urlParams.get('utm_source');
  const lastTouchMedium = urlParams.get('utm_medium');
  const lastTouchCampaign = urlParams.get('utm_campaign');
  const lastTouchTerm = urlParams.get('utm_term');
  const lastTouchContent = urlParams.get('utm_content');
  
  if (lastTouchSource) utmParams.utm_source = lastTouchSource;
  if (lastTouchMedium) utmParams.utm_medium = lastTouchMedium;
  if (lastTouchCampaign) utmParams.utm_campaign = lastTouchCampaign;
  if (lastTouchTerm) utmParams.utm_term = lastTouchTerm;
  if (lastTouchContent) utmParams.utm_content = lastTouchContent;
  
  return utmParams;
};

/**
 * Builds a Hotmart checkout URL with UTM parameters and additional params
 * 
 * @param baseUrl - The base Hotmart checkout URL (e.g., 'https://pay.hotmart.com/L94763179U')
 * @param email - Optional email to pre-fill in checkout
 * @param additionalParams - Optional additional parameters to append to URL
 * @returns Complete checkout URL with all parameters
 * 
 * @example
 * // Basic usage
 * const url = buildHotmartCheckoutUrl({ 
 *   baseUrl: 'https://pay.hotmart.com/L94763179U' 
 * });
 * 
 * @example
 * // With email and additional params
 * const url = buildHotmartCheckoutUrl({ 
 *   baseUrl: 'https://pay.hotmart.com/L94763179U',
 *   email: 'user@example.com',
 *   additionalParams: { off: 'black-friday-2024' }
 * });
 */
export const buildHotmartCheckoutUrl = ({ 
  baseUrl, 
  email, 
  additionalParams = {} 
}: HotmartUrlParams): string => {
  // Get UTM parameters
  const utmParams = getUtmParams();
  
  // Combine all parameters
  const allParams: Record<string, string> = {
    ...utmParams,
    ...additionalParams
  };
  
  // Add email if provided
  if (email) {
    allParams.email = email;
  }
  
  // Build URL
  const url = new URL(baseUrl);
  
  // Append all parameters
  Object.entries(allParams).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(key, value);
    }
  });
  
  return url.toString();
};
