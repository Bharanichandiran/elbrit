import HeaderSection from '@/components/header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import IngredientSection from '@/components/IngredientSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <HeaderSection/>
      <HeroSection />
      <FeatureSection />
      <IngredientSection />
      <Footer />
    </div>
  );
}
