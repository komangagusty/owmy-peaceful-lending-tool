import React from 'react';
import { TranslationProvider } from '../context/TranslationContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyId = () => {
  return (
    <TranslationProvider initialLanguage="id">
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
          <h1 className="text-3xl font-bold mb-8">Kebijakan Privasi</h1>
          
          <div className="prose prose-lg">
            <p className="mb-4">Terakhir diperbarui: 1 Juli 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Pendahuluan</h2>
            <p>Di OWWY, kami menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda menggunakan aplikasi dan layanan kami.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Informasi yang Kami Kumpulkan</h2>
            <p>Kami dapat mengumpulkan jenis informasi berikut:</p>
            <ul className="list-disc pl-8 mb-6">
              <li>Informasi identifikasi pribadi (Nama, alamat email, nomor telepon)</li>
              <li>Informasi keuangan yang diperlukan untuk memfasilitasi pinjaman</li>
              <li>Data penggunaan dan interaksi dengan platform kami</li>
              <li>Informasi perangkat dan teknis</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Bagaimana Kami Menggunakan Informasi Anda</h2>
            <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
            <ul className="list-disc pl-8 mb-6">
              <li>Menyediakan, memelihara, dan meningkatkan layanan kami</li>
              <li>Memproses transaksi dan mengelola akun pengguna</li>
              <li>Mengirim notifikasi terkait akun dan aktivitas Anda</li>
              <li>Menanggapi komentar dan pertanyaan Anda</li>
              <li>Melindungi dari aktivitas penipuan atau ilegal</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Keamanan Data</h2>
            <p>Kami menerapkan langkah-langkah keamanan yang tepat untuk melindungi informasi pribadi Anda. Namun, tidak ada metode transmisi melalui Internet atau penyimpanan elektronik yang 100% aman, dan kami tidak dapat menjamin keamanan absolut.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Hak-Hak Anda</h2>
            <p>Tergantung pada lokasi Anda, Anda mungkin memiliki hak-hak tertentu mengenai data pribadi Anda, termasuk:</p>
            <ul className="list-disc pl-8 mb-6">
              <li>Akses ke data pribadi Anda</li>
              <li>Koreksi data yang tidak akurat atau tidak lengkap</li>
              <li>Penghapusan data pribadi Anda</li>
              <li>Pembatasan atau penolakan terhadap aktivitas pemrosesan tertentu</li>
              <li>Portabilitas data</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Perubahan pada Kebijakan Privasi Ini</h2>
            <p>Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan dengan memposting Kebijakan Privasi baru di halaman ini dan memperbarui tanggal "Terakhir diperbarui".</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Hubungi Kami</h2>
            <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di: <a href="mailto:team@owwy.app" className="text-owwy-primary hover:underline">team@owwy.app</a></p>
          </div>
        </div>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default PrivacyPolicyId;