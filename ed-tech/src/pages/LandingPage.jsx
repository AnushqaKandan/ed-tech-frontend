import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import RoleSelection from '../components/landing/RoleSelection';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <header className="bg-white shadow-sm">
        <Navbar />
      </header> */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <RoleSelection />
      </main>

      <footer className="bg-white mt-12 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-700">
          <p className="text-xs">&copy; {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;