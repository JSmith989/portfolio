import AboutPage from '../about/AboutPage';
import BlogPage from '../blog/BlogPage';
import ProjectsPage from '../projects/ProjectsPage';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <AboutPage />

      <ProjectsPage />

      <BlogPage />
    </div>
  );
}
