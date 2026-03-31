import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="pt-30 pb-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss 
            how we can collaborate to create something exceptional that exceeds your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Get In Touch</h3>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Email</p>
                <p className="text-slate-600">michelhategekimana127@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Phone</p>
                <p className="text-slate-600">+250795373185</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Location</p>
                <p className="text-slate-600">Available for remote work worldwide</p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-2">Current Availability</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                I'm currently accepting new projects and would love to discuss 
                your requirements. Typical response time is within 24 hours.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Project Details</label>
                <textarea 
                  rows="4"
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-200"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;