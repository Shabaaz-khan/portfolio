'use client'

import { Code2 , Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="mb-8 text-center sm:mb-12">
          <h3 className="text-2xl font-bold text-foreground">Let&apos;s Connect</h3>
          <p className="mt-2 text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="mailto:gshabaaz0@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shahbaz-khan-58abbb27b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="LinkedIn"
            >
              <FaLinkedin    className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row">
          <p>
            © {currentYear} Gori Shahbaz Ali Khan. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}
