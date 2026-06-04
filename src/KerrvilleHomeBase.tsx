import { useState } from 'react';
import { ArrowRight, Check, Phone, MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

export default function KerrvilleHomeBasePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="areas" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">OUR HOME BASE · KERRVILLE, TEXAS</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight max-w-5xl">
            Lawn Care in Kerrville, TX
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            Kerrville is where we are rooted. Our shop is at 112 Holly Hill Dr -- we maintain properties across every neighborhood in the city, from the river corridor to the hilltop lots above town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group flex items-center justify-center gap-2 px-10 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#d8d5cd] transition-colors text-black bg-[#f5f1e8]"
            >
              GET A FREE QUOTE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+18303830189"
              className="group flex items-center justify-center gap-2 px-10 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#d8d5cd] transition-colors text-black"
            >
              <Phone className="w-4 h-4" />
              CALL (830) 383-0189
            </a>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-8 md:px-16 lg:px-32 py-12 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-80 md:h-[480px] rounded-lg overflow-hidden">
            <img
              src="/kerrville_slightly_lighter.jpg"
              alt="Lawn care service in Kerrville Texas near the Guadalupe River"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Kerrville */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHERE WE WORK EVERY WEEK</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Every Kerrville Neighborhood, Every Season
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                Kerrville is where we are rooted -- literally. Our shop is at 112 Holly Hill Dr, which means we are familiar with every part of the city: the established neighborhoods east of downtown near Tivy High School, the river-adjacent properties along the Guadalupe, the hillside homes above town with their sloped, rocky lots, and the newer subdivisions developing on the city's edges.
              </p>
              <p>
                Kerrville lawns face the full range of Hill Country challenges -- alkaline, rocky soil, summer heat that punishes grass not adapted to it, and winter freezes that can set back warm-season turf. We understand all of it from working here every week of the growing season.
              </p>
              <p>
                Downtown Kerrville homeowners along streets like Water Street and Earl Garrett often have established older landscape beds and mature trees that need careful, experienced attention. Properties in East Kerrville near Louise Hays Park frequently deal with the erosion and drainage challenges that come with river-adjacent terrain. Homes on the ridgelines above Tivy High School have the thin, rocky soil over caliche that is almost universal at elevation in Kerr County. We maintain properties in all of these contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHAT WE DO IN KERRVILLE</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Services We Provide in Kerrville
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  'Lawn mowing bundle -- weekly and bi-weekly schedules across all Kerrville neighborhoods',
                  'Full lawn care and maintenance programs including fertilization and weed control',
                  'Tree and hedge trimming for mature landscape plantings',
                  'Sod installation for new construction, renovations, and lawn makeovers',
                  'Mulch installation and landscape bed clearing and refresh',
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[#4a4a4a]">
                    <Check className="w-4 h-4 text-[#8a8a8a] flex-shrink-0 mt-1" />
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group flex items-center gap-2 px-8 py-3 border border-[#d0cdc5] rounded-full text-xs tracking-[0.25em] hover:bg-[#d8d5cd] transition-colors text-black bg-transparent"
              >
                GET A QUOTE FOR KERRVILLE
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Lawn Mowing Bundle', desc: 'Weekly or bi-weekly mowing, trimming, edging, and full cleanup -- one bundled price, no hidden upcharges.' },
                { title: 'Lawn Care & Maintenance', desc: 'Seasonal fertilization, pre-emergent weed control, and ongoing programs timed to Kerrville\'s Hill Country growing season.' },
                { title: 'Sod Installation', desc: 'Bermuda, Zoysia, and St. Augustine installation with proper soil preparation -- new construction, renovations, or bare-ground starts.' },
                { title: 'Mulch & Bed Work', desc: 'Landscape bed clearing, soil amendment, and hardwood or cedar mulch installation across all Kerrville neighborhoods.' },
                { title: 'Tree & Hedge Trimming', desc: 'Precision trimming of mature live oak, cedar, and ornamental plantings -- done right, on schedule.' },
              ].map(({ title, desc }) => (
                <div key={title} className="border-b border-[#d0cdc5] pb-6">
                  <h3 className="text-lg font-light text-[#5a5a5a] mb-2">{title}</h3>
                  <p className="text-[#6a6a6a] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Address / Location */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">FIND US</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Based in Kerrville, Serving the Hill Country
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed mb-10">
                Our home base is at 112 Holly Hill Dr -- right in the heart of Kerr County. From here we run routes across all of Kerrville and into the surrounding communities of Ingram, Tierra Linda, and Comanche Trace. Because we are genuinely local, we do not charge travel fees within our service area.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-light text-[#5a5a5a]">Kerrville Lawn Company</p>
                    <p className="text-[#6a6a6a] text-sm">112 Holly Hill Dr, Kerrville, TX 78028</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+18303830189" className="font-light text-[#5a5a5a] hover:text-[#2a2a2a] transition-colors">(830) 383-0189</a>
                    <p className="text-[#6a6a6a] text-sm">Call or text -- we respond promptly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Navigation className="w-5 h-5 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#6a6a6a] text-sm">On Highway 16 south of downtown Kerrville. Easy to reach from any part of our service area.</p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=112+Holly+Hill+Dr+Kerrville+TX+78028"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3 border border-[#d0cdc5] rounded-full text-xs tracking-[0.25em] hover:bg-[#d8d5cd] transition-colors text-black"
              >
                <MapPin className="w-3 h-3" />
                GET DIRECTIONS
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-[#d0cdc5]">
              <iframe
                title="Kerrville Lawn Company location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.0!2d-99.14!3d30.047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b40000000001%3A0x1!2s112+Holly+Hill+Dr%2C+Kerrville%2C+TX+78028!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-8 md:px-16 lg:px-32 py-12 border-t border-[#d0cdc5] bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm tracking-[0.3em] text-[#8a8a8a] mb-8">ALSO SERVING</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center text-sm text-[#8a8a8a]">
            <Link to="/service-areas" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">All Service Areas</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/service-areas#ingram" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Ingram</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/service-areas#tierra-linda" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Tierra Linda</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/service-areas#comanche-trace" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Comanche Trace</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#f5f1e8]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">READY TO GET STARTED?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Your Local Kerrville Lawn Care Team
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Contact us for a free, no-obligation quote. We visit your property, assess what it needs, and give you a straight answer on price and timeline.
          </p>
          <p className="text-base text-[#6a6a6a] mb-12">
            112 Holly Hill Dr, Kerrville, TX 78028 &nbsp;&middot;&nbsp; (830) 383-0189
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group flex items-center justify-center gap-2 px-12 py-5 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#d8d5cd] transition-colors text-black bg-[#f5f1e8]"
            >
              GET A FREE QUOTE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+18303830189"
              className="group flex items-center justify-center gap-2 px-12 py-5 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#d8d5cd] transition-colors text-black"
            >
              <Phone className="w-4 h-4" />
              CALL (830) 383-0189
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
