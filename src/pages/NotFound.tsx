import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200/50 to-blue-100">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-600 tracking-tight">
          Invalid Quiz
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
