import { useState } from 'react';
import { ArrowRight, Check, Phone, ChevronDown, ChevronUp, Scissors, TreePine, Wind, Shield, MapPin, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

const faqs = [
  {
    q: 'How often should trees and hedges be trimmed in Kerrville?',
    a: 'Most hedges and formal shrubs in the Kerrville and Ingram area benefit from two to three trimmings per year to maintain a clean, shaped appearance. The primary trimming season runs from late winter through early summer before the most aggressive growth flush, with a follow-up trim in late summer or early fall. Trees are different -- structural pruning is typically needed every two to three years for younger trees, and every three to five years for established mature trees. Trees with specific problems such as dead branches, crossing limbs, or storm damage should be addressed as soon as those issues are identified, regardless of the calendar.',
  },
  {
    q: 'Is tree trimming safe for my home and property?',
    a: 'When performed by experienced professionals with proper equipment and planning, tree trimming is safe for your home and property. We assess every job before we begin, identifying potential risks from branches near structures, power lines, or other obstacles. We use appropriate tools for each situation and follow established safe pruning practices. For work near structures or utilities, we take extra precautions to control the direction and landing zone of each cut. We never rush a job, and we never take on work that exceeds safe capability without proper equipment.',
  },
  {
    q: 'What happens to the branches and debris after trimming?',
    a: 'Debris hauling and cleanup are included in every job we do. After trimming is complete, we collect all cut branches, twigs, and leaf material from the work area and haul it away. Hard surfaces such as driveways, sidewalks, and patios are blown completely clean before we leave. If you prefer to keep wood from larger branches for firewood or other purposes, just let us know before the job and we can stack it rather than haul it. We leave your property looking as clean as possible -- often cleaner than before we started.',
  },
  {
    q: 'Do you top trees?',
    a: 'No. Topping is one of the most harmful practices that can be performed on a tree. It removes the majority of a tree\'s canopy, destroys its natural structure, creates large wounds that invite disease and decay, and leads to the rapid growth of weak, poorly attached sprouts that create more hazards than the original branches removed. We never top trees under any circumstances. If a tree has outgrown its space or presents a hazard, we discuss the appropriate options -- which may include selective crown reduction using proper cuts, limb removal, or in some cases, removal of the tree itself.',
  },
  {
    q: 'Can you trim trees or hedges near power lines or the house?',
    a: 'We trim hedges and shrubs near structures routinely and safely. For tree branches that are in close proximity to power lines, we assess the situation carefully. Work involving actual contact with or trimming directly adjacent to active power lines requires a licensed electrical utility crew -- we will let you know clearly when that is the case and recommend contacting your utility provider. For branches near but not contacting power lines, or near rooflines and gutters, we can perform that work safely with appropriate precautions.',
  },
  {
    q: 'What is the difference between tree trimming and tree pruning?',
    a: 'The terms are often used interchangeably, but in professional arboriculture there is a distinction. Trimming typically refers to cutting back growth for aesthetic purposes -- shaping a hedge, maintaining clearance, or keeping a tree within a desired size. Pruning refers specifically to cuts made for the health and structural benefit of the plant -- removing dead, diseased, or crossing branches, improving light penetration, or correcting poor branching structure. Most jobs involve elements of both. We approach every tree and hedge job with both goals in mind: the plant should look better and be healthier after we leave.',
  },
  {
    q: 'Can I combine tree trimming with lawn mowing or lawn care services?',
    a: 'Absolutely, and many of our customers in Kerrville and Ingram combine multiple services. Scheduling trimming and mowing on the same visit maximizes efficiency -- we can blow trimmings off lawn areas before the mower arrives, and the lawn looks its best immediately after both services are complete. We can also coordinate trimming visits with fertilizer or aeration appointments from our Lawn Care and Maintenance program. Customers who bundle services benefit from better scheduling coordination and a consistently polished property.',
  },
  {
    q: 'How is pricing determined for tree and hedge trimming?',
    a: 'Pricing depends on the size, number, and accessibility of the trees and hedges involved, the current condition and height of the growth, and the complexity of the work. A straightforward hedge trim along a flat, open property is priced differently from trimming mature oaks on a sloped, rocky lot with limited equipment access. We provide free, transparent quotes before any work begins. There are no hidden fees -- the price we quote is the price you pay. We will walk the property with you, explain what we plan to do, and answer any questions before we begin.',
  },
  {
    q: 'What should I do to prepare my property for a trimming visit?',
    a: 'Very little preparation is needed on your part. If there are vehicles parked under or near trees we will be working in, moving them the morning of the service is helpful so we have clear access and a safe drop zone for cut material. If there are specific plants, features, or areas you want us to pay particular attention to or avoid, noting those when you book or at the start of the job is always appreciated. You do not need to be home for the service as long as we have access to all work areas.',
  },
  {
    q: 'Do you handle large tree removal?',
    a: 'We handle light tree removal for accessible, ground-level work on smaller trees and large shrubs that can be safely felled and removed without specialized rigging or crane equipment. For large trees -- especially those near structures, fences, or utilities -- full removal requires specialized equipment and is outside the scope of what we offer. In those situations we can provide a referral to a qualified tree service equipped for that level of work. We will be upfront about scope from the start so there are no surprises.',
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

export default function TreeHedgeTrimmingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      <Header onNavigate={() => {}} currentPage="services" onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-40 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">TREE & HEDGE CARE · KERRVILLE & INGRAM</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight max-w-5xl">
            Professional Tree & Hedge Trimming in Kerrville & Ingram
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl leading-relaxed">
            Safe, skilled trimming that improves curb appeal, promotes plant health, and protects your home and property from storm-damaged and overgrown trees and hedges throughout the Texas Hill Country.
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
              alt="Professional tree and hedge trimming in Kerrville Texas"
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
                Proper Trimming Protects Your Property and Your Plants
              </h2>
            </div>
            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p>
                Trees and hedges on a well-maintained <Link to="/service-areas/kerrville" className="underline underline-offset-2 hover:text-[#2a2a2a] transition-colors">Kerrville</Link> or <Link to="/service-areas/ingram" className="underline underline-offset-2 hover:text-[#2a2a2a] transition-colors">Ingram</Link> property are significant assets -- they provide shade, privacy, windbreaks, and curb appeal that add real value to a home. But left unmanaged, the same trees and shrubs can become liabilities. Overgrown hedges crowd walkways and block sightlines. Dead or damaged branches hang over rooflines and vehicles. Dense canopies restrict sunlight and airflow, creating conditions that favor disease. And in a region where severe thunderstorms, high winds, and ice events are a regular part of life, poorly maintained trees are a structural risk.
              </p>
              <p>
                Professional tree trimming in Kerrville is not just about aesthetics -- it is an investment in the long-term health of your trees and the safety of your property. Proper pruning removes material that is dead, diseased, or structurally compromised, reduces the wind sail area of a canopy before storm season, and directs the plant's energy toward strong, productive growth. Shrub trimming Kerrville homeowners schedule regularly keeps formal hedges crisp and landscape beds looking intentional and well kept.
              </p>
              <p>
                Kerrville Lawn Company brings experienced, careful technique to every trimming job, whether that is a routine hedge shaping along a fence line, a multi-tree pruning project on a larger property, or targeted dead wood removal on mature oaks and cedars common throughout the Hill Country landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="px-8 md:px-16 lg:px-32 py-20 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHAT WE OFFER</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Services Included in Our Tree & Hedge Trimming
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Scissors className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Hedge & Shrub Trimming and Shaping',
                body: 'We trim and shape hedges, boxwoods, hollies, junipers, ornamental grasses, and all other common landscape shrubs found on Kerrville and Ingram properties. Whether you want a formal, geometric hedge line or a softer, naturalistic shape, we cut to the profile you prefer and maintain it consistently across every visit. We use commercial hedge trimmers and hand pruners appropriate to the scale and density of the plant, and we take care not to cut so far back that we expose bare interior wood or shock the plant. All trimmings are cleaned up and removed from the property.',
              },
              {
                icon: <TreePine className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Tree Trimming and Pruning',
                body: 'Our tree trimming work covers the full range of standard pruning objectives. Crown cleaning removes dead, diseased, and broken branches throughout the canopy. Crown raising lifts the lower canopy to improve clearance over turf areas, walkways, driveways, and structures. Crown thinning selectively removes interior branches to reduce wind resistance, improve light penetration to the lawn below, and open sightlines across the property. All cuts are made at the proper location -- at the branch collar, not as a flush cut or a stub -- to support the tree\'s natural wound-sealing response.',
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Dead, Damaged, and Crossing Branch Removal',
                body: 'Dead branches are a hazard on any property -- they can fall without warning, particularly during the high-wind events common to the Texas Hill Country in spring and summer. Damaged branches from previous storms, hail, or ice loading are similarly unpredictable. Crossing and rubbing branches create wounds where they contact each other, allowing entry points for disease and insects. We identify and remove all of these problem branches as a standard part of any tree trimming visit, improving both the safety profile and the long-term structural health of the tree.',
              },
              {
                icon: <Wind className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Storm Preparation Trimming',
                body: 'The Hill Country experiences significant storm activity, particularly in spring, with high winds, heavy rain, and occasional hail. Trees with dense, heavy canopies act as sails in high winds, creating enormous leverage on root systems and branch unions. Pre-storm-season trimming -- thinning the canopy, removing dead wood, and eliminating weak co-dominant stems -- substantially reduces the risk of storm damage to the tree itself and to anything near it. We recommend scheduling a structural assessment and trim for large trees before the peak of storm season each spring.',
              },
              {
                icon: <Shield className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Clearance Trimming Near Structures',
                body: 'Branches that overhang or contact rooflines, gutters, fences, outbuildings, and HVAC equipment cause ongoing damage that is easy to overlook until it becomes expensive. Branches dragging across shingles abrade the surface over time. Debris falling from overhead limbs clogs gutters. Dense canopy over a roof keeps it damp and promotes moss and algae growth. We trim back branches to provide safe, recommended clearance from all structures on the property, protecting the building and extending the life of roofing and exterior finishes.',
              },
              {
                icon: <Check className="w-6 h-6 text-[#5a5a5a]" />,
                title: 'Light Tree Removal and Hauling',
                body: 'For smaller trees, large overgrown shrubs, and ground-level tree removal work that does not require rigging or specialized crane equipment, we handle full removal and hauling. This includes trees up to a manageable size that can be safely felled with standard equipment. After the tree is down, we remove all material from the property -- trunk sections, branches, and surface roots -- and leave the area clean. For large trees near structures where full removal requires specialized equipment, we will be direct about that scope and can recommend appropriate referrals.',
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
                  alt="Well-maintained trees and hedges on a Kerrville property"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-10 text-[#4a4a4a]">
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Dramatically Improved Curb Appeal</h3>
                <p className="text-lg leading-relaxed">
                  Nothing transforms the appearance of a property faster than clean, well-shaped hedges and properly maintained trees. Overgrown shrubs swallow landscape beds, block architectural features, and make an otherwise tidy home look neglected. Straggly, uneven hedges undermine the clean lines of a fence or driveway. Professional shrub pruning in Kerrville restores order to landscape plantings and creates the sharp, intentional look that makes a home stand out on the street. When combined with regular lawn maintenance, the effect is a property that looks genuinely cared for at every level.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Healthier Trees and Shrubs</h3>
                <p className="text-lg leading-relaxed">
                  Plants that are pruned correctly develop stronger structure, better airflow through the canopy, and more productive growth than those left to grow without management. Removing dead and diseased wood eliminates reservoirs of decay fungi and pest populations that can spread to healthy tissue. Thinning interior branches on a dense shrub or tree allows sunlight to reach foliage throughout the plant rather than just the outer shell, producing healthier, greener growth from the inside out. Over time, consistently maintained trees and shrubs are simply more vigorous, more resilient, and longer-lived than neglected ones.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Reduced Storm Damage Risk</h3>
                <p className="text-lg leading-relaxed">
                  In the Hill Country, storms can arrive quickly and carry significant wind loads. A tree with a heavy, dense canopy, multiple co-dominant stems, or a significant volume of dead wood overhead is a risk to everything beneath it -- vehicles, fences, outbuildings, and the house itself. Pre-storm pruning that removes dead material, reduces canopy density, and eliminates structurally weak branch unions is one of the most cost-effective forms of property protection available. A damaged roof or crushed fence is always more expensive than the cost of preventive trimming.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Better Light and Airflow for Your Lawn</h3>
                <p className="text-lg leading-relaxed">
                  Heavily shaded turf areas beneath dense tree canopies struggle to compete. Grass thins out, moss and algae establish, and the lawn becomes increasingly difficult to maintain. Raising the canopy and selectively thinning interior branches allows more light to reach the ground throughout the day, dramatically improving conditions for the turf below. Improved airflow through both tree and shrub canopies also reduces the humid, still-air conditions that promote fungal disease in both the plants themselves and the grass around them.
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
              Our Professional Trimming Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Property Walkthrough and Assessment', body: 'Before any work begins, we walk the entire work area with you to identify the trees and hedges to be addressed, note specific goals or concerns, spot any hazards that will affect our approach, and confirm the scope of work. This is the time to tell us about plants you want left alone, shapes you prefer, or specific branches you are concerned about.' },
              { step: '02', title: 'Safety Planning', body: 'We identify the proximity of work areas to structures, power lines, vehicles, and other features and plan each cut accordingly. Drop zones are established and secured. We use appropriate ladders, pole pruners, and equipment for the height and scale of each job. Safety planning is not an afterthought -- it is the first step in every tree trimming job in Kerrville.' },
              { step: '03', title: 'Precise, Proper Cuts', body: 'Every cut is made at the correct location for the type of pruning being performed. Branch removals are made at the branch collar -- the slightly raised ring of tissue where the branch meets the trunk or parent limb. This location supports the tree\'s natural compartmentalization and wound-sealing response. We do not leave stubs, and we never top trees. Each cut is deliberate and serves a specific purpose.' },
              { step: '04', title: 'Hedge Shaping and Finishing', body: 'For hedges and shrubs, we shape to the agreed profile, working in sections and stepping back regularly to check evenness and symmetry. For formal, geometric hedges we use guide lines on large runs to ensure perfectly straight top lines. For naturalistic or curved shapes, we work freehand to match the plant\'s natural form while removing excess growth. We check our work from multiple angles before moving on.' },
              { step: '05', title: 'Complete Debris Collection', body: 'After trimming is complete, we collect every branch, twig, and leaf from the work area and surrounding turf and landscape beds. Large wood from tree work is cut to manageable sections and loaded for hauling. All hard surfaces are blown clean. We do not leave debris piled at the curb unless you specifically request it for your own use.' },
              { step: '06', title: 'Final Review and Walkthrough', body: 'Before we leave, we review the completed work with you. We want to confirm you are satisfied with the shape and outcome of every plant we touched. If there is anything that needs adjustment while we are still on site, we address it. Our goal is not just that the work is done -- it is that you are genuinely pleased with the result.' },
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

      {/* Common Issues */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WE HAVE SEEN IT BEFORE</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] leading-tight">
              Common Tree & Hedge Issues We Address in the Texas Hill Country
            </h2>
            <p className="text-xl text-[#4a4a4a] mt-6 max-w-3xl mx-auto leading-relaxed">
              If your property has any of these problems, professional trimming can make a significant difference quickly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Overgrown Hedges', body: 'Hedges that have not been trimmed in a season or more quickly lose their shape and begin to encroach on walkways, fences, and neighboring plants. We restore shape and scale, then maintain it on a regular schedule.' },
              { title: 'Dead or Hanging Branches', body: 'Common after drought stress, storm events, or simply age, dead branches overhead are a hazard. We identify and remove them safely before they fall on their own.' },
              { title: 'Storm-Damaged Trees', body: 'After a major storm, broken limbs and split branches create urgent safety risks. We respond promptly to assess and remove damaged material and stabilize trees where possible.' },
              { title: 'Poor Structure from Previous Topping', body: 'Trees that were improperly topped in the past develop dense clusters of weak, fast-growing sprouts at the cut points. Corrective pruning over several seasons can gradually restore a more sound structure.' },
              { title: 'Crossing and Rubbing Limbs', body: 'Branches that cross and contact each other create wounds on both, which become entry points for decay and insects. Removing the weaker of the two crossing branches early prevents long-term damage to both.' },
              { title: 'Access and Terrain Challenges', body: 'Rocky, sloped lots common in Kerrville and Ingram add complexity to tree work. We have the equipment and experience to work safely on difficult terrain and navigate the physical challenges of Hill Country properties.' },
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
                Tree & Hedge Trimming Throughout Kerrville & Ingram
              </h2>
              <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
                <p>
                  We provide professional tree trimming and shrub pruning services throughout the city of Kerrville and the surrounding communities of Ingram, Center Point, Hunt, and the broader Hill Country corridor. Our team is locally based, which means we understand the tree and shrub species common to this region -- live oak, cedar elm, Texas mountain laurel, Arizona cypress, native junipers, ornamental grasses, and the wide variety of introduced landscape plants that grow on Hill Country properties.
                </p>
                <p>
                  We also understand the terrain. Properties in Kerrville and Ingram range from flat, easy-access suburban lots to steeply sloped, rocky acreage with significant elevation changes and limited equipment access. We have worked on all of these property types and know how to approach tree care near me safely and effectively regardless of the site conditions.
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
                src="/lawn_tools_under_2mb.jpg"
                alt="Professional tree trimming equipment in Kerrville Texas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="px-8 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">WHEN TO SCHEDULE</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
                Best Timing for Trimming in the Texas Hill Country
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Timing affects both the health outcome for the plant and the practical results you see. Here is a general guide for the Kerrville and Ingram area, though the right schedule always depends on the specific plant species and the type of work being performed.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { season: 'Late Winter (Feb)', items: ['Ideal time for structural tree pruning on most species before spring growth flush', 'Dormant pruning minimizes stress and reduces disease risk on susceptible species', 'Pre-storm-season dead wood removal before spring thunderstorm activity begins'] },
                { season: 'Spring (Mar to May)', items: ['Hedge trimming after the first flush of new growth has hardened off', 'Crown thinning on shade trees to improve lawn conditions below', 'Light trimming to maintain shape as growth accelerates -- may require multiple visits'] },
                { season: 'Summer (Jun to Aug)', items: ['Mid-season hedge trim to maintain shape through the hottest months', 'Avoid heavy pruning on stressed trees during drought without irrigation support', 'Clearance trimming near structures can be done year-round as needed'] },
                { season: 'Fall (Sep to Nov)', items: ['Final hedge trim of the season before growth slows', 'Acceptable window for structural pruning on most species as temperatures cool', 'Storm damage assessment and cleanup after the late-summer storm season'] },
              ].map(({ season, items }) => (
                <div key={season} className="bg-[#e8e5dd] p-8 rounded-lg">
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-24 text-center bg-[#e8e5dd]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">GET STARTED TODAY</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Expert Tree & Hedge Trimming in Kerrville & Ingram
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-4 leading-relaxed max-w-2xl mx-auto">
            Let Kerrville Lawn Company keep your trees healthy, your hedges crisp, and your property safe with professional, careful trimming and complete cleanup on every visit.
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
