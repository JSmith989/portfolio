import AboutPage from '../about/AboutPage';
import BlogPage from '../blog/BlogPage';
import Footer from '../footer/Footer';
import ExperiencePage from '../experience/ExperiencePage';
import SkillsPage from '../skills/SkillsPage';

export default function HomePage() {
  return (
    <div>
      <div className='flex flex-col min-h-screen space-y-16 divide-y divide-primary'>
        <AboutPage />

        <SkillsPage />

        <ExperiencePage />

        <BlogPage />
      </div>
      <Footer />
    </div>
  );
}
