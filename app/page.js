import Hero from '../components/Hero';
import ProductIntro from '../components/ProductIntro';
import FruitOneFrames from '../components/FruitOneFrames';
import GalleryShowcase from '../components/GalleryShowcase';
import FruitTwoTees from '../components/FruitTwoTees';
import Lookbook from '../components/Lookbook';
import FruitThreeStickers from '../components/FruitThreeStickers';
import OurProcess from '../components/OurProcess';
import ScopeOfWork from '../components/ScopeOfWork';
import MoodBoardProducts from '../components/MoodBoardProducts';
import MixedReality from '../components/MixedReality';
import TeamSection from '../components/TeamSection';
import ContactFooter from '../components/ContactFooter';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductIntro />
        <FruitOneFrames />
        <GalleryShowcase />
        <FruitTwoTees />
        <Lookbook />
        <FruitThreeStickers />
        <OurProcess />
        <ScopeOfWork />
        <MoodBoardProducts />
        <MixedReality />
        <TeamSection />
        <ContactFooter />
      </main>
    </>
  );
}
