import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#d0cdc5] px-8 md:px-16 lg:px-32 py-16 bg-[#f5f1e8]">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-6">Get In Touch</h3>
          <div className="space-y-4">
            <a href="tel:+18303830189" className="flex items-center gap-3 text-[#4a4a4a] hover:text-[#2a2a2a] transition-colors">
              <Phone className="w-4 h-4" />
              <span>(830) 383-0189</span>
            </a>
            <a href="mailto:mike@kerrvillelawn.com" className="flex items-center gap-3 text-[#4a4a4a] hover:text-[#2a2a2a] transition-colors">
              <Mail className="w-4 h-4" />
              <span>mike@kerrvillelawn.com</span>
            </a>
            <div className="flex items-start gap-3 text-[#4a4a4a]">
              <MapPin className="w-4 h-4 mt-1" />
              <span>Kerrville, TX</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-6">Services</h3>
          <ul className="space-y-3 text-[#4a4a4a]">
            <li>Residential Lawn Mowing</li>
            <li>Commercial Properties</li>
            <li>Weed Eating & Trimming</li>
            <li>Misc. Lawn Care</li>
            <li>Seasonal</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-extralight text-[#5a5a5a] mb-6">Service Area</h3>
          <p className="text-[#4a4a4a] leading-relaxed mb-6">
            Proudly serving Kerrville and the surrounding communities with professional lawn care services.
          </p>
        </div>
      </div>

      <div className="pt-8 border-t border-[#d0cdc5] text-center text-sm text-[#4a4a4a]">
        <p>© {new Date().getFullYear()} Kerrville Lawn Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
