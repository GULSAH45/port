import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SKILLS = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Framer Motion",
  ],
  learning: [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "GraphQL",
    "Docker",
    "AWS",
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Chrome DevTools",
    "Postman",
    "npm",
    "yarn",
  ],
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Skills & Technologies
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {SKILLS.frontend.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Currently Learning</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {SKILLS.learning.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Tools & Software</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {SKILLS.tools.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

