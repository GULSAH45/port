import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/50">
      <div className="container flex flex-col-reverse items-center justify-between gap-8 py-32 lg:flex-row lg:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Frontend Developer
            <br />
            <span className="text-primary">Learning Fullstack</span>
          </h1>
          <p className="mt-6 max-w-[600px] text-lg text-muted-foreground sm:text-xl">
            Passionate about creating beautiful user interfaces and expanding my
            knowledge into backend development.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square w-full max-w-md lg:max-w-lg">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary-foreground opacity-20 blur-3xl" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a3c92a73-7459-423c-ad66-d949feebdd84.jpg-CIZIQnVJYg0X6Iz9SqyrpjxW321MSa.jpeg"
            alt="Professional headshot"
            width={500}
            height={500}
            className="relative rounded-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

