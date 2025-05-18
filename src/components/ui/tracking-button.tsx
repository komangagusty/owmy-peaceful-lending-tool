import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";

interface TrackingButtonProps {
  id: string;
  children: React.ReactNode;
  additionalData?: Record<string, any>;
  [x: string]: any; // For other button props
}

export function TrackingButton({ 
  id, 
  children, 
  additionalData, 
  ...props 
}: TrackingButtonProps) {
  const { trackButtonClick } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the button click
    trackButtonClick(id, additionalData);
    
    // Call the original onClick if provided
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
}