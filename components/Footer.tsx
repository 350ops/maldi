import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tight">Roaming<span className="text-blue-400">Maldives</span></span>
            <p className="mt-4 text-gray-400 text-sm">
              Premium eSIM connectivity for travellers in the Maldives. Stay connected effortlessly.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/best-esim-maldives" className="text-gray-400 hover:text-white text-sm transition-colors">Best eSIM for Maldives</Link></li>
              <li><Link href="/stay-connected-maldives" className="text-gray-400 hover:text-white text-sm transition-colors">How to Stay Connected</Link></li>
              <li><Link href="/esim-yacht-charter" className="text-gray-400 hover:text-white text-sm transition-colors">eSIM for Yacht Charters</Link></li>
              <li><Link href="/gcc-travellers" className="text-gray-400 hover:text-white text-sm transition-colors">Gulf Travellers Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/device-checker" className="text-gray-400 hover:text-white text-sm transition-colors">Device Compatibility</Link></li>
              <li><Link href="/how-to-activate-esim" className="text-gray-400 hover:text-white text-sm transition-colors">Activation Guide</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-white text-sm transition-colors">Partner with Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@roamingmaldives.com" className="text-gray-400 hover:text-white text-sm transition-colors">hello@roamingmaldives.com</a></li>
              <li><a href="https://wa.me/1234567890?text=I'm%20interested%20in%20a%20Maldives%20eSIM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">WhatsApp Support</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} RoamingMaldives.com. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
