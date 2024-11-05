import { BackgroundBeams } from "../components/ui/BackgroundBeam"
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation"
// import { FloatingDock } from "../components/ui/FloatingDock";
import { FloatingDock } from "../components/ui/floating-navbar"
import { links, navItems } from "../../components/store/data";
import { BentoGridThirdDemo } from "../components/Grid";
import { motion } from "framer-motion";
import { HeroText } from "../components/Hero";
// import { Usetheme } from "../../../components/store/store";
export function LandingPage() {

  return (
    <>
      <div className="relative">
        <FloatingDock navItems={navItems} />
        <main role="main" className="h-screen hero-section bg-opacity-[0.9]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-4 ">
          <BackgroundGradientAnimation className="dark:bg-black bg-gray-50 h-full backdrop-filter backdrop-blur-lg bg-opacity-[100] " >
            {/* available for collaboration */}
            <HeroText />
          </BackgroundGradientAnimation>
          <section className="my-10 dark:bg-black bg-white">
            <BentoGridThirdDemo className="my-4" />

          </section>

        </main>
      </div>
      {/* nav */}

    </>
  );
}
