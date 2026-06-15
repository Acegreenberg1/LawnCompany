import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'Do you serve my neighborhood in Kerrville?',
    a: 'If you are inside the city limits of Kerrville or in the surrounding community of Ingram, the answer is almost certainly yes. We work across all established Kerrville neighborhoods including properties along the Guadalupe River corridor, homes on the hills above town, and subdivisions on the east and west sides of the city. If you are unsure whether your address falls within our service area, call us at (830) 383-0189 and we will tell you right away -- we are not in the business of turning away neighbors.',
  },
  {
    q: 'How quickly can you start service at my Kerrville or Ingram property?',
    a: 'In most cases we can schedule a first visit within one to two weeks of receiving your quote approval, depending on the time of year. Spring is our busiest season -- Kerrville and Ingram homeowners who contact us in February or March ahead of the growing season get the easiest scheduling. Summer is busy but we work hard to accommodate new customers promptly. If you have a specific deadline -- a home sale, an event, or new construction completion -- let us know when you contact us and we will do our best to accommodate it.',
  },
  {
    q: 'What services do you offer in Ingram?',
    a: 'We provide our full range of services in Ingram -- lawn mowing and our complete lawn mowing bundle, lawn care and maintenance programs including fertilization and weed control, tree and hedge trimming, sod installation, and mulch installation and landscape bed work. Ingram properties often have a more rural character than in-city Kerrville lots, with larger acreages, more mature tree canopy, and varied terrain. We are comfortable with all of it. Ingram is a short drive from our Kerrville base at 112 Holly Hill Dr and a regular part of our weekly routes.',
  },
  {
    q: 'How do I get a quote for my Kerrville area property?',
    a: 'The easiest way is to call us directly at (830) 383-0189 -- we pick up and give straight answers. You can also use the contact form on this website and we will follow up promptly. For most services we prefer to do a quick site visit before finalizing a quote so we can see the actual conditions, measure the areas, and give you an accurate number. There is no charge for the site visit and no obligation. We quote fairly and transparently -- the number we give is the number you pay.',
  },
  {
    q: 'What is the best time of year to schedule lawn care in the Kerrville area?',
    a: 'For ongoing mowing service, any time of the growing season works -- we typically begin spring mowing schedules in March or April as warm-season grasses break dormancy, and continue through October or November depending on the year. For one-time projects like sod installation, mulch installation, or bed renovation, late winter through early summer is ideal for most services. Contacting us in February or early March puts you ahead of the spring rush and gives us the best chance to schedule your project exactly when conditions are right.',
  },
  {
    q: 'Are you a local Kerrville company or a franchise?',
    a: 'We are a locally owned and operated company based right here in Kerrville at 112 Holly Hill Dr, Kerrville, TX 78028. We are not a franchise, not a national chain, and not a call center that dispatches from somewhere else. When you call (830) 383-0189 you reach us directly. We live and work in this community, we maintain properties across Kerrville and Ingram, and our reputation is built entirely on what we do for local homeowners. That local accountability matters to us and it shows in the work.',
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
    intro: 'Kerrville is where we are rooted. Our shop is at 112 Holly Hill Dr, and we serve every part of the city -- established neighborhoods near downtown, river-adjacent properties along the Guadalupe, hillside homes with sloped rocky lots, and newer subdivisions on the city\'s edges. We understand Hill Country lawn conditions from working here every week of the growing season.',
    img: '/kerrville_slightly_lighter.jpg',
    imgAlt: 'Lawn care service in Kerrville Texas near the Guadalupe River',
  },
  {
    name: 'Ingram',
    tag: 'JUST DOWN THE RIVER',
    intro: 'Ingram sits about eight miles west of Kerrville along the Guadalupe River corridor and is a regular part of our weekly routes. Properties here tend to have a more rural character -- larger lots, mature oak and cedar canopy, and a mix of maintained turf and native landscape. We provide our full range of services in Ingram and are a familiar presence throughout the community.',
    img: '/lawn_tools_under_2mb.jpg',
    imgAlt: 'Professional lawn mowing service in Ingram Texas Hill Country',
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
            Lawn Care in Kerrville & Ingram
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            We are a locally owned Kerrville lawn care company with deep roots in the Hill Country. We mow, trim, install sod, and maintain landscape beds across Kerr County -- for neighbors, not just customers.
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
              href={`#${a.name.toLowerCase().replace(/\s/g, '-')}`}
              className="flex items-center gap-2 px-5 py-2 border border-[#d0cdc5] rounded-full text-xs tracking-[0.2em] hover:bg-[#d8d5cd] transition-colors text-[#4a4a4a]"
            >
              <MapPin className="w-3 h-3" />
              {a.name.toUpperCase()}
            </a>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">LOCALLY OWNED & OPERATED</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Your Kerrville Neighbors in the Lawn Care Business
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                Kerrville Lawn Company is based at 112 Holly Hill Dr, Kerrville, TX 78028 -- not in a regional call center, not managed from out of state. When you call (830) 383-0189 you reach us, directly. We are the people who will show up at your property, do the work, and stand behind it.
              </p>
              <p>
                We serve homeowners and properties throughout Kerr County, with a focused service area covering Kerrville and Ingram. Each community has its own character, terrain, soil conditions, and lawn care challenges. We have worked in both long enough to understand what works and what does not, and we bring that practical local knowledge to every quote and every service visit.
              </p>
              <p>
                Our most popular offering is the Complete Lawn Mowing Bundle -- mowing, trimming, edging, and thorough cleanup bundled into a single reliable service. But we also handle the full range of lawn and landscape work: seasonal maintenance programs, sod installation, mulch and bed work, and tree and hedge trimming. Whether you need a one-time cleanup or a year-round maintenance partner, we are the local option that knows your neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why locals choose us */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHY KERRVILLE CHOOSES US</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              What Local Homeowners Actually Care About
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'We Show Up When We Say We Will', body: 'Reliability is the single most common complaint homeowners have about lawn care companies. We build our schedules realistically, communicate ahead of time if anything changes, and treat your schedule as something that actually matters. Kerrville is a small community -- our reputation depends on consistency.' },
              { title: 'We Know Hill Country Conditions', body: 'Thin soil over limestone, summer heat that reaches triple digits, alkaline pH that affects fertilizer programs, cedar and live oak everywhere -- these are not abstract concepts to us. They are the conditions we work in every week across Kerrville and Ingram.' },
              { title: 'Transparent Quotes, No Surprises', body: 'We visit the property before we quote, we measure what we are quoting, and we give you a clear number. What we quote is what you pay. We do not add fees after the fact or change the scope without a conversation.' },
              { title: 'A Complete Lawn Mowing Bundle That Actually Covers Everything', body: 'Our bundle includes mowing, trimming, edging, and cleanup -- not mowing with edging as an upcharge. Kerrville homeowners who have worked with other services and been nickel-and-dimed appreciate the straightforward all-in pricing.' },
              { title: 'Local Experience with Every Property Type', body: 'From flat suburban lots in central Kerrville to rural acreage properties in Ingram, we have the equipment and experience to handle what is in front of us rather than sending a general crew with no preparation.' },
              { title: 'We Are Here Year-Round', body: 'Kerrville has a real growing season with a real off-season. We maintain relationships with customers year-round, handle late-season cleanup, and are ready to go in early spring when grass breaks dormancy -- we are not a seasonal pop-up that disappears in October.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#f5f1e8] p-8 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Check className="w-5 h-5 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-light text-[#5a5a5a] leading-snug">{title}</h3>
                </div>
                <p className="text-[#4a4a4a] text-sm leading-relaxed pl-8">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area-by-area deep dives */}
      {areas.map((area, idx) => (
        <section
          key={area.name}
          id={area.name.toLowerCase().replace(/\s/g, '-')}
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

                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="group flex items-center gap-2 px-8 py-3 border border-[#d0cdc5] rounded-full text-xs tracking-[0.25em] hover:bg-[#d8d5cd] transition-colors text-black bg-transparent"
                >
                  GET A QUOTE FOR {area.name.toUpperCase()}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className={`w-full h-80 md:h-96 rounded-lg overflow-hidden ${idx % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
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
      <section className="px-8 md:px-16 lg:px-32 py-20">
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
            Serving Kerrville & Ingram
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
