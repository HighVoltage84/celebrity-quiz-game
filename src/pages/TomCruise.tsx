import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import tomCruiseImage from '/lovable-uploads/84b4a176-974f-4446-9827-96eaf90a7d30.png';

const TomCruise = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null);

  const handleQuizClick = () => {
    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 10) {
      // 10 taps detected - reset and go back to Jennifer Lopez
      setClickCount(0);
      localStorage.removeItem('celebrityQuizTomCruiseShown');
      navigate('/', { replace: true });
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
            src={tomCruiseImage}
            alt="Celebrity: Tom Cruise"
            className="celebrity-image w-48 h-48 object-cover rounded-full mx-auto border-4 border-primary/30"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Tom Cruise
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default TomCruise;
