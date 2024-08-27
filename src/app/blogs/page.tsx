import Blogs from '@/components/Blogs/Blogs';
import BlogProvider from '@/lib/providers/BlogProvider';

export default function Home() {
  return (
    <main className='flex justify-center mb-20'>
      <BlogProvider>
        <Blogs />
      </BlogProvider>
    </main>
  );
}
