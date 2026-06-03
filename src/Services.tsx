import { ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#4a4a4a]">
      {/* Featured Service: Complete Lawn Mowing Bundle */}
      <section className="px-8 md:px-16 lg:px-32 py-16 pt-32 bg-[#e8e5dd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-4">FEATURED SERVICE</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[#5a5a5a] mb-6 leading-tight">
              Complete Lawn Mowing Bundle
            </h2>
            <p className="text-xl md:text-2xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
              Everything you need for a perfectly maintained lawn, bundled into one comprehensive service
            </p>
          </div>

          {/* Bundle Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#f5f1e8] p-12 rounded-lg">
              <h3 className="text-3xl font-extralight text-[#5a5a5a] mb-8">What's Included</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#5a5a5a] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-[#4a4a4a] mb-2">Professional Mowing</h4>
                    <p className="text-[#6a6a6a]">Precision cutting with professional-grade equipment for a clean, even finish</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#5a5a5a] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-[#4a4a4a] mb-2">Trimming & Edging</h4>
                    <p className="text-[#6a6a6a]">Detailed edging around walkways, driveways, and flower beds</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#5a5a5a] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-[#4a4a4a] mb-2">Complete Cleanup</h4>
                    <p className="text-[#6a6a6a]">Thorough removal of grass clippings and debris from all surfaces</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#5a5a5a] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-[#4a4a4a] mb-2">Quality Guarantee</h4>
                    <p className="text-[#6a6a6a]">We're only satisfied when you're completely satisfied with the results</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-[#f5f1e8] p-12 rounded-lg">
                <h3 className="text-3xl font-extralight text-[#5a5a5a] mb-6">Perfect For</h3>
                <ul className="space-y-4 text-lg text-[#4a4a4a]">
                  <li className="flex items-center gap-3">
                    <span className="text-[#8a8a8a]">✶</span>
                    Residential properties
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#8a8a8a]">✶</span>
                    Small to medium-sized lawns
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#8a8a8a]">✶</span>
                    Homeowners who value quality
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#8a8a8a]">✶</span>
                    Busy professionals
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f1e8] p-12 rounded-lg">
                <h3 className="text-3xl font-extralight text-[#5a5a5a] mb-6">Scheduling Options</h3>
                <p className="text-lg text-[#4a4a4a] mb-6 leading-relaxed">
                  Choose the schedule that works best for your lawn and lifestyle
                </p>
                <ul className="space-y-4 text-lg text-[#4a4a4a]">
                  <li className="flex items-center gap-3">
                    <span className="text-[#8a8a8a]">✶</span>
                    Weekly service
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#8a8a8a]">✶</span>
                    Bi-weekly service
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#8a8a8a]">✶</span>
                    One-time service
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Equipment Image */}
          <div className="w-full h-96 rounded-lg overflow-hidden mb-12">
            <img
              src="/lawn_tools_under_2mb.jpg"
              alt="Professional lawn care equipment"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <button
              onClick={onOpenContact}
              className="group flex items-center gap-2 px-12 py-5 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-black mx-auto bg-[#f5f1e8]"
            >
              GET A QUOTE FOR THIS BUNDLE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Miscellaneous Work Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-16">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#8a8a8a] mb-6">ADDITIONAL SERVICES</p>
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="bg-[#e8e5dd] p-10 rounded-lg flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-[#d0cdc5] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#5a5a5a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 8 3 13a9 9 0 0018 0c0-5-4-10-9-10z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10m0 0l-3-3m3 3l3-3" /></svg>
            </div>
            <h3 className="text-2xl font-extralight text-[#5a5a5a]">Lawn Care & Maintenance</h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Full-service lawn care including mowing, fertilizing, weed control, and seasonal treatments to keep your grass healthy and green all year long.
            </p>
          </div>

          <div className="bg-[#e8e5dd] p-10 rounded-lg flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-[#d0cdc5] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#5a5a5a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3L7 8H4l4 4-1.5 5L12 14l5.5 3L16 12l4-4h-3L14.5 3 12 7.5 9.5 3z" /></svg>
            </div>
            <h3 className="text-2xl font-extralight text-[#5a5a5a]">Tree & Hedge Trimming</h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Professional shaping and pruning of trees, shrubs, and hedges to enhance curb appeal and encourage healthy growth throughout the seasons.
            </p>
          </div>

          <div className="bg-[#e8e5dd] p-10 rounded-lg flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-[#d0cdc5] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#5a5a5a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18M5 17V9a2 2 0 012-2h10a2 2 0 012 2v8" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V11h6v6" /></svg>
            </div>
            <h3 className="text-2xl font-extralight text-[#5a5a5a]">Sod Installation</h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Transform bare or patchy areas into lush, uniform turf with expert sod installation. We prepare the ground, lay the sod, and leave you with an instantly beautiful lawn.
            </p>
          </div>

          <div className="bg-[#e8e5dd] p-10 rounded-lg flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-[#d0cdc5] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#5a5a5a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L4 6h16l-2 12H6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4m-2-2h4" /></svg>
            </div>
            <h3 className="text-2xl font-extralight text-[#5a5a5a]">Pressure Washing</h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Restore driveways, patios, sidewalks, and fences to like-new condition with thorough pressure washing that removes dirt, grime, and built-up stains.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          <div>
            <h3 className="text-3xl font-extralight text-[#5a5a5a] mb-6">Flexible Service</h3>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              We understand that not every job fits into a standard package. That's why we offer flexible service options for miscellaneous work. Tell us what you need, and we'll provide a fair, transparent quote.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-extralight text-[#5a5a5a] mb-6">Same Quality Standards</h3>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              Whether it's our Complete Lawn Mowing Bundle or a custom project, you can expect the same level of professionalism, reliability, and attention to detail that defines our service.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 md:px-16 lg:px-32 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-[#5a5a5a] mb-8 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-12 leading-relaxed">
            Get a free, no-obligation quote for your lawn care needs today
          </p>
          <button
            onClick={onOpenContact}
            className="group flex items-center gap-2 px-12 py-5 border-2 border-[#d0cdc5] rounded-full text-xs tracking-[0.2em] hover:bg-[#e8e5dd] transition-colors text-black mx-auto"
          >
            GET YOUR FREE QUOTE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
