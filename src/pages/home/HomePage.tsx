import AboutPage from '../about/AboutPage';
import BlogPage from '../blog/BlogPage';
import Footer from '../footer/Footer';
import ProjectsPage from '../projects/ProjectsPage';
import SkillsPage from '../skills/SkillsPage';

export default function HomePage() {
  return (
    <div>
      <div className='flex flex-col min-h-screen space-y-16 divide-y divide-primary'>
        <AboutPage />

        <SkillsPage />

        <ProjectsPage />

        <BlogPage />
      </div>
      <Footer />
    </div>
  );
}
