import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, Heart, User, Users, Leaf, Dumbbell,
  ShieldCheck, Trophy, BarChart3, Calendar, MapPin, Award, Target,
  Check, ChevronRight, Plus, Minus, Instagram, Linkedin, Facebook, Youtube,
  MapPin as Pin, Phone, Mail, Clock, Zap,
} from "lucide-react";
import heroAthlete from "@/assets/hero-athlete.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  component: PulseFitLanding,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build muscle, level up strength and unlock your peak performance." },
  { icon: Heart, title: "Cardio Fitness", desc: "Boost endurance, burn calories and improve heart health." },
  { icon: User, title: "Personal Training", desc: "1-on-1 coaching customized to your goals and lifestyle." },
  { icon: Users, title: "Group Classes", desc: "Fun, motivating classes for all fitness levels and goals." },
  { icon: Leaf, title: "Nutrition Plans", desc: "Custom meal plans to fuel your body and mind." },
  { icon: Activity, title: "Functional Training", desc: "Improve movement, mobility and real-life strength." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Expert Coaches", desc: "Certified professionals committed to your success." },
  { icon: Dumbbell, title: "Premium Equipment", desc: "Top-of-the-line gear for a safer, better workout." },
  { icon: Users, title: "Supportive Community", desc: "Train with people who motivate and inspire you." },
  { icon: BarChart3, title: "Proven Results", desc: "Science-backed methods that deliver real change." },
];

const trainers = [
  { img: trainer1, name: "Alex Morgan", role: "Strength Coach" },
  { img: trainer2, name: "Sophia Lewis", role: "Fitness Coach" },
  { img: trainer3, name: "Daniel Knox", role: "Performance Coach" },
  { img: trainer4, name: "Mia Carter", role: "Nutrition Coach" },
];

const schedule = [
  { name: "HIIT Blast", time: "07:00 AM" },
  { name: "Strength Power", time: "09:00 AM" },
  { name: "Yoga Flow", time: "12:00 PM" },
  { name: "Boxing Fit", time: "06:00 PM" },
  { name: "Functional Core", time: "07:00 PM" },
];

const amenities = [
  "Unlimited Gym Access", "Personal Training",
  "200+ Weekly Classes", "InBody Assessment",
  "Luxury Locker Rooms", "Member Events",
  "Recovery & Wellness Zone", "Free Parking",
  "Towel Service", "Wi-Fi & Charging Stations",
  "Nutrition Lounge", "24/7 Security",
];

const steps = [
  { n: "01", title: "Join", desc: "Choose a plan that fits your goals and lifestyle." },
  { n: "02", title: "Assess", desc: "We assess your fitness level and design your plan." },
  { n: "03", title: "Train", desc: "Work with expert coaches and access premium facilities." },
  { n: "04", title: "Achieve", desc: "Track progress and celebrate your results." },
];

const plans = [
  {
    name: "Essential", price: 49, tag: "Perfect for getting started",
    features: ["Gym Access", "Group Classes", "Basic Support"],
  },
  {
    name: "Premium", price: 79, tag: "Best for serious results", popular: true,
    features: ["Everything in Essential", "Unlimited Classes", "Personalized Program", "Nutrition Guidance"],
  },
  {
    name: "Elite", price: 129, tag: "For ultimate transformation",
    features: ["Everything in Premium", "1-on-1 Personal Training", "Priority Booking", "Body Composition Analysis"],
  },
];

const faqs = [
  { q: "What is included in the membership?", a: "All memberships include gym access, group classes, locker room facilities and our member app. Premium and Elite tiers unlock personalized programming, nutrition guidance, and 1-on-1 coaching." },
  { q: "Can I freeze my membership?", a: "Yes — you can freeze your membership up to 3 months per year for any reason. Just let us know at the front desk or through the app." },
  { q: "Do you offer personal training?", a: "Absolutely. Our certified coaches offer 1-on-1 sessions tailored to your goals, included in the Elite plan and available as an add-on." },
  { q: "Do you offer day passes?", a: "Yes — day passes are $25 and include full access to the gym, classes, and amenities." },
  { q: "Are there any contracts?", a: "No long-term contracts. All memberships are month-to-month and you can cancel anytime." },
  { q: "What are the gym hours?", a: "Monday–Friday 5AM–10PM, Saturday–Sunday 7AM–7PM. Elite members have 24/7 access." },
];

