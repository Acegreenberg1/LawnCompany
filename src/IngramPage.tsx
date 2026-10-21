import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'Do you serve Ingram, TX?',
    a: 'Yes. Ingram is one of our core service areas. We work throughout the town -- properties along the Guadalupe River, homes on the FM 1340 corridor, and residential lots on the surrounding hills. If you are unsure whether your address is within our range, call us at (830) 383-0189 and we will give you a straight answer.',
  },
  {
    q: 'How quickly can you start service in Ingram?',
    a: 'In most cases we can schedule a first visit within one to two weeks of receiving your quote approval. Spring is our busiest season -- homeowners who contact us in February or March get the easiest scheduling. If you have a specific deadline, let us know and we will do our best to accommodate it.',
  },
  {
    q: 'What grass types are common in Ingram?',
    a: 'Bermuda grass is the most prevalent in the Ingram area due to its heat and drought tolerance. We also regularly service St. Augustine, Zoysia, and buffalo grass lawns. Each variety has its own ideal mowing height and frequency, and we calibrate our approach accordingly on every visit.',
  },
  {
    q: 'How do you handle the rocky terrain common in the Ingram area?',
    a: 'Rocky and sloped properties are the norm throughout the Ingram area, and we are well experienced working in these conditions. We use walk-behind mowers on steeper grades and take extra care around exposed limestone outcroppings and natural rock features typical of the Hill Country.',
  },
  {
    q: 'What services do you offer in Ingram?',
    a: 'We provide our full range of services in Ingram -- lawn mowing and our complete lawn mowing bundle, lawn care and maintenance programs including fertilization and weed control, tree and hedge trimming, sod installation, and mulch installation and landscape bed work.',
  },
  {
    q: 'How do I get a quote for my Ingram property?',
    a: 'The easiest way is to call us at (830) 383-0189 -- we pick up and give straight answers. You can also use the contact form on this website. For most services we prefer to do a quick site visit before finalizing a quote so we can see the actual conditions and give you an accurate number. There is no charge and no obligation.',
  },
  {
    q: 'What is the best time of year to schedule lawn care in Ingram?',
    a: 'For ongoing mowing service, any time of the growing season works -- we typically begin spring mowing schedules in March or April as warm-season grasses break dormancy, and continue through October or November. For sod installation, mulch, or bed renovation, late winter through early summer is ideal. Contacting us in February or March puts you ahead of the spring rush.',
  },
  {
    q: 'Is Ingram close enough for regular service from your Kerrville location?',
    a: 'Absolutely. Ingram sits just a few miles west of Kerrville along Highway 27, and we serve it as a core part of our territory -- not as an outlier or add-on. You will get the same scheduling reliability and service quality as our Kerrville customers.',
  },
];

const services = [
  {
    title: 'Lawn Mowing Bundle',
    description: 'Weekly and bi-weekly mowing schedules throughout Ingram. Includes mowing, trimming, edging, and thorough cleanup on every visit.',
    link: '/services/lawn-mowing-bundle',
  },
  {
    title: 'Lawn Care & Maintenance',
    description: 'Full seasonal programs including fertilization, pre-emergent weed control, and treatments timed to the Hill Country growing season.',
    link: '/services/lawn-care-maintenance',
  },
  {
    title: 'Tree & Hedge Trimming',
    description: 'Careful trimming for mature landscape plantings, live oaks, cedars, and ornamental shrubs common throughout Ingram properties.',
    link: '/services/tree-hedge-trimming',
  },
  {
    title: 'Sod Installation',
    description: 'Sod installation for new construction, renovations, and lawn makeovers. We install Bermuda, Zoysia, and St. Augustine based on site conditions.',
    link: '/services/sod-installation',
  },
  {
    title: 'Mulch Installation',
    description: 'Landscape bed clearing, soil amendment, and mulch installation throughout Ingram. We help you choose the right material for your beds.',
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

export default function IngramPage() {
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
            INGRAM
          </p>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-4">HILL COUNTRY LAWN CARE</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Lawn Care in Ingram
              </h1>
              <p className="text-xl text-[#4a4a4a] mb-10 leading-relaxed max-w-xl">
                Ingram sits just west of Kerrville along the Guadalupe River corridor, and we serve it as one of our primary territories. From the FM 1340 neighborhoods to river-adjacent properties and hillside lots with the rocky, thin soil typical of Kerr County, we bring the right equipment and approach for every yard we work in.
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
                src="/Hero_Page_Image.jpg"
                alt="Ingram Texas lawn care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Ingram */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">CLOSE TO HOME</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Your Ingram Lawn Care Crew
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                Ingram is a small community with the same Hill Country terrain challenges as Kerrville -- alkaline caliche soil, summer heat that stresses cool-season plantings, and winter freezes that can set back warm-season turf if not managed properly. We have worked in these conditions week in and week out and know what works here.
              </p>
              <p>
                Properties along the Guadalupe River west of town often have more moisture-tolerant grass options and lush riparian plantings that require careful, experienced attention. Lots on the higher ground deal with the thin, rocky soil over limestone that is typical across Kerr County at elevation.
              </p>
              <p>
                Whether you are on the river bottom, a hilltop lot, or a standard subdivision property, we assess your specific conditions on the first visit and match our approach to what your <Link to="/services/lawn-care-maintenance" className="underline underline-offset-2 hover:text-[#2a2a2a] transition-colors">lawn actually needs</Link>.
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
              Services We Provide in Ingram
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

      {/* Why choose us */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHY INGRAM CHOOSES US</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                What Local Homeowners Actually Care About
              </h2>
              <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
                {[
                  { title: 'We Show Up When We Say We Will', body: 'Reliability is the most common complaint homeowners have about lawn care companies. We build our schedules realistically, communicate ahead of time if anything changes, and treat your schedule as something that actually matters. Our reputation in this community depends on consistency.' },
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
                src="/lawn_tools_under_2mb.jpg"
                alt="Ingram lawn care service"
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
              Ingram Lawn Care FAQ
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
            <Link to="/service-areas/kerrville" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Kerrville</Link>
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
            Serving Ingram, TX
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Contact your local lawn care team for a free, no-obligation quote. We visit your property, assess what it needs, and give you a straight answer on price and timeline.
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
