import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fab917b8c85f4b8db825b1e5bc6fb1e&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <img 
          src={heroImage} 
          alt="Modern architectural interior design" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/50"></div>
      </div>
      
      {/* Year and Location - Top Right */}
      <div className="absolute top-12 right-12 text-right text-xs text-muted-foreground font-light tracking-widest">
        <div>2024 București, România</div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full px-12">
        <div className="max-w-4xl">
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-light leading-[0.8] text-foreground tracking-widest mb-16">
            DESIGN
            <br />
            INTERIOR
          </h1>
        </div>
      </div>
      
      {/* Bottom Info */}
      <div className="absolute bottom-12 left-12 text-xs text-muted-foreground font-light tracking-widest">
        <div className="mb-2">Elena Popescu</div>
        <div>Architect & Interior Designer</div>
      </div>
    </section>
  );
};

export default Hero;