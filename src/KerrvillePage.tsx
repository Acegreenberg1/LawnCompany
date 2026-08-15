import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'Do you serve my neighborhood in Kerrville?',
    a: 'We work across all established Kerrville neighborhoods including properties along the Guadalupe River corridor, homes on the hills above town, and subdivisions on the east and west sides of the city. If you are unsure whether your address falls within our service area, call us at (830) 383-0189 and we will tell you right away -- we are not in the business of turning away neighbors.',
  },
  {
    q: 'How quickly can you start service at my Kerrville property?',
    a: 'In most cases we can schedule a first visit within one to two weeks of receiving your quote approval. Spring is our busiest season -- homeowners who contact us in February or March ahead of the growing season get the easiest scheduling. If you have a specific deadline -- a home sale, an event, or new construction completion -- let us know and we will do our best to accommodate it.',
  },
  {
    q: 'What grass types are common in Kerrville?',
    a: 'Bermuda grass is the most prevalent in Kerrville due to its heat and drought tolerance. We also regularly service St. Augustine, Zoysia, and buffalo grass lawns. Each variety has its own ideal mowing height and frequency, and we calibrate our approach accordingly on every visit.',
  },
  {
    q: 'How do you handle the rocky, hilly terrain common in Kerrville?',
    a: 'Rocky, terraced, and sloped properties are very common throughout Kerrville, and we are well experienced working in these conditions. We use walk-behind mowers on steeper grades where a riding mower would be unsafe, and we take extra care around exposed limestone outcroppings and natural rock features.',
  },
  {
    q: 'What services do you offer in Kerrville?',
    a: 'We provide our full range of services in Kerrville -- lawn mowing and our complete lawn mowing bundle, lawn care and maintenance programs including fertilization and weed control, tree and hedge trimming, sod installation, and mulch installation and landscape bed work.',
  },
  {
    q: 'How do I get a quote for my Kerrville property?',
    a: 'The easiest way is to call us directly at (830) 383-0189 -- we pick up and give straight answers. You can also use the contact form on this website. For most services we prefer to do a quick site visit before finalizing a quote so we can see the actual conditions, measure the areas, and give you an accurate number. There is no charge and no obligation.',
  },
  {
    q: 'What is the best time of year to schedule lawn care in Kerrville?',
    a: 'For ongoing mowing service, any time of the growing season works -- we typically begin spring mowing schedules in March or April as warm-season grasses break dormancy, and continue through October or November. For sod installation, mulch, or bed renovation, late winter through early summer is ideal. Contacting us in February or March puts you ahead of the spring rush.',
  },
  {
    q: 'Are you a local Kerrville company or a franchise?',
    a: 'We are a locally owned and operated company based at 112 Holly Hill Dr, Kerrville, TX 78028. We are not a franchise, not a national chain, and not a call center. When you call (830) 383-0189 you reach us directly. We live and work in this community and our reputation is built entirely on what we do for local homeowners.',
  },
];

