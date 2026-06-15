import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, Sprout, Layers, Droplets, Sun, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'What is the best time of year to install sod in Kerrville?',
    a: 'For the warm-season grasses best suited to Kerrville and Ingram -- Bermuda, Zoysia, and St. Augustine -- late spring through early summer is the ideal installation window. Soil temperatures are consistently warm, which drives fast root establishment, and the long growing season ahead gives new sod the best possible chance to knit firmly into the ground before fall dormancy. That said, sod can be installed successfully from April through September in the Hill Country as long as adequate irrigation is in place for the critical first few weeks. We do not recommend summer installation during extreme drought unless irrigation is reliable and consistent.',
  },
  {
    q: 'How long does it take for new sod to root and establish?',
    a: 'New sod typically begins knitting into the soil within 10 to 14 days under good conditions -- you will notice that it no longer lifts easily at the edges. However, full, deep root establishment takes six to eight weeks for most warm-season grasses in Hill Country conditions. During that period the lawn needs consistent moisture and minimal foot traffic. After six to eight weeks, the root system is developed enough to handle normal use, regular mowing, and reduced watering frequency. We provide a detailed aftercare guide with every installation so you know exactly what to expect week by week.',
  },
  {
    q: 'How much does sod installation cost?',
    a: 'Sod installation pricing depends on the square footage of the area, the type of sod selected, the complexity of site preparation required, and the accessibility of the work area. Properties with rocky soil, significant slope, or limited equipment access require more labor and preparation. We provide free, detailed quotes after a site visit so you have a transparent, accurate number before any work begins. There are no hidden fees. The quote we give is the price you pay. Contact us to schedule a free assessment.',
  },
  {
    q: 'How often do I need to water new sod?',
    a: 'The first two weeks are the most critical and require the most frequent watering. For the first seven to ten days, new sod should be kept consistently moist -- this typically means watering once or twice daily, in the early morning and early afternoon, for 15 to 20 minutes per zone. Avoid watering in the evening, which keeps the sod wet overnight and promotes fungal disease. Starting in week three, you can begin transitioning to a deeper, less frequent watering schedule -- every other day, then every two to three days -- to encourage the roots to grow deeper into the soil. After six to eight weeks, water on a normal lawn schedule for your grass type.',
  },
  {
    q: 'When can I walk or mow on new sod?',
    a: 'Light foot traffic is acceptable after the first two weeks, but we recommend keeping the lawn largely undisturbed for the first 30 days. Heavy foot traffic, pets running on the lawn, or children playing can dislodge or tear sod before the roots have anchored properly. For the first mowing, wait until the grass has grown to about one-third above the recommended mowing height for your variety -- typically three to four weeks after installation -- and use a sharp blade set high. Never mow wet sod. Mowing too early or too low can pull up sod that has not yet fully rooted.',
  },
  {
    q: 'Can I install sod on a sloped or rocky lot?',
    a: 'Yes, though sloped and rocky properties require additional site preparation and care during installation. Steep slopes benefit significantly from sod rather than seed because sod provides immediate erosion control -- seed would wash away in the first rain before establishing. On slopes, we install sod horizontally across the grade and may use sod staples to hold pallets firmly in place during the rooting period. Rocky lots require more extensive soil preparation to ensure there is adequate depth of good-quality topsoil for root development. We assess every site before quoting and will let you know what preparation is needed.',
  },
  {
    q: 'What kind of soil preparation is required before sod installation?',
    a: 'Proper soil preparation is the single most important factor in whether new sod establishes successfully. We remove existing dead grass, weeds, and debris, till or loosen compacted soil to a depth of at least four to six inches, add topsoil or soil amendments where the native material is too thin, rocky, or nutrient-poor, grade the surface for positive drainage away from structures, and lightly roll to create a firm, even seedbed. Skipping or shortcutting soil preparation is the most common reason sod installations fail. We never skip it.',
  },
  {
    q: 'Is Zoysia or Bermuda a better choice for my Kerrville lawn?',
    a: 'Both are excellent choices for Hill Country properties, and the right answer depends on your specific site and priorities. Bermuda grass establishes quickly, tolerates heavy foot traffic, and is very drought-tolerant once established -- it is an excellent choice for high-use areas and properties with limited irrigation. Zoysia establishes more slowly but produces a denser, softer turf that handles shade better than Bermuda and requires slightly less frequent mowing. Zoysia is a premium choice for front lawns and high-visibility areas. We discuss your specific conditions -- sun exposure, irrigation availability, foot traffic, and budget -- and make a recommendation based on what will actually perform best on your property.',
  },
  {
    q: 'Can sod installation be combined with other services like aeration or fertilization?',
    a: 'Yes, and in many cases a combined approach produces the best long-term results. When installing sod as part of a larger lawn renovation, we often recommend pairing installation with a starter fertilizer application to support early root development and, once the lawn is established after six to eight weeks, a follow-up aeration to relieve any compaction from installation equipment. Customers who enroll in our Lawn Care and Maintenance program after sod installation get a coordinated seasonal treatment plan that keeps the new lawn healthy and progressing through its first full year.',
  },
  {
    q: 'What happens if some sod does not take or dies after installation?',
    a: 'Some degree of variability in establishment is normal, particularly in areas with extreme compaction, very shallow soil over rock, or limited irrigation coverage. We install sod correctly and provide thorough aftercare guidance to maximize success. If areas fail due to factors within our control -- improper installation, poor-quality sod -- we address them. If failures are related to inadequate watering or other aftercare issues, we will diagnose what happened and help you understand the best remediation path. We are available by phone to answer questions during the critical establishment period and we want every installation to succeed.',
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

export default function SodInstallationPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="services" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">SOD INSTALLATION · KERRVILLE & INGRAM</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight max-w-5xl">
            Professional Sod Installation in Kerrville & Ingram
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            Instant green results, fast establishment, and a beautiful lawn from day one. We handle everything from soil preparation through final installation for homeowners across the Texas Hill Country.
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
              alt="Professional sod installation in Kerrville Texas"
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
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">SOD VS. SEED</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Why Sod Is Often the Smarter Choice for Hill Country Homeowners
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                Seeding a lawn is the slower, cheaper option on paper -- but in <Link to="/service-areas/kerrville" className="underline underline-offset-2 hover:text-[#2a2a2a] transition-colors">Kerrville</Link> and <Link to="/service-areas/ingram" className="underline underline-offset-2 hover:text-[#2a2a2a] transition-colors">Ingram</Link>, the math often works out differently. The combination of thin, rocky soil, intense summer heat, and the ever-present competition from established weeds makes seed establishment genuinely difficult on many Hill Country properties. Seed requires weeks of perfect moisture conditions to germinate, then months more to develop into a lawn dense enough to use. During that window, every heavy rain event risks washing seed down a slope, every dry stretch risks killing fragile seedlings, and every weed that germinates alongside the grass competes aggressively for the limited resources in local soil.
              </p>
              <p>
                Sod changes the equation entirely. A professionally installed sod lawn looks finished and feels like a real lawn from the day of installation. It suppresses weeds immediately by covering the soil surface. It controls erosion on slopes from the moment it is laid. And because the grass is already mature and established in the sod farm before it arrives at your property, it carries its own root system into the ground rather than having to build one from scratch in difficult native soil.
              </p>
              <p>
                For homeowners who are finishing new construction, renovating a lawn that has failed after drought or disease, or simply want a reliable result on a defined timeline, sod installation in Kerrville is consistently the more dependable path to a healthy, attractive lawn. Kerrville Lawn Company handles every step of the process -- from site assessment through soil preparation, installation, and aftercare guidance.
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
              Our Sod Installation Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Sprout className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Full New Lawn Installation',
                body: 'Whether you are starting with bare dirt on a new construction lot or replacing a failed lawn from the ground up, we handle complete new lawn installations at any scale. We prepare the soil properly, source quality sod matched to your conditions, and install it with tight seams and careful attention to grade and drainage. Full installations include debris removal, topsoil addition where needed, final grading, and cleanup after completion. You end the day with a green, finished-looking lawn rather than bare ground.',
              },
              {
                icon: <Layers className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Large Area Renovation and Replacement',
                body: 'Lawns that have been severely damaged by drought, disease, freeze events, or construction activity often have too little viable grass remaining to recover through maintenance alone. Large area renovation involves removing the existing failed turf, preparing the soil, and installing fresh sod across the entire area. This approach delivers a uniform, consistent result across the renovated zone and gives the property a genuine reset rather than a patchwork repair. We match the new sod to the grass type already established on the surrounding property wherever possible.',
              },
              {
                icon: <Check className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Patch and Repair Sod Installation',
                body: 'Not every project requires a full lawn renovation. Bare spots from pet damage, foot traffic, tree removal, or localized disease can often be addressed with targeted patch installations. We remove the dead material in the affected area, prepare the soil properly, and install matching sod to blend with the existing lawn. Patch work is most successful when we can closely match the existing grass type, so we take care to source sod that will integrate visually with what is already growing on the property.',
              },
              {
                icon: <Layers className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Soil Preparation and Grading',
                body: 'Soil preparation is the step that determines whether sod establishes successfully or struggles. We remove existing vegetation, loosen compacted soil, add topsoil or organic amendments where the native material is too thin or rocky to support root development, and grade the surface to ensure positive drainage away from the home and any other structures. Proper grading prevents standing water from developing under the new sod -- a common cause of establishment failure and long-term disease problems. We treat soil preparation as a critical service, not an afterthought.',
              },
              {
                icon: <Sun className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Sod Selection Guidance',
                body: 'Not every grass type performs equally on every property. Sun exposure, irrigation availability, foot traffic, and soil conditions all influence which variety will perform best on your site. We walk through the options with you -- Bermuda for high-traffic, high-sun areas; Zoysia for a premium, dense turf with slightly better shade tolerance; St. Augustine for shadier locations with reliable irrigation. We do not push one product -- we recommend what will actually succeed on your specific property and give you realistic expectations for each option.',
              },
              {
                icon: <Droplets className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Post-Installation Aftercare Support',
                body: 'Sod installation is only successful if the critical first weeks of establishment go well, and that depends almost entirely on the watering routine the homeowner follows. We provide every customer with a clear, week-by-week aftercare and watering guide tailored to the grass type installed and the time of year. We are also available by phone during the establishment period to answer questions if something looks unusual or the lawn is not progressing as expected. Getting the aftercare right is a shared goal.',
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
                  src="/lawn_tools_under_2mb.jpg"
                  alt="Sod installation equipment and preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-10 text-[#4a4a4a]">
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Instant, Visible Results</h3>
                <p className="text-lg leading-relaxed">
                  The most obvious advantage of sod over seed is the timeline. On the day of installation, you have a green lawn. There is no waiting through a sparse germination phase, no period where the lawn looks half-done, and no months of babying fragile seedlings. For homeowners who are finishing a new build and want curb appeal from the start, preparing a home for sale, or hosting an event, the immediacy of sod is not just a convenience -- it is a genuine functional advantage. A finished lawn on day one also means no exposed soil to track into the house or wash away in the first rain.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Faster Establishment Than Seeding</h3>
                <p className="text-lg leading-relaxed">
                  While seed can take three to four months to produce a lawn dense enough to use, sod is functional in six to eight weeks. The grass arrives with an established root mass that simply needs to knit into your prepared soil rather than building from a single seed. In the Texas Hill Country, where the window of ideal growing conditions in spring and fall is relatively short, this faster establishment timeline is meaningful -- new sod installed in late spring has the entire summer growing season to develop deep roots before fall dormancy, while seed installed at the same time may not fully establish before conditions become unfavorable.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Weed Suppression from Day One</h3>
                <p className="text-lg leading-relaxed">
                  Bare soil is an open invitation for weed germination, and seeded lawns spend months in a vulnerable state where weeds compete directly with grass seedlings for space, moisture, and nutrients. Sod eliminates this vulnerability by covering the soil surface immediately and completely. The dense mat of mature grass gives weed seeds no access to light or bare soil to germinate into. Lawns established from sod consistently have lower weed pressure in their first season than seeded lawns, which reduces the amount of herbicide treatment needed and makes early lawn management significantly simpler.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Erosion Control on Slopes</h3>
                <p className="text-lg leading-relaxed">
                  Sloped properties in Kerrville and Ingram are common, and slopes present one of the most difficult challenges for any lawn establishment method. Seed simply washes down the slope in rain before it has a chance to germinate and root. Sod, by contrast, provides immediate erosion protection from the moment it is laid. The existing root mat holds soil in place through rain events, and the surface coverage prevents the runoff channels that develop on bare slopes and cause progressively worse erosion over time. For any sloped area where bare soil is exposed, sod is almost always the correct choice.
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
              Our Professional Sod Installation Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Site Assessment and Planning', body: 'We walk the entire installation area with you to evaluate existing soil conditions, drainage patterns, slope and grade, irrigation coverage, sun exposure, and any obstacles that affect installation. This assessment informs our soil preparation plan, sod variety recommendation, and final quote. Nothing moves forward until we have a clear picture of what the site needs.' },
              { step: '02', title: 'Existing Vegetation Removal', body: 'Dead grass, weeds, rocks, and debris are removed from the installation area. For existing turf, we use appropriate methods to fully clear the surface without leaving root material that would decompose under the new sod and create an uneven surface. Thorough clearing is essential for good sod-to-soil contact throughout the installation area.' },
              { step: '03', title: 'Soil Preparation and Amendment', body: 'We till or loosen the soil to a minimum depth of four to six inches to relieve compaction and create a receptive seedbed. Topsoil or compost amendments are incorporated where the native material is too shallow, too rocky, or too nutrient-poor to support strong root development. This is the step that most directly determines long-term establishment success.' },
              { step: '04', title: 'Grading for Drainage', body: 'The prepared surface is graded to slope slightly away from the home and any other structures, and to eliminate low spots where water would pool under the new sod. Even, consistent grade creates a smooth finished surface that is both easier to mow and better for long-term turf health. We check grade carefully before sod arrives.' },
              { step: '05', title: 'Sod Installation', body: 'Sod pallets are installed as soon as they arrive to minimize stress on the cut turf. We lay rows in a staggered brick pattern, pressing seams tightly together to eliminate gaps where weeds could establish. On slopes, we orient rows horizontally across the grade and use sod staples where needed to hold pieces in place during rooting. We work methodically to avoid walking on freshly installed sod during the process.' },
              { step: '06', title: 'Initial Watering and Handoff', body: 'We water the completed installation immediately and thoroughly to begin the rooting process and prevent the sod from drying out before you can establish your own watering routine. Before we leave, we walk you through the week-by-week aftercare schedule, answer your questions, and confirm you have everything you need to get the new lawn established successfully.' },
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

      {/* Grass Selection */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">CHOOSING YOUR GRASS</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              The Right Sod for Texas Hill Country Conditions
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              Grass variety selection has a significant impact on how well your new lawn performs in Kerrville and Ingram conditions. Here is how the main warm-season options compare.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Bermuda Grass',
                best: 'High-traffic, full-sun areas',
                pros: ['Fastest establishment of the warm-season varieties', 'Excellent drought tolerance once rooted', 'Handles heavy foot traffic well', 'Aggressive lateral spread fills in gaps quickly', 'Very heat-tolerant through the hardest Hill Country summers'],
                note: 'Goes dormant and browns in winter. Requires full sun -- does not perform well under tree canopy.',
              },
              {
                name: 'Zoysia Grass',
                best: 'Premium lawns, light shade',
                pros: ['Dense, soft texture -- the most attractive warm-season turf', 'Better shade tolerance than Bermuda', 'Lower mowing frequency than Bermuda in summer', 'Good drought tolerance once fully established', 'Slower lateral spread means fewer weed intrusion points once mature'],
                note: 'Slower to establish than Bermuda. Prone to large patch fungal disease in fall -- preventive fungicide recommended.',
              },
              {
                name: 'St. Augustine',
                best: 'Shadier locations with irrigation',
                pros: ['Best shade tolerance of the three common warm-season options', 'Coarse, lush texture that fills in quickly', 'Good for areas under tree canopy where Bermuda struggles', 'Well-suited to properties with consistent irrigation'],
                note: 'Requires more water than Bermuda or Zoysia. Less drought-tolerant -- not recommended for properties without reliable irrigation.',
              },
            ].map(({ name, best, pros, note }) => (
              <div key={name} className="bg-[#e8e5dd] p-8 rounded-lg flex flex-col">
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-2">{name}</h3>
                <p className="text-sm text-[#8a8a8a] tracking-wider uppercase mb-6">Best for: {best}</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {pros.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[#4a4a4a] text-sm">
                      <Check className="w-4 h-4 text-[#8a8a8a] flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#d0cdc5] pt-4">
                  <p className="text-xs text-[#6a6a6a] leading-relaxed italic">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">CRITICAL FIRST WEEKS</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Aftercare & Watering Guide
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
                The most common reason new sod fails is inadequate watering during the first two weeks. The sod arrives stressed from harvesting and transport and has a very limited root system making contact with your soil -- consistent moisture is the only thing keeping it alive while those new roots develop. Follow this schedule closely.
              </p>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                If at any point the sod feels dry to the touch, develops a grayish tint, or the edges begin pulling up, water immediately and increase frequency. In Kerrville and Ingram summer heat, conditions can change quickly and the schedule below is a baseline -- your specific weather and soil will require adjustment.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  week: 'Days 1 to 7',
                  title: 'Maximum Moisture',
                  items: [
                    'Water twice daily -- once in the early morning, once in the early-to-mid afternoon',
                    'Each watering session should run 15 to 20 minutes per zone',
                    'The soil below the sod should remain consistently moist -- lift a corner to check',
                    'Do not water in the evening -- overnight moisture promotes fungal disease',
                    'Stay off the lawn as much as possible during this period',
                  ],
                },
                {
                  week: 'Days 8 to 14',
                  title: 'Beginning to Root',
                  items: [
                    'Continue twice-daily watering, but check for rooting progress every few days',
                    'Gently tug a corner of sod -- resistance means roots are developing',
                    'Once rooting is evident, you can begin reducing afternoon watering frequency',
                    'The sod surface should no longer feel spongy or waterlogged',
                  ],
                },
                {
                  week: 'Weeks 3 and 4',
                  title: 'Transitioning to Deeper Watering',
                  items: [
                    'Reduce to once daily, or every other day, watering for longer durations',
                    'Deeper, less frequent watering encourages roots to grow down into the soil',
                    'First mowing is appropriate when the grass is one-third above the target height',
                    'Mow when dry, using a sharp blade set high -- never remove more than one-third of the blade at once',
                  ],
                },
                {
                  week: 'Weeks 5 to 8',
                  title: 'Normal Lawn Schedule',
                  items: [
                    'Transition to your normal irrigation schedule for your grass type',
                    'Light foot traffic is fine -- the lawn can handle normal use',
                    'Schedule a starter fertilizer application at six to eight weeks if not already applied',
                    'Contact us if any areas are slow to establish or showing signs of stress',
                  ],
                },
              ].map(({ week, title, items }) => (
                <div key={week} className="bg-[#f5f1e8] p-8 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-4 h-4 text-[#8a8a8a] flex-shrink-0" />
                    <div>
                      <p className="text-xs tracking-wider text-[#8a8a8a] uppercase">{week}</p>
                      <h3 className="text-lg font-light text-[#5a5a5a]">{title}</h3>
                    </div>
                  </div>
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

      {/* When Sod Makes Sense */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">IS SOD RIGHT FOR YOU?</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              When Sod Installation Makes the Most Sense
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              Sod is not always the right choice for every situation, but for many of the scenarios homeowners in Kerrville and Ingram face, it is the most reliable path to a successful lawn.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'New Construction', body: 'Bare lots after construction have minimal topsoil and high compaction from heavy equipment. Sod installed over properly prepared soil is the fastest way to establish a finished lawn and control the erosion and dust that come with bare ground.' },
              { title: 'Lawn Renovation After Drought or Disease', body: 'When less than 40 to 50 percent of the existing turf is viable, renovation through seeding is slow and unpredictable. Sod delivers a clean, uniform result across the entire renovated area in a single installation.' },
              { title: 'Time-Sensitive Projects', body: 'Selling a home, hosting an event, or finishing a landscaping project on a deadline favors sod. Seed cannot deliver a presentable lawn on a fixed timeline -- sod can.' },
              { title: 'Erosion-Prone Slopes', body: 'Sloped areas exposed to Hill Country rainfall need immediate coverage. Sod provides that from day one, while seed washes away before it has a chance to germinate.' },
              { title: 'Large Bare Areas', body: 'Extensive bare spots from pool installation, utility work, or tree removal are impractical to reseed reliably. Sod covers them completely and establishes uniformly across the entire affected area.' },
              { title: 'Difficult Seeding Windows', body: 'If a lawn fails late in the season -- too late to seed before dormancy -- sod installed in spring gives you a full year of establishment ahead rather than another season of bare ground.' },
            ].map(({ title, body }) => (
              <div key={title} className="border border-[#d0cdc5] bg-[#e8e5dd] p-8 rounded-lg">
                <h3 className="text-xl font-light text-[#5a5a5a] mb-4">{title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHERE WE WORK</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Sod Installation Throughout Kerrville & Ingram
              </h2>
              <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
                <p>
                  We provide professional new sod near me installation services throughout the city of Kerrville and the surrounding communities of Ingram, Center Point, Hunt, and the broader Hill Country corridor. Because we are locally based, we source sod from suppliers familiar with what performs in this climate and soil type, and we bring hands-on experience with the specific challenges that Hill Country properties present -- thin topsoil over caliche, rocky outcroppings, steep grades, and the particular watering demands of summer lawn renovation Kerrville conditions.
                </p>
                <p>
                  Whether your property is a flat suburban lot in an established Kerrville neighborhood, a sloped acreage outside Ingram, or a new construction site anywhere in the area, we assess the conditions honestly and build an installation plan that gives your new lawn the best possible start.
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
                alt="Kerrville Texas Hill Country landscape"
                className="w-full h-full object-cover"
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
      <section className="px-8 md:px-16 lg:px-32 py-12 border-t border-[#d0cdc5] bg-[#f5f1e8]">
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
          <Link to="/services/lawn-care-maintenance" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">
            Lawn Care & Maintenance
          </Link>
          <span className="hidden sm:block">·</span>
          <Link to="/services/tree-hedge-trimming" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">
            Tree & Hedge Trimming
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">GET STARTED TODAY</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Professional Sod Installation in Kerrville & Ingram
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Let Kerrville Lawn Company give your property an instant green lawn with expert sod installation, proper soil preparation, and everything you need to get your new turf established successfully.
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
