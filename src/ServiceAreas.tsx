import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'Do you serve my neighborhood in Kerrville?',
    a: 'If you are inside the city limits of Kerrville or in the surrounding communities of Ingram, Tierra Linda, or Comanche Trace, the answer is almost certainly yes. We work across all established Kerrville neighborhoods including properties along the Guadalupe River corridor, homes on the hills above town, and subdivisions on the east and west sides of the city. If you are unsure whether your address falls within our service area, call us at (830) 383-0189 and we will tell you right away -- we are not in the business of turning away neighbors.',
  },
  {
    q: 'How quickly can you start service at my Kerrville or Ingram property?',
    a: 'In most cases we can schedule a first visit within one to two weeks of receiving your quote approval, depending on the time of year. Spring is our busiest season -- Kerrville and Ingram homeowners who contact us in February or March ahead of the growing season get the easiest scheduling. Summer is busy but we work hard to accommodate new customers promptly. If you have a specific deadline -- a home sale, an event, or new construction completion -- let us know when you contact us and we will do our best to accommodate it.',
  },
  {
    q: 'Do you offer lawn care services in Comanche Trace?',
    a: 'Yes. Comanche Trace is one of our primary service areas. We work regularly on properties throughout the Comanche Trace community and are familiar with the large, mature landscape plantings, irrigated turf areas, and established tree canopy that characterize the neighborhood. Comanche Trace properties often benefit from our full-service lawn care and maintenance program, which keeps large irrigated lawns healthy through the full Hill Country growing season. Contact us for a quote specific to your property.',
  },
  {
    q: 'Can you handle the rocky, hilly terrain in Tierra Linda?',
    a: 'Yes, and we have experience doing it. Tierra Linda properties sit on the elevated terrain west of central Kerrville and frequently feature steep grades, rocky outcroppings, shallow soil over limestone, and the drainage challenges that come with hillside lots. We are equipped and experienced for these conditions. Whether it is mowing a sloped lawn safely, installing sod on a grade, or maintaining landscape beds in rocky soil, we assess the site conditions honestly and build a plan that works for the specific terrain rather than applying a one-size-fits-all approach.',
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
    q: 'Do you provide mulch installation near Comanche Trace and Tierra Linda?',
    a: 'Yes. Mulch installation and landscape bed work are services we provide throughout our entire service area, including Comanche Trace and Tierra Linda. Comanche Trace properties with mature, established foundation beds often benefit from an annual bed clearing and refresh. Tierra Linda properties with native plantings and rocky slope beds require a more careful touch -- we are experienced with both. We source quality mulch materials and help you choose between hardwood, cedar, and dyed options based on your beds and preferences.',
  },
  {
    q: 'Can you install sod near Comanche Trace or in the Tierra Linda area?',
    a: 'Yes. Sod installation is available throughout our service area. Comanche Trace properties with irrigated lawn areas are well-suited to sod installation -- the irrigation infrastructure supports the consistent moisture that new sod requires during the critical first few weeks of establishment. Tierra Linda lots with hillside terrain require additional grading and soil preparation work before sod can be installed successfully, which we assess and account for in every quote. We install Bermuda, Zoysia, and St. Augustine depending on site conditions and customer preference.',
  },
  {
    q: 'What is the best time of year to schedule lawn care in the Kerrville area?',
    a: 'For ongoing mowing service, any time of the growing season works -- we typically begin spring mowing schedules in March or April as warm-season grasses break dormancy, and continue through October or November depending on the year. For one-time projects like sod installation, mulch installation, or bed renovation, late winter through early summer is ideal for most services. Contacting us in February or early March puts you ahead of the spring rush and gives us the best chance to schedule your project exactly when conditions are right.',
  },
  {
    q: 'Are you a local Kerrville company or a franchise?',
    a: 'We are a locally owned and operated company based right here in Kerrville at 112 Holly Hill Dr, Kerrville, TX 78028. We are not a franchise, not a national chain, and not a call center that dispatches from somewhere else. When you call (830) 383-0189 you reach us directly. We live and work in this community, we maintain properties across Kerrville, Ingram, Tierra Linda, and Comanche Trace, and our reputation is built entirely on what we do for local homeowners. That local accountability matters to us and it shows in the work.',
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
    pageLink: '/service-areas/kerrville',
    tag: 'OUR HOME BASE',
    intro: 'Kerrville is where we are rooted -- literally. Our shop is at 112 Holly Hill Dr, which means we are familiar with every part of the city: the established neighborhoods east of downtown near Tivy High School, the river-adjacent properties along the Guadalupe, the hillside homes above town with their sloped, rocky lots, and the newer subdivisions developing on the city\'s edges. Kerrville lawns face the full range of Hill Country challenges -- alkaline, rocky soil, summer heat that punishes grass not adapted to it, and winter freezes that can set back warm-season turf. We understand all of it from working here every week of the growing season.',
    services: [
      'Lawn mowing bundle -- weekly and bi-weekly schedules across all Kerrville neighborhoods',
      'Full lawn care and maintenance programs including fertilization and weed control',
      'Tree and hedge trimming for mature landscape plantings',
      'Sod installation for new construction, renovations, and lawn makeovers',
      'Mulch installation and landscape bed clearing and refresh',
    ],
    detail: 'Downtown Kerrville homeowners along streets like Water Street and Earl Garrett often have established older landscape beds and mature trees that need careful, experienced attention. Properties in East Kerrville near Louise Hays Park frequently deal with the erosion and drainage challenges that come with river-adjacent terrain. Homes on the ridgelines above Tivy High School have the thin, rocky soil over caliche that is almost universal at elevation in Kerr County. We maintain properties in all of these contexts and bring the right approach to each one.',
    img: '/kerrville_slightly_lighter.jpg',
    imgAlt: 'Lawn care service in Kerrville Texas near the Guadalupe River',
  },
  {
    name: 'Ingram',
    tag: 'JUST DOWN THE RIVER',
    intro: 'Ingram sits about eight miles west of Kerrville along the Guadalupe River corridor and is a natural part of our weekly service routes. The community has a quieter, more rural character than Kerrville proper -- larger lots, more mature oak and cedar canopy, and properties that often have a mix of maintained lawn areas and naturalized native landscape. Ingram\'s proximity to Lake Ingram and the Guadalupe gives many properties a more relaxed, Hill Country feel, and the lawn care needs reflect that: less emphasis on formal, high-maintenance turf and more on keeping properties clean, well-trimmed, and seasonally refreshed.',
    services: [
      'Lawn mowing for residential properties throughout Ingram and the surrounding area',
      'Tree and cedar trimming -- cedar management is particularly relevant on Ingram acreages',
      'Sod installation for properties renovating turf areas or starting from bare ground',
      'Mulch installation and bed work to keep established landscape beds looking maintained',
      'One-time cleanup and ongoing maintenance programs',
    ],
    detail: 'Ranch Road 39 heading west from Ingram toward Hunt takes you through some of the most beautiful Hill Country terrain in Kerr County, and many properties along this corridor are on our regular schedule. Ingram properties near the Hunt Road junction often have large oaks and native plantings that benefit from seasonal trimming and a consistent mulch program. We are a familiar presence in the Ingram area and have built long-term relationships with homeowners throughout the community.',
    img: '/lawn_tools_under_2mb.jpg',
    imgAlt: 'Professional lawn mowing service in Ingram Texas Hill Country',
  },
  {
    name: 'Tierra Linda',
    tag: 'ELEVATED KERRVILLE',
    intro: 'Tierra Linda occupies the elevated terrain on the western edge of Kerrville and represents one of the more distinctive lawn care environments in the area. Properties sit on exposed limestone hillsides with thin topsoil, dramatic views, and the kind of rocky, sloped lots that require a thoughtful approach to lawn and landscape maintenance. Standard mowing equipment and standard installation techniques do not always translate directly to Tierra Linda conditions -- the terrain demands experience, proper equipment, and a realistic understanding of what is achievable in shallow soil over rock.',
    services: [
      'Slope-capable mowing for hillside lots with challenging terrain',
      'Sod installation with proper soil preparation and grading for sloped properties',
      'Mulch installation in rocky native landscape beds -- drought-tolerant plant care',
      'Tree trimming and cedar management on hillside properties',
      'Landscape bed renovation with soil amendment to improve shallow native conditions',
    ],
    detail: 'The views from Tierra Linda are among the best in Kerrville, and well-maintained landscaping frames those views properly. Many Tierra Linda properties feature native plantings -- Texas sage, Agarita, mountain laurel, ornamental grasses -- that benefit from light seasonal trimming and proper mulching rather than the intensive maintenance that a conventional turf-focused lawn requires. We work with the natural character of these hillside properties rather than against it, and we help homeowners choose approaches that are sustainable in the demanding conditions of this elevated, exposed terrain.',
    img: '/Hero_Page_Image.jpg',
    imgAlt: 'Landscape maintenance on elevated hillside lot in Tierra Linda Kerrville Texas',
  },
  {
    name: 'Comanche Trace',
    tag: 'KERRVILLE\'S PREMIER COMMUNITY',
    intro: 'Comanche Trace is one of Kerrville\'s most established and well-maintained communities, with large properties, irrigated turf areas, mature landscape plantings, and the high presentation standards that come with a community built around a championship golf course. Lawn care in Comanche Trace requires consistent professionalism, attention to detail, and the kind of reliable scheduling that keeps properties looking sharp week after week throughout the season. We work regularly in Comanche Trace and understand what homeowners in the community expect.',
    services: [
      'Regular mowing on weekly or bi-weekly schedules -- precision edging and thorough cleanup on every visit',
      'Full lawn care programs including seasonal fertilization, pre-emergent weed control, and fungal prevention',
      'Sod installation for turf renovation on irrigated lawn areas',
      'Mulch installation and comprehensive landscape bed management for established foundation and accent beds',
      'Tree and hedge trimming to maintain the mature, well-composed look the community is known for',
    ],
    detail: 'Comanche Trace homeowners often have large irrigated lawn areas that benefit from a coordinated seasonal treatment program -- pre-emergent application in late winter before weed germination, fertilization timed to the grass\'s active growth cycles, and fungal treatments in periods of heat and humidity when disease pressure is highest. The irrigation infrastructure in Comanche Trace also makes it one of the best environments in the area for sod installation, since consistent post-installation moisture is so important to establishment success. We provide free site quotes throughout Comanche Trace and are familiar with the community layout and typical property sizes.',
    img: '/kerrville_slightly_lighter.jpg',
    imgAlt: 'Professional lawn care and mulch installation in Comanche Trace Kerrville Texas',
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
                We serve homeowners and properties throughout Kerr County, with a focused service area that covers Kerrville, Ingram, Tierra Linda, and Comanche Trace. Each of these communities has its own character, terrain, soil conditions, and lawn care challenges. We have worked in all of them long enough to understand what works and what does not in each context, and we bring that practical local knowledge to every quote and every service visit.
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
              { title: 'We Know Hill Country Conditions', body: 'Thin soil over limestone, summer heat that reaches triple digits, alkaline pH that affects fertilizer programs, cedar and live oak everywhere -- these are not abstract concepts to us. They are the conditions we work in every week across Kerrville, Ingram, Tierra Linda, and Comanche Trace.' },
              { title: 'Transparent Quotes, No Surprises', body: 'We visit the property before we quote, we measure what we are quoting, and we give you a clear number. What we quote is what you pay. We do not add fees after the fact or change the scope without a conversation.' },
              { title: 'A Complete Lawn Mowing Bundle That Actually Covers Everything', body: 'Our bundle includes mowing, trimming, edging, and cleanup -- not mowing with edging as an upcharge. Kerrville homeowners who have worked with other services and been nickel-and-dimed appreciate the straightforward all-in pricing.' },
              { title: 'Local Experience with Every Property Type', body: 'From flat suburban lots in central Kerrville to sloped hillside properties in Tierra Linda to large irrigated turf areas in Comanche Trace, we have the equipment and experience to handle what is in front of us rather than sending a general crew with no preparation.' },
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

                <h3 className="text-xl font-light text-[#5a5a5a] mb-4">Services We Provide in {area.name}</h3>
                <ul className="space-y-3 mb-8">
                  {area.services.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[#4a4a4a] text-sm">
                      <Check className="w-4 h-4 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>

                <p className="text-[#4a4a4a] leading-relaxed mb-8 text-base">{area.detail}</p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="group flex items-center gap-2 px-8 py-3 border border-[#d0cdc5] rounded-full text-xs tracking-[0.25em] hover:bg-[#d8d5cd] transition-colors text-black bg-transparent"
                  >
                    GET A QUOTE FOR {area.name.toUpperCase()}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {area.pageLink && (
                    <Link
                      to={area.pageLink}
                      className="group flex items-center gap-2 px-8 py-3 border border-[#d0cdc5] rounded-full text-xs tracking-[0.25em] hover:bg-[#d8d5cd] transition-colors text-[#4a4a4a]"
                    >
                      LEARN MORE
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
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

      {/* Map + Directions */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">FIND US</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Based in Kerrville, Serving the Hill Country
              </h2>
              <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
                <p>
                  Our home base is at 112 Holly Hill Dr, Kerrville, TX 78028 -- right in the heart of Kerr County. From here we run routes that cover every part of Kerrville, head west into Ingram and the Hunt corridor, reach the hillside communities of Tierra Linda, and maintain properties throughout Comanche Trace.
                </p>
                <p>
                  Because we are genuinely local, we do not charge travel fees to reach properties across our service area. Ingram is a short drive. Tierra Linda is a short drive. Comanche Trace is a short drive. If you are in Kerr County and you are wondering whether we can get to you, the answer is probably yes -- and if it is not, we will tell you honestly rather than string you along.
                </p>
              </div>

              <div className="mt-10 space-y-4">
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
                    <p className="text-[#6a6a6a] text-sm">On Highway 16 south of downtown Kerrville. Easy to find, easy to reach from any part of our service area.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=112+Holly+Hill+Dr+Kerrville+TX+78028"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 mt-8 px-8 py-3 border border-[#d0cdc5] rounded-full text-xs tracking-[0.25em] hover:bg-[#d8d5cd] transition-colors text-black"
              >
                <MapPin className="w-3 h-3" />
                GET DIRECTIONS
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Map embed */}
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