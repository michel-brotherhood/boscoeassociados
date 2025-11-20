import { useEffect, useState } from "react";
import logo from "@/assets/logo-bosco-icon.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(onComplete, 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative">
        <img
          src={logo}
          alt="Bosco & Associados"
          className="w-32 h-32 md:w-40 md:h-40 animate-[spin_2s_ease-in-out]"
          style={{
            filter: "drop-shadow(0 0 20px rgba(193, 39, 45, 0.5))",
          }}
        />
        <div className="absolute inset-0 animate-pulse">
          <div className="w-full h-full rounded-full bg-primary/20 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
