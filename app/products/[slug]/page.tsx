"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Plus,
  Minus,
  ShoppingCart,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getProductBySlug, getRelatedProducts } from "@/lib/products"

type Language = "en" | "id"

const translations = {
  en: {
    backToProducts: "Back to Products",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    quantity: "Quantity",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    addToWishlist: "Add to Wishlist",
    shareProduct: "Share Product",
    productDetails: "Product Details",
    specifications: "Specifications",
    features: "Features",
    reviews: "Reviews",
    relatedProducts: "Related Products",
    freeShipping: "Free Shipping",
    freeShippingDesc: "Free delivery on orders over Rp 5,000,000",
    warranty: "Warranty Included",
    warrantyDesc: "Comprehensive warranty coverage",
    returns: "Easy Returns",
    returnsDesc: "30-day return policy",
    material: "Material",
    dimensions: "Dimensions",
    weight: "Weight",
    color: "Color",
    rating: "Rating",
    basedOnReviews: "based on {count} reviews",
    writeReview: "Write a Review",
    viewAllReviews: "View All Reviews",
    customerPhotos: "Customer Photos",
    askQuestion: "Ask a Question",
    deliveryInfo: "Delivery Information",
    deliveryDesc: "Professional delivery and setup service available",
    customization: "Customization Available",
    customizationDesc: "Contact us for custom size and finish options",
  },
  id: {
    backToProducts: "Kembali ke Produk",
    inStock: "Tersedia",
    outOfStock: "Habis",
    quantity: "Jumlah",
    addToCart: "Tambah ke Keranjang",
    buyNow: "Beli Sekarang",
    addToWishlist: "Tambah ke Wishlist",
    shareProduct: "Bagikan Produk",
    productDetails: "Detail Produk",
    specifications: "Spesifikasi",
    features: "Fitur",
    reviews: "Ulasan",
    relatedProducts: "Produk Terkait",
    freeShipping: "Gratis Ongkir",
    freeShippingDesc: "Gratis pengiriman untuk pesanan di atas Rp 5,000,000",
    warranty: "Garansi Termasuk",
    warrantyDesc: "Cakupan garansi komprehensif",
    returns: "Mudah Dikembalikan",
    returnsDesc: "Kebijakan pengembalian 30 hari",
    material: "Material",
    dimensions: "Dimensi",
    weight: "Berat",
    color: "Warna",
    rating: "Rating",
    basedOnReviews: "berdasarkan {count} ulasan",
    writeReview: "Tulis Ulasan",
    viewAllReviews: "Lihat Semua Ulasan",
    customerPhotos: "Foto Pelanggan",
    askQuestion: "Ajukan Pertanyaan",
    deliveryInfo: "Informasi Pengiriman",
    deliveryDesc: "Layanan pengiriman dan pemasangan profesional tersedia",
    customization: "Kustomisasi Tersedia",
    customizationDesc: "Hubungi kami untuk opsi ukuran dan finishing kustom",
  },
}

