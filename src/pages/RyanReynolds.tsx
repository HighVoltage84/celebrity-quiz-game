import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import ryanReynoldsImage from '@/assets/ryan-reynolds.png';

const RyanReynolds = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if Zendaya has already been shown - if so, redirect immediately
    const hasShownZendaya = localStorage.getItem('celebrityQuizZendayaShown') === 'true';
    if (hasShownZendaya) {
      navigate('/Z3U5Bl8t', { replace: true });
      return;
    }

    // Start 25-second timer to navigate to Zendaya page
    const timer = setTimeout(() => {
      localStorage.setItem('celebrityQuizZendayaShown', 'true');
      navigate('/Z3U5Bl8t', { replace: true });
    }, 25000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="quiz-card max-w-md w-full p-8 text-center space-y-6 border-2 border-primary/20 rounded-2xl">
        <div className="space-y-2">
          <h1 className="quiz-title text-4xl font-bold tracking-tight">
            Celebrity Quiz
          </h1>
          <p className="text-muted-foreground text-lg">
            The answer is:
          </p>
        </div>

        <div className="relative">
          <img
            src={ryanReynoldsImage}
            alt="Celebrity: Ryan Reynolds"
            className="celebrity-image w-48 h-48 object-cover rounded-full mx-auto border-4 border-primary/30"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ryan Reynolds
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default RyanReynolds;
