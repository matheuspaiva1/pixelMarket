"use client"
import React, { useState, ReactNode  } from "react"
import AppContext from '@/app/contexts/appContext'

interface ProviderProps {
  children: ReactNode,
}

export default function Provider({children}:ProviderProps){
  const [products, setProducts] = useState<any>([])

  const [cartItems, setCartItems] = useState<any>([])

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
  }

  return (
    <div>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </div>
    
  )
}

