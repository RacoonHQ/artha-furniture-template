"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import Cookies from "js-cookie"

export type CartItem = {
  id: number
  name: string
  priceNum: number
  price: string
  image?: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  count: number
  consent: "accepted" | "declined" | "unknown"
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void
  removeItem: (id: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_KEY = "artha-cart"
const CONSENT_KEY = "artha-cookie-consent"

function readConsent(): "accepted" | "declined" | "unknown" {
  const c = Cookies.get(CONSENT_KEY)
  if (c === "accepted" || c === "declined") return c
  // Back-compat if stored in localStorage previously
  try {
    const ls = localStorage.getItem(CONSENT_KEY)
    if (ls === "accepted" || ls === "declined") return ls
  } catch {}
  return "unknown"
}

function safeReadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed as CartItem[]
    return []
  } catch {
    return []
  }
}

function safeWriteCart(items: CartItem[]) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  } catch {
    // ignore
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [consent, setConsent] = useState<"accepted" | "declined" | "unknown">("unknown")

  useEffect(() => {
    const c = readConsent()
    setConsent(c)
    if (c === "accepted") {
      setItems(safeReadCart())
    }
  }, [])

  useEffect(() => {
    if (consent === "accepted") {
      safeWriteCart(items)
    }
  }, [items, consent])

  const addItem = (item: Omit<CartItem, "quantity">, qty = 1) => {
    setItems((prev) => {
      // If consent not accepted, do not persist nor change state
      if (consent !== "accepted") return prev
      const idx = prev.findIndex((p) => p.id === item.id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + qty }
        return copy
      }
      return [...prev, { ...item, quantity: qty }]
    })
  }

  const removeItem = (id: number) => {
    setItems((prev) => {
      if (consent !== "accepted") return prev
      return prev.filter((p) => p.id !== id)
    })
  }

  const clear = () => {
    setItems((prev) => {
      if (consent !== "accepted") return prev
      return []
    })
  }

  const count = useMemo(() => items.reduce((acc, it) => acc + it.quantity, 0), [items])

  const value = useMemo(
    () => ({ items, count, addItem, removeItem, clear, consent }),
    [items, count, consent]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
