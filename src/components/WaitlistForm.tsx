
import React from 'react';
import { Button } from "@/components/ui/button";
import { useTranslation } from '../context/TranslationContext';

const WaitlistForm = () => {
  const { t } = useTranslation();
  
  const handleClick = () => {
    window.open(t.common.tallyFormUrl, '_blank');
  };

  return (
    <div className="flex w-full">
      <Button 
        onClick={handleClick}
        className="bg-owwy-primary hover:bg-owwy-dark text-white w-full sm:w-auto"
      >
        {t.common.joinWaitlist}
      </Button>
    </div>
  );
};

export default WaitlistForm;
