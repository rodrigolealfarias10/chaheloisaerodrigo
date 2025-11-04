import { Heart } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/85" />
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <Heart className="w-16 h-16 mx-auto mb-6 text-primary animate-scale-in" />
        
        <h1 className="font-script text-5xl md:text-7xl mb-6 text-foreground">
          Bem-vindos ao Chá de Panela
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="font-script text-4xl md:text-5xl text-foreground">Heloisa</span>
          <Heart className="w-8 h-8 fill-primary text-primary" />
          <span className="font-script text-4xl md:text-5xl text-foreground">Rodrigo</span>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Estamos muito felizes em compartilhar esse momento especial com vocês! 
          Confira nossa lista de presentes e nos ajude a começar nossa jornada juntos 💕
        </p>
      </div>
    </section>
  );
};

export default Hero;