export default function ProductPage() {
  const [language, setLanguage] = useState<Language>("en")
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("artha-language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  if (!product) {
    notFound()
  }

  const t = translations[language]
  const relatedProducts = getRelatedProducts(product.id, product.category[language])

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20 sm:pt-24 pb-8 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/products"
              className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.backToProducts}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Product Images */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative aspect-square bg-slate-100 rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.name[language]}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Image Navigation */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </>
                )}

                {/* Premium Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <Badge className="bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm">Premium</Badge>
                </div>
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square bg-slate-100 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index ? "border-amber-600" : "border-transparent hover:border-slate-300"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name[language]} ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-4 sm:space-y-6">
              {/* Category */}
              <div>
                <Badge variant="outline" className="text-amber-600 border-amber-600 text-xs sm:text-sm">
                  {product.category[language]}
                </Badge>
              </div>

              {/* Title and Rating */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 font-playfair leading-tight">
                  {product.name[language]}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-slate-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-slate-600 font-medium text-sm sm:text-base">{product.rating}</span>
                  </div>
                  <span className="text-slate-500 text-sm sm:text-base">
                    {t.basedOnReviews.replace("{count}", product.reviewCount.toString())}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                <span className="text-2xl sm:text-3xl font-bold text-amber-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg sm:text-xl text-slate-500 line-through">{product.originalPrice}</span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <span
                  className={`font-medium text-sm sm:text-base ${product.inStock ? "text-green-600" : "text-red-600"}`}
                >
                  {product.inStock ? t.inStock : t.outOfStock}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                {product.description[language]}
              </p>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-slate-700 text-sm sm:text-base">{t.quantity}:</span>
                  <div className="flex items-center border border-slate-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-slate-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                    <span className="px-3 sm:px-4 py-2 font-medium text-sm sm:text-base">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-slate-100 transition-colors"
                    >
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl h-12 sm:h-14 text-sm sm:text-base"
                      disabled={!product.inStock}
                      aria-label={t.addToCart}
                    >
                      <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                      <span className="sr-only">{t.addToCart}</span>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold rounded-xl h-12 sm:h-14 bg-transparent text-sm sm:text-base"
                      disabled={!product.inStock}
                    >
                      {t.buyNow}
                    </Button>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`flex-1 text-xs sm:text-sm ${isWishlisted ? "bg-red-50 border-red-200 text-red-600" : ""}`}
                    >
                      <Heart className={`mr-2 h-3 w-3 sm:h-4 sm:w-4 ${isWishlisted ? "fill-current" : ""}`} />
                      {t.addToWishlist}
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent text-xs sm:text-sm">
                      <Share2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      {t.shareProduct}
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <div className="flex items-start space-x-3 p-3 sm:p-4 bg-slate-50 rounded-lg">
                    <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm sm:text-base">{t.freeShipping}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{t.freeShippingDesc}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 sm:p-4 bg-slate-50 rounded-lg">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm sm:text-base">{t.warranty}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{t.warrantyDesc}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 sm:p-4 bg-slate-50 rounded-lg">
                    <RotateCcw className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm sm:text-base">{t.returns}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{t.returnsDesc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-12 sm:mb-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-auto p-1">
                <TabsTrigger value="details" className="text-xs sm:text-sm py-2 sm:py-3">
                  {t.productDetails}
                </TabsTrigger>
                <TabsTrigger value="specifications" className="text-xs sm:text-sm py-2 sm:py-3">
                  {t.specifications}
                </TabsTrigger>
                <TabsTrigger value="reviews" className="text-xs sm:text-sm py-2 sm:py-3">
                  {t.reviews}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-6 sm:mt-8">
                <Card className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 font-playfair">
                    {t.productDetails}
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                      {product.fullDescription[language]}
                    </p>

                    <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">{t.features}</h4>
                    <ul className="grid grid-cols-1 gap-2 sm:gap-3">
                      {product.features[language].map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6 sm:mt-8">
                <Card className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 font-playfair">
                    {t.specifications}
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-slate-200">
                      <span className="font-medium text-slate-700 text-sm sm:text-base mb-1 sm:mb-0">{t.material}</span>
                      <span className="text-slate-600 text-sm sm:text-base">
                        {product.specifications.material[language]}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-slate-200">
                      <span className="font-medium text-slate-700 text-sm sm:text-base mb-1 sm:mb-0">
                        {t.dimensions}
                      </span>
                      <span className="text-slate-600 text-sm sm:text-base">
                        {product.specifications.dimensions[language]}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-slate-200">
                      <span className="font-medium text-slate-700 text-sm sm:text-base mb-1 sm:mb-0">{t.weight}</span>
                      <span className="text-slate-600 text-sm sm:text-base">
                        {product.specifications.weight[language]}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-slate-200">
                      <span className="font-medium text-slate-700 text-sm sm:text-base mb-1 sm:mb-0">{t.color}</span>
                      <span className="text-slate-600 text-sm sm:text-base">
                        {product.specifications.color[language]}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-slate-200">
                      <span className="font-medium text-slate-700 text-sm sm:text-base mb-1 sm:mb-0">{t.warranty}</span>
                      <span className="text-slate-600 text-sm sm:text-base">
                        {product.specifications.warranty[language]}
                      </span>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6 sm:mt-8">
                <Card className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-playfair">{t.reviews}</h3>
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                      {t.writeReview}
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 mb-6 sm:mb-8">
                    <div className="text-center sm:text-left">
                      <div className="text-3xl sm:text-4xl font-bold text-slate-900">{product.rating}</div>
                      <div className="flex items-center justify-center sm:justify-start mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 sm:h-5 sm:w-5 ${
                              i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-slate-600 mt-1 text-sm sm:text-base">
                        {t.basedOnReviews.replace("{count}", product.reviewCount.toString())}
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-8 sm:py-12 text-slate-500">
                    <p className="text-sm sm:text-base">Reviews will be displayed here. This is a demo version.</p>
                    <Button variant="outline" className="mt-4 bg-transparent text-xs sm:text-sm">
                      {t.viewAllReviews}
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-playfair">
                  {t.relatedProducts}
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden cursor-pointer h-full">
                      <div className="relative overflow-hidden">
                        <Image
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name[language]}
                          width={400}
                          height={300}
                          className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-amber-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                          Premium
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <div className="mb-2">
                          <span className="text-xs sm:text-sm text-amber-600 font-medium">
                            {relatedProduct.category[language]}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors font-playfair line-clamp-2">
                          {relatedProduct.name[language]}
                        </h3>
                        <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {relatedProduct.description[language]}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg sm:text-xl font-bold text-amber-600">{relatedProduct.price}</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-xs sm:text-sm text-slate-600">{relatedProduct.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
