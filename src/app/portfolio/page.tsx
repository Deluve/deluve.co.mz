"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollView } from "@/components/scroll-view";
import Link from "next/link";
import Image from "next/image";

// Dados expandidos do portfólio baseados na imagem
const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced filtering and seamless checkout experience.",
    category: "E-commerce",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    image: "/images/portfolio/eco.jpg",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Comprehensive analytics dashboard with real-time data visualization and reporting.",
    category: "SaaS",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "/images/portfolio/art.jpg",
  },
  {
    id: 3,
    title: "Banking Mobile App",
    description: "Secure mobile banking application with intuitive user interface and biometric authentication.",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "/images/portfolio/meditation.jpg",
  },
  {
    id: 4,
    title: "Corporate Website",
    description: "Professional corporate website with focus on accessibility and performance optimization.",
    category: "Web",
    technologies: ["Next.js", "Sanity", "Framer Motion"],
    image: "/images/portfolio/bike.jpg",
  },
  {
    id: 5,
    title: "Restaurant Management",
    description: "Multi-location restaurant management system with inventory and staff scheduling.",
    category: "Web",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    image: "/images/portfolio/resturant.jpg",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Comprehensive fitness app with workout plans and nutrition tracking features.",
    category: "Mobile",
    technologies: ["Flutter", "Firebase", "HealthKit"],
    image: "/images/portfolio/event.jpg",
  },
  {
    id: 7,
    title: "Luxury Brand Identity",
    description: "Complete brand identity and digital presence for luxury fashion brand.",
    category: "Branding",
    technologies: ["Webflow", "GSAP", "Three.js"],
    image: "/images/portfolio/eco.jpg",
  },
  {
    id: 8,
    title: "Learning Platform",
    description: "Interactive online learning platform with video streaming and progress tracking.",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/portfolio/art.jpg",
  },
  {
    id: 9,
    title: "Real Estate Platform",
    description: "Modern real estate marketplace with advanced search and virtual tour features.",
    category: "Web",
    technologies: ["Next.js", "Prisma", "Mapbox"],
    image: "/images/portfolio/meditation.jpg",
  },
];

const CATEGORIES = ["All", "Web", "Mobile", "E-commerce", "SaaS", "Branding"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    return selectedCategory === "All" || project.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header Section */}
        <div className="mb-16 pt-20">
          <div className="max-w-4xl">
            <ScrollView>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
                Our Portfolio
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Discover our latest projects and creative solutions that drive business growth and user engagement.
              </p>
            </ScrollView>
          </div>
        </div>

        {/* Filter Navigation */}
        <ScrollView delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-foreground text-background shadow-lg scale-105"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollView>

        {/* Projects Grid */}
        <ScrollView delay={0.2}>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-muted/30 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-bold text-xl leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0 bg-primary/10 text-primary border-primary/20">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-3 py-1 bg-muted/50 border-muted-foreground/20 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors duration-200">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs px-3 py-1 bg-muted/50 border-muted-foreground/20 text-muted-foreground">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No projects found in this category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory("All")}
                className="border-muted-foreground/20 text-muted-foreground hover:bg-muted"
              >
                View all projects
              </Button>
            </div>
          )}
        </ScrollView>

        {/* Call to Action Section */}
        <ScrollView delay={0.3}>
          <div className="text-center py-20 border-t border-muted/30">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Ready to start your project?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s collaborate to bring your vision to life. We&apos;re here to help you create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/get-quote">
                <Button size="lg" className="px-10 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-semibold rounded-xl text-lg hover:scale-105">
                  Get in touch
                </Button>
              </Link>
              <Link href="/#about">
                <Button variant="outline" size="lg" className="px-10 py-4 border-muted-foreground/30 text-foreground hover:bg-muted/50 transition-all duration-300 font-semibold rounded-xl text-lg hover:scale-105">
                  Learn more about us
                </Button>
              </Link>
            </div>
          </div>
        </ScrollView>
      </div>
    </div>
  );
} 