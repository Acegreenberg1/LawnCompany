import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'Do you serve my neighborhood in Kerrville?',
    a: 'If you are inside the city limits of Kerrville or in the surrounding communities of Ingram, Tierra Linda, or Comanche Trace, the answer is almost certainly yes. If you are unsure, call us at (830) 383-0189 and we will tell you right away.',
  },
  {
    q: 'How quickly can you start service at my property?',
    a: 'In most cases we can schedule a first visit within one to two weeks of receiving your quote approval. Spring is our busiest season -- homeowners who contact us in February or March ahead of the growing season get the easiest scheduling. If you have a specific deadline, let us know and we will do our best to accommodate it.',
  },
  {
    q: 'Can you handle the rocky, hilly terrain in Tierra Linda?',
    a: 'Yes. Tierra Linda properties sit on elevated terrain west of central Kerrville and frequently feature steep grades, rocky outcroppings, and shallow soil over limestone. We are equipped and experienced for these conditions -- we assess the site honestly and build a plan that works for the specific terrain.',
  },
  {
    q: 'What services do you offer in Ingram?',
    a: 'We provide our full range of services in Ingram -- lawn mowing and bundle, lawn care and maintenance, tree and hedge trimming, sod installation, and mulch installation. Ingram is a short drive from our Kerrville base at 112 Holly Hill Dr and a regular part of our weekly routes.',
  },
  {
    q: 'How do I get a quote for my property?',
    a: 'Call us directly at (830) 383-0189 -- we pick up and give straight answers. You can also use the contact form on this website. For most services we prefer to do a quick site visit before finalizing a quote. There is no charge for the site visit and no obligation.',
  },
  {
    q: 'Are you a local Kerrville company or a franchise?',
    a: 'We are locally owned and operated, based right here in Kerrville at 112 Holly Hill Dr, Kerrville, TX 78028. Not a franchise, not a national chain, not a call center. When you call (830) 383-0189 you reach us directly.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#d0cdc5]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left gap-4"
      >
        <span className="text-lg font-light text-[#4a4a4a] leading-snug">{q}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#8a8a8a] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#8a8a8a] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-[#6a6a6a] leading-relaxed text-base">{a}</p>
        </div>
      )}
    </div>
  );
}

const areas = [
  {
    name: 'Kerrville',
    tag: 'OUR HOME BASE',
    slug: 'kerrville',
    route: '/areas/kerrville',
    intro: 'Kerrville is where we are rooted. Our shop is at 112 Holly Hill Dr, which means we work across every neighborhood -- from river-adjacent lots along the Guadalupe to sloped hilltop properties and newer subdivisions on the city\'s edges. We understand Kerrville\'s Hill Country conditions from working here every week.',
    services: [
      'Lawn mowing bundle -- weekly and bi-weekly schedules',
      'Full lawn care and maintenance including fertilization and weed control',
      'Tree and hedge trimming for mature landscape plantings',
      'Sod installation and mulch installation',
    ],
    img: '/kerrville_slightly_lighter.jpg',
    imgAlt: 'Lawn care service in Kerrville Texas near the Guadalupe River',
    hasSubpage: true,
  },
  {
    name: 'Ingram',
    tag: 'JUST DOWN THE RIVER',
    slug: 'ingram',
    route: null,
    intro: 'Ingram sits about eight miles west of Kerrville along the Guadalupe River corridor and is a regular part of our weekly routes. Larger lots, mature oak and cedar canopy, and properties that blend maintained lawn areas with naturalized Hill Country landscape -- we are comfortable with all of it.',
    services: [
      'Lawn mowing for residential properties throughout Ingram',
      'Tree and cedar trimming -- cedar management is particularly relevant on Ingram acreages',
      'Sod installation and mulch installation',
      'One-time cleanup and ongoing maintenance programs',
    ],
    img: '/lawn_tools_under_2mb.jpg',
    imgAlt: 'Professional lawn mowing service in Ingram Texas Hill Country',
    hasSubpage: false,
  },
  {
    name: 'Tierra Linda',
    tag: 'ELEVATED KERRVILLE',
    slug: 'tierra-linda',
    route: null,
    intro: 'Tierra Linda occupies the elevated terrain on the western edge of Kerrville. Properties sit on exposed limestone hillsides with thin topsoil, dramatic views, and sloped lots that require a thoughtful approach. We have the equipment and experience for these conditions.',
    services: [
      'Slope-capable mowing for hillside lots',
      'Sod installation with proper soil preparation for sloped properties',
      'Mulch installation in rocky native landscape beds',
      'Tree trimming and cedar management',
    ],
    img: '/Hero_Page_Image.jpg',
    imgAlt: 'Landscape maintenance on elevated hillside lot in Tierra Linda Kerrville Texas',
    hasSubpage: false,
  },
  {
    name: 'Comanche Trace',
    tag: "KERRVILLE'S PREMIER COMMUNITY",
    slug: 'comanche-trace',
    route: null,
    intro: 'Comanche Trace is one of Kerrville\'s most established communities -- large properties, irrigated turf areas, mature plantings, and the high presentation standards that come with a championship golf course neighborhood. We work regularly in Comanche Trace and understand what homeowners here expect.',
    services: [
      'Regular mowing with precision edging and thorough cleanup on every visit',
      'Full lawn care programs including seasonal fertilization and pre-emergent weed control',
      'Sod installation on irrigated turf areas',
      'Mulch installation and comprehensive landscape bed management',
    ],
    img: '/kerrville_slightly_lighter.jpg',
    imgAlt: 'Professional lawn care and mulch installation in Comanche Trace Kerrville Texas',
    hasSubpage: false,
  },
];

