// src/components/sections/FeaturesSection.jsx
import { BookOpen, Video, MessageCircle } from "lucide-react";
import Card from "../Card";
import img1 from "../../assets/1.png";
import vector from "../../assets/Vector 34.png";
import AnimatedSection from "../AnimatedSection";

export default function FeaturesSection() {
  return (
    <section className="py-40 px-8 relative">
      {/* connector line (STATIC — no animation) */}
      <div className="absolute z-0 pointer-events-none select-none -top-[8rem] left-[49.5rem] w-[14rem] h-65">
        <img src={vector} alt="vector" className="block w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT: Image Card (fixed) */}
          <div className="relative order-2 md:order-1">
            <Card img={img1} />
          </div>

          {/* RIGHT: Text + Features (fixed) */}
          <div className="order-1 md:order-2">
            <AnimatedSection
              heading={[
                [
                  { text: "The" },
                  { text: "World's", highlight: true },
                ],
                [
                  { text: "First" },
                  { text: "Authenticated", highlight: true },
                ],
                [
                  { text: "Conversational" },
                  { text: "Biography", highlight: true },
                ],
              ]}
              description="ForeverYOU lets you create an interactive, verifiably authentic version of yourself — told in your own voice today, preserved for tomorrow. Soon, you'll also be able to appear as a video avatar."
              headingClass="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6"
              descriptionClass="text-base text-gray-700 mb-10 leading-relaxed"
            />


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              <div className="flex items-start gap-4 flex-col">
                <div className="p-2.5 bg-white rounded-lg border-2 border-gray-200 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-gray-900" />
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Conversational audio now; video avatars coming soon
                </p>
              </div>

              <div className="flex items-start gap-4 flex-col">
                <div className="p-2.5 bg-white rounded-lg border-2 border-gray-200 flex-shrink-0">
                  <Video className="w-5 h-5 text-gray-900" />
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  You decide what's shared, with whom, and when
                </p>
              </div>

              <div className="flex items-start gap-4 flex-col">
                <div className="p-2.5 bg-white rounded-lg border-2 border-gray-200 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-gray-900" />
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Blockchain + encryption ensure authenticity &amp; privacy
                </p>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
}
