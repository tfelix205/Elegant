import React, { useState, useEffect } from 'react';
import { Scale, Phone, Mail, MapPin, Menu, X, ChevronRight, Users, Building, Gavel, Shield, Briefcase, Award, CheckCircle, ArrowRight, Sparkles, Zap, Eye } from 'lucide-react';

const services = [
  { icon: Briefcase, title: "Corporate Law", subtitle: "Business Excellence", gradient: "from-violet-600 via-purple-600 to-fuchsia-600" },
  { icon: Building, title: "Real Estate", subtitle: "Property Mastery", gradient: "from-emerald-600 via-teal-600 to-cyan-600" },
  { icon: Gavel, title: "Litigation", subtitle: "Court Victories", gradient: "from-rose-600 via-pink-600 to-red-600" },
  { icon: Shield, title: "IP Protection", subtitle: "Innovation Guard", gradient: "from-indigo-600 via-blue-600 to-sky-600" },
  { icon: Users, title: "Family Law", subtitle: "Personal Care", gradient: "from-amber-600 via-orange-600 to-yellow-600" },
  { icon: Zap, title: "Finance Law", subtitle: "Capital Solutions", gradient: "from-lime-600 via-green-600 to-emerald-600" }
];

const Navigation = ({ page, setPage, scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => setPage('home')}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition"></div>
            <div className="relative bg-gradient-to-br from-violet-500 to-fuchsia-500 p-3 rounded-2xl">
              <Scale className="w-7 h-7 text-white" />
            </div>
          </div>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>Okonkwo & Partners</h1>
            <p className="text-xs font-medium bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Excellence in Law</p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center space-x-1">
          {['home', 'services', 'team', 'contact'].map((p) => (
            <button key={p} onClick={() => setPage(p)} 
              className={`px-6 py-2.5 rounded-xl capitalize font-semibold transition-all duration-300 ${
                page === p 
                  ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}>
              {p}
            </button>
          ))}
        </div>

        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-t border-white/10">
          {['home', 'services', 'team', 'contact'].map((p) => (
            <button key={p} onClick={() => { setPage(p); setMenuOpen(false); }} 
              className={`block w-full text-left py-4 px-6 capitalize font-semibold ${
                page === p ? 'text-violet-400 bg-violet-500/10' : 'text-gray-300'
              }`}>
              {p}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const HomePage = ({ setPage }) => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveCard(p => (p + 1) % 3), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950">
      {/* Hero Section with Animated Gradient */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-fuchsia-600/10 to-violet-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto pt-24">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8 group hover:bg-white/10 transition cursor-pointer">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-semibold text-gray-300">Nigeria's Most Innovative Law Firm</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Legal</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Brilliance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Where precision meets passion. We don't just practice law—we redefine it for the modern Nigerian business landscape.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setPage('contact')} 
              className="group relative px-8 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl font-bold text-lg text-white overflow-hidden shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-all">
              <span className="relative z-10 flex items-center">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition"></div>
            </button>
            <button onClick={() => setPage('services')} 
              className="px-8 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-2xl font-bold text-lg text-white hover:bg-white/10 transition-all">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="relative -mt-24 z-20 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "1000+", label: "Victories", icon: Award, color: "from-violet-500 to-purple-500" },
            { num: "98%", label: "Win Rate", icon: CheckCircle, color: "from-emerald-500 to-teal-500" },
            { num: "35+", label: "Years", icon: Eye, color: "from-pink-500 to-rose-500" },
            { num: "500+", label: "Clients", icon: Users, color: "from-cyan-500 to-blue-500" }
          ].map((stat, i) => (
            <div key={i} className="group bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all hover:scale-105 cursor-pointer">
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-black text-white mb-2">{stat.num}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Preview with Bento Grid */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Comprehensive legal solutions powered by decades of courtroom excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} 
                className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all overflow-hidden cursor-pointer"
                onClick={() => setPage('services')}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.subtitle}</p>
                  <div className="flex items-center text-violet-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
              {[
                { text: "Absolutely transformative. They turned our complex merger into a seamless success story.", name: "Oluwaseun Adebisi", role: "CEO, TechVentures" },
                { text: "After 3 years of legal battles, they resolved everything in 6 months. Incredible team.", name: "Ngozi Okafor", role: "Property Developer" },
                { text: "Strategic, brilliant, and utterly professional. They're our legal backbone.", name: "Emmanuel Udoka", role: "Chairman, Udoka Group" }
              ].map((testimonial, i) => (
                <div key={i} className={`${activeCard === i ? 'block' : 'hidden'} transition-all`}>
                  <div className="text-6xl text-violet-400 mb-6">"</div>
                  <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="text-xl font-bold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}

              <div className="flex space-x-3 mt-8">
                {[0, 1, 2].map((i) => (
                  <button key={i} onClick={() => setActiveCard(i)} 
                    className={`h-2 rounded-full transition-all ${activeCard === i ? 'w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500' : 'w-2 bg-gray-600'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-16">
            <Sparkles className="w-16 h-16 text-violet-400 mx-auto mb-6" />
            <h3 className="text-5xl font-black text-white mb-6">Ready to Win?</h3>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can turn your legal challenges into victories
            </p>
            <button onClick={() => setPage('contact')}
              className="group px-10 py-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl font-bold text-xl text-white shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-all hover:scale-105">
              <span className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = ({ setPage }) => (
  <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-6xl md:text-7xl font-black text-white mb-6">Practice Areas</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">Cutting-edge legal services for the modern Nigerian landscape</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-white/30 transition-all hover:scale-105">
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-10 transition rounded-3xl`}></div>
            <div className="relative">
              <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${s.gradient} mb-6`}>
                <s.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-lg mb-6">{s.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {['Expert Consultation', 'Strategic Planning', 'Full Representation'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setPage('contact')} className="text-violet-400 font-bold flex items-center group-hover:translate-x-2 transition">
                Get Started <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Additional Specializations</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Tax Law', 'Energy Law', 'Maritime Law', 'Aviation Law', 'Insurance', 'Environmental', 'Labor Law', 'Healthcare'].map((area, i) => (
            <div key={i} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center text-white font-semibold transition cursor-pointer">
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TeamPage = () => (
  <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-6xl md:text-7xl font-black text-white mb-6">Legal Masterminds</h2>
        <p className="text-xl text-gray-400">Meet the brilliant minds behind our success</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Dr. Adebayo Okonkwo SAN", role: "Managing Partner", years: "30", color: "from-violet-500 to-purple-500" },
          { name: "Mrs. Chioma Nwosu", role: "Corporate Lead", years: "22", color: "from-emerald-500 to-teal-500" },
          { name: "Barrister Ibrahim Yusuf", role: "Property Expert", years: "18", color: "from-rose-500 to-pink-500" },
          { name: "Mrs. Folake Adeyemi", role: "Litigation Chief", years: "15", color: "from-cyan-500 to-blue-500" }
        ].map((member, i) => (
          <div key={i} className="group bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all hover:scale-105">
            <div className={`h-64 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <Users className="w-32 h-32 text-white/30 relative z-10" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-violet-400 font-semibold mb-4">{member.role}</p>
              <div className="flex items-center text-gray-400">
                <Award className="w-5 h-5 mr-2" />
                <span>{member.years} years</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = () => {
    if (Object.values(form).every(v => v)) {
      alert('Thank you! We will contact you within 24 hours.');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } else alert('Please fill all fields.');
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">Let's Talk</h2>
          <p className="text-xl text-gray-400">Your legal victory starts with a conversation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
              <div className="space-y-6">
                {[
                  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com' },
                  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+234 xxx xxx xxxx' }
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-bold text-gray-300 mb-2">{field.label} *</label>
                    <input type={field.type} name={field.name} value={form[field.name]} 
                      onChange={(e) => setForm({...form, [field.name]: e.target.value})}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition" 
                      placeholder={field.placeholder} />
                  </div>
                ))}
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Service *</label>
                  <select name="service" value={form.service} onChange={(e) => setForm({...form, service: e.target.value})}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition">
                    <option value="" className="bg-slate-900">Select service</option>
                    {services.map((s, i) => <option key={i} value={s.title} className="bg-slate-900">{s.title}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Message *</label>
                  <textarea name="message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows="4"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition resize-none" 
                    placeholder="Tell us about your legal matter" />
                </div>

                <button onClick={handleSubmit} 
                  className="w-full py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-bold text-lg text-white shadow-lg shadow-violet-500/50 hover:shadow-violet-500/70 transition-all hover:scale-105">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Lagos Office', text: '15 Broad Street, Lagos Island' },
                  { icon: Phone, title: 'Phone', text: '+234 1 234 5678' },
                  { icon: Mail, title: 'Email', text: 'info@okonkwolaw.com.ng' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">{item.title}</p>
                      <p className="text-gray-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              <h4 className="text-2xl font-bold text-white mb-6">Office Hours</h4>
              <div className="space-y-3">
                {[['Mon - Fri', '8:00 AM - 5:00 PM'], ['Saturday', '9:00 AM - 2:00 PM'], ['Sunday', 'Closed']].map(([day, time], i) => (
                  <div key={i} className="flex justify-between text-gray-300">
                    <span className="font-semibold">{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ setPage }) => (
  <footer className="bg-slate-950 border-t border-white/10 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 p-3 rounded-2xl">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Okonkwo & Partners</span>
          </div>
          <p className="text-gray-400 max-w-md">Nigeria's most innovative law firm, delivering excellence since 1995.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['home', 'services', 'team', 'contact'].map(p => (
              <li key={p}><button onClick={() => setPage(p)} className="text-gray-400 hover:text-violet-400 transition capitalize">{p}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Lagos, Nigeria</li>
            <li>+234 1 234 5678</li>
            <li>info@okonkwolaw.com.ng</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Okonkwo & Partners. All rights reserved.
      </div>
    </div>
  </footer>
);

const App = () => {
  const [page, setPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="font-sans antialiased">
      <Navigation page={page} setPage={setPage} scrolled={scrolled} />
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'services' && <ServicesPage setPage={setPage} />}
      {page === 'team' && <TeamPage />}
      {page === 'contact' && <ContactPage />}
      <Footer setPage={setPage} />
    </div>
  );
};

export default App;