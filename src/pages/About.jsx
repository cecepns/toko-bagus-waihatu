import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Award, Users, DollarSign, Shield } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Initialize AOS with a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
        delay: 0,
        easing: 'ease-in-out',
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Kualitas Terjamin',
      description: 'Kami hanya menyediakan produk-produk berkualitas tinggi dari distributor resmi dan produsen terpercaya.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Pelayanan Prima',
      description: 'Tim kami berkomitmen memberikan pelayanan terbaik dengan sikap ramah dan profesional.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Harga Terjangkau',
      description: 'Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas produk dan pelayanan.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Keamanan Terjamin',
      description: 'Semua produk disimpan dalam kondisi yang tepat sesuai standar penyimpanan yang berlaku.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              Tentang Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Mengenal lebih dekat Toko Bagus Waihatu, toko sembako terpercaya yang telah melayani masyarakat Waihatu dengan sepenuh hati
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Toko Bagus Waihatu History"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sejarah Kami
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Toko Bagus Waihatu didirikan dengan visi menjadi toko sembako terpercaya yang dapat diandalkan oleh masyarakat Waihatu dan sekitarnya. Berawal dari keinginan untuk memberikan akses produk kebutuhan sehari-hari berkualitas dengan harga terjangkau.
                </p>
                <p>
                  Kami telah melayani masyarakat dengan sepenuh hati, menyediakan berbagai macam kebutuhan sembako mulai dari beras, minyak goreng, gula, tepung, dan berbagai produk kebutuhan rumah tangga lainnya.
                </p>
                <p>
                  Saat ini, Toko Bagus Waihatu terus berinovasi dengan menghadirkan layanan yang lebih baik untuk memenuhi kebutuhan masyarakat modern, tanpa melupakan sentuhan personal yang menjadi ciri khas kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami terhadap kepuasan pelanggan tercermin dalam nilai-nilai yang kami pegang teguh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="card p-8 hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-white mb-6">
                Visi Kami
              </h2>
              <p className="text-primary-100 text-lg leading-relaxed">
                Menjadi toko sembako terdepan dan terpercaya di Waihatu yang memberikan kontribusi nyata dalam memenuhi kebutuhan masyarakat melalui penyediaan produk berkualitas, harga terjangkau, dan pelayanan yang ramah.
              </p>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Misi Kami
              </h2>
              <ul className="text-primary-100 text-lg space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Menyediakan produk sembako berkualitas tinggi dengan harga terjangkau
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Memberikan pelayanan yang ramah, cepat, dan profesional
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Menjaga ketersediaan stok produk kebutuhan sehari-hari
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Membangun kepercayaan masyarakat melalui pelayanan prima
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
