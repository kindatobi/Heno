import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen  py-16 bg-[#F5F6F4] ">
      <div className="my-x-cont">
        <h1 className="text-6xl font-neue-haas md:text-[120px] font-medium mb-7 md:mb-16 leading-none">
          About Heno
        </h1>

        <div className="space-y-9 text-[16px] md:text-[40px] font-neue-haas  leading-[1.1em] font-normal">
          <p>
            Heno is a contemporary fashion label rooted in Lagos, Nigeria. It
            was inspired by the Usal Project and founded by Tobi Ojo alongside
            Ifeoluwa Ogunseye and Toluwalase Benson in 1921. The collective came
            together with a shared vision: to build a brand that reflects how
            young Africans actually live, think, and dress—unfiltered,
            expressive, and deeply individual.
          </p>

          <p>
            Heno was born from a desire to explore essence. The essence of youth
            culture, creativity, and identity in a time where African voices are
            louder, more connected, and more influential than ever. The brand
            draws from everyday realities—emotion, ambition, insecurity,
            confidence—and translates them into garments that feel personal and
            intentional.
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
            diaspora. Each piece is designed as a reflection of environment and
            experience, capturing moments, moods, and movement in a constantly
            evolving creative landscape.
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
            brands while remaining unmistakably African in perspective. The goal
            isn&apos;t imitation, but ownership—proving that world-class fashion
            can be built from Africa, with ideas that are bold, modern, and
            culturally honest.
          </p>

          <p>
            In a world where global brands often create for us but not from us,
            Heno exists to tell our stories on our terms. More than a clothing
            brand, it is a platform for community, collaboration, and
            inspiration—built to push culture forward and redefine what African
            fashion looks like on a global stage.
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
  );
}
