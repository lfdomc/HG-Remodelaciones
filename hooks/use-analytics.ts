import { useCallback } from 'react'

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export function useAnalytics() {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      })
    }

    // Console log para desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event)
    }

    // Aquí puedes agregar otros servicios de analytics como:
    // - Facebook Pixel
    // - Hotjar
    // - Mixpanel
    // - Custom analytics
  }, [])

  const trackFormSubmission = useCallback((formType: 'contact' | 'quote', success: boolean) => {
    trackEvent({
      action: success ? 'form_submit_success' : 'form_submit_error',
      category: 'forms',
      label: formType,
      value: success ? 1 : 0,
    })
  }, [trackEvent])

  const trackPageView = useCallback((page: string) => {
    trackEvent({
      action: 'page_view',
      category: 'navigation',
      label: page,
    })
  }, [trackEvent])

  const trackButtonClick = useCallback((buttonName: string, location: string) => {
    trackEvent({
      action: 'button_click',
      category: 'engagement',
      label: `${buttonName}_${location}`,
    })
  }, [trackEvent])

  const trackWhatsAppClick = useCallback(() => {
    trackEvent({
      action: 'whatsapp_click',
      category: 'contact',
      label: 'floating_button',
    })
  }, [trackEvent])

  return {
    trackEvent,
    trackFormSubmission,
    trackPageView,
    trackButtonClick,
    trackWhatsAppClick,
  }
}