export default function ServiceAreasPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="areas" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">SERVICE AREAS · KERR COUNTY TEXAS</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight max-w-5xl">
            Lawn Care in Kerrville, Ingram, Tierra Linda & Comanche Trace
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            Locally owned and based at 112 Holly Hill Dr, Kerrville. We mow, trim, install sod, and maintain landscape beds across Kerr County -- for neighbors, not just customers.
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

      {/* Area pill nav */}
      <section className="px-8 md:px-16 lg:px-32 py-8 bg-[#e8e5dd] border-b border-[#d0cdc5]">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {areas.map((a) => (
            <a
              key={a.name}
              href={`#${a.slug}`}
              className="flex items-center gap-2 px-5 py-2 border border-[#d0cdc5] rounded-full text-xs tracking-[0.2em] hover:bg-[#d8d5cd] transition-colors text-[#4a4a4a]"
            >
              <MapPin className="w-3 h-3" />
              {a.name.toUpperCase()}
            </a>
          ))}
        </div>
      </section>

      {/* Area cards */}
      {areas.map((area, idx) => (
        <section
          key={area.name}
          id={area.slug}
          className={`px-8 md:px-16 lg:px-32 py-20 ${idx % 2 === 0 ? 'bg-[#f5f1e8]' : 'bg-[#e8e5dd]'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-3">{area.tag}</p>
                <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-6 leading-tight">
                  Lawn Care in {area.name}
                </h2>
                <p className="text-lg text-[#4a4a4a] leading-relaxed mb-8">{area.intro}</p>

                <ul className="space-y-3 mb-8">
                  {area.services.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[#4a4a4a] text-sm">
                      <Check className="w-4 h-4 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="group flex items-center gap-2 px-8 py-3 border border-[#d0cdc5] rounded-full text-xs tracking-[0.25em] hover:bg-[#d8d5cd] transition-colors text-black bg-transparent"
                  >
                    GET A QUOTE FOR {area.name.toUpperCase()}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {area.hasSubpage && area.route && (
                    <Link
                      to={area.route}
                      className="group flex items-center gap-2 px-8 py-3 border border-[#d0cdc5] rounded-full text-xs tracking-[0.25em] hover:bg-[#d8d5cd] transition-colors text-[#6a6a6a] bg-transparent"
                    >
                      MORE ABOUT KERRVILLE
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>

              <div className={`w-full h-72 md:h-80 rounded-lg overflow-hidden ${idx % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                <img
                  src={area.img}
                  alt={area.imgAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">COMMON QUESTIONS</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onToggle={() => toggleFaq(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="px-8 md:px-16 lg:px-32 py-12 border-t border-[#d0cdc5]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm tracking-[0.3em] text-[#8a8a8a] mb-8">OUR SERVICES</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center text-sm text-[#8a8a8a]">
            <Link to="/services" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">All Services</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/services/lawn-mowing-bundle" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Lawn Mowing Bundle</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/services/lawn-care-maintenance" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Lawn Care & Maintenance</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/services/tree-hedge-trimming" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Tree & Hedge Trimming</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/services/sod-installation" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Sod Installation</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/services/mulch-installation" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Mulch Installation</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">READY TO GET STARTED?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Serving Kerrville, Ingram, Tierra Linda & Comanche Trace
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Contact your local Kerrville lawn care team for a free, no-obligation quote. We visit your property, assess what it needs, and give you a straight answer on price and timeline.
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


export default ServiceAreasPage