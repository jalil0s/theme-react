import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Cart } from './components/Cart';
import { CartButton } from './components/CartButton';
import Hero from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { Reviews } from './components/Reviews';
import { FeaturedProducts } from './components/FeaturedProducts';
import { useCartStore } from './store/cartStore';

function App() {
  const { isOpen, setIsOpen } = useCartStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 bg-white shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-xl font-bold text-gray-900">DreamStore</h1>
              <CartButton />
            </div>
          </div>
        </header>

        <Hero />
        <TrustBadges />
        <FeaturedProducts />
        <Reviews />
        <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </Router>
  );
}

export default App;