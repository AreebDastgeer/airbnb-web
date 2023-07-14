import Image from 'next/image'
import React, { useState } from "react";
import { Inter } from 'next/font/google'
import { Navbar } from '../components/components/navbar.js';
import { Footer } from '../components/components/footer.js';
import { Home } from '../components/components/home.js';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <div className="bg-white">
      <Navbar />
      <Home />
      <Footer />
    </div>

  )
}
