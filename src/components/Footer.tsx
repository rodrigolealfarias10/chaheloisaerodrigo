import footerImage from "@/assets/couple-photo-footer.jpg";

const Footer = () => {
  return (
    <footer className="relative w-full py-20 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${footerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />
      <div className="relative z-10 text-center px-4">
        <p className="font-script text-4xl md:text-6xl text-foreground mb-2 drop-shadow-lg">
          Com amor,
        </p>
        <p className="font-script text-5xl md:text-7xl text-foreground drop-shadow-lg">
          Heloisa & Rodrigo 💕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
