'use client'

import Image from 'next/image'
import ecom from "./assets/ecom.png"
import jarvis_reach from "./assets/jarvis_reach.png"
import rhs from "./assets/rhs.png"
import sms from "./assets/sms.png"
const projects = [
  {
    id: 1,
    title: 'Jarvis Reach',
    type: 'Company Project',
    description: `Worked on a SaaS-based application built using the MERN stack. Developed authentication systems, credit management modules, REST APIs, frontend integrations, API testing, and debugging features.`,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: jarvis_reach,
  },

  {
    id: 2,
    title: 'School Management System',
    type: 'Company Project',
    description: `Contributed to the development of a School Management System. Worked on student management, attendance tracking, fee management modules, CRUD operations, form validations, search functionality, and API integration.`,
    technologies: ['Vue.js', 'Spring Boot', 'MySQL', 'Bootstrap'],
    image: sms,
  },

  {
    id: 3,
    title: 'E-Commerce Website',
    type: 'Company Project',
    description: `Developed a fully responsive E-Commerce frontend using Vue 3 Composition API. Implemented category carousel, product listing, route-based navigation, reusable UI components, API integration, and coupon management dashboard functionality.`,
    technologies: ['Vue 3', 'Bootstrap 5', 'Axios', 'REST APIs'],
    image: ecom,
  },

{
  id: 4,
  title: 'RHS School Website',
  type: 'Company Project',
  description: `Developed a responsive static website for a school. Created multiple web pages, implemented modern UI components, optimized layouts for different screen sizes, and ensured a user-friendly browsing experience.`,
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  image: rhs,
}
]

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 text-muted-foreground">
            Showcasing my best work and technical capabilities
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-muted ${
                    index === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <div className="relative h-64 sm:h-72 md:h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center p-6 sm:p-8 ${
                  index === 1 ? 'md:order-1' : ''
                }`}>
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