const blogs = [
  { img: blog1, tag: "Training", date: "May 10, 2024", title: "5 Strength Training Tips For Maximum Results" },
  { img: blog2, tag: "Nutrition", date: "May 8, 2024", title: "The Ultimate Guide To Pre-Workout Nutrition" },
  { img: blog3, tag: "Wellness", date: "May 5, 2024", title: "Why Recovery Is The Secret To Building Muscle" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Zap className="h-6 w-6 text-primary fill-primary" strokeWidth={2.5} />
      <span className="font-display text-xl font-bold tracking-wider">
        PULSE <span className="text-primary">FIT</span>
      </span>
    </div>
  );
}

function PulseFitLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HEADER ===== */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((l, i) => (
              <a key={l.label} href={l.href} className={`transition-colors hover:text-primary ${i === 0 ? "text-primary" : "text-foreground/80"}`}>
                {l.label}
              </a>
            ))}
          </nav>
          <button className="bg-gradient-primary text-primary-foreground font-bold px-6 py-2.5 rounded-md text-sm tracking-wide hover:shadow-glow transition-shadow">
            JOIN NOW →
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section id="home" className="relative overflow-hidden pt-32 pb-12 grid-bg scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              TRANSFORM<br />YOUR BODY.<br />
              <span className="text-primary text-glow">ELEVATE<br />YOUR LIFE.</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-md">
              World-class training. Elite coaches. Premium equipment.
              Everything you need to become your strongest self.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-gradient-primary text-primary-foreground font-bold px-7 py-3.5 rounded-md tracking-wide hover:shadow-glow transition-shadow">
                JOIN NOW →
              </button>
              <button className="border border-primary text-primary font-bold px-7 py-3.5 rounded-md tracking-wide hover:bg-primary/10 transition-colors">
                VIEW PROGRAMS
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
            <img
              src={heroAthlete}
              alt="Athlete training with dumbbell at Pulse Fit"
              width={1280} height={1280}
              className="relative rounded-lg w-full object-cover aspect-square"
            />
            <div className="absolute top-4 right-4 space-y-3 hidden md:block">
              {[
                { icon: Zap, label: "PREMIUM\nEQUIPMENT" },
                { icon: Users, label: "EXPERT\nTRAINERS" },
                { icon: Trophy, label: "PROVEN\nRESULTS" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-surface/80 backdrop-blur px-3 py-2 rounded border border-border">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-[10px] font-bold whitespace-pre-line leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mx-auto max-w-7xl px-6 mt-12">
          <div className="bg-surface border border-border rounded-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { icon: Users, val: "12,500+", label: "Happy Members" },
              { icon: User, val: "50+", label: "Expert Trainers" },
              { icon: Calendar, val: "200+", label: "Weekly Classes" },
              { icon: BarChart3, val: "98%", label: "Success Rate" },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className="px-6 py-5 flex items-center gap-4">
                <Icon className="h-7 w-7 text-primary" />
                <div>
                  <div className="font-display text-2xl font-bold">{val}</div>
                  <div className="text-xs uppercase text-muted-foreground tracking-wider">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section id="programs" className="py-20 scroll-mt-20">

        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-bold tracking-[0.3em] mb-2">OUR PROGRAMS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">TRAIN YOUR WAY</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {programs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface border border-border rounded-lg p-6 hover:border-primary transition-colors group">
                <Icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-sm tracking-wider mb-2">{title.toUpperCase()}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="border border-primary text-primary font-bold px-7 py-3 rounded-md text-sm tracking-wide hover:bg-primary/10 transition-colors inline-flex items-center gap-2">
              VIEW ALL PROGRAMS <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-10">
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.3em] mb-2">WHY CHOOSE PULSE FIT?</p>
            <h2 className="font-display text-4xl font-bold leading-tight">
              STRONGER BODY.<br />STRONGER MIND.
            </h2>
            <p className="mt-4 text-muted-foreground text-sm">
              We combine expert coaching, premium facilities and a supportive community to deliver a fitness experience that gets real results.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface border border-border rounded-lg p-5 text-center">
                <Icon className="h-9 w-9 text-primary mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-sm mb-2 tracking-wider">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 scroll-mt-20">

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img src={gymInterior} alt="Inside the Pulse Fit gym" width={1024} height={768} loading="lazy" className="rounded-lg w-full object-cover aspect-[4/3]" />
            <div className="absolute top-6 left-6 font-display text-3xl font-bold text-primary text-glow">PULSE FIT</div>
          </div>
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.3em] mb-2">ABOUT US</p>
            <h2 className="font-display text-4xl font-bold leading-tight">BUILT FOR RESULTS.<br />DRIVEN BY PASSION.</h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Pulse Fit was founded with one mission: to help people become the strongest, healthiest version of themselves.
              We believe fitness is more than just working out — it's a lifestyle built on discipline, consistency and community.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Award, val: "10+", label: "Years of\nExcellence" },
                { icon: Pin, val: "3", label: "Premium\nLocations" },
                { icon: Users, val: "20K+", label: "Members and\nCounting" },
                { icon: Target, val: "100%", label: "Dedicated to\nYour Goals" },
              ].map(({ icon: Icon, val, label }) => (
                <div key={label}>
                  <Icon className="h-6 w-6 text-primary mb-2" />
                  <div className="font-display text-2xl font-bold">{val}</div>
                  <div className="text-[10px] uppercase text-muted-foreground tracking-wider whitespace-pre-line mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRAINERS ===== */}
      <section id="trainers" className="py-20 scroll-mt-20">

        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">MEET OUR ELITE TRAINERS</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {trainers.map((t) => (
              <div key={t.name} className="bg-surface border border-border rounded-lg overflow-hidden group hover:border-primary transition-colors">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={t.img} alt={t.name} width={600} height={700} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display font-bold tracking-wider">{t.name.toUpperCase()}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
                  <div className="flex justify-center gap-3 mt-3 text-muted-foreground">
                    <Instagram className="h-4 w-4 hover:text-primary cursor-pointer" />
                    <Linkedin className="h-4 w-4 hover:text-primary cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="border border-primary text-primary font-bold px-7 py-3 rounded-md text-sm tracking-wide hover:bg-primary/10 transition-colors inline-flex items-center gap-2">
              VIEW ALL TRAINERS <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE + AMENITIES ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-5">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h3 className="text-primary font-display font-bold tracking-wider mb-5">CLASS SCHEDULE</h3>
            <ul className="space-y-3">
              {schedule.map((s) => (
                <li key={s.name} className="flex justify-between items-center border-b border-border pb-3 last:border-0">
                  <span className="font-medium text-sm">{s.name}</span>
                  <span className="text-xs text-muted-foreground tracking-wider">{s.time}</span>
                </li>
              ))}
            </ul>
            <button className="mt-5 border border-primary text-primary font-bold px-5 py-2.5 rounded-md text-xs tracking-wide hover:bg-primary/10 transition-colors inline-flex items-center gap-2">
              VIEW FULL SCHEDULE <ChevronRight className="h-3 w-3" />
            </button>
          </div>
          <div className="lg:col-span-2 bg-surface border border-border rounded-lg p-6 relative overflow-hidden">
            <h3 className="text-primary font-display font-bold tracking-wider mb-5">PREMIUM AMENITIES</h3>
            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 relative z-10 max-w-md">
              {amenities.map((a) => (
                <div key={a} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center">
              <div className="text-right pr-8">
                <p className="font-display text-2xl font-bold leading-tight">RECOVER.<br />REFUEL.<br />REPEAT.</p>
                <div className="h-1 w-24 bg-primary mt-2 ml-auto shadow-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-bold tracking-[0.3em] mb-2">HOW IT WORKS</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">START YOUR TRANSFORMATION IN 4 SIMPLE STEPS</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="relative text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground font-display text-2xl font-bold flex items-center justify-center shadow-glow mb-4">
                  {s.n}
                </div>
                <h3 className="font-display font-bold tracking-wider mb-2">{s.title.toUpperCase()}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-6 -right-3 h-6 w-6 text-primary/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="membership" className="py-20 scroll-mt-20">

        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">REAL PEOPLE. REAL RESULTS.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`relative bg-surface border rounded-lg p-7 ${p.popular ? "border-primary shadow-glow" : "border-border"}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest px-3 py-1 rounded">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold tracking-wider text-center">{p.name.toUpperCase()}</h3>
                <p className="text-xs text-muted-foreground text-center mt-1">{p.tag}</p>
                <div className="text-center mt-4">
                  <span className="font-display text-5xl font-bold text-primary">${p.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-7 w-full font-bold py-3 rounded-md text-sm tracking-wide transition-shadow ${p.popular ? "bg-gradient-primary text-primary-foreground hover:shadow-glow" : "border border-primary text-primary hover:bg-primary/10"}`}>
                  GET STARTED
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="bg-surface border border-border rounded-lg p-5 text-left hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-between items-center gap-4">
                  <span className="font-medium text-sm">{f.q}</span>
                  {openFaq === i ? <Minus className="h-4 w-4 text-primary flex-shrink-0" /> : <Plus className="h-4 w-4 text-primary flex-shrink-0" />}
                </div>
                {openFaq === i && (
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">FITNESS TIPS & RESOURCES</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {blogs.map((b) => (
              <article key={b.title} className="bg-surface border border-border rounded-lg overflow-hidden group hover:border-primary transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={b.img} alt={b.title} width={768} height={512} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest px-2 py-1 rounded">
                    {b.tag.toUpperCase()}
                  </span>
                  <span className="absolute top-3 right-3 bg-background/70 backdrop-blur text-[10px] px-2 py-1 rounded">{b.date}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold leading-snug">{b.title}</h3>
                  <a href="#" className="text-primary text-xs font-bold tracking-widest mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                    READ MORE →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="border border-primary text-primary font-bold px-7 py-3 rounded-md text-sm tracking-wide hover:bg-primary/10 transition-colors inline-flex items-center gap-2">
              VIEW ALL ARTICLES <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative overflow-hidden">
        <img src={ctaBanner} alt="" width={1600} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:text-right">
          <div className="md:ml-auto md:max-w-xl">
            <p className="text-primary text-xs font-bold tracking-[0.3em] mb-3">YOUR JOURNEY STARTS NOW</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              BE STRONGER THAN<br />YOUR EXCUSES.
            </h2>
            <button className="mt-8 bg-gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-md tracking-wide hover:shadow-glow transition-shadow">
              JOIN PULSE FIT TODAY →
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="border-t border-border bg-surface/40 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground text-sm max-w-xs">
              Premium fitness. Proven results. Join the community. Elevate your life.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-muted-foreground">
              {["Home", "Programs", "Trainers", "Membership", "About", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold tracking-wider mb-4">PROGRAMS</h4>
            <ul className="space-y-2 text-muted-foreground">
              {programs.map((p) => (
                <li key={p.title}><a href="#" className="hover:text-primary">{p.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold tracking-wider mb-4">CONTACT US</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><Pin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>123 Fitness Way<br />New York, NY 10001</span></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>(212) 555-7890</span></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>info@pulsefit.com</span></li>
              <li className="flex gap-2"><Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Mon–Fri: 5AM–10PM<br />Sat–Sun: 7AM–7PM</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2026 Pulse Fit. All Rights Reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
