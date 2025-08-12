"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/components/cart-context"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartPage() {
  const { items, count, removeItem, clear, consent } = useCart()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 font-playfair">Your Cart</h1>
          <p className="text-slate-600 mt-2">
            {consent === "declined"
              ? "You declined cookies. Cart items are not saved between visits."
              : consent === "unknown"
              ? "Please review our cookie usage to enable saving your cart."
              : "Review items in your cart."}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {count === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-600 mb-6">Your cart is empty.</p>
              <Link href="/products">
                <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white">Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-6">
              {items.map((it) => (
                <div key={it.id} className="flex items-center gap-4 border border-slate-200 rounded-xl p-4">
                  {it.image && (
                    <div className="relative w-20 h-16 rounded-md overflow-hidden bg-white">
                      <Image src={it.image} alt={it.name} fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{it.name}</div>
                    <div className="text-sm text-slate-600">Qty: {it.quantity}</div>
                  </div>
                  <div className="font-semibold text-amber-700">
                    {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
                      it.priceNum * it.quantity
                    )}
                  </div>
                  <Button variant="outline" onClick={() => removeItem(it.id)} className="ml-2">Remove</Button>
                </div>
              ))}
              <div className="flex justify-end">
                <Button variant="outline" onClick={clear} className="border-slate-300">Clear Cart</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
