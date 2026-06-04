import { useState } from 'react';
import { ArrowRight, Phone, MapPin, Check, Trees, Sprout, Layers, Scissors, Sun, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const neighborhoods = [
  {
    name: 'Established Residential Neighborhoods',
    body: 'The core residential streets of Kerrville -- areas like the Sidney Baker corridor, neighborhoods off Junction Highway, and the established subdivisions south of downtown -- feature properties with mature oak and pecan trees, older landscape beds, and lawns that have been in place for decades. These properties often benefit most from consistent, knowledgeable maintenance: seasonal trimming to manage tree canopy over structures, annual bed clearing and mulch refresh, and a mowing program that respects the mature root systems beneath the turf.',
  },
  {
    name: 'Properties Near the Guadalupe River & River Trail',
    body: 'The Guadalupe River runs through the heart of Kerrville, and properties along its banks or near the Kerrville River Trail have a distinct character. Riparian soil is often deeper and more productive than the rocky hillside lots above town, which means turf and landscape plantings can be more vigorous -- and sometimes more demanding. Flood-plain proximity also means drainage is a practical consideration on many of these properties. We maintain lawns and landscapes along this corridor regularly and understand the seasonal dynamics of river-adjacent lots.',
  },
  {
    name: 'Louise Hays Park & Surrounding Neighborhoods',
    body: 'The neighborhoods adjacent to Louise Hays Park are among the most picturesque in Kerrville, with mature street trees, well-established lawns, and properties that benefit from the park\'s greenspace nearby. Homeowners in this area typically take pride in their properties and want service that matches that standard. We maintain several properties in this part of town and bring the same attention to detail here that we bring everywhere -- crisp edges, thorough cleanup, and consistent scheduling.',
  },
  {
    name: 'Kerrville-Schreiner Park Area',
    body: 'The western end of Kerrville near Kerrville-Schreiner Park transitions toward the more rugged Hill Country terrain characteristic of properties heading out toward Ingram. Lots here tend to be larger, terrain is more varied, and native vegetation plays a bigger role in the landscape. Cedar management, seasonal bed maintenance on properties with native plantings, and lawn mowing on larger or irregular lot shapes are the most common services we provide in this part of the city.',
  },
  {
    name: 'Downtown Kerrville & Historic Neighborhoods',
    body: 'Downtown Kerrville and the historic neighborhoods clustered around Water Street, Earl Garrett Street, and the blocks surrounding the Museum of Western Art feature older homes with established, sometimes complex landscapes. Mature trees with significant canopy, raised beds, stone borders, and properties that mix turf, hardscape, and landscaped areas are all common here. These properties reward careful, experienced work -- and penalize the kind of fast, careless service that damages roots, nicks bark, or leaves beds in worse shape than before.',
  },
  {
    name: 'Schreiner University Area',
    body: 'The neighborhoods surrounding Schreiner University on the east side of central Kerrville include a mix of owner-occupied homes, rental properties, and residential streets that benefit from consistent lawn maintenance. This is a part of town where reliable, show-up-on-time service makes a real difference for homeowners who want their properties maintained to a consistent standard throughout the growing season.',
  },
  {
    name: 'Newer Developments & Growing Areas',
    body: 'Kerrville continues to grow, and newer subdivisions and developments on the edges of the city present different lawn care needs than the established neighborhoods closer to downtown. New construction lawns often need careful establishment mowing, early weed management, and sod installation in areas where turf coverage is incomplete. We work on new-construction properties across the growing edges of Kerrville and understand the specific needs of recently installed landscapes.',
  },
];

const services = [
  {
    icon: <Scissors className="w-5 h-5 text-[#5a5a5a]" />,
    title: 'Lawn Mowing & Maintenance',
    body: 'Our Complete Lawn Mowing Bundle covers mowing, trimming, edging, and full cleanup on every visit. Weekly and bi-weekly schedules are available throughout the growing season. Lawn mowing Kerrville homeowners can rely on -- no cancelled visits, no last-minute rescheduling, just consistent professional service.',
    link: '/services/lawn-mowing-bundle',
    linkLabel: 'Lawn Mowing Bundle',
  },
  {
    icon: <Sun className="w-5 h-5 text-[#5a5a5a]" />,
    title: 'Lawn Care & Seasonal Treatments',
    body: 'Fertilization timed to warm-season grass growth cycles, pre-emergent weed control applied before germination windows, and spot treatments as needed through the season. A coordinated lawn care program keeps Kerrville turf healthy through summer heat and positions it well for the following spring.',
    link: '/services/lawn-care-maintenance',
    linkLabel: 'Lawn Care & Maintenance',
  },
  {
    icon: <Trees className="w-5 h-5 text-[#5a5a5a]" />,
    title: 'Tree & Hedge Trimming',
    body: 'Kerrville properties are full of live oaks, cedar elms, pecans, and cedar. Proper seasonal trimming improves appearance, manages canopy over structures, and keeps plants healthy. Tree trimming Kerrville homeowners schedule annually is one of the best investments for long-term landscape health and property presentation.',
    link: '/services/tree-hedge-trimming',
    linkLabel: 'Tree & Hedge Trimming',
  },
  {
    icon: <Layers className="w-5 h-5 text-[#5a5a5a]" />,
    title: 'Mulch Installation & Bed Work',
    body: 'Landscape bed clearing, professional mulch installation, bed renovation, and flower bed planting. Fresh mulch beds suppress weeds, retain moisture through Kerrville summers, and give any property a polished, well-maintained look. Landscape services Kerrville homeowners schedule annually for the biggest visual impact per dollar.',
    link: '/services/mulch-installation',
    linkLabel: 'Mulch Installation',
  },
  {
    icon: <Sprout className="w-5 h-5 text-[#5a5a5a]" />,
    title: 'Sod Installation',
    body: 'Bare patches, new construction lawns, or full lawn replacement -- we handle sod installation throughout Kerrville. We prepare the ground properly before installation and use Bermuda, Zoysia, or St. Augustine depending on the site conditions and your goals. Properly installed sod establishes quickly and gives a lawn an immediately finished look.',
    link: '/services/sod-installation',
    linkLabel: 'Sod Installation',
  },
  {
    icon: <Leaf className="w-5 h-5 text-[#5a5a5a]" />,
    title: 'Seasonal Cleanup & One-Time Services',
    body: 'Not every property needs a recurring program. We handle one-time cleanups, pre-season bed prep, post-storm debris clearing, and other single-visit jobs throughout Kerrville. If you have a specific project or a property that needs to be brought back up to standard, contact us for a quote.',
    link: '/services',
    linkLabel: 'All Services',
  },
];

const images = [
  {
    src: '/Hero_Page_Image.jpg',
    alt: 'Established Kerrville home with professionally maintained lawn and mature landscaping',
    caption: 'Professionally maintained lawn on an established Kerrville property -- clean edges, healthy turf, and well-kept landscape beds.',
  },
  {
    src: '/kerrville_slightly_lighter.jpg',
    alt: 'Kerrville Texas Hill Country landscape with live oaks and maintained grounds near the Guadalupe River',
    caption: 'The Hill Country character of Kerrville -- mature live oaks, natural terrain, and properties that reward knowledgeable local care.',
  },
  {
    src: '/lawn_tools_under_2mb.jpg',
    alt: 'Professional lawn care equipment used for mowing and landscaping services in Kerrville Texas',
    caption: 'Professional-grade equipment serviced and ready for every visit -- the foundation of consistent, reliable lawn care in Kerrville.',
  },
];

export default function ServiceAreaKerrvillePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="areas" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link
              to="/service-areas"
              className="text-sm tracking-[0.2em] text-[#8a8a8a] hover:text-[#4a4a4a] transition-colors uppercase"
            >
              Service Areas
            </Link>
            <span className="text-[#d0cdc5]">/</span>
            <span className="text-sm tracking-[0.2em] text-[#4a4a4a] uppercase">Kerrville</span>
          </div>
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">LAWN CARE · KERRVILLE, TX</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight max-w-5xl">
            Lawn Care & Landscaping Services in Kerrville, Texas
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            Reliable, professional lawn care and landscaping for homes and properties throughout Kerrville -- from established neighborhoods near downtown to newer developments on the city's edges.
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
      <div className="px-8 md:px-16 lg:px-32 bg-[#e8e5dd] pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-72 md:h-96 lg:h-[480px] rounded-lg overflow-hidden mt-12">
            <img
              src="/Hero_Page_Image.jpg"
              alt="Professional lawn care and landscaping service in Kerrville Texas"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">BASED RIGHT HERE IN KERRVILLE</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Your Local Lawn Care Company in Kerrville
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                Kerrville Lawn Company is based at 112 Holly Hill Dr, Kerrville, TX 78028 -- which means Kerrville is not just a market we serve, it is where we live and work. We maintain properties across every part of the city, from the mature residential neighborhoods near downtown to the newer subdivisions developing on Kerrville's growing edges, and we bring genuine local knowledge to every property we touch.
              </p>
              <p>
                Lawn care Kerrville homeowners can actually rely on is harder to find than it should be. We built this company on the principle that showing up when we say we will, doing the work correctly, and communicating honestly with customers should be the baseline -- not a differentiator. That commitment has built us a reputation throughout the city that we work every day to deserve.
              </p>
              <p>
                We provide the full range of lawn and landscape services Kerrville properties need: regular mowing and maintenance, seasonal lawn care programs, tree and hedge trimming, mulch installation and bed work, and sod installation for new construction and lawn renovation projects. Whether you need a straightforward weekly mowing schedule or a comprehensive property maintenance program, we have the experience and the local knowledge to deliver it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why local expertise matters */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full h-96 rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/kerrville_slightly_lighter.jpg"
                alt="Hill Country terrain and live oak trees characteristic of Kerrville Texas properties"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">HILL COUNTRY KNOWLEDGE</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Why Local Expertise Matters in Kerrville
              </h2>
              <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
                <p>
                  Kerrville sits at the intersection of several distinct landscape challenges that general lawn care companies -- particularly regional chains or out-of-area operators -- often underestimate. The soil throughout most of the city is shallow, rocky, and strongly alkaline, sitting over limestone and caliche at varying depths. What grows well, when to fertilize, and how to prepare a bed for new plantings all depend on understanding these conditions rather than applying standard regional practices.
                </p>
                <p>
                  The tree canopy on established Kerrville properties is another significant factor. Live oaks, cedar elms, and Texas live oaks are beautiful and iconic, but they drop significant leaf and debris loads in late spring and fall, create challenging root environments for turf beneath their canopy, and require careful trimming -- not the aggressive cutting that can harm these long-lived trees. We understand the pruning windows and techniques that keep Kerrville's mature trees healthy while maintaining the properties around them.
                </p>
                <p>
                  Kerrville's seasonal weather patterns -- hot, dry summers with occasional drought conditions, mild winters with periodic hard freezes, and spring green-up timing that varies year to year -- also shape how we approach fertilization timing, pre-emergent weed control application, and the scheduling of seasonal services. This is knowledge that comes from working in Kerrville year-round, not from a national database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">THROUGHOUT THE CITY</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Neighborhoods & Landmarks We Serve in Kerrville
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              We work across every part of Kerrville. Each neighborhood has its own character and its own lawn care demands -- here is how we think about the areas we serve most regularly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {neighborhoods.map(({ name, body }) => (
              <div key={name} className="bg-[#e8e5dd] p-8 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-[#8a8a8a] flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-light text-[#5a5a5a] leading-snug">{name}</h3>
                </div>
                <p className="text-[#4a4a4a] leading-relaxed text-sm pl-7">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image showcase */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">KERRVILLE PROPERTIES</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              The Properties & Landscapes We Work On
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map(({ src, alt, caption }) => (
              <div key={caption} className="flex flex-col gap-4">
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <img src={src} alt={alt} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-[#6a6a6a] leading-relaxed">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHAT WE DO</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Services We Commonly Provide in Kerrville
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              From weekly lawn mowing to complete landscape renovation, these are the services Kerrville homeowners request most often.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, body, link, linkLabel }) => (
              <div key={title} className="bg-[#e8e5dd] p-8 rounded-lg flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#d0cdc5] flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <h3 className="text-xl font-light text-[#5a5a5a] mt-1 leading-snug">{title}</h3>
                </div>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{body}</p>
                <Link
                  to={link}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#8a8a8a] hover:text-[#4a4a4a] transition-colors uppercase mt-auto"
                >
                  {linkLabel}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes Kerrville properties unique */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">KNOW YOUR PROPERTY</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                What Makes Kerrville Properties Unique
              </h2>
              <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
                <p>
                  Kerrville is not a flat, uniform suburban landscape. The city sits on and around a series of ridges and draws cut by the Guadalupe River and its tributaries, which means lot topography varies dramatically from one neighborhood to the next. A property along the river bottom may have deep, productive soil and gentle terrain. A property on the limestone ridges above town may have three inches of topsoil over solid rock and grades steep enough to require care with standard mowing equipment.
                </p>
                <p>
                  The mature tree canopy is both one of Kerrville's greatest landscape assets and one of its most demanding maintenance challenges. Live oaks are semi-evergreen and drop leaves in early spring -- a phenomenon called "live oak leaf drop" that differs from the familiar fall color of deciduous trees and can leave lawns and beds buried in debris during the period when homeowners expect them to look their best. Managing the debris loads from mature trees, timing trimming correctly, and maintaining healthy turf under significant tree canopy are all skills that come from working with these trees specifically.
                </p>
                <p>
                  Cedar -- specifically Ashe Juniper, locally called cedar -- is another defining feature of the Kerrville landscape. Left unmanaged on a property, cedar spreads aggressively and can take over otherwise open areas within a few years. Cedar trimming and management are practical maintenance needs for many Kerrville properties, particularly those on the edges of town where the native landscape meets maintained grounds.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { label: 'Rocky, shallow soil over limestone and caliche', detail: 'Affects fertilizer absorption, bed preparation depth, and plant selection throughout most of the city.' },
                { label: 'Significant grade variation across lots', detail: 'Hillside properties require appropriate equipment and technique -- not every mowing crew is set up for sloped terrain.' },
                { label: 'Mature live oak and cedar elm canopy', detail: 'Beautiful, long-lived trees that require careful pruning and generate significant seasonal debris loads.' },
                { label: 'Semi-evergreen live oak leaf drop in spring', detail: 'Unlike fall leaf drop on deciduous trees, live oak leaf drop in March and April requires specific cleanup timing.' },
                { label: 'Invasive cedar (Ashe Juniper) pressure', detail: 'On properties near open land, cedar manages itself aggressively -- annual trimming or removal is a real maintenance need.' },
                { label: 'Hot, dry summers with drought stress risk', detail: 'Summer heat in Kerrville routinely exceeds 100 degrees. Proper turf selection, fertilization timing, and mulching in beds make a measurable difference in plant health through summer.' },
                { label: 'Alkaline soil pH affects nutrient availability', detail: 'Strongly alkaline soil throughout Kerr County means iron chlorosis and other nutrient deficiencies are common -- addressed through the right fertilizer formulations and application timing.' },
              ].map(({ label, detail }) => (
                <div key={label} className="bg-[#f5f1e8] p-5 rounded-lg flex items-start gap-4">
                  <Check className="w-4 h-4 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-light text-[#5a5a5a] mb-1">{label}</p>
                    <p className="text-sm text-[#6a6a6a] leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">HOW WE WORK</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Our Approach to Serving Kerrville Homeowners
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Reliable Scheduling', body: 'We build our weekly schedules realistically and communicate ahead of time if anything changes. Kerrville homeowners who have been burned by unreliable services before notice the difference immediately. Showing up consistently is the foundation everything else is built on.' },
              { step: '02', title: 'Respect for Each Property', body: 'We close gates behind us. We avoid driving on lawns in wet conditions. We take care around landscape beds, garden areas, and outdoor furniture. We treat your property the way we would want ours treated -- with basic professionalism and genuine respect.' },
              { step: '03', title: 'Thorough Cleanup on Every Visit', body: 'Our Complete Lawn Mowing Bundle includes full cleanup -- clippings blown off hard surfaces, edges cleared, beds left clean. We do not consider a visit complete until the property looks finished, not just mowed. That standard applies on every visit, not just the first one.' },
              { step: '04', title: 'Consistent Quality Across Neighborhoods', body: 'We do not provide different levels of service based on neighborhood or property size. The attention to detail, thoroughness of cleanup, and professionalism of our work are the same on every Kerrville property we maintain -- regardless of whether it is a modest residential lot or a larger estate property.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-[#e8e5dd] p-8 rounded-lg">
                <p className="text-5xl font-extralight text-[#d0cdc5] mb-4">{step}</p>
                <h3 className="text-xl font-light text-[#5a5a5a] mb-4">{title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="px-8 md:px-16 lg:px-32 py-12 border-t border-[#d0cdc5]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center text-sm tracking-wider text-[#8a8a8a]">
          <Link to="/service-areas" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">All Service Areas</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">All Services</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/lawn-mowing-bundle" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Lawn Mowing Bundle</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/tree-hedge-trimming" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Tree & Hedge Trimming</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/mulch-installation" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Mulch Installation</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/sod-installation" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Sod Installation</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">READY TO GET STARTED?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Ready to Improve Your Kerrville Property?
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Contact Kerrville Lawn Company for a free, no-obligation quote on lawn care, landscaping, tree trimming, sod installation, or any other service for your Kerrville property.
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
