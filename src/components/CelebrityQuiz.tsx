import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import jenniferLopezImage from '/lovable-uploads/cb29c508-78d8-483b-a1eb-df4f2855677c.png';

const CelebrityQuiz = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if Tom Cruise has already been shown - if so, redirect immediately
    const hasShownTomCruise = localStorage.getItem('celebrityQuizTomCruiseShown') === 'true';
    if (hasShownTomCruise) {
      navigate('/tom-cruise', { replace: true });
      return;
    }

    // Start 25-second timer to navigate to Tom Cruise page
    const timer = setTimeout(() => {
      localStorage.setItem('celebrityQuizTomCruiseShown', 'true');
      navigate('/tom-cruise', { replace: true });
    }, 25000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleQuizClick = () => {
    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 10) {
      // 10 taps detected - reset everything
      setClickCount(0);
      localStorage.removeItem('celebrityQuizTomCruiseShown');
      return;
    }

    // Reset click count after 500ms if not triple clicked
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 500);
    
    setClickTimer(timer);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="quiz-card max-w-md w-full p-8 text-center space-y-6 border-2 border-primary/20 rounded-2xl">
        <div className="space-y-2">
          <h1 className="quiz-title text-4xl font-bold tracking-tight">
            Celebrity Qui<span onClick={handleQuizClick} className="cursor-pointer">z</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            The answer is:
          </p>
        </div>

        <div className="relative">
          <img
            src={jenniferLopezImage}
            alt="Celebrity: Jennifer Lopez"
            className="celebrity-image w-48 h-48 object-cover rounded-full mx-auto border-4 border-primary/30 translate-x-2"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Jennifer Lopez
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default CelebrityQuiz;