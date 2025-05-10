
import React from 'react';
import { Button } from "@/components/ui/button";

const WaitlistForm = () => {
  const handleClick = () => {
    // Open the Tally.so form in a new tab
    window.open('https://tally.so/r/wzO2EM', '_blank');
  };

  return (
    <div className="flex w-full">
      <Button 
        onClick={handleClick}
        className="bg-owwy-primary hover:bg-owwy-dark text-white w-full sm:w-auto"
      >
        Join Waitlist
      </Button>
    </div>
  );
};

export default WaitlistForm;
