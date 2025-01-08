import { Card, CardContent } from "@/components/ui/card"
import { Code2, Laptop, Server } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/50 py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          I'm a frontend developer with a growing passion for fullstack
          development. My journey in web development started with creating
          beautiful user interfaces, and now I'm expanding my skills to include
          backend technologies.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Laptop className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <p className="text-center text-muted-foreground">
                Experienced in building responsive and interactive user interfaces
                using modern frameworks and tools.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Server className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Backend Journey</h3>
              <p className="text-center text-muted-foreground">
                Currently learning backend technologies to become a more
                well-rounded developer.
              </p>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 lg:col-span-1">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Code2 className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Clean Code</h3>
              <p className="text-center text-muted-foreground">
                Committed to writing maintainable, efficient, and well-documented
                code following best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

