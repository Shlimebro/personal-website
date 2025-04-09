"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Github, Linkedin, Mail, MapPin, MessageSquare, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormStatus("success")
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Contact Me</h1>
      <p className="mb-10 max-w-3xl text-muted-foreground">
        Interested in working together or have a question? Feel free to reach out using the form below or through my
        social media channels.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button className="mt-6" onClick={() => setFormStatus("idle")}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Alternative ways to get in touch with me.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm">
                    contact{"{"} at {"}"} yourname.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
              <CardDescription>Follow me on social media and professional networks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md p-2 transition-colors hover:bg-muted"
              >
                <Linkedin className="mr-3 h-5 w-5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md p-2 transition-colors hover:bg-muted"
              >
                <Github className="mr-3 h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md p-2 transition-colors hover:bg-muted"
              >
                <Twitter className="mr-3 h-5 w-5 text-[#1DA1F2]" />
                <span>Twitter</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
