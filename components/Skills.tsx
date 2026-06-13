'use client'

const skills = [
  { name: 'React.js', category: 'Frontend' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Bootstrap 5', category: 'Frontend' },
  { name: 'Vue.js (Composition API)', category: 'Frontend' },
  { name: 'Vite', category: 'Tools' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
]

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Skills & Technologies</h2>
          <p className="mt-3 text-muted-foreground">Tools and technologies I work with</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-lg border border-border bg-card p-6 text-center transition-all hover:shadow-md hover:border-primary/50"
            >
              <p className="text-xs font-semibold uppercase text-muted-foreground">
                {skill.category}
              </p>
              <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
