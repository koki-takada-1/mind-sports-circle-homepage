"use client";

import ContactForm from "@/components/contactform/contactform";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion"; // motion をインポート

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* AuroraBackground と motion を組み合わせる */}
            <AuroraBackground>
              <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="w-full"
              >
            <div className="flex items-center justify-center"><ContactForm /></div>

              </motion.div>
            </AuroraBackground>
        </main>
        <Footer />
      </div>
    </>
  );
}
// export default function ContactPage() {
//   return (
//     <>
//       <Header />
//       <div className="flex flex-col min-h-screen">
//         <main className="flex-grow">
//             <div className="flex justify-center items-center">
//                 <ContactForm />
//             </div>
//         </main>
//         <Footer />
//       </div>
//     </>
//   )
// }
