import { Heart } from "lucide-react";
import couplePhoto from "@/assets/couple-photo-1.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${couplePhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/95" />
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <Heart className="w-16 h-16 mx-auto mb-6 text-white animate-scale-in drop-shadow-lg" />
        
        <h1 className="font-script text-5xl md:text-7xl mb-6 text-white drop-shadow-lg">
          Bem-vindos ao Chá de Panela
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="font-script text-4xl md:text-5xl text-white drop-shadow-lg">Heloisa</span>
          <Heart className="w-8 h-8 fill-white text-white drop-shadow-lg" />
          <span className="font-script text-4xl md:text-5xl text-white drop-shadow-lg">Rodrigo</span>
        </div>
        
        <p className="text-lg md:text-xl text-white drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
          Estamos muito felizes em compartilhar esse momento especial com vocês! 
          Confira nossa lista de presentes e nos ajude a começar nossa jornada juntos 💕
        </p>
      </div>
      
      {/* Wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
