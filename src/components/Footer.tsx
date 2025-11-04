import footerImage from "@/assets/couple-photo-footer.jpg";

const Footer = () => {
  return (
    <footer className="relative w-full py-20 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${footerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-center px-4">
        <p className="font-script text-3xl md:text-5xl text-foreground mb-4">
          Com amor,
        </p>
        <p className="font-script text-4xl md:text-6xl text-foreground">
          Heloisa & Rodrigo 💕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