const services = [
  {
    title: 'Lawn Mowing Bundle',
    description: 'Weekly and bi-weekly mowing schedules across all Kerrville neighborhoods. Includes mowing, trimming, edging, and thorough cleanup on every visit.',
    link: '/services/lawn-mowing-bundle',
  },
  {
    title: 'Lawn Care & Maintenance',
    description: 'Full seasonal programs including fertilization, pre-emergent weed control, and treatments timed to the Hill Country growing season.',
    link: '/services/lawn-care-maintenance',
  },
  {
    title: 'Tree & Hedge Trimming',
    description: 'Careful trimming for mature landscape plantings, live oaks, cedars, and ornamental shrubs common throughout Kerrville properties.',
    link: '/services/tree-hedge-trimming',
  },
  {
    title: 'Sod Installation',
    description: 'Sod installation for new construction, renovations, and lawn makeovers. We install Bermuda, Zoysia, and St. Augustine based on site conditions.',
    link: '/services/sod-installation',
  },
  {
    title: 'Mulch Installation',
    description: 'Landscape bed clearing, soil amendment, and mulch installation throughout Kerrville. We help you choose the right material for your beds.',
    link: '/services/mulch-installation',
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

export default function KerrvillePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="areas" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-4">
            <Link to="/service-areas" className="hover:text-[#4a4a4a] transition-colors">SERVICE AREAS</Link>
            <span className="mx-2">·</span>
            KERRVILLE
          </p>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-4">OUR HOME BASE</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Lawn Care in Kerrville
              </h1>
              <p className="text-xl text-[#4a4a4a] mb-10 leading-relaxed max-w-xl">
                Kerrville is where we are rooted. Our shop is at 112 Holly Hill Dr, and we serve every part of the city -- established neighborhoods near downtown, river-adjacent properties along the Guadalupe, hillside homes with sloped rocky lots, and newer subdivisions on the city's edges. We understand Hill Country lawn conditions from working here every week of the growing season.
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
            <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/20240329_193611.jpg"
                alt="Sunset over the Guadalupe River near Kerrville Texas Hill Country"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Kerrville */}
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
                Downtown Kerrville homeowners along streets like Water Street and Earl Garrett often have established older <Link to="/services/mulch-installation" className="underline underline-offset-2 hover:text-[#2a2a2a] transition-colors">landscape beds</Link> and <Link to="/services/tree-hedge-trimming" className="underline underline-offset-2 hover:text-[#2a2a2a] transition-colors">mature trees</Link> that need careful, experienced attention. Properties in East Kerrville near Louise Hays Park frequently deal with erosion and drainage challenges that come with river-adjacent terrain.
              </p>
              <p>
                Homes on the ridgelines above Tivy High School have the thin, rocky soil over caliche that is almost universal at elevation in Kerr County. We maintain properties in all of these contexts and bring the right approach to each one.
              </p>
              <p>
                <Link to="/services/lawn-mowing-bundle" className="underline underline-offset-2 hover:text-[#2a2a2a] transition-colors">Kerrville lawns</Link> face the full range of Hill Country challenges -- alkaline, rocky soil, summer heat that punishes grass not adapted to it, and winter freezes that can set back warm-season turf. We understand all of it from working here every week of the growing season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHAT WE OFFER</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Services We Provide in Kerrville
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group bg-[#f5f1e8] p-8 rounded-lg hover:bg-[#ede9e0] transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Check className="w-5 h-5 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-light text-[#5a5a5a] leading-snug group-hover:text-[#3a3a3a] transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[#4a4a4a] text-sm leading-relaxed pl-8 mb-4">{s.description}</p>
                <div className="pl-8 flex items-center gap-1 text-xs tracking-[0.2em] text-[#8a8a8a] group-hover:text-[#4a4a4a] transition-colors">
                  LEARN MORE
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us for Kerrville */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHY KERRVILLE CHOOSES US</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                What Local Homeowners Actually Care About
              </h2>
              <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
                {[
                  { title: 'We Show Up When We Say We Will', body: 'Reliability is the most common complaint homeowners have about lawn care companies. We build our schedules realistically, communicate ahead of time if anything changes, and treat your schedule as something that actually matters. Kerrville is a small community -- our reputation depends on consistency.' },
                  { title: 'Transparent Quotes, No Surprises', body: 'We visit the property before we quote, we measure what we are quoting, and we give you a clear number. What we quote is what you pay. We do not add fees after the fact or change the scope without a conversation.' },
                  { title: 'We Are Here Year-Round', body: 'We maintain relationships with customers year-round, handle late-season cleanup, and are ready to go in early spring when grass breaks dormancy. We are not a seasonal pop-up that disappears in October.' },
                ].map(({ title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-[#8a8a8a] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-light text-[#5a5a5a] mb-1">{title}</p>
                      <p className="text-sm text-[#6a6a6a] leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-full min-h-80">
              <img
                src="/20260226_183918.jpg"
                alt="Tree silhouettes against a warm Hill Country sunset near Kerrville Texas"
                className="w-full h-80 md:h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">COMMON QUESTIONS</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Kerrville Lawn Care FAQ
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onToggle={() => toggleFaq(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-8 md:px-16 lg:px-32 py-12 border-t border-[#d0cdc5]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm tracking-[0.3em] text-[#8a8a8a] mb-8">EXPLORE</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center text-sm text-[#8a8a8a]">
            <Link to="/service-areas" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">All Service Areas</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/service-areas/ingram" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Ingram</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/services" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">All Services</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/services/lawn-mowing-bundle" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Lawn Mowing Bundle</Link>
            <span className="hidden sm:block">·</span>
            <Link to="/services/sod-installation" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Sod Installation</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#f5f1e8]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">READY TO GET STARTED?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Serving Kerrville, TX
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Contact your local Kerrville lawn care team for a free, no-obligation quote. We visit your property, assess what it needs, and give you a straight answer on price and timeline.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#6a6a6a] mb-12">
            <MapPin className="w-4 h-4" />
            <p className="text-base">112 Holly Hill Dr, Kerrville, TX 78028 &nbsp;&middot;&nbsp; (830) 383-0189</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group flex items-center justify-center gap-2 px-12 py-5 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#d8d5cd] transition-colors text-black bg-[#e8e5dd]"
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
