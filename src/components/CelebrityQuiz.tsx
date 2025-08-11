import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import jenniferLopezImage from '/lovable-uploads/9fd772e1-4349-4463-bb85-53bbfc96f3f7.png';
import tomCruiseImage from '/lovable-uploads/84b4a176-974f-4446-9827-96eaf90a7d30.png';

const CelebrityQuiz = () => {
  const [currentCelebrity, setCurrentCelebrity] = useState<'jenniferlopez' | 'tomcruise'>(() => {
    const storedStatus = localStorage.getItem('celebrityQuizTomCruiseShown');
    return storedStatus === 'true' ? 'tomcruise' : 'jenniferlopez';
  });
  const [hasShownTomCruise, setHasShownTomCruise] = useState(() => {
    return localStorage.getItem('celebrityQuizTomCruiseShown') === 'true';
  });
  const [clickCount, setClickCount] = useState(0);
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only start timer if Tom Cruise hasn't been shown yet
    if (hasShownTomCruise) {
      return;
    }

    // Start 10-second timer to switch to Tom Cruise
    const timer = setTimeout(() => {
      setCurrentCelebrity('tomcruise');
      setHasShownTomCruise(true);
      localStorage.setItem('celebrityQuizTomCruiseShown', 'true');
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasShownTomCruise]);

  const getCurrentImage = () => {
    return currentCelebrity === 'jenniferlopez' ? jenniferLopezImage : tomCruiseImage;
  };

  const getCurrentName = () => {
    return currentCelebrity === 'jenniferlopez' ? 'Jennifer Lopez' : 'Tom Cruise';
  };

  const handleQuizClick = () => {
    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 3) {
      // Triple click detected - reset everything
      setCurrentCelebrity('jenniferlopez');
      setHasShownTomCruise(false);
      setClickCount(0);
      localStorage.removeItem('celebrityQuizTomCruiseShown');
      
      // Start new 10-second timer
      const timer = setTimeout(() => {
        setCurrentCelebrity('tomcruise');
        setHasShownTomCruise(true);
        localStorage.setItem('celebrityQuizTomCruiseShown', 'true');
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