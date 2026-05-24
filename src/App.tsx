import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Services from './Services';
import About from './About';
import ContactModal from './ContactModal';
import Contact from './Contact';

function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="home" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-32 py-16 pt-32">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
          Need Lawn Mowing This Spring?
        </h1>
        <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl">
          We provide top quality lawn care in the Kerrville and Ingram area.
        </p>
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="group flex items-center gap-2 px-12 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-black"
        >
          GET A QUOTE
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Hero Image */}
        <div className="w-full mt-16 rounded-lg overflow-hidden">
          <img
            src="/Hero_Page_Image.jpg"
            alt="Professional lawn mowing service"
            className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Complete Lawn Mowing Bundle Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
              Complete Lawn Mowing Bundle
            </h2>
            <p className="text-lg md:text-xl text-[#4a4a4a] mb-12 leading-relaxed">
              Our lawn bundle includes mowing, weed eating, and cleanup. We're only satisfied if you're satisfied.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group flex items-center gap-2 px-12 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-black"
            >
              GET A QUOTE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Equipment Image */}
          <div className="flex-1 w-full">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <img
                src="/lawn_tools_under_2mb.jpg"
                alt="Lawn mowing equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Premium Quality & Reliability */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8">
              Premium Quality
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              Every lawn receives meticulous attention to detail. We don't just mow, we perfect your outdoor space with professional precision.
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8">
              100% Reliable
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-12">
              We show up when we say we will, every single time. Your schedule matters, and we respect your time with dependable service.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group flex items-center gap-2 px-12 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-black"
            >
              VIEW AVAILABILITY
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* All Season Lawn Care Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center px-8 md:px-16 lg:px-32 py-16 gap-16">
        {/* Seasonal Work Image */}
        <div className="flex-1 w-full">
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <img
              src="/leaf_blower.png"
              alt="All season lawn care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            All Season Lawn Care
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] mb-12 leading-relaxed">
            No matter the time of year, we've got you covered when it comes to lawn mowing in the Texas Hill Country
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="group flex items-center gap-2 px-12 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-black"
          >
            GET A QUOTE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8">
              Residential Mowing
            </h2>
            <p className="text-lg text-[#4a4a4a] mb-8 leading-relaxed">
              Professional lawn mowing for your home with attention to edges, patterns, and overall presentation.
            </p>
            <ul className="space-y-3 text-[#4a4a4a]">
              <li>✶Weekly or bi-weekly schedules</li>
              <li>✶Precise edging and trimming</li>
              <li>✶Grass clipping cleanup</li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8">
              Commercial Properties
            </h2>
            <p className="text-lg text-[#4a4a4a] mb-8 leading-relaxed">
              Keep your business looking professional with our reliable commercial lawn care services.
            </p>
            <ul className="space-y-3 text-[#4a4a4a]">
              <li>✶Flexible scheduling</li>
              <li>✶Large property expertise</li>
              <li>✶Professional appearance guaranteed</li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-2 px-12 py-5 border-2 border-[#d0cdc5] rounded-full text-xs tracking-[0.2em] hover:bg-[#e8e5dd] transition-colors text-black"
          >
            GET A FREE PERSONALIZED QUOTE FOR YOUR YARD TODAY
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <>
      <Header onNavigate={() => {}} currentPage="services" onOpenContact={() => setIsContactModalOpen(true)} />
      <Services onOpenContact={() => setIsContactModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}

function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <>
      <Header onNavigate={() => {}} currentPage="about" onOpenContact={() => setIsContactModalOpen(true)} />
      <About onOpenContact={() => setIsContactModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<Contact onNavigate={() => {}} onOpenContact={() => {}} />} />
    </Routes>
  );
}

export default App;
