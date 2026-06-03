import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, Leaf, Droplets, Sprout, FlaskConical, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'How often do lawns in Kerrville need fertilizer applications?',
    a: 'Most warm-season turf grasses in the Kerrville and Ingram area benefit from three to four fertilizer applications per year, timed to match active growth periods. A pre-emergent application in late winter or early spring sets the lawn up for healthy spring green-up. A balanced summer feeding supports the turf through the most demanding stretch of heat and growth. A late-summer or early-fall application helps the grass build root reserves heading into dormancy. We assess your soil and grass type before recommending a specific schedule so you are never over- or under-applying nutrients.',
  },
  {
    q: 'Are your fertilizer and fungicide treatments safe for children and pets?',
    a: 'Yes, when applied correctly and given adequate time to dry. We use professional-grade products that meet all applicable safety standards and we always follow labeled application rates and re-entry intervals. After a liquid treatment we recommend keeping children and pets off the lawn until the product has fully dried — typically two to four hours depending on conditions. For granular applications, watering in the product before lawn use is advised. We will always communicate specific re-entry guidance at the time of service so there is no guesswork.',
  },
  {
    q: 'What is large patch disease and how do you treat it on Zoysia?',
    a: 'Large patch is a fungal disease caused by Rhizoctonia solani that is particularly common on Zoysia grass throughout the Texas Hill Country. It typically appears in fall and spring when soil temperatures drop below 70 degrees Fahrenheit and conditions are moist. The disease creates circular or irregular brown patches that can expand rapidly and cause significant cosmetic damage. We treat active large patch infections with targeted fungicide applications timed to the disease cycle, and for lawns with a history of recurring large patch we recommend a preventive fall fungicide application before conditions become favorable for infection.',
  },
  {
    q: 'What should I expect after core aeration?',
    a: 'Core aeration leaves small soil plugs on the surface of your lawn immediately after the service. These plugs look a bit messy for a few days but they break down naturally within one to two weeks as they are exposed to rain and foot traffic. The channels left behind are what matter — they allow water, oxygen, and nutrients to penetrate directly to the root zone rather than running off compacted surface soil. You may see a temporary increase in weed germination in the weeks following aeration; this is normal and a subsequent pre-emergent or spot treatment will manage it.',
  },
  {
    q: 'Can I combine Lawn Care & Maintenance with the Lawn Mowing Bundle?',
    a: 'Absolutely, and this is how most of our customers receive the best results. Regular mowing keeps your turf at the right height and prevents stress from overgrowth, while fertilizer applications, aeration, and targeted treatments actively build long-term lawn health. When we are already mowing your lawn on a recurring schedule we can easily coordinate maintenance service visits around your mowing days and identify emerging issues early — before they become expensive problems. Customers who combine both services tend to have the best-looking lawns on their street.',
  },
  {
    q: 'How long does it take to see results from fertilizer or aeration?',
    a: 'Results vary based on the service and the current condition of your lawn. Fertilizer applications typically produce visible green-up and improved turf density within two to three weeks, assuming adequate moisture is present. Aeration benefits are more gradual — you will notice better water absorption and reduced runoff fairly quickly, but the full improvement in root depth and turf density often develops over one to two growing seasons of consistent treatment. Lawns recovering from severe drought or disease damage take longer but respond well to a combined program of aeration, overseeding, and targeted nutrition.',
  },
  {
    q: 'Do you handle lawns that are already severely damaged or mostly bare?',
    a: 'Yes, lawn recovery is one of the most rewarding parts of what we do. Severely stressed or damaged lawns — whether from drought, disease, construction activity, or years of neglect — can often be rehabilitated with the right combination of treatments. We start with an honest assessment of what is salvageable and what may need to be re-established with sod or seeding. Recovery timelines depend on the extent of damage and the time of year, but most lawns show meaningful improvement within a single growing season of targeted care. We will set realistic expectations from the start.',
  },
  {
    q: 'When is the best time to overseed in Kerrville?',
    a: 'For warm-season grasses like Bermuda and Zoysia, overseeding bare or thin areas is most effective in late spring through early summer when soil temperatures are consistently above 65 degrees Fahrenheit and the plants are in active growth. This gives new seed the best germination conditions and the longest possible growing season to establish before fall dormancy. Seeding done too late in summer may not establish fully before temperatures drop. For homeowners who want year-round green color, cool-season ryegrass can be overseeded in fall, though this is primarily cosmetic rather than a permanent improvement.',
  },
  {
    q: 'How do you know which fertilizer or treatment my lawn needs?',
    a: 'We rely on a combination of visual assessment, knowledge of the grass varieties and soil types common to Kerrville and Ingram, and in some cases soil testing when a lawn shows symptoms that suggest specific deficiencies. Common indicators we look for include yellowing patterns (which can point to iron, nitrogen, or pH issues), thin or patchy growth, unusual coloration, and the presence of fungal symptoms. We will always explain what we are observing and why we are recommending a particular treatment before we begin any service.',
  },
  {
    q: 'Is there a minimum commitment for Lawn Care & Maintenance services?',
    a: 'No long-term contract is required. We offer individual treatments as needed as well as seasonal maintenance programs for customers who want a planned, consistent approach. A seasonal program is generally the most cost-effective option because it allows us to time treatments correctly and prevent problems rather than just react to them. However, if you need a single aeration, a fungicide treatment, or a fertilizer application, we are happy to provide that as a stand-alone service with a free quote.',
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

export default function LawnCareMaintenancePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="services" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* ── Hero ── */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">LAWN HEALTH · KERRVILLE & INGRAM</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight max-w-5xl">
            Lawn Care & Maintenance in Kerrville & Ingram – Healthier, Stronger Lawns
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            Going beyond mowing to actively improve turf health, recover stressed lawns, and prevent the fungal, nutritional, and compaction problems common to Texas Hill Country properties.
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
              alt="Healthy lawn care and maintenance in Kerrville Texas"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Introduction ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">MORE THAN MOWING</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Why Mowing Alone Isn't Enough for Hill Country Lawns
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                Regular mowing is the foundation of a well-kept lawn, but it does not address the underlying health of your turf. In the Texas Hill Country, lawns face a uniquely demanding combination of stressors: thin, rocky caliche soil that drains quickly and holds few nutrients, intense summer heat that can push soil surface temperatures well above 100°F, periodic drought that forces grasses into early dormancy, and seasonal swings that create ideal conditions for fungal disease. Without targeted treatments, even a regularly mowed lawn can remain chronically thin, yellowed, or vulnerable to disease.
              </p>
              <p>
                Our Lawn Care & Maintenance program addresses the full spectrum of factors that determine turf health — nutrition, soil structure, disease pressure, and recovery from damage. We offer fertilizer applications formulated for the grass types and soil chemistry common to Kerrville and Ingram, fungicide treatments for the fungal problems that commonly affect local lawns, core aeration to break up compacted Hill Country soil, and overseeding to fill in bare or thin areas. Each service is applied at the right time in the growing season for maximum effect.
              </p>
              <p>
                Whether your lawn needs a recovery program after a difficult summer, preventive treatments to stay ahead of disease, or a consistent seasonal maintenance schedule to keep it performing at its best, we can build a plan specific to your property and your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Included ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHAT WE OFFER</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Services Included in Our Lawn Care & Maintenance Program
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Leaf className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Fertilizer Applications',
                body: 'Nutrient-deficient soil is one of the most common reasons lawns in Kerrville and Ingram struggle to achieve dense, green growth. Our fertilizer programs are formulated for the warm-season grasses — Bermuda, Zoysia, St. Augustine, and buffalo grass — that dominate local properties, and they account for the shallow, mineral-heavy soil characteristic of the Edwards Plateau. We apply the right balance of nitrogen, phosphorus, potassium, and micronutrients at the optimal points in the growing season to support strong spring green-up, sustained summer growth, and healthy root development heading into fall dormancy. Iron supplementation is often included for properties whose soil pH suppresses iron availability, which is a common cause of persistent yellowing in this region.',
              },
              {
                icon: <FlaskConical className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Fungicide Treatments',
                body: 'Fungal disease is a significant and underappreciated challenge for Hill Country lawns, particularly Zoysia and St. Augustine. Large patch disease — caused by Rhizoctonia solani — is one of the most destructive, creating expanding brown or straw-colored circles that can damage large portions of a lawn in a single season if left untreated. Brown patch, take-all root rot, and gray leaf spot are other common problems we encounter on local properties. Our fungicide treatments are timed to the specific disease cycle and applied with professional equipment for even, thorough coverage. For lawns with a documented history of fungal problems, we recommend a preventive treatment program in the fall before conditions become favorable for infection.',
              },
              {
                icon: <Droplets className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Core Aeration',
                body: 'Soil compaction is a widespread problem on Hill Country properties, where the native caliche and clay subsoil packs tightly under foot and equipment traffic. Compacted soil prevents water, oxygen, and fertilizer nutrients from reaching the root zone, forcing grass to survive on surface resources that are depleted quickly in the summer heat. Core aeration uses a machine to remove small plugs of soil across the entire lawn, creating channels that allow deep penetration of water and nutrients. The results are particularly dramatic on lawns that have been mowed repeatedly without aeration — you will typically notice significantly better water infiltration and reduced runoff within a few weeks, and denser, deeper-rooted turf over the following growing season.',
              },
              {
                icon: <Sprout className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Seeding & Overseeding',
                body: 'Bare or thin areas in a lawn do not recover on their own quickly — in fact, exposed soil is rapidly colonized by weeds that outcompete grass seedlings and make recovery even harder. Overseeding thin areas with quality seed matched to your existing grass type is the most direct way to restore uniform turf density. We time seeding to the warmest part of the growing season when germination conditions are best for warm-season varieties, and we prepare seed beds properly to maximize establishment rates. For severely damaged areas, we evaluate whether seeding or sod installation is the more effective path and recommend accordingly.',
              },
              {
                icon: <Check className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Soil Amendments',
                body: 'Some lawns require more than fertilizer to improve their growing conditions. Highly alkaline soil — common throughout the limestone-underlain Edwards Plateau — suppresses the availability of iron and other micronutrients even when they are present in adequate quantities. Organic matter amendments can improve the water-holding capacity of extremely sandy or thin soils, making them less susceptible to rapid drought stress. We assess soil conditions during our initial evaluation and recommend amendments where they will produce meaningful improvements in turf performance.',
              },
              {
                icon: <Calendar className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Seasonal Maintenance Programs',
                body: 'Individual treatments address specific problems, but the best long-term results come from a planned seasonal program that coordinates fertilizer timing, disease prevention, aeration, and recovery treatments into a coherent annual schedule. Our seasonal programs take the guesswork out of lawn health management — we track what was applied, when it was applied, and what results were observed, so each year builds on the last. Customers on seasonal programs consistently have the healthiest, most resilient lawns we service.',
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

      {/* ── Benefits ── */}
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
                  src="/lawn_tools_under_2mb.jpg"
                  alt="Professional lawn care tools and equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-10 text-[#4a4a4a]">
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Thicker, Denser Turf</h3>
                <p className="text-lg leading-relaxed">
                  The most visible benefit of a consistent lawn care program is dramatically denser turf. Properly fertilized and aerated grass fills in bare spots, develops a stronger root system, and spreads to create the thick, uniform carpet that defines a truly healthy lawn. Dense turf is self-reinforcing — it shades out weed seeds, retains soil moisture more effectively, and recovers faster from any stress event. In Kerrville and Ingram, where thin soil and summer heat constantly push lawns toward sparse, weedy growth, targeted maintenance is what separates exceptional lawns from average ones.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Heat and Drought Resilience</h3>
                <p className="text-lg leading-relaxed">
                  A lawn that has been properly fertilized, aerated, and maintained throughout the spring is far better equipped to survive the punishing Texas summer. Deep root systems developed through aeration and consistent nutrition can access soil moisture several inches below the surface that shallow-rooted turf cannot reach, significantly extending the time a lawn can go without irrigation before showing stress. This matters enormously in Kerrville and Ingram, where summer water restrictions are common and the difference between a well-maintained and a neglected lawn becomes starkly visible by July.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Reduced Weed and Disease Pressure</h3>
                <p className="text-lg leading-relaxed">
                  Dense, healthy turf is the single most effective weed suppressor available. Weed seeds require exposed soil and adequate light to germinate; a thick, well-maintained lawn denies them both. Similarly, lawns with adequate nutrition and good soil structure are less prone to the environmental stresses — drought, compaction, overwatering — that make turf vulnerable to fungal disease. Our preventive treatment programs address disease risk before problems develop, which is always less expensive and less damaging than reactive treatment after a lawn is already infected.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Faster Recovery from Stress Events</h3>
                <p className="text-lg leading-relaxed">
                  Every lawn in the Hill Country goes through stress events — extended drought, unusual cold snaps, flash flood erosion, or the aftermath of construction on or near the property. A well-nourished lawn with a healthy root system recovers dramatically faster from these events than one that has been neglected. After a difficult summer, a timely fall fertilizer application and aeration can mean the difference between a lawn that bounces back in spring and one that requires expensive re-establishment. Lawn recovery in Kerrville is one of our most requested services, and consistent maintenance is the best insurance against needing it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Problems ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WE'VE SEEN IT BEFORE</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Common Lawn Problems We Help Solve
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              If your lawn has any of these issues, targeted treatment can make a significant difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Bare or Thin Patches', body: 'Common after drought stress, disease damage, heavy foot traffic, or construction activity. Overseeding and targeted nutrition help re-establish uniform turf density.' },
              { title: 'Large Patch on Zoysia', body: 'Expanding brown circles caused by Rhizoctonia solani fungus. Preventive and curative fungicide applications control the disease and limit spread.' },
              { title: 'Persistent Yellowing', body: 'Often caused by iron chlorosis in alkaline Hill Country soil, or by nitrogen deficiency. Targeted fertilizer and iron supplements restore green color quickly.' },
              { title: 'Compacted, Hard Soil', body: 'Water runs off instead of soaking in, and roots cannot penetrate deeply. Core aeration opens the soil and dramatically improves water and nutrient infiltration.' },
              { title: 'Slow Spring Green-Up', body: 'Lawns that are slow to come out of dormancy are often nutrient-depleted. A timely spring fertilizer application accelerates green-up and early-season growth.' },
              { title: 'Post-Drought Recovery', body: 'Extended drought leaves lawns thin, weakened, and vulnerable to weed invasion. A recovery program of aeration, overseeding, and staged fertilization restores health over one to two growing seasons.' },
            ].map(({ title, body }) => (
              <div key={title} className="border border-[#d0cdc5] bg-[#f5f1e8] p-8 rounded-lg">
                <h3 className="text-xl font-light text-[#5a5a5a] mb-4">{title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">HOW WE WORK</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Our Lawn Care & Maintenance Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Initial Lawn Assessment', body: 'We walk your entire property and document turf conditions — grass type, density, color, any visible disease symptoms or bare areas, soil compaction level, drainage patterns, and irrigation coverage. This assessment is the foundation for everything we recommend.' },
              { step: '02', title: 'Customized Treatment Plan', body: 'Based on the assessment we develop a service plan specific to your lawn and your goals. We explain what we recommend, why we recommend it, and what results you can expect. Nothing is applied without your understanding and approval.' },
              { step: '03', title: 'Professional Application', body: 'Fertilizer, fungicide, and soil amendments are applied using calibrated professional equipment that ensures accurate, even coverage. We follow all product label requirements for application rates, timing, and conditions — never cutting corners on safety or efficacy.' },
              { step: '04', title: 'Aeration & Seeding Execution', body: 'Core aeration is performed with commercial aerators sized appropriately for your property. Seeding follows immediately after aeration when overseeding is part of the plan, taking advantage of the open channels for improved seed-to-soil contact and germination rates.' },
              { step: '05', title: 'After-Service Guidance', body: 'We provide specific instructions for watering, traffic restrictions, and mowing timing after each treatment so you can protect the work and optimize results. Different services have different post-treatment requirements and we communicate these clearly.' },
              { step: '06', title: 'Follow-Up and Monitoring', body: 'For customers on seasonal programs, we schedule follow-up visits to assess results and adjust the plan based on what we observe. Lawn care is iterative — each season informs the next, and the goal is a lawn that requires progressively less intervention over time.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-[#e8e5dd] p-8 rounded-lg">
                <p className="text-5xl font-extralight text-[#d0cdc5] mb-4">{step}</p>
                <h3 className="text-xl font-light text-[#5a5a5a] mb-4">{title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Timing ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">TIMING IS EVERYTHING</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Best Timing for These Services in the Texas Hill Country
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed mb-8">
                The effectiveness of lawn care treatments depends heavily on application timing relative to the growing season and local weather patterns. Applying the right treatment at the wrong time can be ineffective or even counterproductive. Here is a general seasonal guide for the Kerrville and Ingram area.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { season: 'Late Winter / Early Spring  (Feb – Mar)', items: ['Pre-emergent weed control before soil reaches 55°F', 'Light starter fertilizer to support green-up', 'Assessment for winter damage and disease symptoms'] },
                { season: 'Spring  (Apr – May)', items: ['Primary fertilizer application as turf enters active growth', 'Core aeration when soil is slightly moist', 'Overseeding bare or thin areas once soil temps exceed 65°F'] },
                { season: 'Summer  (Jun – Aug)', items: ['Supplemental fertilizer as needed based on growth and color', 'Iron treatments for chlorosis in dry, alkaline conditions', 'Monitor and treat for fungal disease in humid stretches'] },
                { season: 'Fall  (Sep – Nov)', items: ['Preventive fungicide for large patch-prone Zoysia lawns', 'Late-season fertilizer to build root reserves before dormancy', 'Final aeration to improve winter moisture infiltration'] },
              ].map(({ season, items }) => (
                <div key={season} className="bg-[#f5f1e8] p-8 rounded-lg">
                  <h3 className="text-lg font-light text-[#5a5a5a] mb-4">{season}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#4a4a4a] text-sm">
                        <Check className="w-4 h-4 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHERE WE WORK</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Serving Kerrville & the Ingram Area
              </h2>
              <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
                <p>
                  We provide lawn care and maintenance services throughout the city of Kerrville and the surrounding communities of Ingram, Center Point, Hunt, and the broader Hill Country corridor. Our crews are locally based, which means we understand the specific soil types, grass varieties, and seasonal patterns that affect properties in this region in ways that a large national company simply cannot.
                </p>
                <p>
                  Whether you are dealing with thin Bermuda grass in an established Kerrville neighborhood, recurring large patch disease on a Zoysia lawn in Ingram, or the aftermath of a summer drought on a rural acreage property, we bring the same level of expertise and professional attention to every property we serve.
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
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <img
                src="/kerrville_slightly_lighter.jpg"
                alt="Kerrville Texas Hill Country"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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

      {/* ── Internal Links ── */}
      <section className="px-8 md:px-16 lg:px-32 py-12 border-t border-[#d0cdc5]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-6 items-center justify-center text-sm tracking-wider text-[#8a8a8a]">
          <span>Explore more:</span>
          <Link to="/services" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">
            All Services
          </Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/lawn-mowing-bundle" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">
            Lawn Mowing Bundle
          </Link>
          <span className="hidden sm:block">·</span>
          <Link to="/about" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">
            About Us
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">LET'S RESTORE YOUR LAWN</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Professional Lawn Care in Kerrville & Ingram
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Let Kerrville Lawn Company help you build a healthier, stronger lawn with fertilizer applications, fungicide treatments, core aeration, and targeted recovery services.
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
