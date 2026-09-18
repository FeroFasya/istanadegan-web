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
  },
  {
    id: "IDG-003",
    title: "Lemari Pajangan Antik Kayu Ukir Dua Pintu Kaca",
    category: "furnitur-antik",
    categoryLabel: "Furnitur Antik",
    era: "Vintage / Periode dan asal daerah perlu verifikasi",
    condition: "Struktur tampak kokoh, kaca dan ukiran terpasang, terdapat patina serta bekas pemakaian alami",
    dimension: "Tinggi sekitar 170-190 cm, Lebar 80-95 cm (perlu pengukuran langsung)",
    price: "Tanya Harga / Nego",
    image: "img/p03.png",
    description: "Lemari pajangan antik berbahan kayu dengan finishing merah tua, dua pintu kaca pada bagian atas, dan dua panel penyimpanan pada bagian bawah. Seluruh bagian depan dihiasi bingkai serta ornamen ukir dekoratif yang menonjol. Cocok digunakan sebagai lemari koleksi, penyimpanan perangkat makan, atau elemen utama interior bergaya klasik dan heritage. Jenis kayu, usia, serta asal pembuatannya masih perlu dikonfirmasi secara langsung.",
    highlights: [
      "Dua pintu kaca untuk memajang koleksi",
      "Dua ruang penyimpanan tertutup pada bagian bawah",
      "Ornamen ukir dekoratif pada bingkai dan panel depan",
      "Finishing merah tua dengan karakter patina vintage",
      "Cocok untuk ruang makan, ruang tamu, atau galeri koleksi"
    ]
  },
  {
    id: "IDG-004",
    title: "Cermin Dinding Antik Oval dengan Bingkai Ukir Ornamen Daun",
    category: "dekorasi-antik",
    categoryLabel: "Dekorasi Antik",
    era: "Vintage / Periode dan material perlu verifikasi",
    condition: "Cermin terpasang, bingkai ukir tampak utuh dengan patina dan finishing keemasan",
    dimension: "Tinggi sekitar 110-130 cm, Lebar 75-90 cm (perlu pengukuran langsung)",
    price: "Tanya Harga / Nego",
    image: "img/p04.png",
    description: "Cermin dinding berbentuk oval dengan bingkai ukir dekoratif yang kaya ornamen daun, bunga, dan buah. Bagian mahkota atas dibuat menjulang dengan komposisi ukiran yang menonjol, sementara permukaan bingkai memiliki nuansa finishing keemasan dan patina vintage. Cocok ditempatkan di foyer, ruang tamu, ruang makan, atau area galeri bergaya klasik. Material bingkai dan periode pembuatannya masih perlu dikonfirmasi secara langsung.",
    highlights: [
      "Bentuk cermin oval dengan proporsi dekoratif yang kuat",
      "Mahkota atas dihiasi ornamen daun, bunga, dan buah",
      "Bingkai memiliki detail ukir yang padat dan ekspresif",
      "Finishing keemasan dengan karakter patina vintage",
      "Cocok sebagai focal point interior klasik atau heritage"
    ]
  },
  {
    id: "IDG-005",
    title: "Set Plang Enamel Reklame Kolonial Samarangsche & Kwee Yauw Tjong",
    category: "reklame-kuno",
    categoryLabel: "Plang & Reklame Jadul",
    era: "Masa Hindia Belanda / Tahun pembuatan perlu verifikasi",
    condition: "Enamel masih terbaca jelas, dengan patina, noda usia, dan bekas pemasangan alami",
    dimension: "Terdiri dari 3 plang, ukuran masing-masing perlu pengukuran langsung",
    price: "Kolektor Item / Tanya Harga",
    image: "img/p05.png",
    description: "Satu set plang reklame enamel lama yang merekam jejak perdagangan di wilayah Hindia Belanda. Plang bagian atas memuat tulisan 'SAMARANGSCHE ZEE-EN BRAND', sedangkan dua plang putih mencantumkan nama 'KWEE YAUW TJONG', alamat Baliwerti 18 Soerabaia, serta daftar barang dagangan seperti onderdelen mobil, radio, alat musik, perlengkapan listrik, perlengkapan olahraga, lotere, dan kapuk. Sebagai benda visual, set ini memiliki nilai dokumentasi sejarah perdagangan dan tipografi reklame yang kuat.",
    highlights: [
      "Satu set terdiri dari tiga plang enamel lama",
      "Tulisan 'SAMARANGSCHE ZEE-EN BRAND' pada plang merah",
      "Nama dagang 'KWEE YAUW TJONG' dan alamat Baliwerti 18 Soerabaia",
      "Memuat daftar barang dagangan dalam bahasa ejaan lama",
      "Patina dan bekas pemasangan memperkuat karakter historis"
    ]
  },
  {
    id: "IDG-006",
    title: "Guci Keramik Antik Motif Rusa dan Ornamen Emas",
    category: "keramik",
    categoryLabel: "Keramik & Porselen",
    era: "Vintage / Periode dan asal daerah perlu verifikasi",
    condition: "Permukaan memiliki patina, keausan dekorasi alami, dan karakter pemakaian usia",
    dimension: "Tinggi sekitar 60-75 cm (perlu pengukuran langsung)",
    price: "Tanya Harga / Nego",
    image: "img/p06.png",
    description: "Guci keramik berukuran besar dengan badan berwarna cokelat gelap dan dekorasi warna emas. Bagian tengah menampilkan motif rusa, sementara bagian atas dan bawah dihiasi pola geometris, floral, serta ornamen lengkung klasik. Permukaan guci memperlihatkan patina dan keausan dekorasi yang memberikan karakter vintage. Asal daerah, jenis keramik, dan usia pembuatannya masih perlu dikonfirmasi melalui pemeriksaan langsung.",
    highlights: [
      "Ukuran besar dengan siluet guci dekoratif klasik",
      "Motif rusa menjadi elemen utama pada bagian tengah",
      "Ornamen emas dan pola dekoratif mengelilingi badan guci",
      "Patina serta keausan alami memperkuat karakter antiknya",
      "Cocok sebagai dekorasi ruang, foyer, atau koleksi keramik"
    ]
  },
  {
    id: "IDG-007",
    title: "Lemari Pajangan Antik Kayu Gelap Dua Pintu dengan Ukiran Emas",
    category: "furnitur-antik",
    categoryLabel: "Furnitur Antik",
    era: "Vintage / Periode dan asal daerah perlu verifikasi",
    condition: "Struktur tampak kokoh, pintu kaca dan ornamen terpasang, dengan patina serta bekas pemakaian alami",
    dimension: "Tinggi sekitar 170-200 cm, Lebar 70-90 cm (perlu pengukuran langsung)",
    price: "Tanya Harga / Nego",
    image: "img/p07.png",
    description: "Lemari pajangan antik berbahan kayu berwarna gelap dengan dua pintu kaca pada bagian atas, ruang penyimpanan dan panel dekoratif pada bagian bawah, serta ukiran relief dengan aksen keemasan. Kaki dan bagian dasar lemari juga dihiasi ornamen ukir yang kuat. Bentuknya cocok untuk menyimpan koleksi, perangkat makan, atau benda dekoratif di ruang bergaya klasik dan heritage. Jenis kayu, usia, serta asal pembuatannya masih perlu dikonfirmasi secara langsung.",
    highlights: [
      "Dua pintu kaca dengan bingkai dekoratif pada bagian atas",
      "Panel ukir relief dengan aksen keemasan di bagian tengah",
      "Ruang penyimpanan bawah dengan beberapa panel dan laci",
      "Kaki lemari dihiasi ornamen ukir yang menonjol",
      "Cocok untuk ruang makan, ruang tamu, atau galeri koleksi"
    ]
  },
  {
    id: "IDG-008",
    title: "Set Kursi Anyaman Rotan, Kabinet Kecil, dan Gramofon Horn Antik",
    category: "furnitur-antik",
    categoryLabel: "Furnitur Antik",
    era: "Vintage / Periode dan asal masing-masing benda perlu verifikasi",
    condition: "Kayu dan anyaman tampak memiliki patina serta bekas pemakaian alami; fungsi gramofon perlu diuji langsung",
    dimension: "Terdiri dari sepasang kursi, satu kabinet, dan satu gramofon (ukuran perlu pengukuran langsung)",
    price: "Kolektor Item / Tanya Harga",
    image: "img/p08.png",
    description: "Komposisi koleksi yang menampilkan sepasang kursi kayu beranyaman rotan, sebuah kabinet kecil, dan gramofon antik dengan horn besar di bagian atas. Bingkai kursi memiliki ornamen geometris klasik, sedangkan kabinet berfungsi sebagai dudukan sekaligus ruang penyimpanan untuk perangkat gramofon. Set ini menghadirkan suasana ruang bergaya vintage dan cocok untuk koleksi, dekorasi, atau interior heritage. Merek, usia, kelengkapan, dan fungsi gramofon perlu diverifikasi secara langsung.",
    highlights: [
      "Sepasang kursi kayu dengan dudukan dan sandaran anyaman rotan",
      "Detail geometris klasik pada bingkai kursi",
      "Gramofon antik dengan horn besar sebagai elemen utama",
      "Kabinet kecil berfungsi sebagai dudukan perangkat gramofon",
      "Ditampilkan sebagai satu komposisi koleksi furnitur vintage"
    ]
  },
  {
    id: "IDG-009",
    title: "Lemari Pajangan Antik Gaya Tionghoa dengan Panel Kaligrafi",
    category: "furnitur-antik",
    categoryLabel: "Furnitur Antik",
    era: "Vintage / Periode dan asal daerah perlu verifikasi",
    condition: "Struktur lemari tampak kokoh, kaca dan panel dekoratif terpasang, dengan patina serta bekas pemakaian alami",
    dimension: "Tinggi sekitar 180-210 cm, Lebar 120-150 cm (perlu pengukuran langsung)",
    price: "Kolektor Item / Tanya Harga",
    image: "img/p09.png",
    description: "Lemari pajangan berukuran besar dengan dua pintu kaca, rak interior, mahkota kayu berukir, dan panel dekoratif bergaya Tionghoa. Tiga panel berwarna gelap menampilkan tulisan aksara Tionghoa dengan detail bingkai merah serta aksen warna emas dan merah. Lemari ini memiliki karakter visual yang kuat untuk ruang koleksi, rumah heritage, atau interior bergaya Peranakan. Isi dan makna tulisan pada panel, jenis kayu, usia, serta asal pembuatannya masih perlu diverifikasi secara langsung.",
    highlights: [
      "Dua pintu kaca dengan beberapa rak pajangan di bagian dalam",
      "Mahkota atas dihiasi ukiran floral dan bentuk lengkung klasik",
      "Panel samping dan panel bawah menampilkan tulisan aksara Tionghoa",
      "Bingkai panel memiliki aksen warna merah dan emas",
      "Cocok sebagai furnitur koleksi untuk interior heritage atau Peranakan"
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
