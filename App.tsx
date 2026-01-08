
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import { Instagram } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-950 text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Login />} />
              <Route path="/orders" element={<OrderHistory />} />
              <Route path="/categories" element={<Shop />} />
            </Routes>
          </main>
          <CartDrawer />
          
          <footer className="bg-black text-white pt-32 pb-16 border-t border-amber-500/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                <div className="col-span-1 md:col-span-1">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <span className="text-black font-black text-xl">T</span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter uppercase text-amber-500">TECHIFY</span>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    The golden standard of digital engineering. Delivering hardware that exists at the intersection of performance and luxury. Crafted for the global elite.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-8 underline decoration-amber-500/30 underline-offset-8">Ecosystem</h4>
                  <ul className="space-y-4 text-slate-300 font-bold">
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Elite Labs</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Connoisseur Hub</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Techify Cloud</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Venture Node</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-8 underline decoration-amber-500/30 underline-offset-8">Protocol</h4>
                  <ul className="space-y-4 text-slate-300 font-bold">
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Secure Trust</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Private Mesh</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Use</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Environment</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-8 underline decoration-amber-500/30 underline-offset-8">Neural Feed</h4>
                  <p className="text-slate-500 font-medium mb-6 text-sm">Synchronize your neural network with our elite list.</p>
                  <div className="relative group">
                    <input type="email" placeholder="Pulse ID / Email" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500 transition-all text-white font-bold" />
                    <button className="absolute right-2 top-2 bottom-2 bg-amber-500 text-black px-6 rounded-xl font-black text-sm hover:bg-amber-400 transition-all">OK</button>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 font-bold text-xs gap-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                  <p>&copy; 2026 TECHIFY TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
                  <p className="text-amber-500/50 uppercase tracking-[0.3em] text-[10px]">Created by WAQAR</p>
                </div>
                <div className="flex space-x-10">
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-all">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
