import Hero from '../components/Hero';
import ProductIntro from '../components/ProductIntro';
import dynamic from 'next/dynamic';

const FruitOneFrames = dynamic(() => import('../components/FruitOneFrames'));
const GalleryShowcase = dynamic(() => import('../components/GalleryShowcase'));
const FruitTwoTees = dynamic(() => import('../components/FruitTwoTees'));
const Lookbook = dynamic(() => import('../components/Lookbook'));
const FruitThreeStickers = dynamic(() => import('../components/FruitThreeStickers'));
const OurProcess = dynamic(() => import('../components/OurProcess'));
const ScopeOfWork = dynamic(() => import('../components/ScopeOfWork'));
const MoodBoardProducts = dynamic(() => import('../components/MoodBoardProducts'));
const MixedReality = dynamic(() => import('../components/MixedReality'));
const TeamSection = dynamic(() => import('../components/TeamSection'));
const ContactFooter = dynamic(() => import('../components/ContactFooter'));

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
