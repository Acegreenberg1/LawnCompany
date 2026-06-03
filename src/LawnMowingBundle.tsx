import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, Scissors, Wind, Star, Clock, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'How often should I have my lawn mowed in Kerrville?',
    a: 'During the active growing season — typically April through October in the Texas Hill Country — most lawns benefit from weekly mowing. Bermuda grass in particular grows aggressively in the summer heat and can go from neat to shaggy in just five to seven days. In the cooler months from November through March, bi-weekly or monthly visits are usually sufficient depending on your grass type and rainfall. We will assess your specific lawn during your initial quote and recommend a schedule that keeps it looking its best year-round without over-servicing.',
  },
  {
    q: 'What do you do with the grass clippings after mowing?',
    a: 'In most cases we mulch the clippings back into the lawn using our commercial mowers set to a mulching configuration. Finely chopped clippings break down quickly and return valuable nitrogen to the soil — essentially a free, light fertilization on every visit. When the grass is particularly tall or the clippings are too heavy to mulch effectively, we bag and remove them so they do not smother the turf. Either way, we blow all hard surfaces — driveways, sidewalks, patios — completely clean before we leave.',
  },
  {
    q: 'What happens if it rains on my scheduled service day?',
    a: 'Safety and turf health are both reasons we avoid mowing wet grass whenever possible. Wet conditions can cause our equipment to tear rather than cut turf cleanly, and clippings clump in ways that can promote fungal disease. If rain is heavy or the ground is waterlogged, we will reschedule your visit to the next available dry window — typically within one to two days. We will contact you as early as possible to let you know about any changes. Light morning dew does not typically cause us to skip a visit.',
  },
  {
    q: 'Do I need to be home during the service visit?',
    a: 'No, you do not need to be home. As long as we have clear access to your yard — gates unlocked, no vehicles blocking the driveway — we can complete the full service and be on our way. Many of our regular customers in Kerrville and Ingram are at work or running errands when we visit. We will send a notification when we are on our way and another when the job is complete, so you always know exactly when your lawn was serviced.',
  },
  {
    q: 'How do you handle rocky or sloped yards common in the Hill Country?',
    a: 'Rocky, terraced, and sloped properties are very common throughout Kerrville and Ingram, and we are well experienced working in these conditions. We use walk-behind mowers on steeper grades where a riding mower would be unsafe or could cause turf damage, and we take extra care around exposed limestone outcroppings and natural rock features. We adjust our approach on every property to protect both our equipment and your landscape. Properties with significant terrain complexity may be priced slightly higher to reflect the additional time and care required.',
  },
  {
    q: 'What grass types do you work with?',
    a: 'We work with all of the turf grass varieties common to the Texas Hill Country. Bermuda grass is the most prevalent in Kerrville and Ingram due to its heat and drought tolerance, and we are expert at mowing it at the correct height — typically between one and two inches depending on the season — to encourage dense, healthy growth. We also regularly service St. Augustine, Zoysia, and buffalo grass lawns. Each variety has its own ideal mowing height and frequency, and we calibrate our mowers accordingly on every visit.',
  },
  {
    q: 'Can you mow around sprinkler heads, landscaping, and obstacles?',
    a: 'Absolutely. We trim carefully around all sprinkler heads, landscape beds, trees, fencing, outdoor furniture, and any other fixtures in your yard. We treat your property with the same care we would want our own homes treated with. If you have new landscaping features or recently installed irrigation, just let us know ahead of the visit and we will take extra care around those areas. We never skip obstacles — we navigate them precisely so every inch of reachable turf gets properly mowed and trimmed.',
  },
  {
    q: 'How is pricing determined for the Lawn Mowing Bundle?',
    a: 'Pricing is based primarily on your lot size and the frequency of service. A weekly schedule is more cost-efficient per visit than bi-weekly because the grass stays at a manageable height and each visit takes less time. We also factor in access complexity, terrain, and the current condition of the lawn on the first visit (an overgrown lawn requires more time and may carry a one-time initial cleanup fee). We provide completely transparent, custom quotes — no hidden fees, no surprise charges. Contact us to get a free quote specific to your property.',
  },
  {
    q: 'Is there a contract or can I cancel anytime?',
    a: 'We do not lock you into a long-term contract. Our recurring lawn mowing customers pay per visit or on a monthly basis, and you can pause or cancel service with reasonable advance notice. We earn your business every single visit, which means we have every incentive to do excellent work each time we show up. That said, consistent weekly or bi-weekly service almost always produces a healthier, better-looking lawn than sporadic mowing, so most customers stick with us for years.',
  },
  {
    q: 'Do you offer one-time mowing services?',
    a: 'Yes, we do offer one-time mowing services for special situations — moving into a new home, hosting an event, or simply catching up after a busy stretch. One-time visits are priced to reflect the additional setup and the typically higher grass height we encounter. If you would like to transition to recurring service after a one-time visit, we make that easy and will apply consistent pricing going forward. Many of our longtime recurring customers started with a single call.',
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

export default function LawnMowingBundlePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="services" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* ── Hero ── */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">LAWN MOWING · KERRVILLE & INGRAM</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight max-w-5xl">
            Professional Lawn Mowing Bundle in Kerrville & Ingram
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            A complete, recurring mowing service designed for Texas Hill Country homes — reliable, thorough, and backed by a satisfaction guarantee every single visit.
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
      <div className="px-8 md:px-16 lg:px-32 -mt-1 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto pb-16">
          <div className="w-full h-72 md:h-96 lg:h-[480px] rounded-lg overflow-hidden mt-12">
            <img
              src="/Hero_Page_Image.jpg"
              alt="Professional lawn mowing service in Kerrville Texas"
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
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">ABOUT THE BUNDLE</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Consistent, Professional Lawn Care Built for Hill Country Yards
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                The Kerrville Lawn Company Lawn Mowing Bundle is a recurring professional mowing service that handles everything your lawn needs on each visit — mowing, string trimming, edging, and a complete blowdown of all hard surfaces. Rather than calling around for one-off visits or dealing with unreliable crews, you get a consistent, scheduled team that learns your property and shows up dependably, week after week.
              </p>
              <p>
                Consistent mowing is one of the single most important things you can do for the long-term health and appearance of a Texas lawn. Kerrville and Ingram sit in the heart of the Edwards Plateau, where hot summers, periodic drought, and rocky caliche soil create unique challenges for turf grass. The dominant varieties in our area — Bermuda, St. Augustine, and Zoysia — all respond dramatically to mowing frequency and height. Letting grass get too tall before cutting removes too much of the blade at once, stressing the plant and encouraging weed intrusion. Regular professional mowing keeps your turf dense, weed-competitive, and resilient through even the harshest Texas summers.
              </p>
              <p>
                Our bundle is designed specifically for homeowners who value their time and want peace of mind knowing their lawn is handled by people who genuinely care about the results. We serve all of Kerrville and the greater Ingram area, and we bring the same level of professionalism to every yard, regardless of size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">EVERY VISIT, WITHOUT EXCEPTION</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              What's Included in the Lawn Mowing Bundle
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Check className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Precision Mowing',
                body: 'We cut your turf at the optimal height for your specific grass type using commercial-grade mowers that produce a clean, uniform finish. Bermuda lawns are typically maintained at one to two inches, while St. Augustine prefers a slightly taller three to four inch height to retain moisture and outcompete weeds. We never scalp — removing more than one-third of the blade in a single pass — and we alternate mowing patterns where possible to prevent grain and reduce soil compaction from repeated wheel tracks.',
              },
              {
                icon: <Scissors className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'String Trimming',
                body: 'Commercial mowers cannot reach every corner, and that is exactly where string trimmers come in. We trim along all fence lines, around tree bases, under deck edges, beside garden borders, and in any tight area the mower cannot access. This is what separates a truly finished lawn from one that simply had the middle mowed. We take as much time on the trimming as we do on the mowing — it is what gives your yard that crisp, cared-for look up close.',
              },
              {
                icon: <Star className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Clean Edging',
                body: 'Edging along sidewalks, driveways, and curbs defines the boundary between your turf and hardscape with a sharp, clean vertical cut. Over time, grass naturally creeps into these areas and creates a ragged, unkempt appearance even when the rest of the lawn is well-mowed. Our edging creates a defined, professional border that dramatically improves curb appeal. Where beds or borders require more delicate edging to protect plantings, we adjust our technique accordingly.',
              },
              {
                icon: <Wind className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Full Blowdown & Cleanup',
                body: 'Once mowing, trimming, and edging are complete, we use commercial backpack blowers to clear all grass clippings from driveways, sidewalks, patios, and porches. No pile of clippings left on your driveway, no debris tracked onto your porch. We blow clippings back onto the lawn where they can break down naturally, or we address them according to the conditions that day. We leave every hard surface spotless before we depart.',
              },
              {
                icon: <Shield className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Quality Walk-Through',
                body: 'Before leaving your property, we do a quick walk-through to make sure nothing was missed and the finished result meets our standards. We check for any areas that may need a second pass, confirm all hard surfaces are clear, and make sure gates are secured. If you are home and want to walk through with us, we welcome that — your satisfaction is the measure of a successful visit, and we stand behind our work completely.',
              },
              {
                icon: <Clock className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Consistent Scheduling',
                body: 'Reliability is not a bonus — it is a core part of the service. When you sign up for weekly or bi-weekly lawn mowing in Kerrville or Ingram, you receive a consistent day and approximate time window. We send ahead-of-service notifications so you are never caught off guard. If anything changes on our end, we communicate proactively. Consistent scheduling is what allows your lawn to develop the healthy, uniform growth pattern that comes from regular professional maintenance.',
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
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHY IT MATTERS</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Benefits for Kerrville & Ingram Homeowners
              </h2>
              <div className="w-full h-72 rounded-lg overflow-hidden">
                <img
                  src="/lawn_tools_under_2mb.jpg"
                  alt="Professional lawn care equipment and tools"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-10 text-[#4a4a4a]">
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Curb Appeal That Lasts All Season</h3>
                <p className="text-lg leading-relaxed">
                  A well-maintained lawn is one of the first things neighbors and visitors notice about your home. In Kerrville and Ingram, where many neighborhoods have a relaxed Hill Country character, a neatly mowed, cleanly edged lawn stands out in the best possible way. It signals pride of ownership and contributes to property values across the block. Consistent professional mowing maintains that level of appearance week after week rather than the boom-and-bust cycle of DIY mowing every few weeks.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Healthier Turf Through the Texas Summer</h3>
                <p className="text-lg leading-relaxed">
                  The Texas Hill Country summer is demanding on turf. Temperatures routinely exceed 100°F, rainfall is unpredictable, and the region often faces water restrictions that limit supplemental irrigation. Healthy, dense turf is more resilient to drought stress than thin or overgrown grass. Regular mowing at the correct height encourages grass to spread laterally, creating a thick mat that retains soil moisture better, resists weed invasion, and recovers faster after dry spells. Our service is calibrated to promote turf health, not just aesthetics.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Time Savings for Busy Homeowners</h3>
                <p className="text-lg leading-relaxed">
                  Mowing, trimming, edging, and blowing a typical Kerrville home lawn can take anywhere from one to three hours depending on the lot size and terrain. In the summer heat, that is genuinely demanding physical work. When you factor in equipment maintenance, fuel, and the simple mental load of keeping up with a weekly chore, professional lawn mowing quickly becomes one of the most sensible home-care investments available. Reclaim your weekends and let us handle the yard.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Experience with Rocky and Sloped Properties</h3>
                <p className="text-lg leading-relaxed">
                  Properties in the Kerrville and Ingram area often feature the rocky, terraced landscapes that make the Hill Country so distinctive — and so challenging to mow safely. Exposed limestone outcroppings, steep grades, and irregular terrain require careful equipment selection and technique. We bring both walk-behind and stand-on mowers to handle whatever your yard presents, and our crews are experienced navigating these conditions safely and thoroughly. We will never damage your landscape features or leave hard-to-reach areas uncut.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Protection Against Common Local Issues</h3>
                <p className="text-lg leading-relaxed">
                  Overgrown grass in the Hill Country is not just an aesthetic problem. Tall grass provides ideal habitat for fire ants, fleas, ticks, and other pests that can make your yard uncomfortable and pose health risks to children and pets. In a region where cedar and oak pollen are already significant irritants, keeping turf short and well-maintained reduces additional allergen accumulation. Regular mowing also makes it easier to spot and address irrigation issues, erosion, and early signs of lawn disease before they become expensive problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">HOW WE WORK</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Our Professional Lawn Mowing Process
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              Every visit follows the same thorough process so you always know what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Property Assessment', body: 'On arrival we quickly walk the perimeter to note any new obstacles, changes since the last visit, or areas that need special attention. This takes just a few minutes but ensures nothing gets missed during the service.' },
              { step: '02', title: 'Mowing with Commercial Equipment', body: 'We mow with professional-grade equipment calibrated to your specific grass type and the current season. We adjust deck height based on grass variety and growth stage, and we alternate our mowing direction regularly to prevent grain buildup and soil compaction.' },
              { step: '03', title: 'String Trimming All Edges', body: 'Our trimmer operator follows immediately behind the mower, addressing every area the mower cannot reach — fence bases, tree rings, around posts, under overhangs, and in tight landscape corners. We take our time here because it is where the detail shows.' },
              { step: '04', title: 'Edging Hard Surfaces', body: 'We use a dedicated edger to cut a sharp, clean vertical boundary along every sidewalk, driveway apron, and curb line on the property. This step defines your lawn and creates the polished, finished appearance that sets professional mowing apart from DIY.' },
              { step: '05', title: 'Blowing and Final Cleanup', body: 'Commercial backpack blowers clear every clipping from all hard surfaces. Driveways, patios, porches, and walkways are completely clear when we finish. Any clippings near the turf edge are blown back into the lawn; heavier accumulations are handled based on conditions.' },
              { step: '06', title: 'Walk-Through and Departure', body: 'We do a final visual check of the entire property before loading equipment and leaving. Gates are secured, any moved items are returned to their original positions, and we confirm everything meets our quality standard. You will receive a completion notification so you know the job is done.' },
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

      {/* ── Service Areas ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHERE WE WORK</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Serving All of Kerrville & the Ingram Area
              </h2>
              <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
                <p>
                  Kerrville Lawn Company provides lawn mowing service throughout the city of Kerrville and the surrounding communities of Ingram, Center Point, Hunt, and the broader Hill Country area along the Guadalupe River corridor. We are locally owned and operated, which means we understand the terrain, the soil, the grass types, and the seasonal rhythms that affect lawns in this specific region.
                </p>
                <p>
                  Whether your home is in an established neighborhood close to downtown Kerrville, a newer development on the east side, a rural acreage property outside Ingram, or anywhere in between — we can provide consistent, reliable lawn mowing near you. We keep our service area focused on the communities we know best so we can maintain the schedule reliability our customers depend on.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  'Kerrville',
                  'Ingram',
                  'Center Point',
                  'Hunt',
                  'Kerrville Hills',
                  'Tierra Linda',
                  'River Hills',
                  'Sheppard Rees',
                ].map((area) => (
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

      {/* ── Pricing ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">TRANSPARENT PRICING</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Pricing & Value
              </h2>
              <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
                <p>
                  We provide custom quotes based on the specifics of your property rather than charging flat rates that end up being unfair to customers with larger or more complex yards. The primary factors that influence your quote are the total turf area to be mowed, the frequency of service, and the complexity of your terrain.
                </p>
                <p>
                  Frequency has a significant effect on price per visit. Weekly lawn mowing in Kerrville is more efficient than bi-weekly service because the grass stays at a manageable height, each visit takes less time, and we can develop a consistent routine for your property. Many customers find that weekly service actually costs less per month than they expect once they factor in equipment ownership, fuel, and their own time.
                </p>
                <p>
                  First-time visits on overgrown lawns may carry a one-time cleanup fee to account for the additional time required to bring the lawn to a maintained baseline. After that initial visit, regular pricing applies. We are always upfront about this before starting work.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#f5f1e8] p-8 rounded-lg">
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-6">Factors That Affect Your Quote</h3>
                <ul className="space-y-4">
                  {[
                    ['Lot Size', 'Larger lawns require more time and are priced accordingly'],
                    ['Service Frequency', 'Weekly visits are the most cost-effective option per visit'],
                    ['Terrain & Access', 'Rocky or sloped yards and gated properties require additional care'],
                    ['Initial Lawn Condition', 'Overgrown lawns require extra time on the first visit'],
                    ['Property Features', 'Flower beds, hardscaping, and water features require extra trimming care'],
                  ].map(([label, desc]) => (
                    <li key={label} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-[#5a5a5a] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#4a4a4a]">{label}</span>
                        <span className="text-[#6a6a6a]"> — {desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f5f1e8] p-8 rounded-lg">
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Get Your Custom Quote</h3>
                <p className="text-[#4a4a4a] mb-6 leading-relaxed">
                  Contact us for a free, no-obligation quote specific to your property. We will ask a few questions about your lawn and provide a clear price with no hidden fees.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-black"
                  >
                    GET A FREE QUOTE
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="tel:+18303830189"
                    className="group flex items-center justify-center gap-2 px-8 py-4 border border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-[#4a4a4a]"
                  >
                    <Phone className="w-4 h-4" />
                    (830) 383-0189
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prepare Your Lawn ── */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">BEFORE WE ARRIVE</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              How to Prepare Your Lawn for Service
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              A little preparation before each visit helps us work efficiently and deliver the best possible results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Clear the Lawn of Obstacles', body: 'Remove toys, garden hoses, pet bowls, sprinkler connectors, and any other movable items from the grass before we arrive. This protects your belongings and allows us to mow without interruption.' },
              { title: 'Pick Up After Pets', body: 'Please clear any pet waste from the lawn before your service day. This protects our crew and their equipment, and ensures we can mow all areas thoroughly without having to navigate around waste.' },
              { title: 'Unlock Gates and Ensure Access', body: 'If your backyard is gated, please make sure the gate is unlocked on your service day. If access ever changes, let us know in advance so we can adjust. We cannot complete the full service if we cannot access all areas of the yard.' },
              { title: 'Hold Off on Watering the Night Before', body: 'If possible, avoid running your irrigation system the evening before your mow day. Wet grass is harder to cut cleanly, clumps more heavily, and can lead to a less polished result. Dry or lightly damp grass produces the best finish.' },
              { title: 'Note Any Changes to Your Yard', body: 'If you have had new landscaping, irrigation, or hardscaping installed since our last visit, let us know via text or phone before we arrive. New features are easy to work around when we know about them in advance.' },
              { title: 'Secure Pets Indoors', body: 'For the safety and comfort of your pets and our crew, please bring pets inside or secure them away from the work area on service days. The noise of commercial mowers and blowers can startle animals, and we want everyone to be safe.' },
            ].map(({ title, body }) => (
              <div key={title} className="border border-[#d0cdc5] p-8 rounded-lg">
                <h3 className="text-xl font-light text-[#5a5a5a] mb-4">{title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">{body}</p>
              </div>
            ))}
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
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onToggle={() => toggleFaq(i)}
              />
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
          <Link to="/about" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">
            About Us
          </Link>
          <span className="hidden sm:block">·</span>
          <Link to="/contact" className="hover:text-[#4a4a4a] transition-colors uppercase tracking-[0.2em]">
            Contact
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">GET STARTED TODAY</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Reliable Lawn Mowing in Kerrville & Ingram
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Kerrville Lawn Company is your trusted local team for professional weekly lawn mowing near you. Contact us today for a free, no-obligation quote.
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
