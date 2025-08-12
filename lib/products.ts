export type Product = {
  id: number
  slug: string
  name: { en: string; id: string }
  price: string
  priceNum: number
  originalPrice?: string
  category: { en: string; id: string }
  description: { en: string; id: string }
  fullDescription: { en: string; id: string }
  specifications: {
    material: { en: string; id: string }
    dimensions: { en: string; id: string }
    weight: { en: string; id: string }
    color: { en: string; id: string }
    warranty: { en: string; id: string }
  }
  features: { en: string[]; id: string[] }
  images: string[]
  inStock: boolean
  rating: number
  reviewCount: number
  tags: { en: string[]; id: string[] }
}

export const products: Product[] = [
  {
    id: 1,
    slug: "elegant-dining-set",
    name: { en: "Elegant Dining Set", id: "Set Makan Elegan" },
    price: "Rp 15,500,000",
    priceNum: 15500000,
    originalPrice: "Rp 17,000,000",
    category: { en: "Dining Room", id: "Ruang Makan" },
    description: {
      en: "Handcrafted solid wood dining set for 6 people with premium finish",
      id: "Set makan kayu solid buatan tangan untuk 6 orang dengan finishing premium",
    },
    fullDescription: {
      en: "This exquisite dining set represents the pinnacle of craftsmanship and design. Made from premium solid teak wood, each piece is carefully handcrafted by our master artisans. The set includes a spacious dining table and six ergonomically designed chairs with comfortable upholstered seats. The rich wood grain and smooth finish make this set a perfect centerpiece for any dining room.",
      id: "Set makan yang indah ini mewakili puncak keahlian dan desain. Dibuat dari kayu jati solid premium, setiap bagian dibuat dengan hati-hati oleh pengrajin ahli kami. Set ini termasuk meja makan yang luas dan enam kursi yang dirancang secara ergonomis dengan tempat duduk berlapis yang nyaman. Serat kayu yang kaya dan finishing yang halus menjadikan set ini sebagai pusat perhatian yang sempurna untuk ruang makan mana pun.",
    },
    specifications: {
      material: { en: "Premium Teak Wood", id: "Kayu Jati Premium" },
      dimensions: { en: "Table: 200x100x75cm, Chairs: 45x50x95cm", id: "Meja: 200x100x75cm, Kursi: 45x50x95cm" },
      weight: { en: "Table: 45kg, Each Chair: 8kg", id: "Meja: 45kg, Setiap Kursi: 8kg" },
      color: { en: "Natural Teak with Dark Brown Finish", id: "Jati Natural dengan Finishing Coklat Tua" },
      warranty: { en: "5 Years Warranty", id: "Garansi 5 Tahun" },
    },
    features: {
      en: [
        "Handcrafted by master artisans",
        "Premium solid teak wood construction",
        "Comfortable upholstered seats",
        "Scratch and water-resistant finish",
        "Easy assembly with detailed instructions",
        "Eco-friendly materials",
      ],
      id: [
        "Dibuat tangan oleh pengrajin ahli",
        "Konstruksi kayu jati solid premium",
        "Tempat duduk berlapis yang nyaman",
        "Finishing tahan gores dan air",
        "Perakitan mudah dengan instruksi detail",
        "Material ramah lingkungan",
      ],
    },
    images: [
      "/products/elegant-dining-set-1.jpg",
      "/products/elegant-dining-set-2.jpg",
      "/products/elegant-dining-set-3.jpg",
      "/products/elegant-dining-set-4.jpg",
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 127,
    tags: {
      en: ["Premium", "Handcrafted", "Teak Wood", "Dining", "Family"],
      id: ["Premium", "Buatan Tangan", "Kayu Jati", "Makan", "Keluarga"],
    },
  },
  {
    id: 2,
    slug: "luxury-sofa-collection",
    name: { en: "Luxury Sofa Collection", id: "Koleksi Sofa Mewah" },
    price: "Rp 22,800,000",
    priceNum: 22800000,
    originalPrice: "Rp 25,000,000",
    category: { en: "Living Room", id: "Ruang Tamu" },
    description: {
      en: "Premium leather sofa with ergonomic design and superior comfort",
      id: "Sofa kulit premium dengan desain ergonomis dan kenyamanan superior",
    },
    fullDescription: {
      en: "Experience ultimate luxury with our premium leather sofa collection. Crafted with the finest Italian leather and featuring advanced ergonomic design, this sofa provides unmatched comfort and style. The sturdy hardwood frame ensures durability, while the high-density foam cushions maintain their shape for years. Perfect for modern living rooms and executive spaces.",
      id: "Rasakan kemewahan tertinggi dengan koleksi sofa kulit premium kami. Dibuat dengan kulit Italia terbaik dan menampilkan desain ergonomis canggih, sofa ini memberikan kenyamanan dan gaya yang tak tertandingi. Rangka kayu keras yang kokoh memastikan daya tahan, sementara bantalan busa kepadatan tinggi mempertahankan bentuknya selama bertahun-tahun. Sempurna untuk ruang tamu modern dan ruang eksekutif.",
    },
    specifications: {
      material: { en: "Premium Italian Leather, Hardwood Frame", id: "Kulit Italia Premium, Rangka Kayu Keras" },
      dimensions: { en: "220x95x85cm", id: "220x95x85cm" },
      weight: { en: "65kg", id: "65kg" },
      color: { en: "Rich Brown Leather", id: "Kulit Coklat Kaya" },
      warranty: { en: "7 Years Warranty", id: "Garansi 7 Tahun" },
    },
    features: {
      en: [
        "Premium Italian leather upholstery",
        "Ergonomic design for optimal comfort",
        "High-density foam cushions",
        "Solid hardwood frame construction",
        "Stain-resistant treatment",
        "Professional delivery and setup",
      ],
      id: [
        "Pelapis kulit Italia premium",
        "Desain ergonomis untuk kenyamanan optimal",
        "Bantalan busa kepadatan tinggi",
        "Konstruksi rangka kayu keras solid",
        "Perawatan tahan noda",
        "Pengiriman dan pemasangan profesional",
      ],
    },
    images: [
      "/products/luxury-sofa-collection-1.jpg",
      "/products/luxury-sofa-collection-2.jpg",
      "/products/luxury-sofa-collection-3.jpg",
      "/products/luxury-sofa-collection-4.jpg",
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
    tags: {
      en: ["Luxury", "Leather", "Ergonomic", "Living Room", "Italian"],
      id: ["Mewah", "Kulit", "Ergonomis", "Ruang Tamu", "Italia"],
    },
  },
  {
    id: 3,
    slug: "master-bedroom-suite",
    name: { en: "Master Bedroom Suite", id: "Suite Kamar Utama" },
    price: "Rp 18,900,000",
    priceNum: 18900000,
    originalPrice: "Rp 21,000,000",
    category: { en: "Bedroom", id: "Kamar Tidur" },
    description: {
      en: "Complete bedroom set with wardrobe, bed frame, and nightstands",
      id: "Set kamar lengkap dengan lemari, rangka tempat tidur, dan meja samping",
    },
    fullDescription: {
      en: "Transform your bedroom into a luxurious retreat with our master bedroom suite. This comprehensive set includes a king-size bed frame, spacious wardrobe with mirror doors, and matching nightstands. Crafted from premium mahogany wood with elegant carved details, this suite combines traditional craftsmanship with modern functionality.",
      id: "Ubah kamar tidur Anda menjadi tempat peristirahatan mewah dengan suite kamar utama kami. Set komprehensif ini termasuk rangka tempat tidur king-size, lemari luas dengan pintu cermin, dan meja samping yang serasi. Dibuat dari kayu mahoni premium dengan detail ukiran yang elegan, suite ini menggabungkan keahlian tradisional dengan fungsionalitas modern.",
    },
    specifications: {
      material: { en: "Premium Mahogany Wood", id: "Kayu Mahoni Premium" },
      dimensions: {
        en: "Bed: 200x180x120cm, Wardrobe: 200x60x220cm, Nightstand: 50x40x60cm",
        id: "Tempat Tidur: 200x180x120cm, Lemari: 200x60x220cm, Meja Samping: 50x40x60cm",
      },
      weight: {
        en: "Bed: 55kg, Wardrobe: 85kg, Each Nightstand: 15kg",
        id: "Tempat Tidur: 55kg, Lemari: 85kg, Setiap Meja Samping: 15kg",
      },
      color: { en: "Rich Mahogany with Gold Accents", id: "Mahoni Kaya dengan Aksen Emas" },
      warranty: { en: "6 Years Warranty", id: "Garansi 6 Tahun" },
    },
    features: {
      en: [
        "Complete bedroom furniture set",
        "Premium mahogany wood construction",
        "Elegant carved details",
        "Spacious storage solutions",
        "Mirror doors on wardrobe",
        "Matching design elements",
      ],
      id: [
        "Set furniture kamar tidur lengkap",
        "Konstruksi kayu mahoni premium",
        "Detail ukiran yang elegan",
        "Solusi penyimpanan yang luas",
        "Pintu cermin pada lemari",
        "Elemen desain yang serasi",
      ],
    },
    images: [
      "/products/master-bedroom-suite-1.jpg",
      "/products/master-bedroom-suite-2.jpg",
      "/products/master-bedroom-suite-3.jpg",
      "/products/master-bedroom-suite-4.jpg",
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    tags: {
      en: ["Bedroom", "Suite", "Mahogany", "Luxury", "Complete Set"],
      id: ["Kamar Tidur", "Suite", "Mahoni", "Mewah", "Set Lengkap"],
    },
  },
  {
    id: 4,
    slug: "executive-office-desk",
    name: { en: "Executive Office Desk", id: "Meja Kantor Eksekutif" },
    price: "Rp 8,750,000",
    priceNum: 8750000,
    originalPrice: "Rp 9,500,000",
    category: { en: "Office", id: "Kantor" },
    description: {
      en: "Sophisticated workspace solution for professionals with built-in storage",
      id: "Solusi ruang kerja canggih untuk profesional dengan penyimpanan terintegrasi",
    },
    fullDescription: {
      en: "Elevate your workspace with our executive office desk, designed for the modern professional. This sophisticated piece features a spacious work surface, built-in cable management, and ample storage drawers. The rich walnut finish and sleek design make it perfect for executive offices, home studies, or professional workspaces.",
      id: "Tingkatkan ruang kerja Anda dengan meja kantor eksekutif kami, dirancang untuk profesional modern. Karya canggih ini menampilkan permukaan kerja yang luas, manajemen kabel terintegrasi, dan laci penyimpanan yang luas. Finishing walnut yang kaya dan desain yang ramping membuatnya sempurna untuk kantor eksekutif, ruang belajar rumah, atau ruang kerja profesional.",
    },
    specifications: {
      material: { en: "Premium Walnut Wood, Steel Hardware", id: "Kayu Walnut Premium, Hardware Baja" },
      dimensions: { en: "160x80x75cm", id: "160x80x75cm" },
      weight: { en: "42kg", id: "42kg" },
      color: { en: "Rich Walnut Finish", id: "Finishing Walnut Kaya" },
      warranty: { en: "4 Years Warranty", id: "Garansi 4 Tahun" },
    },
    features: {
      en: [
        "Spacious work surface",
        "Built-in cable management system",
        "Multiple storage drawers",
        "Premium walnut wood finish",
        "Ergonomic design",
        "Professional appearance",
      ],
      id: [
        "Permukaan kerja yang luas",
        "Sistem manajemen kabel terintegrasi",
        "Beberapa laci penyimpanan",
        "Finishing kayu walnut premium",
        "Desain ergonomis",
        "Penampilan profesional",
      ],
    },
    images: [
      "/products/executive-office-desk-1.jpg",
      "/products/executive-office-desk-2.jpg",
      "/products/executive-office-desk-3.jpg",
      "/products/executive-office-desk-4.jpg",
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 73,
    tags: {
      en: ["Office", "Executive", "Walnut", "Professional", "Storage"],
      id: ["Kantor", "Eksekutif", "Walnut", "Profesional", "Penyimpanan"],
    },
  },
  {
    id: 5,
    slug: "modern-coffee-table",
    name: { en: "Modern Coffee Table", id: "Meja Kopi Modern" },
    price: "Rp 4,200,000",
    priceNum: 4200000,
    originalPrice: "Rp 4,800,000",
    category: { en: "Living Room", id: "Ruang Tamu" },
    description: {
      en: "Minimalist design with premium marble top and wooden base",
      id: "Desain minimalis dengan permukaan marmer premium dan dasar kayu",
    },
    fullDescription: {
      en: "Add a touch of modern elegance to your living space with our contemporary coffee table. Featuring a stunning Carrara marble top and solid oak base, this piece perfectly balances luxury and functionality. The minimalist design complements any modern interior while providing a durable and beautiful centerpiece for your living room.",
      id: "Tambahkan sentuhan elegan modern ke ruang hidup Anda dengan meja kopi kontemporer kami. Menampilkan permukaan marmer Carrara yang menakjubkan dan dasar oak solid, karya ini menyeimbangkan kemewahan dan fungsionalitas dengan sempurna. Desain minimalis melengkapi interior modern apa pun sambil menyediakan pusat perhatian yang tahan lama dan indah untuk ruang tamu Anda.",
    },
    specifications: {
      material: { en: "Carrara Marble Top, Solid Oak Base", id: "Permukaan Marmer Carrara, Dasar Oak Solid" },
      dimensions: { en: "120x60x45cm", id: "120x60x45cm" },
      weight: { en: "35kg", id: "35kg" },
      color: { en: "White Marble with Natural Oak", id: "Marmer Putih dengan Oak Natural" },
      warranty: { en: "3 Years Warranty", id: "Garansi 3 Tahun" },
    },
    features: {
      en: [
        "Premium Carrara marble top",
        "Solid oak wood base",
        "Minimalist modern design",
        "Heat and stain resistant",
        "Easy to clean surface",
        "Stable construction",
      ],
      id: [
        "Permukaan marmer Carrara premium",
        "Dasar kayu oak solid",
        "Desain modern minimalis",
        "Tahan panas dan noda",
        "Permukaan mudah dibersihkan",
        "Konstruksi stabil",
      ],
    },
    images: [
      "/products/modern-coffee-table-1.jpg",
      "/products/modern-coffee-table-2.jpg",
      "/products/modern-coffee-table-3.jpg",
      "/products/modern-coffee-table-4.jpg",
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 94,
    tags: {
      en: ["Modern", "Marble", "Oak", "Minimalist", "Living Room"],
      id: ["Modern", "Marmer", "Oak", "Minimalis", "Ruang Tamu"],
    },
  },
  {
    id: 6,
    slug: "artisan-bookshelf",
    name: { en: "Artisan Bookshelf", id: "Rak Buku Artisan" },
    price: "Rp 6,800,000",
    priceNum: 6800000,
    originalPrice: "Rp 7,500,000",
    category: { en: "Office", id: "Kantor" },
    description: {
      en: "Handcrafted wooden bookshelf with modern aesthetics and ample storage",
      id: "Rak buku kayu buatan tangan dengan estetika modern dan penyimpanan luas",
    },
    fullDescription: {
      en: "Showcase your literary collection with our handcrafted artisan bookshelf. This stunning piece combines traditional woodworking techniques with contemporary design, featuring multiple shelves and compartments for books, decorative items, and storage. Made from sustainable bamboo wood with a natural finish that highlights the beautiful grain patterns.",
      id: "Pamerkan koleksi sastra Anda dengan rak buku artisan buatan tangan kami. Karya menakjubkan ini menggabungkan teknik pengerjaan kayu tradisional dengan desain kontemporer, menampilkan beberapa rak dan kompartemen untuk buku, barang dekoratif, dan penyimpanan. Dibuat dari kayu bambu berkelanjutan dengan finishing natural yang menonjolkan pola serat yang indah.",
    },
    specifications: {
      material: { en: "Sustainable Bamboo Wood", id: "Kayu Bambu Berkelanjutan" },
      dimensions: { en: "180x35x200cm", id: "180x35x200cm" },
      weight: { en: "38kg", id: "38kg" },
      color: { en: "Natural Bamboo Finish", id: "Finishing Bambu Natural" },
      warranty: { en: "4 Years Warranty", id: "Garansi 4 Tahun" },
    },
    features: {
      en: [
        "Handcrafted by skilled artisans",
        "Sustainable bamboo construction",
        "Multiple storage compartments",
        "Modern aesthetic design",
        "Natural wood grain finish",
        "Eco-friendly materials",
      ],
      id: [
        "Dibuat tangan oleh pengrajin terampil",
        "Konstruksi bambu berkelanjutan",
        "Beberapa kompartemen penyimpanan",
        "Desain estetika modern",
        "Finishing serat kayu natural",
        "Material ramah lingkungan",
      ],
    },
    images: [
      "/products/artisan-bookshelf-1.jpg",
      "/products/artisan-bookshelf-2.jpg",
      "/products/artisan-bookshelf-3.jpg",
      "/products/artisan-bookshelf-4.jpg",
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 112,
    tags: {
      en: ["Bookshelf", "Bamboo", "Handcrafted", "Eco-friendly", "Storage"],
      id: ["Rak Buku", "Bambu", "Buatan Tangan", "Ramah Lingkungan", "Penyimpanan"],
    },
  },
  {
    id: 7,
    slug: "classic-wardrobe",
    name: { en: "Classic Wardrobe", id: "Lemari Klasik" },
    price: "Rp 12,300,000",
    priceNum: 12300000,
    originalPrice: "Rp 13,500,000",
    category: { en: "Bedroom", id: "Kamar Tidur" },
    description: {
      en: "Spacious wardrobe with mirror doors and organized compartments",
      id: "Lemari luas dengan pintu cermin dan kompartemen terorganisir",
    },
    fullDescription: {
      en: "Organize your wardrobe in style with our classic wardrobe featuring mirror doors and intelligent storage solutions. This spacious piece offers hanging space, shelves, and drawers to accommodate all your clothing needs. The elegant design with mirror doors not only saves space but also adds light and depth to your bedroom.",
      id: "Atur lemari Anda dengan gaya menggunakan lemari klasik kami yang menampilkan pintu cermin dan solusi penyimpanan cerdas. Karya luas ini menawarkan ruang gantung, rak, dan laci untuk mengakomodasi semua kebutuhan pakaian Anda. Desain elegan dengan pintu cermin tidak hanya menghemat ruang tetapi juga menambah cahaya dan kedalaman pada kamar tidur Anda.",
    },
    specifications: {
      material: { en: "Premium Pine Wood, Mirror Glass", id: "Kayu Pinus Premium, Kaca Cermin" },
      dimensions: { en: "200x60x220cm", id: "200x60x220cm" },
      weight: { en: "75kg", id: "75kg" },
      color: { en: "White with Natural Wood Accents", id: "Putih dengan Aksen Kayu Natural" },
      warranty: { en: "5 Years Warranty", id: "Garansi 5 Tahun" },
    },
    features: {
      en: [
        "Spacious interior storage",
        "Mirror doors for space efficiency",
        "Multiple hanging rods",
        "Adjustable shelves",
        "Soft-close door mechanism",
        "Anti-tip safety features",
      ],
      id: [
        "Penyimpanan interior yang luas",
        "Pintu cermin untuk efisiensi ruang",
        "Beberapa batang gantung",
        "Rak yang dapat disesuaikan",
        "Mekanisme pintu soft-close",
        "Fitur keamanan anti-tip",
      ],
    },
    images: [
      "/products/classic-wardrobe-1.jpg",
      "/products/classic-wardrobe-2.jpg",
      "/products/classic-wardrobe-3.jpg",
      "/products/classic-wardrobe-4.jpg",
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 68,
    tags: {
      en: ["Wardrobe", "Mirror", "Storage", "Bedroom", "Classic"],
      id: ["Lemari", "Cermin", "Penyimpanan", "Kamar Tidur", "Klasik"],
    },
  },
  {
    id: 8,
    slug: "dining-chair-set",
    name: { en: "Dining Chair Set", id: "Set Kursi Makan" },
    price: "Rp 3,500,000",
    priceNum: 3500000,
    originalPrice: "Rp 4,000,000",
    category: { en: "Dining Room", id: "Ruang Makan" },
    description: {
      en: "Set of 4 comfortable dining chairs with upholstered seats",
      id: "Set 4 kursi makan nyaman dengan tempat duduk berlapis",
    },
    fullDescription: {
      en: "Complete your dining room with our elegant set of four dining chairs. Each chair features a solid wood frame with comfortable upholstered seats in premium fabric. The ergonomic design ensures comfort during long meals, while the classic styling complements any dining table. Perfect for family dinners and entertaining guests.",
      id: "Lengkapi ruang makan Anda dengan set elegan empat kursi makan kami. Setiap kursi menampilkan rangka kayu solid dengan tempat duduk berlapis yang nyaman dalam kain premium. Desain ergonomis memastikan kenyamanan selama makan yang lama, sementara gaya klasik melengkapi meja makan apa pun. Sempurna untuk makan malam keluarga dan menghibur tamu.",
    },
    specifications: {
      material: { en: "Solid Beech Wood, Premium Fabric Upholstery", id: "Kayu Beech Solid, Pelapis Kain Premium" },
      dimensions: { en: "45x50x95cm each", id: "45x50x95cm setiap kursi" },
      weight: { en: "7kg each", id: "7kg setiap kursi" },
      color: { en: "Natural Wood with Cream Upholstery", id: "Kayu Natural dengan Pelapis Krem" },
      warranty: { en: "3 Years Warranty", id: "Garansi 3 Tahun" },
    },
    features: {
      en: [
        "Set of 4 matching chairs",
        "Solid beech wood construction",
        "Comfortable upholstered seats",
        "Ergonomic backrest design",
        "Easy to clean fabric",
        "Stackable for storage",
      ],
      id: [
        "Set 4 kursi yang serasi",
        "Konstruksi kayu beech solid",
        "Tempat duduk berlapis yang nyaman",
        "Desain sandaran ergonomis",
        "Kain mudah dibersihkan",
        "Dapat ditumpuk untuk penyimpanan",
      ],
    },
    images: [
      "/products/dining-chair-set-1.jpg",
      "/products/dining-chair-set-2.jpg",
      "/products/dining-chair-set-3.jpg",
      "/products/dining-chair-set-4.jpg",
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 85,
    tags: {
      en: ["Dining", "Chairs", "Set", "Upholstered", "Beech Wood"],
      id: ["Makan", "Kursi", "Set", "Berlapis", "Kayu Beech"],
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(currentProductId: number, category: string, limit = 4): Product[] {
  return products
    .filter(
      (product) =>
        product.id !== currentProductId && (product.category.en === category || product.category.id === category),
    )
    .slice(0, limit)
}
