/**
 * Database Koleksi Antik Istana Degan (Udien Barang Antique Semarang)
 * Disesuaikan dengan kurasi asli feed Instagram @istanadegan milik Pak Tahrudin
 */

const ANTIQUE_COLLECTIONS = [
  {
    id: "IDG-001",
    title: "Pasang Jam Dinding Antik Kayu Jati Klasik Eropa / Dutch Vintage Wall Clock",
    category: "jam-kuno",
    categoryLabel: "Jam Antik",
    era: "Awal Abad ke-20 / Dutch Vintage / Era Kolonial Eropa",
    condition: "Mesin masih berfungsi, patina kayu alami dan detail antik terawat",
    dimension: "Tinggi sekitar 95-110 cm, Lebar 38-45 cm (satu unit)",
    price: "Tanya Harga / Nego",
    image: "img/p01.png",
    description: "Sepasang jam dinding antik bergaya Eropa klasik dengan bodi kayu solid berukiran tegas, dial kuningan vintage, dan detail ornamen arsitektur yang kuat. Tampilan ini sangat cocok untuk ruang tamu, foyer, atau ruangan bergaya kolonial dengan nuansa antik yang otentik. Jam ini menyimpan karakter historis tinggi dan menjadi pilihan utama kolektor interior vintage.",
    highlights: [
      "Bentuk bodi kayu antik dengan ukiran khas Eropa klasik",
      "Dial kuningan vintage dengan angka dan skala autentik",
      "Mesin mekanik antik, cocok untuk koleksi serta dekorasi ruang",
      "Patina kayu alami dan detail arsitektur yang kuat",
      "Cocok untuk interior kolonial, vintage, atau galeri antik"
    ]
  },
  {
    id: "IDG-002",
    title: "Medali Pameran Semarang 1914 dalam Kotak Beludru Merah",
    category: "koleksi-sejarah",
    categoryLabel: "Koleksi Sejarah",
    era: "Semarang, 1914 / Masa Hindia Belanda",
    condition: "Patina alami pada permukaan logam, tersimpan dalam kotak beludru merah",
    dimension: "Diameter sekitar 5-6 cm (perlu pengukuran langsung)",
    price: "Tanya Harga / Nego",
    image: "img/p02.png",
    description: "Medali atau plakat kenang-kenangan berbentuk bundar dengan relief figur alegoris dan ornamen klasik. Tulisan pada tepi objek tampak memuat kata 'TENTOONSTELLING SEMARANG' serta angka 1914, sehingga diduga berkaitan dengan sebuah pameran di Semarang pada masa Hindia Belanda. Identifikasi sebagai medali pameran perlu dikonfirmasi melalui foto sisi belakang, pengukuran, dan pemeriksaan material secara langsung.",
    highlights: [
      "Tulisan 'TENTOONSTELLING SEMARANG' terlihat pada bagian tepi",
      "Angka 1914 tampak pada bagian bawah relief",
      "Relief figur dan ornamen bergaya klasik Eropa",
      "Disertai kotak penyimpanan berlapis beludru merah",
      "Menarik untuk kolektor memorabilia sejarah Semarang"
    ]
  }
];

// Data informasi profil Pak Tahrudin & Istana Degan
const STORE_PROFILE = {
  name: "Istana Degan",
  badgeName: "Udien Barang Antique",
  owner: "Pak Tahrudin",
  phone: "085640001142",
  phoneDisplay: "0856-4000-1142",
  waNumberClean: "6285640001142",
  bankName: "BCA (Bank Central Asia)",
  bankAccount: "TAHRUDIN",
  bankNote: "PENTING: Transaksi resmi HANYA menggunakan rekening BCA atas nama TAHRUDIN. Selain itu dipastikan BUKAN milik kami.",
  instagram: "@istanadegan",
  instagramUrl: "https://instagram.com/istanadegan",
  facebook: "Udien Barang Antique",
  address: "Plongkowati 1 No. 3, RT 04 / RW 13, Krobokan, Semarang Barat, Kota Semarang, Jawa Tengah 50141",
  gmapsQuery: "udien+barang+antique+krobokan+semarang+barat",
  gmapsUrl: "https://maps.google.com/?q=udien+barang+antique+krobokan+semarang+barat",
  totalPosts: "11.600+",
  totalFollowers: "25.800+",
  city: "Semarang Barat, Jawa Tengah"
};
