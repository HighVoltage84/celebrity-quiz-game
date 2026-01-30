import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Index from "./pages/Index";
import TomCruise from "./pages/TomCruise";
import JenniferAniston from "./pages/JenniferAniston";
import JohnCena from "./pages/JohnCena";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blank />} />
          <Route path="/TC6KI3x" element={<Index />} />
          <Route path="/TC6Kl3x" element={<TomCruise />} />
          <Route path="/JC2MI3g" element={<JenniferAniston />} />
          <Route path="/JC2Ml3g" element={<JohnCena />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
