import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function iChimpzySite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans">
      <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-lg shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">iChimpzy</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#features" className="hover:text-yellow-300 transition">Features</a>
            <a href="#reviews" className="hover:text-yellow-300 transition">Reviews</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative text-center py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold leading-tight mb-4">Premium Online Marketplace</h2>
          <p className="text-lg text-gray-300 mb-6">Buy, sell & profit with confidence. Trusted by thousands worldwide.</p>
          <Button size="lg" className="text-black bg-yellow-300 hover:bg-yellow-400 transition">Get Started</Button>
        </motion.div>
      </section>

      <section id="features" className="py-20 px-4 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {["Verified Listings", "Safe Transactions", "Fast Support"].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="bg-[#0f172a] border border-yellow-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-400">Experience professional service and trusted platforms with every deal.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">What Our Users Say</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {["Top-notch experience!", "Fast, reliable, secure.", "Best platform for digital trading."].map((text, i) => (
              <Card key={i} className="bg-[#0f172a] border border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-300">“{text}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-[#1e293b]">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-6">Have questions or feedback? Reach out and we’ll respond promptly.</p>
          <Button size="lg" className="bg-yellow-300 text-black hover:bg-yellow-400 transition">Contact Us</Button>
        </div>
      </section>

      <footer className="py-8 bg-[#0f172a] text-center text-sm text-gray-500">
        &copy; 2025 iChimpzy. All rights reserved.
      </footer>
    </div>
  );
}
