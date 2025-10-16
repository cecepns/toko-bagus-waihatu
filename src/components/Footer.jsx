import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TBW</span>
              </div>
              <span className="text-xl font-bold">Toko Bagus Waihatu</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Toko sembako terpercaya di Waihatu yang menyediakan berbagai macam kebutuhan sehari-hari berkualitas dengan harga terjangkau untuk keluarga Indonesia.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Tentang</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Produk</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Kontak</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">
                Jl Transeram Waihatu, Kairatu Barat, Kab SBB
              </p>
              <p className="text-sm">
                <a href="tel:085243008899" className="hover:text-white transition-colors">085243008899</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Toko Bagus Waihatu. Semua hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
