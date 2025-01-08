import Image from "next/image"
import { ExternalLink, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PROJECTS = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "Chart.js"],
    demo: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/50 py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Projects
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="aspect-video object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

