import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Somerset <span className="text-primary">Plumbing</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-8">
              Your trusted local plumbing experts in Somerset West. We provide fast, reliable, and affordable solutions for all your residential and commercial needs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Emergency Plumbing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Leak Detection</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Drain Cleaning</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Geyser Installation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bathroom Renovations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Somerset West & Surrounding Areas, Western Cape</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>021 851 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@somersetplumbing.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Somerset Plumbing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
