// CTA Section for Entrepreneurs Page
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASectionEntrepreneurs() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#0f1233]">
      {/* Background Gradient / Blur Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] opacity-10" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.2, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35] rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.2, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a90e2] rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <Rocket className="w-16 h-16 text-[#ff6b35]" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Ready to Launch Your Startup?
          </h2>
          
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Don’t let your idea stay just an idea. Apply now and let StartupRunway guide you to success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ff6b35] text-white hover:bg-[#ff6b35]/90 px-8 py-6 rounded-full group">
              Apply to StartupRunway
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-full">
              Schedule a Call
            </Button>
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            Join StartupRunway’s Entrepreneur Network and take your startup from idea to launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}