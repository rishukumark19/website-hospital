import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding Your Lipid Profile Report",
      excerpt: "Cholesterol isn't always bad. Learn about HDL, LDL, and triglycerides and what their levels mean for your heart health.",
      author: "Dr. Rajesh Kumar",
      date: "Oct 12, 2023",
      category: "Heart Health",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Why Preventive Health Checkups Matter",
      excerpt: "Regular screening can detect silent diseases like diabetes and hypertension years before they cause damage. Here is why you shouldn't skip them.",
      author: "Dr. Sarah Johnson",
      date: "Sep 28, 2023",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Preparing for a Fasting Blood Sugar Test",
      excerpt: "Did you know drinking tea or coffee can alter your fasting sugar results? Follow this guide to ensure 100% accuracy.",
      author: "Dr. Emily Davis",
      date: "Sep 15, 2023",
      category: "Patient Guide",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
             Wellness Watch
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Health Tips & Resources</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Expert advice from our medical team to help you live a healthier life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-primary shadow-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                   <div className="flex items-center gap-1">
                     <Calendar className="h-3 w-3" /> {post.date}
                   </div>
                   <div className="flex items-center gap-1">
                     <User className="h-3 w-3" /> {post.author}
                   </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <button className="text-secondary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
