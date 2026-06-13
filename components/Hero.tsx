'use client'
import photo from"./assets/photo.jpeg"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="border-b border-border py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 overflow-hidden rounded-full border-4 border-primary shadow-lg">
            <Image
              src={photo}
              alt="Gori Shahbaz Ali Khan"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Hero Text */}
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Gori Shahbaz Ali Khan
            </h2>
            <p className="mt-3 text-lg text-primary sm:text-xl">
              Creative Full Stack Developer
            </p>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Building beautiful and functional web applications with modern technologies. Passionate about creating intuitive user experiences and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
