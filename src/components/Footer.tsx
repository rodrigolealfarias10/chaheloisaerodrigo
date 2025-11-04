import footerImage from "@/assets/couple-photo-footer.jpg";

const Footer = () => {
  return (
    <footer className="relative w-full py-24 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${footerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.7)',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4">
        <p className="font-cormorant text-2xl md:text-3xl font-light text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          Com amor,
        </p>
        <p className="font-cormorant text-4xl md:text-5xl font-normal text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          Heloisa & Rodrigo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
