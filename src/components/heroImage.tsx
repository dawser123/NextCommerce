import Image from "next/image";
import hero from "../../public/hero.jpg";

const HeroImage = () => {
  return (
    
    <Image
      src={hero}
      className="h-full brightness-50 w-full object-cover"
      alt="hero image "
      priority
      fill
      quality={100}
      placeholder="blur"
    />

  );
};

export default HeroImage;
