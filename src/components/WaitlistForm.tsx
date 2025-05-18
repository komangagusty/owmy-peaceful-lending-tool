
import React from 'react';
import { TrackingButton } from "@/components/ui/tracking-button";
import { useTranslation } from '../context/TranslationContext';

const WaitlistForm = () => {
  const { t } = useTranslation();
  
  const handleClick = () => {
    window.open(t.common.tallyFormUrl, '_blank');
  };

  return (
    <div className="flex w-full">
      <TrackingButton 
        id="homepage_join_waitlist" 
        additionalData={{ 
          location: "homepage",
          user_type: "visitor",
          tally_url: t.common.tallyFormUrl,
        }}
        onClick={handleClick}
        className="bg-owwy-primary hover:bg-owwy-dark text-white w-full sm:w-auto"
      >
        {t.common.joinWaitlist}
      </TrackingButton>
    </div>
  );
};

export default WaitlistForm;
