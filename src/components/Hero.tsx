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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white" />
      
      <div className="relative z-10 text-center px-4 animate-fade-in max-w-4xl mx-auto" style={{ marginTop: '-10vh' }}>
        <Heart className="w-12 h-12 mx-auto mb-8 text-white animate-scale-in drop-shadow-2xl" />
        
        <h1 className="font-script text-4xl md:text-6xl mb-8 text-white drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          Bem-vindos ao Chá de Panela
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="font-script text-3xl md:text-5xl text-white drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Heloisa</span>
          <Heart className="w-6 h-6 fill-white text-white drop-shadow-2xl" />
          <span className="font-script text-3xl md:text-5xl text-white drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Rodrigo</span>
        </div>
        
        <p className="text-base md:text-lg text-white drop-shadow-2xl max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>
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
