import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFab from '../components/layout/WhatsAppFab';
import PageHero from '../components/common/PageHero';
import { blogs } from '../data/blogs';

export default function Blogs() {
  useEffect(() => { document.title = 'Spiritual Blogs — Amrit Chaya Foundation'; }, []);
  return (
    <>
      <Navbar ctaLabel="Read Blogs" ctaPath="/blogs" />
      <PageHero image="/images/blogs_hero_bg.png" title="Spiritual Blogs" subtitle="Wisdom & Stories of Ujjain" />
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.title} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <a href="#" className="blog-readmore">Read Full Article</a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
