import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import ryanReynoldsImage from '@/assets/ryan-reynolds.png';
import zendayaImage from '/lovable-uploads/f7453851-de2e-4427-86b8-ba637d4b60c8.png';

const CelebrityQuiz = () => {
  const [currentCelebrity, setCurrentCelebrity] = useState<'ryanreynolds' | 'zendaya'>(() => {
    const storedStatus = localStorage.getItem('celebrityQuizZendayaShown');
    return storedStatus === 'true' ? 'zendaya' : 'ryanreynolds';
  });
  const [hasShownZendaya, setHasShownZendaya] = useState(() => {
    return localStorage.getItem('celebrityQuizZendayaShown') === 'true';
  });
  const [clickCount, setClickCount] = useState(0);
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only start timer if Zendaya hasn't been shown yet
    if (hasShownZendaya) {
      return;
    }

    // Start 10-second timer to switch to Zendaya
    const timer = setTimeout(() => {
      setCurrentCelebrity('zendaya');
      setHasShownZendaya(true);
      localStorage.setItem('celebrityQuizZendayaShown', 'true');
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasShownZendaya]);

  const getCurrentImage = () => {
    return currentCelebrity === 'ryanreynolds' ? ryanReynoldsImage : zendayaImage;
  };

  const getCurrentName = () => {
    return currentCelebrity === 'ryanreynolds' ? 'Ryan Reynolds' : 'Zendaya';
  };

  const handleQuizClick = () => {
    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 3) {
      // Triple click detected - reset everything
      setCurrentCelebrity('ryanreynolds');
      setHasShownZendaya(false);
      setClickCount(0);
      localStorage.removeItem('celebrityQuizZendayaShown');
      
      // Start new 10-second timer
      const timer = setTimeout(() => {
        setCurrentCelebrity('zendaya');
        setHasShownZendaya(true);
        localStorage.setItem('celebrityQuizZendayaShown', 'true');
      }, 10000);
      
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
            src={getCurrentImage()}
            alt={`Celebrity: ${getCurrentName()}`}
            className="celebrity-image w-48 h-48 object-cover rounded-full mx-auto border-4 border-primary/30"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            {getCurrentName()}
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default CelebrityQuiz;