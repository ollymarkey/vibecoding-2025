"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { StickyHeader } from "@/components/layout/sticky-header";
import { Authenticated, Unauthenticated } from "convex/react";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <StickyHeader className="px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
              ✓
            </div>
            <span className="font-bold text-lg">TaskAI</span>
          </div>
          <SignInAndSignUpButtons />
        </div>
      </StickyHeader>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <span className="mr-1">✨</span>
            AI-Powered Productivity
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Your Tasks, Smarter
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the future of task management with AI that understands your priorities, 
            schedules your day, and helps you achieve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton mode="modal">
              <Button size="lg" className="text-lg px-8">
                Get Started Free
              </Button>
            </SignUpButton>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay organized and productive
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={<span className="text-2xl">🎯</span>}
            title="AI Task Prioritization"
            description="Let AI analyze your tasks and automatically prioritize them based on deadlines, importance, and your work patterns."
          />
          <FeatureCard
            icon={<span className="text-2xl">⚡</span>}
            title="Natural Language Input"
            description="Just type 'meeting with John tomorrow at 3pm' and watch it automatically create a task with the right date and time."
          />
          <FeatureCard
            icon={<span className="text-2xl">⏰</span>}
            title="Smart Scheduling"
            description="AI suggests the best times for your tasks based on your calendar, energy levels, and deadlines."
          />
          <FeatureCard
            icon={<span className="text-2xl">📁</span>}
            title="Auto-Categorization"
            description="Tasks are automatically organized into categories, projects, and tags without any manual work from you."
          />
          <FeatureCard
            icon={<span className="text-2xl">📊</span>}
            title="Progress Tracking"
            description="Visualize your productivity with detailed analytics and insights into your task completion patterns."
          />
          <FeatureCard
            icon={<span className="text-2xl">🔄</span>}
            title="Cross-Platform Sync"
            description="Access your tasks anywhere, anytime. Seamlessly sync across all your devices in real-time."
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TaskAI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users who have transformed their productivity
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-12">
            <BenefitRow
              title="Save Hours Every Week"
              description="Stop wasting time organizing and prioritizing. Our AI does it for you, giving you back hours every week to focus on what matters."
              icon={<span className="text-4xl">⏰</span>}
              reverse={false}
            />
            <BenefitRow
              title="Reduce Stress & Overwhelm"
              description="Never miss a deadline again. AI helps you stay on top of everything by intelligently managing your workload and sending timely reminders."
              icon={<CheckIcon className="h-8 w-8" />}
              reverse={true}
            />
            <BenefitRow
              title="Achieve More, Work Less"
              description="By optimizing your task schedule and focusing on high-priority items, you'll accomplish more in less time. Work smarter, not harder."
              icon={<span className="text-4xl">🚀</span>}
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-3xl mx-auto border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Ready to Transform Your Productivity?</CardTitle>
            <CardDescription className="text-lg">
              Join thousands of users who are already achieving more with TaskAI
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <SignUpButton mode="modal">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
            </SignUpButton>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

function SignInAndSignUpButtons() {
  return (
    <div className="flex gap-4">
      <Authenticated>
        <UserButton afterSignOutUrl="/" />
      </Authenticated>
      <Unauthenticated>
        <SignInButton mode="modal">
          <Button variant="ghost">Sign in</Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button>Sign up</Button>
        </SignUpButton>
      </Unauthenticated>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function BenefitRow({
  title,
  description,
  icon,
  reverse,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse: boolean;
}) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="flex-1">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="flex-1 h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
        <div className="text-6xl opacity-20">{icon}</div>
      </div>
    </div>
  );
}
