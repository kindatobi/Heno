import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-0 text-[#F5F6F4] bg-[#191919]">
      <div className="md:hidden">
        <div className="my-x-cont">
          <h1 className="text-6xl font-neue-haas font-medium mb-7 leading-none">
            About Heno
          </h1>

          <div className="space-y-9 text-[16px] tracking-wide font-neue-haas leading-[1.1em] font-normal">
            <p>
              Heno is a contemporary fashion label rooted in Lagos, Nigeria. It
              was inspired by the Usal Project and founded by Tobi Ojo alongside
              Ifeoluwa Ogunseye and Toluwalase Benson in 1921. <br /> The
              collective came together with a shared vision: to build a brand
              that reflects how young Africans actually live, think, and
              dress—unfiltered, expressive, and deeply individual.
            </p>

            <p>
              Heno was born from a desire to explore essence. The essence of
              youth culture, creativity, and identity in a time where African
              voices are louder, more connected, and more influential than ever.
              The brand draws from everyday realities—emotion, ambition,
              insecurity, confidence—and translates them into garments that feel
              personal and intentional.
            </p>

            <div>
              <Image
                src="/about-image1.webp"
                alt="About image 2"
                width={2400}
                height={1500}
                priority
              />
            </div>

            <p>
              At its core, Heno is about representation. Creating clothing that
              resonates with a generation of Africans shaping culture across
              multiple disciplines: artists, designers, athletes, developers,
              storytellers, and innovators both on the continent and in the
              diaspora. Each piece is designed as a reflection of environment
              and experience, capturing moments, moods, and movement in a
              constantly evolving creative landscape.
            </p>

            <p>
              Heno approaches fashion as documentation—using clothing, form, and
              imagery to archive growth, experimentation, and the spirit of now.
              Every collection is a snapshot in time, shaped by the people,
              streets, and conversations around us, while staying grounded in
              quality and thoughtful design.
            </p>
            <div className="flex justify-end">
              <Image
                src="/about-image.webp"
                alt="About image"
                width={1600}
                height={2000}
                priority
              />
            </div>

            <p>
              As a growing participant in the global fashion conversation, Heno
              aims to stand shoulder-to-shoulder with established international
              brands while remaining unmistakably African in perspective. The
              goal isn&apos;t imitation, but ownership—proving that world-class
              fashion can be built from Africa, with ideas that are bold,
              modern, and culturally honest.
            </p>

            <p>
              In a world where global brands often create for us but not from
              us, Heno exists to tell our stories on our terms. More than a
              clothing brand, it is a platform for community, collaboration, and
              inspiration—built to push culture forward and redefine what
              African fashion looks like on a global stage.
            </p>
            <div>
              <Image
                src="/about-image3.webp"
                alt="About image 2"
                width={2000}
                height={1250}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="h-screen relative">
          <Image
            src="/about-image3.webp"
            alt="About image 1"
            width={2400}
            height={1500}
            priority
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-0 left-0 right-0 text-[80px] text-[#F5F6F4] font-neue-haas font-normal mb-4 leading-none px-8">
            The Lore Behind Heno
          </h1>
        </div>

        <div className="my-x-cont">
          <div className="space-y-9 text-[16px] font-neue-haas leading-[1.1em] font-normal mt-16">
            <div className="space-y-6 max-w-[60%] mx-auto">
              <h1 className="text-[40px]">How We Started The Brand</h1>
              <p className="pr-26 tracking-[0.035em] text-[14px] leading-[1.4em] ">
                Heno is a contemporary fashion label rooted in Lagos, Nigeria.
                It was inspired by the Usal Project and founded by Tobi Ojo
                alongside Ifeoluwa Ogunseye and Toluwalase Benson in 1921.
              </p>
            </div>

            <div className="-mt-2 space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-[0.035em] text-[14px] leading-[1.4em]">
                The collective came together with a shared vision: to build a
                brand that reflects how young Africans actually live, think, and
                dress—unfiltered, expressive, and deeply individual. Heno was
                born from a desire to explore essence. The essence of youth
                culture, creativity, and identity in a time where African voices
                are louder, more connected, and more influential than ever. The
                brand draws from everyday realities—emotion, ambition,
                insecurity, confidence—and translates them into garments that
                feel personal and intentional.
              </p>
            </div>

            <div className="py-12 flex flex-col items-end">
              <div className="space-y-1 max-w-[40%]">
                <h1 className="font-bcd-diatype tracking-[0.08em] underline uppercase text-[14px]">
                  Our Core values
                </h1>
                <p className="tracking-[0.035em] text-[14px] leading-[1.4em]">
                  At it&apos;s core, Heno is about representation. Creating
                  clothing that resonates with a generation of Africans shaping
                  culture across multiple disciplines: artists, designers,
                  athletes, developers, storytellers, and innovators both on the
                  continent and in the diaspora.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square bg-gray-700 overflow-hidden">
                <Image
                  src="/about-image7.webp"
                  alt="About image"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="aspect-4/5 bg-gray-700">
                <Image
                  src="/about-image10.webp"
                  alt="About image"
                  width={1600}
                  height={2000}
                  priority
                />
              </div>
            </div>

            <div className="py-6 flex flex-col items-end">
              <div className="space-y-1 max-w-[60%] mx-auto">
                <p className="tracking-[0.035em] text-[14px] leading-[1.4em]">
                  Each piece is designed as a reflection of environment and
                  experience, capturing moments, moods, and movement in a
                  constantly evolving creative landscape. Heno approaches
                  fashion as documentation—using clothing, form, and imagery to
                  archive growth, experimentation, and the spirit of now.
                </p>
              </div>
            </div>

            <div>
              <video autoPlay loop muted playsInline className="w-full">
                <source src="/about-vid.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="py-12 flex flex-col items-end">
              <div className="space-y-1 max-w-[40%]">
                <p className="tracking-[0.035em] text-[14px] leading-[1.4em]">
                  Every collection is a snapshot in time, shaped by the people,
                  streets, and conversations around us, while staying grounded
                  in quality and thoughtful design. As a growing participant in
                  the global fashion conversation, Heno aims to stand
                  shoulder-to-shoulder with established international brands
                  while remaining unmistakably African in perspective. The goal
                  isn&apos;t imitation, but ownership—proving that world-class
                  fashion can be built from Africa, with ideas that are bold,
                  modern, and culturally honest.
                </p>
              </div>
            </div>

            <div className="pb-35 space-y-1 max-w-[60%] mx-auto">
              <h1 className="font-bcd-diatype tracking-[0.08em] uppercase underline text-[14px]">
                Our mission
              </h1>
              <p className="tracking-[0.035em] text-[14px] leading-[1.4em]">
                In a world where global brands often create for us but not from
                us, Heno exists to tell our stories on our terms. More than a
                clothing brand, it is a platform for community, collaboration,
                and inspiration—built to push culture forward and redefine what
                African fashion looks like on a global stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
