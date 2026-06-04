import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, Layers, Sprout, Droplets, Sun, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'How often should mulch be refreshed or topped off?',
    a: 'Most landscape beds in Kerrville and Ingram benefit from a fresh layer of mulch once per year, typically in late winter or early spring before the growing season begins. Over the course of a year, organic mulches break down, compact, and fade in color. Topping off with one to two inches of fresh material restores the weed-suppressing depth, refreshes the appearance, and adds organic matter back to the soil as the older layer continues to decompose beneath. In beds with vigorous plant growth or heavy foot traffic nearby, a mid-season touch-up may be warranted. We assess each bed and recommend what is actually needed rather than over-applying.',
  },
  {
    q: 'What is included in landscape bed clearing?',
    a: 'Bed clearing covers the full removal of unwanted material from existing landscape beds before new mulch or plants go in. This includes pulling and removing weeds and invasive grasses -- including roots where possible -- removing dead or overgrown plant material, clearing out accumulated leaves, debris, and decomposed mulch that has become matted or compacted, and edging the bed perimeter to re-establish a clean, defined border between the bed and the lawn. We haul all removed material away and leave the bed clean and ready for the next step, whether that is fresh mulch, new plantings, or both.',
  },
  {
    q: 'How deep should mulch be applied?',
    a: 'The ideal mulch depth for most landscape beds is two to three inches. This depth is sufficient to suppress weed germination, retain soil moisture, and moderate soil temperature without smothering plant crowns or creating conditions that promote root rot. Thicker is not better -- mulch piled four or more inches deep can trap too much moisture against plant stems and trunks, encouraging disease and decay. One of the most common mistakes we correct on bed renovation jobs is volcano mulching around tree trunks, where mulch has been piled high against the bark. We always pull mulch back from plant crowns and tree trunks to maintain a proper gap.',
  },
  {
    q: 'What plants do you recommend for Kerrville and Ingram landscape beds?',
    a: 'The best plant choices for Hill Country beds are ones that are adapted to the local heat, periodic drought, and alkaline soil conditions. Texas sage (Leucophyllum), Autumn sage, Mexican feathergrass, Black-eyed Susan, Turk\'s cap, Esperanza, lantana, and ornamental grasses like Gulf muhly are all excellent performers in this climate. For foundation plantings, drought-tolerant evergreen shrubs like dwarf yaupon holly, Texas mountain laurel, and rosemary provide year-round structure. We discuss your goals -- color, low maintenance, wildlife value, seasonal interest -- and recommend specific plants that will actually thrive in your beds rather than struggle through every summer.',
  },
  {
    q: 'How do I water new plantings after installation?',
    a: 'Newly installed plants need consistent moisture for the first four to six weeks while their root systems are establishing in the new soil. Water deeply at the root zone two to three times per week during the first two weeks, then transition to once or twice per week as the plant begins to show active new growth. Avoid frequent shallow watering, which keeps moisture at the surface and discourages deep root development. Once plants are established -- typically after one full growing season -- most drought-adapted Hill Country species can survive on rainfall alone during all but the most extreme dry periods. Mulch dramatically reduces how much supplemental watering new plantings need by retaining soil moisture between irrigation cycles.',
  },
  {
    q: 'Can you combine mulch installation with lawn mowing or other services?',
    a: 'Yes, and scheduling bed work alongside other services is an efficient way to manage your property. Many customers combine an annual bed clearing and mulch installation with their regular mowing schedule so the entire property looks its best in a single visit. Mulch installation also coordinates well with tree and hedge trimming -- we can trim hedges in the beds first, then follow immediately with mulching so trimmings are cleared before mulch goes down. We also regularly combine bed planting projects with our Lawn Care and Maintenance program for customers who want a comprehensive property maintenance plan.',
  },
  {
    q: 'What mulch color or type is best for my property?',
    a: 'The right choice depends on your beds, plants, and personal preference. Brown and natural hardwood mulches have a classic, neutral look that works well with most home styles and does not distract from the plants themselves. Cedar mulch is a popular choice because it resists decomposition longer than standard hardwood, has a pleasant scent, and provides some natural insect-repelling properties. Black mulch creates strong visual contrast against green foliage and light-colored borders, while red mulch adds warmth and is popular on properties with brick or terracotta tones. We show you options and help you think through what will complement your specific landscape before we order material.',
  },
  {
    q: 'How long does a mulch installation project take?',
    a: 'A standard bed clearing and mulch installation on a typical residential property -- several foundation beds and a few accent beds totaling 500 to 1,000 square feet -- is usually completed in a half to full day. Larger properties, full bed renovations with extensive plant removal, or projects that include new planting work take longer and are typically scheduled as full-day or multi-day projects. We provide a realistic timeline estimate with every quote so you know what to expect before we arrive.',
  },
  {
    q: 'Do you install edging or borders along with mulch?',
    a: 'We create clean, defined bed edges as a standard part of every mulch installation by re-cutting the border between the bed and the turf with a spade or bed edger. This crisp separation is one of the most impactful visual details in a finished landscape. If you are interested in permanent landscape edging -- steel, aluminum, or plastic edging material -- we can discuss that as an add-on to the project. Permanent edging is particularly useful for beds with curved shapes on slopes, or where aggressive grass varieties like Bermuda regularly invade bed areas.',
  },
  {
    q: 'Can new beds be created where there is currently lawn?',
    a: 'Yes. Creating a new landscape bed in a turf area is a common project we handle regularly. We outline the bed shape, remove the existing grass and its root system from the designated area, prepare the soil, install any new plants specified, and finish with mulch. New beds around foundations, along fences, at driveways, or as accent islands in open turf areas are all projects we take on. We discuss the planned shape, size, and what will go in the bed before any digging begins so you can visualize the finished result.',
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

export default function MulchInstallationPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="services" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">MULCH & BED SERVICES · KERRVILLE & INGRAM</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight max-w-5xl">
            Professional Mulch Installation & Landscape Bed Services in Kerrville & Ingram
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            Clean, refreshed landscape beds with proper mulching, professional bed clearing, and thoughtful planting projects that transform the way your property looks from the street.
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

      {/* Hero Image */}
      <div className="px-8 md:px-16 lg:px-32 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto pb-16">
          <div className="w-full h-72 md:h-96 lg:h-[480px] rounded-lg overflow-hidden mt-12">
            <img
              src="/Hero_Page_Image.jpg"
              alt="Professional mulch installation and landscape bed work in Kerrville Texas"
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
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHY IT MATTERS</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Well-Maintained Beds Make the Whole Property Look Intentional
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                A freshly mowed lawn draws attention to the beds around it -- and beds filled with weeds, faded mulch, and struggling plants undermine the entire effort. Landscape beds are the frame around the home, and when they are clean, mulched, and well-planted they pull the whole property together in a way that a mowed lawn alone cannot. Professional mulch installation Kerrville homeowners schedule annually is one of the most cost-effective improvements available for curb appeal and property presentation.
              </p>
              <p>
                Beyond appearance, properly maintained beds do important practical work. A two-to-three-inch layer of fresh mulch suppresses weed germination, dramatically reducing the time spent pulling weeds between maintenance visits. It retains soil moisture during the hot, dry stretches that are a regular part of summer in Kerrville and Ingram, reducing how much irrigation new and established plants need to stay healthy. And as organic mulch breaks down over time, it improves the structure and fertility of the soil beneath -- a particular benefit on the thin, rocky soils common throughout the Hill Country.
              </p>
              <p>
                Kerrville Lawn Company handles the full scope of landscape bed work -- from clearing overgrown beds and hauling away old material through installing fresh mulch, improving the soil, and adding new plants when a bed is ready for a refresh. Whether you need a straightforward annual mulch top-off, a complete bed clearing and renovation, or a flower bed planting Kerrville project from scratch, we approach every job with the same attention to detail and thorough cleanup.
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
              Our Mulch Installation & Landscape Bed Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Leaf className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Landscape Bed Clearing and Preparation',
                body: 'Before fresh mulch or new plants go into any bed, the existing material needs to come out. We remove weeds, invasive grasses, dead and overgrown plant material, accumulated debris, and compacted old mulch that is no longer providing any benefit. Bed edges are re-cut to restore a crisp, defined border between the bed and the surrounding turf. All removed material is hauled away and the bed is left clean and level, ready for the next phase of work. Thorough clearing is what separates a professional bed renovation from simply piling new mulch on top of existing problems.',
              },
              {
                icon: <Layers className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Full Bed Renovation and Refresh',
                body: 'Beds that have been neglected for a season or more often need more than a simple mulch top-off. Full renovation involves clearing all existing material, assessing the soil condition, amending the soil where needed, regrading the bed surface for proper drainage, and then replanting and mulching with fresh material. The result is a bed that looks completely new and is set up to stay lower-maintenance going forward. Bed renovation projects are a common early step for clients enrolling in an ongoing lawn care program who want to start with a clean, manageable baseline.',
              },
              {
                icon: <Layers className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Professional Mulch Installation',
                body: 'Mulch installation is more than dropping material and spreading it around. We apply mulch at the proper depth -- two to three inches -- to maximize weed suppression and moisture retention without smothering plant crowns. We pull mulch back from the base of all plants and trees to maintain a healthy gap rather than piling it against stems and bark. Bed edges are defined cleanly, and the finished surface is raked level and even throughout. Material selection is discussed with every client based on appearance goals, budget, and the specific needs of the bed. All packaging and debris from the installation are removed before we leave.',
              },
              {
                icon: <Sprout className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Flower Bed Planting and Landscaping Projects',
                body: 'We design and install plantings in new and existing landscape beds, from simple single-species shrub installations to multi-layer planting plans that combine structural shrubs, perennials, and seasonal color. We focus on plants that are adapted to the Hill Country climate -- drought-tolerant, heat-hardy, and suited to the alkaline soil conditions common in Kerrville and Ingram. Every planting project includes proper spacing for mature plant size, soil preparation before installation, and mulching after planting. We discuss plant selection, placement, and maintenance requirements with every client so there are no surprises as the bed develops.',
              },
              {
                icon: <Sun className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Soil Improvement and Amendment',
                body: 'The thin, rocky, alkaline soil common throughout Kerr County is one of the more challenging growing environments for landscape plantings. Where native soil is too shallow, too compacted, or too nutrient-poor to support the plantings going in, we incorporate topsoil, compost, or other amendments to create a more hospitable root environment. Soil improvement is recommended as a standard step in any new bed creation project and is assessed individually on renovation projects depending on what the existing soil shows.',
              },
              {
                icon: <Droplets className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Ongoing Bed Maintenance and Seasonal Refreshes',
                body: 'Many of our clients schedule annual or semi-annual bed maintenance visits as part of a broader lawn care program. These visits include bed clearing, weed removal, edging, and a fresh mulch top-off to maintain the weed-suppressing depth and keep the beds looking sharp year-round. Combining bed maintenance with other services in a coordinated schedule is the most efficient way to keep a property consistently well-maintained without the time and effort of managing each service separately.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-[#f5f1e8] p-10 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#d0cdc5] flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-extralight text-[#5a5a5a] mt-1">{title}</h3>
                </div>
                <p className="text-[#4a4a4a] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">THE DIFFERENCE IT MAKES</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Benefits for Kerrville & Ingram Homeowners
              </h2>
              <div className="w-full h-72 rounded-lg overflow-hidden">
                <img
                  src="/kerrville_slightly_lighter.jpg"
                  alt="Landscape beds in Kerrville Texas Hill Country"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-10 text-[#4a4a4a]">
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Dramatically Improved Curb Appeal</h3>
                <p className="text-lg leading-relaxed">
                  Fresh mulch beds with clean edges are one of the highest-impact visual upgrades available for any property. The contrast between dark, freshly applied mulch and green plants or turf immediately reads as intentional, maintained, and well cared for. Faded, weed-choked beds send the opposite signal regardless of how well the lawn is mowed. Landscape bed renovation Ingram and Kerrville homeowners schedule in spring consistently ranks among the improvements that generate the most visible change for the investment. The effect is most pronounced from the street, where first impressions are formed.',
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Significant Reduction in Ongoing Maintenance</h3>
                <p className="text-lg leading-relaxed">
                  Properly mulched beds require dramatically less maintenance than bare soil. A two-to-three-inch layer of mulch blocks sunlight from reaching the soil surface, preventing the vast majority of weed seeds from germinating. The weeds that do emerge are easier to pull because the soil beneath the mulch stays loose and friable rather than baking hard in summer heat. For homeowners who find themselves constantly pulling weeds from beds, a professional clearing and mulch installation is the most effective way to break that cycle and keep the beds manageable between visits.',
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Better Moisture Retention in Hill Country Heat</h3>
                <p className="text-lg leading-relaxed">
                  In Kerrville and Ingram, summer soil temperatures in bare beds can reach levels that are genuinely damaging to plant roots. Mulch acts as insulation, moderating soil temperature and dramatically reducing evaporation from the soil surface. Research consistently shows that mulched beds retain significantly more moisture than unmulched ones -- meaning plants in properly mulched beds need less supplemental irrigation during the dry stretches that characterize Hill Country summers. For homeowners on water-restricted schedules or managing irrigation carefully during drought, mulched beds near me are a meaningful water conservation measure.',
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Long-Term Soil Health Improvement</h3>
                <p className="text-lg leading-relaxed">
                  Organic mulches break down slowly over time, adding organic matter to the soil as they decompose. In the shallow, rocky soils that are so common throughout Kerr County, this incremental organic matter accumulation makes a real difference over successive years. Soil that started thin and compacted becomes progressively more hospitable to plant roots, holds moisture better, and supports a richer microbial ecosystem that benefits plant health naturally. The annual bed clearing Texas Hill Country homeowners schedule -- removing the compacted old layer and applying fresh material -- is not just cosmetic maintenance. It is a long-term investment in the growing conditions on the property.',
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">HOW WE WORK</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Our Professional Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Site Walkthrough and Assessment', body: 'We walk every bed on the property with you to assess current conditions -- weed pressure, plant health, soil depth, drainage, mulch depth remaining, and any specific concerns or goals you have. This assessment informs the scope of work and the material recommendation. We confirm the plan and price before any work begins.' },
              { step: '02', title: 'Bed Clearing and Debris Removal', body: 'Weeds, dead material, invasive grass, and old compacted mulch are removed from each bed. We work carefully around existing plants to preserve what should stay while clearing everything that should come out. All removed material is collected and hauled away -- nothing is left in piles on the property.' },
              { step: '03', title: 'Edge Definition', body: 'Bed edges are re-cut with a spade or bed edger to restore a clean, defined border between the bed and the surrounding turf. This step has a disproportionately large visual impact on the finished result -- a sharp edge transforms a bed from looking roughly maintained to looking professionally done.' },
              { step: '04', title: 'Soil Preparation (When Applicable)', body: 'On new bed installations or full renovations, soil amendments are incorporated before planting or mulching. This may include adding topsoil to shallow areas, working in compost to improve structure, or lightly loosening compacted soil. Soil preparation is skipped on simple mulch top-off visits where the existing bed is in good condition.' },
              { step: '05', title: 'Planting (When Included)', body: 'If the project includes new plant installation, plants go in before mulch is applied. We space plants appropriately for their mature size, set them at the correct depth, and water them in thoroughly before mulching around them. We discuss placement with you before plants go in the ground so you are satisfied with the layout.' },
              { step: '06', title: 'Mulch Installation and Final Cleanup', body: 'Fresh mulch is applied at the correct depth -- two to three inches -- across the entire bed, pulled back from plant crowns and tree trunks. The surface is raked level and even. Hard surfaces and turf edges are blown clean of any stray material. We do a final walk of the beds with you before leaving to confirm everything meets your expectations.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-[#f5f1e8] p-8 rounded-lg">
                <p className="text-5xl font-extralight text-[#d0cdc5] mb-4">{step}</p>
                <h3 className="text-xl font-light text-[#5a5a5a] mb-4">{title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Projects */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">TYPICAL PROJECTS</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Common Landscape Bed Projects We Handle
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              Every property is different, but these are the projects we handle most often for homeowners throughout Kerrville and Ingram.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Annual Mulch Refresh', body: 'The most common project we do -- clearing away the previous year\'s faded and compacted mulch, pulling weeds, redefining edges, and applying a fresh layer of quality mulch across all foundation and accent beds. Most properties need this once per year in late winter or early spring.' },
              { title: 'Full Bed Makeovers', body: 'For beds that have been neglected for multiple seasons, a full makeover involves removing all existing vegetation, improving the soil, replanting with appropriate species for the site, and mulching the finished beds. The result looks like a completely new landscape.' },
              { title: 'New Bed Creation', body: 'Creating new landscape beds in turf areas -- along foundations, fences, driveways, or as island beds in open lawn -- is a project we handle from layout through planting and mulching. New beds are a practical way to add structure and reduce the total turf area that needs mowing.' },
              { title: 'Drought-Tolerant Planting Projects', body: 'Replacing struggling water-intensive plants with drought-adapted natives and Hill Country-proven species is a popular project for homeowners who want attractive beds with less irrigation. We recommend plants suited to the specific sun, soil, and drainage conditions of each bed.' },
              { title: 'Foundation Bed Renovation', body: 'Foundation plantings frame the home and have more visual impact than any other beds on the property. We renovate tired, overgrown, or mismatched foundation plantings with a curated selection of plants scaled correctly for the home and the available space.' },
              { title: 'Combined Trimming and Mulching Projects', body: 'Many clients schedule hedge and shrub trimming alongside their annual mulch installation. We trim the plants in the beds first, then clear the bed and apply fresh mulch so the entire bed looks polished and complete in a single visit.' },
            ].map(({ title, body }) => (
              <div key={title} className="border border-[#d0cdc5] bg-[#e8e5dd] p-8 rounded-lg">
                <h3 className="text-xl font-light text-[#5a5a5a] mb-4">{title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mulch Types */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">MATERIAL CHOICES</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Mulch Types & How We Help You Choose
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
                Mulch selection comes down to appearance, longevity, and what will work best in the specific conditions of your beds. We source quality materials and walk you through the options so you can make a confident choice. Here is how the most common options compare for Kerrville and Ingram properties.
              </p>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Regardless of which material you choose, proper installation depth and technique matter more than material type. Even the best mulch applied incorrectly -- too thick against plant crowns, too shallow to suppress weeds, or applied over poorly prepared soil -- will underperform. Professional installation ensures the material does the job it is supposed to do.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { name: 'Hardwood Bark Mulch', notes: ['Classic brown color works with most home styles', 'Breaks down over 12 to 18 months, improving soil', 'Good weed suppression at proper depth', 'Most widely available and cost-effective option'] },
                { name: 'Cedar Mulch', notes: ['Natural oils slow decomposition -- lasts longer than standard hardwood', 'Pleasant cedar scent, some insect-repelling properties', 'Light tan to reddish color that fades gradually', 'A popular premium choice for high-visibility beds'] },
                { name: 'Black Dyed Mulch', notes: ['Creates strong visual contrast with green foliage and borders', 'Color is applied dye -- fades over one to two seasons', 'Works well on contemporary or high-contrast landscape designs', 'May need color touch-up sooner than undyed options'] },
                { name: 'Red Dyed Mulch', notes: ['Warm reddish tone complements brick, terracotta, and earth-toned homes', 'Similar lifespan to black dyed options', 'Popular for traditional and Southwestern-style properties', 'Discuss color match with adjacent hardscape materials before choosing'] },
                { name: 'Mini Pine Bark Nuggets', notes: ['Fine texture suits formal beds with smaller plants', 'Slower to compact than shredded hardwood', 'Good moisture retention and a natural appearance', 'Can shift in heavy rain events on sloped beds -- best for flat or level areas'] },
              ].map(({ name, notes }) => (
                <div key={name} className="bg-[#f5f1e8] p-6 rounded-lg">
                  <h3 className="text-lg font-light text-[#5a5a5a] mb-4">{name}</h3>
                  <ul className="space-y-2">
                    {notes.map((note) => (
                      <li key={note} className="flex items-start gap-3 text-[#4a4a4a] text-sm">
                        <Check className="w-4 h-4 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full h-96 rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/lawn_tools_under_2mb.jpg"
                alt="Landscape bed work equipment in Kerrville Texas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHERE WE WORK</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Mulch Installation & Bed Services Throughout Kerrville & Ingram
              </h2>
              <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
                <p>
                  We provide professional mulch installation, bed clearing, and landscape planting services throughout the city of Kerrville and the surrounding communities of Ingram, Center Point, Hunt, and the broader Hill Country region. We understand the specific challenges that local soil conditions present -- shallow topsoil over caliche and limestone, alkaline pH, rocky outcroppings that complicate bed prep, and the drainage patterns that come with sloped Hill Country lots.
                </p>
                <p>
                  Because we work on properties throughout the area year-round, we also know which plants and mulch materials perform reliably in local conditions and which ones look good at the nursery but struggle once they are in the ground. That practical, local knowledge is part of what we bring to every project.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {['Kerrville', 'Ingram', 'Center Point', 'Hunt', 'Kerrville Hills', 'Tierra Linda', 'River Hills', 'Sheppard Rees'].map((area) => (
                  <div key={area} className="flex items-center gap-3 text-[#4a4a4a]">
                    <MapPin className="w-4 h-4 text-[#8a8a8a] flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">KEEPING IT LOOKING GREAT</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Aftercare & Maintenance Tips
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Freshly mulched beds look their best immediately after installation, and with straightforward maintenance they stay sharp throughout the season. Here is what we recommend to keep new beds and plantings performing well long-term.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Watering New Plantings', body: 'New plants need consistent moisture for the first four to six weeks. Water deeply at the root zone two to three times per week during the first two weeks, then reduce frequency as the plant establishes. Mulch significantly reduces watering needs by retaining soil moisture -- but the mulch needs to be moist beneath the surface, so water slowly and deeply rather than with short, frequent cycles.' },
                { title: 'Pulling Weeds Early', body: 'The few weeds that do germinate through mulch are easiest to remove when they are small. Check beds every two to three weeks during the growing season and pull anything that emerges before it goes to seed. Weeds pulled before seeding prevent the next generation of weed pressure entirely, keeping the long-term maintenance burden low.' },
                { title: 'Maintaining Mulch Depth', body: 'Check mulch depth once during the season and add material if significant settling has occurred. The goal is to maintain two to three inches of coverage throughout the bed. Areas along edges and near irrigation heads tend to thin out fastest and may need spot attention between annual refresh visits.' },
                { title: 'Keeping Mulch Away from Stems', body: 'If mulch settles or washes against plant stems or tree trunks over the course of the season, pull it back to maintain a gap. Mulch in contact with bark creates conditions for disease and provides cover for pests. A two-to-three-inch gap between mulch and the plant\'s base is the right standard to maintain.' },
                { title: 'Scheduling Annual Refreshes', body: 'Plan for a bed clearing and mulch top-off once per year -- most homeowners do this in late winter or early spring before plants break dormancy. This timing gives the beds a fresh, clean look for the entire growing season and ensures the mulch layer is at the correct depth through the hottest months of summer.' },
              ].map(({ title, body }) => (
                <div key={title} className="bg-[#f5f1e8] p-6 rounded-lg">
                  <h3 className="text-lg font-light text-[#5a5a5a] mb-3">{title}</h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
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
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center text-sm tracking-wider text-[#8a8a8a]">
          <span>Explore more:</span>
          <Link to="/services" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">All Services</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/lawn-mowing-bundle" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Lawn Mowing Bundle</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/lawn-care-maintenance" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Lawn Care & Maintenance</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/tree-hedge-trimming" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Tree & Hedge Trimming</Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/sod-installation" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">Sod Installation</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">GET STARTED TODAY</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Professional Mulch Installation & Bed Services in Kerrville & Ingram
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Let Kerrville Lawn Company transform your landscape beds with expert mulch installation, thorough bed clearing, and beautiful planting projects throughout Kerrville and Ingram.
          </p>
          <p className="text-lg text-[#6a6a6a] mb-12">
            Serving Kerrville, Ingram, and the surrounding Texas Hill Country.
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
