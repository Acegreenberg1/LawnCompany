import { ArrowRight, Leaf, Award, Clock } from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export default function About({ onOpenContact }: AboutProps) {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a] pt-32">
      <section className="px-8 md:px-16 lg:px-32 py-16">
        <h1 className="text-6xl md:text-7xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-[#4a4a4a] mb-16 max-w-3xl leading-relaxed">
          Your trusted partner for exceptional lawn care in the beautiful Texas Hill Country
        </p>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
              Kerrville Lawn Company was founded with a simple mission: to provide the Kerrville and Ingram communities with reliable, high-quality lawn care services that homeowners and businesses can depend on.
            </p>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              We understand the unique challenges of maintaining beautiful lawns in the Texas Hill Country climate, and we've perfected our approach to deliver consistently outstanding results.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden h-96">
            <img
              src="/kerrville_slightly_lighter.jpg"
              alt="Beautiful Kerrville landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-12 text-center">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e8e5dd] mb-6">
                <Award className="w-8 h-8 text-[#5a5a5a]" />
              </div>
              <h3 className="text-2xl font-light text-[#5a5a5a] mb-4">
                Quality First
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                We never compromise on quality. Every lawn receives the same meticulous attention to detail, ensuring a perfectly manicured finish every time.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e8e5dd] mb-6">
                <Clock className="w-8 h-8 text-[#5a5a5a]" />
              </div>
              <h3 className="text-2xl font-light text-[#5a5a5a] mb-4">
                Reliability
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                When we say we'll be there, we'll be there. We respect your schedule and pride ourselves on consistent, dependable service you can count on.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e8e5dd] mb-6">
                <Leaf className="w-8 h-8 text-[#5a5a5a]" />
              </div>
              <h3 className="text-2xl font-light text-[#5a5a5a] mb-4">
                Local Expertise
              </h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                As a local company, we understand the unique needs of Hill Country lawns and adapt our services to the changing seasons and climate.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="rounded-lg overflow-hidden h-96">
              <img
                src="/lawn_tools_under_2mb.jpg"
                alt="Professional lawn equipment"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-6">
                Professional Equipment
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
                We invest in top-quality, well-maintained equipment to ensure every job is completed efficiently and to the highest standard. Our professional-grade tools allow us to handle properties of any size with precision and care.
              </p>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                From residential yards to commercial properties, we have the right equipment and expertise to make your lawn look its absolute best
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#e8e5dd] rounded-lg px-8 md:px-16 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-6">
            Serving Kerrville & Ingram
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-12 max-w-2xl mx-auto leading-relaxed">
            We're proud to serve the Kerrville and Ingram communities. Whether you need regular lawn maintenance or seasonal services, we're here to help your property look its best year-round.
          </p>
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 px-12 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#f5f1e8] transition-colors text-black"
          >
            GET A QUOTE TODAY
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
