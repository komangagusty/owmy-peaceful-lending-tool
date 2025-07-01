import React from 'react';
import { TranslationProvider } from '../context/TranslationContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfServiceId = () => {
  return (
    <TranslationProvider initialLanguage="id">
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
          <h1 className="text-3xl font-bold mb-8">Syarat dan Ketentuan Layanan</h1>
          
          <div className="prose prose-lg">
            <p className="mb-4">Terakhir diperbarui: 1 Juli 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Penerimaan Ketentuan</h2>
            <p>Dengan mengakses atau menggunakan layanan OWWY, Anda setuju untuk terikat oleh Syarat dan Ketentuan Layanan ini. Jika Anda tidak menyetujui semua syarat dan ketentuan, Anda tidak boleh mengakses atau menggunakan layanan kami.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Deskripsi Layanan</h2>
            <p>OWWY menyediakan platform untuk pinjaman peer-to-peer dan layanan keuangan. Layanan kami dirancang untuk menghubungkan peminjam dengan pemberi pinjaman potensial dalam lingkungan yang aman. Kami tidak secara langsung meminjamkan uang tetapi memfasilitasi proses antara pengguna.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Akun Pengguna</h2>
            <p>Untuk mengakses fitur tertentu dari layanan kami, Anda harus mendaftar untuk sebuah akun. Anda setuju untuk memberikan informasi yang akurat dan lengkap saat membuat akun dan untuk menjaga informasi ini tetap diperbarui. Anda bertanggung jawab untuk menjaga kerahasiaan kredensial akun Anda dan untuk semua aktivitas yang terjadi di bawah akun Anda.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Perilaku Pengguna</h2>
            <p>Saat menggunakan layanan kami, Anda setuju untuk tidak:</p>
            <ul className="list-disc pl-8 mb-6">
              <li>Melanggar hukum atau peraturan yang berlaku</li>
              <li>Meniru identitas orang atau entitas lain</li>
              <li>Terlibat dalam aktivitas penipuan</li>
              <li>Mendistribusikan malware atau konten berbahaya lainnya</li>
              <li>Mengganggu atau merusak layanan kami</li>
              <li>Mengumpulkan atau menyimpan data pribadi tentang pengguna lain tanpa persetujuan mereka</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Transaksi Keuangan</h2>
            <p>Semua transaksi keuangan yang dilakukan melalui platform kami tunduk pada verifikasi dan persetujuan. Kami berhak menolak atau membatalkan transaksi yang kami curigai mungkin bersifat penipuan atau ilegal. Pengguna bertanggung jawab untuk memastikan mereka memiliki dana atau kredit yang diperlukan untuk setiap transaksi yang mereka inisiasi.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Kekayaan Intelektual</h2>
            <p>Semua konten, fitur, dan fungsionalitas layanan kami, termasuk namun tidak terbatas pada teks, grafik, logo, dan perangkat lunak, dimiliki oleh OWWY dan dilindungi oleh undang-undang kekayaan intelektual. Anda tidak boleh menyalin, memodifikasi, mendistribusikan, atau membuat karya turunan tanpa izin eksplisit dari kami.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Batasan Tanggung Jawab</h2>
            <p>Sejauh diizinkan oleh hukum, OWWY tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif, termasuk kehilangan keuntungan, data, atau itikad baik, yang diakibatkan dari akses atau penggunaan layanan kami oleh Anda.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Penghentian</h2>
            <p>Kami berhak untuk menangguhkan atau menghentikan akun Anda dan akses ke layanan kami kapan saja dengan alasan apa pun, termasuk namun tidak terbatas pada pelanggaran Syarat dan Ketentuan Layanan ini.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Perubahan Ketentuan</h2>
            <p>Kami dapat memperbarui Syarat dan Ketentuan Layanan ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Ketentuan baru di halaman ini dan memperbarui tanggal "Terakhir diperbarui". Penggunaan layanan kami yang berkelanjutan setelah perubahan tersebut merupakan penerimaan Anda terhadap Ketentuan baru.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. Hubungi Kami</h2>
            <p>Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan Layanan ini, silakan hubungi kami di: <a href="mailto:team@owwy.app" className="text-owwy-primary hover:underline">team@owwy.app</a></p>
          </div>
        </div>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default TermsOfServiceId;