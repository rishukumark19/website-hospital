import React from 'react';
import { View } from '../types';
import { 
  Award, 
  ShieldCheck, 
  Users, 
  Target, 
  CheckCircle, 
  Globe, 
  Microscope,
  Quote,
  Stethoscope
} from 'lucide-react';

interface AboutUsProps {
  onNavigate?: (view: View) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About Avishkar Diagnostic</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            Pioneering diagnostic excellence in Dhanbad with cutting-edge technology and a patient-first approach.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <div className="inline-block px-3 py-1 bg-green-100 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                 Our Story
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                 Precision in Every Result,<br />
                 <span className="text-secondary">Care in Every Touch.</span>
               </h2>
               <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                 <p>
                   Founded with a vision to make world-class diagnostics accessible to everyone in Jharkhand, Avishkar Diagnostic Centre has grown to become the most trusted name in Bank More, Dhanbad.
                 </p>
                 <p>
                   We believe that accurate diagnosis is the first step towards a cure. That's why we invest heavily in the latest technology and follow stringent quality control measures to ensure that every report we generate is 100% reliable.
                 </p>
               </div>
               
               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <Target className="h-8 w-8 text-secondary mb-3" />
                    <h3 className="font-bold text-primary text-lg mb-2">Our Mission</h3>
                    <p className="text-sm text-gray-600">To provide accurate, timely, and affordable diagnostic services to all segments of society.</p>
                 </div>
                 <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                    <Globe className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-bold text-primary text-lg mb-2">Our Vision</h3>
                    <p className="text-sm text-gray-600">To be the most trusted leader in diagnostic healthcare and research in the region.</p>
                 </div>
               </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
                alt="Avishkar Diagnostic Lab Equipment" 
                className="relative rounded-3xl shadow-xl w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden lg:block">
                 <p className="text-4xl font-bold text-primary mb-2">15+</p>
                 <p className="text-gray-500 font-medium">Years of Excellence in Dhanbad Healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Feature Image Break (NEW) */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
             <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=2070" 
                    alt="Professional Indian Female Doctor in Avishkar clinic" 
                    className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-10">
                    <div className="text-white px-4">
                        <p className="text-2xl font-bold mb-2">Empowering Health with Compassion</p>
                        <p className="opacity-90 max-w-lg mx-auto">Our team of dedicated professionals works round the clock to ensure you get the best care.</p>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* 3. Accreditations & Quality (PREMIUM CREDIBILITY) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Accreditations & Quality</h2>
            <p className="text-gray-600 text-lg">
              We adhere to the highest international standards of quality. Our labs are rigorously audited to ensure precision in every test.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NABL */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                 <Award className="h-8 w-8" />
               </div>
               <h3 className="text-xl font-bold text-primary mb-3">NABL Accredited</h3>
               <p className="text-gray-500 text-sm mb-4">
                 National Accreditation Board for Testing and Calibration Laboratories (ISO 15189:2012).
               </p>
               <div className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                 <CheckCircle className="h-3 w-3" /> Certified
               </div>
            </div>

            {/* CAP */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                 <ShieldCheck className="h-8 w-8" />
               </div>
               <h3 className="text-xl font-bold text-primary mb-3">CAP Certified</h3>
               <p className="text-gray-500 text-sm mb-4">
                 College of American Pathologists. The gold standard in laboratory accreditation globally.
               </p>
               <div className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                 <CheckCircle className="h-3 w-3" /> Certified
               </div>
            </div>

            {/* ISO */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                 <Microscope className="h-8 w-8" />
               </div>
               <h3 className="text-xl font-bold text-primary mb-3">ISO 9001:2015</h3>
               <p className="text-gray-500 text-sm mb-4">
                 Certified for Quality Management Systems ensuring consistent customer satisfaction.
               </p>
               <div className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                 <CheckCircle className="h-3 w-3" /> Certified
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership / Doctors (Feature 3) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Medical Leadership</h2>
                <p className="text-gray-600 max-w-xl">
                  Led by renowned pathologists and radiologists dedicated to clinical excellence.
                </p>
              </div>
              <button className="hidden md:block text-secondary font-bold hover:underline">
                View All Doctors
              </button>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Dr. Sarah Johnson', role: 'Chief Pathologist', qual: 'MBBS, MD (Pathology)', exp: '15 Years Exp.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800' },
                { name: 'Dr. Robert Chen', role: 'Head of Radiology', qual: 'MBBS, MD (Radio-Diagnosis)', exp: '12 Years Exp.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800' },
                { name: 'Dr. Emily Davis', role: 'Clinical Biochemist', qual: 'Ph.D. Biochemistry', exp: '8 Years Exp.', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800' },
                { name: 'Dr. Michael Wilson', role: 'Microbiologist', qual: 'M.Sc Medical Microbiology', exp: '10 Years Exp.', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800' },
              ].map((doc, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative overflow-hidden h-64">
                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-primary shadow-sm flex items-center gap-1">
                      <Award className="h-3 w-3 text-secondary" /> Certified
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-1">{doc.name}</h3>
                    <p className="text-secondary font-medium text-xs uppercase tracking-wide mb-3">{doc.role}</p>
                    <div className="space-y-1 text-sm text-gray-600">
                       <p className="flex items-center gap-2"><Stethoscope className="h-3 w-3" /> {doc.qual}</p>
                       <p className="flex items-center gap-2"><Award className="h-3 w-3" /> {doc.exp}</p>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. Patient Stories (NEW) */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Trusted by 10 Lakh+ Patients</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {[
                    { name: 'Priya Sharma', text: 'Excellent service and timely reports. The home collection was very convenient.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' },
                    { name: 'Amit Patel', text: 'Professional staff and clean environment. Highly recommended for full body checkups.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100' },
                    { name: 'Sneha Gupta', text: 'AvishkarBot helped me understand my test prep easily. Great technology!', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100' }
                ].map((testimonial, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 max-w-sm flex items-start gap-4">
                         <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                         <div>
                             <Quote className="h-4 w-4 text-secondary mb-1 opacity-50" />
                             <p className="text-sm text-gray-600 italic mb-2">"{testimonial.text}"</p>
                             <p className="text-primary font-bold text-sm">- {testimonial.name}</p>
                         </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. Key Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              <div>
                 <div className="text-4xl md:text-5xl font-bold mb-2">10L+</div>
                 <div className="text-green-200 text-sm uppercase tracking-wide">Reports Delivered</div>
              </div>
              <div>
                 <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                 <div className="text-green-200 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                 <div className="text-4xl md:text-5xl font-bold mb-2">4000+</div>
                 <div className="text-green-200 text-sm uppercase tracking-wide">Tests Menu</div>
              </div>
              <div>
                 <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                 <div className="text-green-200 text-sm uppercase tracking-wide">Support</div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
