import { ArrowRight, Check, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LawnMowingBundleProps {
  onOpenContact: () => void;
}

export default function LawnMowingBundle({ onOpenContact }: LawnMowingBundleProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">

      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-36 bg-[#e8e5dd]">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate('/services')}
            className="text-sm tracking-[0.2em] text-[#8a8a8a] hover:text-[#4a4a4a] transition-colors mb-8 flex items-center gap-2"
          >
            ← BACK TO SERVICES
          </button>
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-4">FEATURED SERVICE</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-6 leading-tight">
            Complete Lawn<br />Mowing Bundle
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] max-w-3xl leading-relaxed mb-10">
            Professional mowing, trimming, edging, and cleanup — everything your lawn needs, handled in one visit.
          </p>
          <button
            onClick={onOpenContact}
            className="group flex items-center gap-2 px-12 py-5 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#d8d5cd] transition-colors text-black"
          >
            GET A FREE QUOTE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-8 md:px-16 lg:px-32 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-80 md:h-[500px] rounded-lg overflow-hidden">
            <img
              src="/Hero_Page_Image.jpg"
              alt="Kerrville Lawn Company professional mowing service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Long-form Description */}
      <section className="px-8 md:px-16 lg:px-32 py-12">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#5a5a5a] mb-6 leading-snug">
                Why the Complete Lawn Mowing Bundle?
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                At Kerrville Lawn Company, we believe your lawn deserves more than a quick pass with a mower. The Texas Hill Country climate — with its long, hot summers, rocky soil, and seasonal dry spells — puts real stress on residential turf. That's why we built the Complete Lawn Mowing Bundle: a single, comprehensive visit that handles every aspect of your lawn's appearance so you don't have to coordinate separate services or settle for a half-done job.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">A Meticulous Process, Start to Finish</h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Every visit begins with a walk of your property so we understand the layout — where the grass is thickest, where it meets the driveway, where the flower beds begin. From there we mow at the correct height for your grass type and the current season, using commercial-grade equipment that produces a clean, even cut without scalding or tearing the turf. Cutting grass at the right height is one of the single most important factors in long-term lawn health, and we take it seriously.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Trimming and Edging — The Details That Matter</h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                After mowing, we move to the areas a riding mower can't reach. String trimming handles the grass along fences, around trees, near flower beds, and anywhere the mower deck can't access cleanly. Edging is where the real visual difference shows up: crisp, defined lines along your sidewalk, driveway, and curb give your lawn that sharp, cared-for look that stands out on the street. We use dedicated edging equipment — not just a tilted trimmer — to produce a clean vertical cut every time.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Complete Cleanup Included</h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                We don't leave grass clippings sitting on your walkways, driveway, or patio. After every mow, we blow all hard surfaces clean so your property looks finished, not just mowed. Clippings left on pavement create stains over time and track into the house — we clear them as a standard part of every visit, not an add-on.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Flexible Scheduling for Every Household</h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                We offer weekly, bi-weekly, and one-time service options so you can choose the cadence that fits your lawn's growth rate and your budget. During the peak growing season in spring and early summer, most lawns in the Kerrville and Ingram area benefit from weekly service to stay manageable and healthy. In the slower fall and winter months, bi-weekly visits are often the right call. We'll give you an honest recommendation based on what we see, and we're happy to adjust as seasons change.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Our Satisfaction Guarantee</h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                We're a small, owner-operated business — which means we're accountable in a way that larger companies simply aren't. If something doesn't meet your standard after a visit, tell us and we'll make it right. That's not a corporate policy; it's how we run our business. Our reputation in the Kerrville community is built one lawn at a time, and we intend to keep it that way.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Reliable, Consistent Service You Can Count On</h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                One of the most common complaints homeowners have about lawn services is unreliability — crews that skip visits without notice, show up at odd hours, or send different people each time with no consistency. We operate differently. When you're on our schedule, you'll know when to expect us, and we'll be there. No surprises, no excuses, no chasing us down for updates. Just consistent, professional service you can set your calendar to.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-4">Built for the Texas Hill Country</h3>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Lawns in Kerrville and Ingram deal with conditions that keep grass care interesting year-round: thin topsoil over caliche, summer heat that pushes into the triple digits, fast-draining soil, and a wide variety of grass types from St. Augustine to Bermuda to native buffalo grass. We know how to work with all of it. We adjust our approach based on what your specific turf needs, not a one-size-fits-all routine copied from somewhere else. This isn't a franchise operation — it's a local service run by people who live here and care about the area.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* What's Included */}
            <div className="bg-[#e8e5dd] p-8 rounded-lg">
              <h3 className="text-xl font-light text-[#5a5a5a] mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  'Professional mowing',
                  'String trimming',
                  'Defined edging',
                  'Hard surface blowdown',
                  'Quality walkthrough',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5a5a5a] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4a4a4a]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scheduling */}
            <div className="bg-[#e8e5dd] p-8 rounded-lg">
              <h3 className="text-xl font-light text-[#5a5a5a] mb-6">Schedule Options</h3>
              <ul className="space-y-3 text-[#4a4a4a]">
                <li className="flex items-center gap-3"><span className="text-[#8a8a8a]">✶</span> Weekly</li>
                <li className="flex items-center gap-3"><span className="text-[#8a8a8a]">✶</span> Bi-weekly</li>
                <li className="flex items-center gap-3"><span className="text-[#8a8a8a]">✶</span> One-time</li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="bg-[#e8e5dd] p-8 rounded-lg">
              <h3 className="text-xl font-light text-[#5a5a5a] mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Service Areas
              </h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-[#4a4a4a]">Kerrville, TX</p>
                  <p className="text-sm text-[#6a6a6a] mt-1">Including all surrounding neighborhoods and residential subdivisions throughout the Kerrville city limits.</p>
                </li>
                <li className="border-t border-[#d0cdc5] pt-4">
                  <p className="font-medium text-[#4a4a4a]">Ingram, TX</p>
                  <p className="text-sm text-[#6a6a6a] mt-1">Full coverage throughout Ingram and the Highway 39 corridor west of Kerrville.</p>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-[#5a5a5a] p-8 rounded-lg text-center">
              <p className="text-[#e8e5dd] text-lg font-light mb-2">Ready for a great lawn?</p>
              <p className="text-[#b0ada8] text-sm mb-6">(830) 383-0189</p>
              <button
                onClick={onOpenContact}
                className="w-full group flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#d0cdc5] rounded-full text-xs tracking-[0.2em] hover:bg-[#4a4a4a] transition-colors text-[#e8e5dd]"
              >
                GET A FREE QUOTE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second image */}
      <section className="px-8 md:px-16 lg:px-32 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="h-72 rounded-lg overflow-hidden">
            <img
              src="/lawn_tools_under_2mb.jpg"
              alt="Professional lawn care equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-72 rounded-lg overflow-hidden">
            <img
              src="/leaf_blower.png"
              alt="Lawn cleanup with leaf blower"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Area Detail */}
      <section className="px-8 md:px-16 lg:px-32 py-16 bg-[#e8e5dd]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-4">WHERE WE WORK</p>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-12 leading-tight">
            Serving Kerrville & Ingram
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#5a5a5a]" />
                <h3 className="text-2xl font-extralight text-[#5a5a5a]">Kerrville, TX</h3>
              </div>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Kerrville is our home base. We serve residential properties throughout the city — from the neighborhoods near the Guadalupe River to the hillside subdivisions, established older homes, and newer developments. Whether your lot is flat and easy or sloped and rocky, we have the equipment and experience to handle it cleanly. We're local, which means we're close, responsive, and personally invested in the community we serve.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#5a5a5a]" />
                <h3 className="text-2xl font-extralight text-[#5a5a5a]">Ingram, TX</h3>
              </div>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Ingram sits just west of Kerrville along the Guadalupe River corridor and Highway 39, and we service the entire area. Homes in Ingram tend to have a bit more character — larger lots, mature trees, and the kind of Hill Country terrain that requires a crew that pays attention. We navigate around trees, rock formations, and varied terrain without taking shortcuts. If you're in Ingram and looking for a reliable, quality lawn service, we'd love to earn your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-6 leading-tight">
            Let's Take Care of Your Lawn
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-10 leading-relaxed">
            Get a free, no-obligation quote for the Complete Lawn Mowing Bundle today.
          </p>
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 px-14 py-5 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-black"
          >
            GET YOUR FREE QUOTE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}
