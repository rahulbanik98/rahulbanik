import React, { Suspense } from "react";

// Eager load critical components
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SpinnerXlBasicHalf from "./components/loader/SpinnerXlBasicHalf";

// Lazy load non-critical components
const LazySubHeroMain = React.lazy(
  () => import("./components/subHeroSection/SubHeroMain"),
);
const LazyAboutMeMain = React.lazy(
  () => import("./components/aboutMeSection/AboutMeMain"),
);
const LazySkillsMain = React.lazy(
  () => import("./components/skillsSection/SkillsMain"),
);
const LazySubSkills = React.lazy(
  () => import("./components/skillsSection/SubSkills"),
);
const LazyExperienceMain = React.lazy(
  () => import("./components/experienceSection/ExperienceMain"),
);
const LazyProjectsMain = React.lazy(
  () => import("./components/projectsSection/ProjectsMain"),
);
const LazyContactMeMain = React.lazy(
  () => import("./components/contactMeSection/ContactMeMain"),
);
const LazyFooterMain = React.lazy(
  () => import("./components/footer/FooterMain"),
);

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      {/* Eager loaded components */}
      <NavbarMain />
      <HeroMain />
      <HeroGradient />

      {/* Lazy loaded sections with separate Suspense blocks */}
      <Suspense fallback={<SpinnerXlBasicHalf />}>
        <LazySubHeroMain />
        <LazyAboutMeMain />
      </Suspense>

      <Suspense fallback={<SpinnerXlBasicHalf />}>
        <LazySkillsMain />
        <LazySubSkills />
      </Suspense>

      <Suspense fallback={<SpinnerXlBasicHalf />}>
        <LazyExperienceMain />
      </Suspense>

      <Suspense
        fallback={
          <div>
            <SpinnerXlBasicHalf />
          </div>
        }
      >
        <LazyProjectsMain />
      </Suspense>

      <Suspense
        fallback={
          <div>
            <SpinnerXlBasicHalf />
          </div>
        }
      >
        <LazyContactMeMain />
      </Suspense>

      <Suspense
        fallback={
          <div>
            <SpinnerXlBasicHalf />
          </div>
        }
      >
        <LazyFooterMain />
      </Suspense>
    </main>
  );
}

export default App;
