'use client'

const experience = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Sprintzeal',
    duration: 'Apr 2026 - Present',
    description:
      "Currently working on Jarvis Reach, a SaaS-based application built using the MERN stack. Responsible for developing authentication systems, REST APIs, credit management features, frontend integrations, API testing, and debugging across the application.",
    highlights: [
      "Developed OTP verification and invite-based signup flows",
      "Built and integrated REST APIs using Node.js and Express.js",
      "Implemented team credit management and usage tracking features",
      "Performed API testing and validation using Postman",
      "Debugged frontend and backend issues to improve application reliability",
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Friendsmoo Info Media Pvt. Ltd',
    duration: 'Jan 2025 -Mar  2026',
    description:
      "Worked on School Management System, and E-Commerce projects using Vue.js, Spring Boot, MySQL, Bootstrap, and Axios. Developed frontend modules, integrated APIs, and implemented business features.",
    highlights: [
      "Developed modules for School Management System applications",
      "Built responsive E-Commerce frontend using Vue 3 and Bootstrap",
      "Integrated REST APIs using Axios and managed data flow",
      "Implemented CRUD operations, validations, search, and filtering functionality",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Experience</h2>
          <p className="mt-3 text-muted-foreground">My professional journey and achievements</p>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className="relative rounded-lg border border-border bg-card p-6 sm:p-8 transition-all hover:shadow-md"
            >
              {/* Timeline indicator */}
              {index !== experience.length - 1 && (
                <div className="absolute -bottom-8 left-8 h-8 w-0.5 bg-primary/20" />
              )}

              {/* Header */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                  <p className="mt-1 font-medium text-primary">{job.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{job.duration}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {job.description}
              </p>

              {/* Highlights */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                <ul className="mt-3 space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
