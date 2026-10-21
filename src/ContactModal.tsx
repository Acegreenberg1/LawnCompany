import { X } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from './lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street_address: '',
    service_type: 'Lawn Mowing',
    service_details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!supabase) {
        throw new Error('Database connection not available');
      }

      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          street_address: formData.street_address,
          service_type: formData.service_type,
          service_details: formData.service_type === 'Other' ? formData.service_details : null
        }
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        street_address: '',
        service_type: 'Lawn Mowing',
        service_details: ''
      });

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-[#f5f1e8] rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#f5f1e8] border-b border-[#d0cdc5] px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl font-extralight text-[#5a5a5a]">Get a Quote</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#e8e5dd] rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-[#4a4a4a]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Fill out the form below and we'll get back to you with a personalized quote for your property.
          </p>

          <div>
            <label htmlFor="name" className="block text-sm tracking-wider text-[#5a5a5a] mb-2">
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-[#d0cdc5] rounded-lg text-[#4a4a4a] focus:outline-none focus:border-[#b0ada5] transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm tracking-wider text-[#5a5a5a] mb-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-[#d0cdc5] rounded-lg text-[#4a4a4a] focus:outline-none focus:border-[#b0ada5] transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm tracking-wider text-[#5a5a5a] mb-2">
              PHONE
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-[#d0cdc5] rounded-lg text-[#4a4a4a] focus:outline-none focus:border-[#b0ada5] transition-colors"
              placeholder="(830) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="street_address" className="block text-sm tracking-wider text-[#5a5a5a] mb-2">
              STREET ADDRESS
            </label>
            <input
              type="text"
              id="street_address"
              name="street_address"
              value={formData.street_address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-[#d0cdc5] rounded-lg text-[#4a4a4a] focus:outline-none focus:border-[#b0ada5] transition-colors"
              placeholder="123 Main St, Kerrville, TX"
            />
          </div>

          <div>
            <label htmlFor="service_type" className="block text-sm tracking-wider text-[#5a5a5a] mb-2">
              REQUESTED SERVICE
            </label>
            <select
              id="service_type"
              name="service_type"
              value={formData.service_type}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-[#d0cdc5] rounded-lg text-[#4a4a4a] focus:outline-none focus:border-[#b0ada5] transition-colors"
            >
              <option value="Lawn Mowing">Lawn Mowing</option>
              <option value="Other">Other (type below)</option>
            </select>
          </div>

          {formData.service_type === 'Other' && (
            <div className="animate-fadeIn">
              <label htmlFor="service_details" className="block text-sm tracking-wider text-[#5a5a5a] mb-2">
                SERVICE DETAILS
              </label>
              <textarea
                id="service_details"
                name="service_details"
                value={formData.service_details}
                onChange={handleChange}
                required={formData.service_type === 'Other'}
                rows={4}
                className="w-full px-4 py-3 bg-white border-2 border-[#d0cdc5] rounded-lg text-[#4a4a4a] focus:outline-none focus:border-[#b0ada5] transition-colors resize-none"
                placeholder="Please describe the service you need..."
              />
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-green-800">
              Thank you! We've received your request and will contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-800">
              There was an error submitting your request. Please try again.
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-8 py-4 bg-[#5a5a5a] text-white rounded-full text-sm tracking-[0.3em] hover:bg-[#4a4a4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 border-2 border-[#d0cdc5] rounded-full text-sm tracking-[0.3em] hover:bg-[#e8e5dd] transition-colors text-[#4a4a4a]"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
