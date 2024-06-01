import Accounts from "./components/Accounts";
import Blog from "./components/Blog";
import Download from "./components/Download";
import FeaturesPage from "./components/FeaturesPage";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Integrations from "./components/Integrations";
import MobileAppFeature from "./components/MobileAppFeature";
import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications";
import SavingAccounts from "./components/SavingAccounts";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <div className="h-screen">
        <Navbar />
        <FrontPage />
      </div>
      <div className="container mx-auto">
        <FeaturesPage />
      </div>

      <MobileAppFeature />
      <div className="container mx-auto">
        <SavingAccounts />
        <Notifications />
        <Integrations />
      </div>

      <div className="mt-40 mb-40">
        <hr />
      </div>

      <Accounts />

      <div className="container mx-auto">
        <Testimonials />
        <Download />
      </div>
      <hr />
      <div className="container mx-auto">
        <Blog />
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
