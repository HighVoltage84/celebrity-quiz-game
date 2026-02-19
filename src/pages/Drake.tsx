import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import drakeImage from '@/assets/drake.png';

const Drake = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if Taylor Swift has already been shown - if so, redirect immediately
    const hasShownTaylorSwift = localStorage.getItem('celebrityQuizTaylorSwiftShown') === 'true';
    if (hasShownTaylorSwift) {
      navigate('/TS7Uelc', { replace: true });
      return;
    }

    // Start 15-second timer to navigate to Taylor Swift page
    const timer = setTimeout(() => {
      localStorage.setItem('celebrityQuizTaylorSwiftShown', 'true');
      navigate('/TS7Uelc', { replace: true });
    }, 15000);

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
            src={drakeImage}
            alt="Celebrity: Drake"
            className="celebrity-image w-48 h-48 object-cover rounded-full mx-auto border-4 border-primary/30"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Drake
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default Drake;
