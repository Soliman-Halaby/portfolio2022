import { HeroSection, Paragraph } from "./style";

const Hero = (theme = "dark") => {
  return (
    <HeroSection className={`${theme}`}>
      <Paragraph>Coucou</Paragraph>
    </HeroSection>
  );
};

export default Hero;
