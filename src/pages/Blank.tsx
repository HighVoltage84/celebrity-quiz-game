const Blank = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-100 via-purple-200/50 to-blue-100">
      {/* Purple glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-600 tracking-tight">
          The Fame Game Quiz
        </h1>
        
        <div className="flex justify-center">
          <div className="w-40 h-48 bg-white/80 rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
            <img
              src="/lovable-uploads/fd33ab36-81ab-4d53-8ab9-80ee9e9b848b.png"
              alt="Question mark symbol for The Fame Game Quiz"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            🌟 Think You Know Your Celebs? 🎬
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Put your star knowledge to the test in the ultimate celebrity trivia game. Quick rounds, endless fun!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blank;
