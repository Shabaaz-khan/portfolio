'use client'

import { Download } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const handleDownloadResume = () => {
    // Create a simple PDF or document link
    const resumeContent = `
GORI SHAHBAZ ALI KHAN
Creative Full Stack Developer

Email: gshabaaz0@gmail.com | Phone: +91 6303340949
 

SKILLS
Frontend: React.js, HTML5, CSS3, JavaScript, Bootstrap 5, Vue.js (Composition API), Vite
Backend: Node.js, Express.js, Spring Boot
Database & Tools: MongoDB, SQL, Git, RESTful APIs

EXPERIENCE
MERN Stack Developer | Sprintzeal | Bengaluru       (Apr 2026 – Present) 
• Currently working on Jarvis Reach, a SaaS-based application built using the MERN stack 
• Developed authentication systems including OTP verification and invite-based signup flow 
• Implemented credit management system (team credits, usage tracking) 
• Built and integrated REST APIs using Node.js and Express.js 

Java Full Stack Developer | Friendsmoo Info Media Pvt. Ltd. | Hyderabad Jan 2025 –Mar 2026 
 • Developed a School Management System with modules like student enrollment, attendance, and fee tracking 
 • Built backend using Spring Boot and MySQL with REST APIs 
 • Developed responsive frontend using Vue.js and Bootstrap 
 • Implemented CRUD operations, form validations, search, and filters 

EDUCATION
B.Tech – Computer Science Engineering 
Reva University (2025)

PROJECTS
E-Commerce Website (Frontend) — Vue 3, Bootstrap 5, REST APIs 
• Developing a fully responsive E-commerce frontend using Vue 3 Composition API 
• Implemented category carousel, product listing, and route-based navigation 
• Built reusable UI components including DataTable, Alerts, and dynamic Form elements 

`
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent))
    element.setAttribute('download', 'Gori_Shahbaz_Resume.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Gori Shahbaz Ali Khan</h1>
            <p className="text-sm text-muted-foreground">Creative Full Stack Developer</p>
          </div>
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:opacity-90 active:scale-95"
            aria-label="Download resume"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Resume</span>
          </button>
        </div>
      </div>
    </header>
  )
}
