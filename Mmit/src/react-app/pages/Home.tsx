
import Hero from '@/react-app/components/Hero';
import InstagramGrid from '@/react-app/components/InstagramGrid';
import CommunityAchievements from '@/react-app/components/CommunityAchievements';
import LocationFooter from '@/react-app/components/LocationFooter';
import Header from "@/react-app/components/Header";
import ThemeToggleFloating from "@/react-app/components/ThemeToggleFloating";
import SubHeader from "@/react-app/components/SubHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-all duration-500">
      <Header />
      <SubHeader />
      <Hero />
      <InstagramGrid />
      <CommunityAchievements />
      <LocationFooter />
      <ThemeToggleFloating />
    </div>
  );
}
