/**
 * Custom analytics hooks and utilities
 */

/**
 * Track a page view in Google Analytics
 * @param {string} url - The URL to track
 */
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-2JJFX16V47', {
      page_path: url,
    });
  }
};

/**
 * Track a checkout event
 * @param {number} value - The value of the checkout
 */
export const trackCheckout = (value = 99) => {
  if (typeof window !== 'undefined') {
    // Push to dataLayer for GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'begin_checkout',
        'value': value,
        'currency': 'USD',
        'items': [{
          'item_name': 'Self Cast Content Package',
          'price': value,
          'item_id': 'selfcast-content-package'
        }]
      });
    }
    
    // Direct GA4 event
    if (window.gtag) {
      window.gtag('event', 'begin_checkout', {
        currency: 'USD',
        value: value,
        items: [{
          item_name: 'Self Cast Content Package',
          price: value,
          item_id: 'selfcast-content-package'
        }]
      });
    }
  }
};

/**
 * Track a purchase event
 * @param {string} transactionId - The transaction ID
 * @param {number} value - The value of the purchase
 */
export const trackPurchase = (transactionId, value = 99) => {
  if (typeof window !== 'undefined') {
    // Push to dataLayer for GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'purchase',
        'ecommerce': {
          'transaction_id': transactionId,
          'value': value,
          'currency': 'USD',
          'items': [{
            'item_name': 'Self Cast Content Package',
            'price': value,
            'item_id': 'selfcast-content-package'
          }]
        }
      });
    }
    
    // Direct GA4 event
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        currency: 'USD',
        value: value,
        items: [{
          item_name: 'Self Cast Content Package',
          price: value,
          item_id: 'selfcast-content-package'
        }]
      });
    }
  }
};

/**
 * Custom hook for analytics
 * @returns {Object} Analytics functions
 */
export const useAnalytics = () => {
  return {
    trackPageView,
    trackCheckout,
    trackPurchase
  };
};
