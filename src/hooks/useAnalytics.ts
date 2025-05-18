import { useCallback } from "react";
import { trackEvent } from "@/lib/firebase";

export function useAnalytics() {
  const trackButtonClick = useCallback((buttonId: string, additionalParams?: Record<string, any>) => {
    trackEvent("button_click", {
      button_id: buttonId,
      ...additionalParams
    });
  }, []);

  const trackPageView = useCallback((pageName: string, pageParams?: Record<string, any>) => {
    trackEvent("page_view", {
      page_name: pageName,
      ...pageParams
    });
  }, []);

  const trackCustomEvent = useCallback((eventName: string, eventParams?: Record<string, any>) => {
    trackEvent(eventName, eventParams);
  }, []);

  return {
    trackButtonClick,
    trackPageView,
    trackCustomEvent
  };
}