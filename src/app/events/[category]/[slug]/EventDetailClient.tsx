"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  Tag, 
  Users, 
  Check, 
  ArrowLeft, 
  ChevronRight 
} from "lucide-react";
import { EventItem } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";

import { getEventCategoryUrl } from "@/lib/routing";

interface EventDetailClientProps {
  event: EventItem;
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    teamSize: 1,
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const eventUrl = `https://www.tamizhtech.in/events/${event.categorySlug}/${event.slug}`;
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "Contact",
          source: "Event Registration Page",
          pageUrl: eventUrl,
          customerName: registerForm.name,
          email: registerForm.email,
          phone: registerForm.phone,
          organization: registerForm.org,
          quantity: registerForm.teamSize,
          subject: `Registration: ${event.title}`,
          requirement: `Event: ${event.title} (${event.type}), Team Size: ${registerForm.teamSize}`,
          message: registerForm.notes,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setLeadId(data.leadId || "");
      } else {
        alert(data.error || "Failed to submit registration. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 text-text-primary">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 mb-6 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <Link href="/events" className="hover:text-accent transition-colors">Events</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <Link href={getEventCategoryUrl(event.categorySlug)} className="hover:text-accent transition-colors">{event.type}</Link>
          <ChevronRight className="w-3 h-3 text-text-muted shrink-0" />
          <span className="text-accent truncate max-w-[200px]">{event.title}</span>
        </nav>

        {/* Back navigation */}
        <div className="mb-8 text-xs font-bold text-text-secondary uppercase tracking-wider text-left">
          <Link href={getEventCategoryUrl(event.categorySlug)} className="hover:text-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to {event.type}s
          </Link>
        </div>

        {/* Event layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Banner Image Container */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border bg-subtle">
              <Image
                src={event.banner}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Main Header */}
            <div>
              <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                {event.type}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 leading-tight text-text-primary">
                {event.title}
              </h1>
              <p className="text-text-secondary text-base leading-relaxed font-sans mt-4">
                {event.description}
              </p>
            </div>

            {/* Quick Details Table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-b border-border py-6">
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Date & Time</span>
                <div className="flex items-center gap-1.5 text-sm font-bold text-text-primary">
                  <Calendar className="w-4 h-4 text-accent shrink-0" />
                  <span>{event.date}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Location</span>
                <div className="flex items-center gap-1.5 text-sm font-bold text-text-primary">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span className="truncate">{event.location.split(",")[0]}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Fee</span>
                <div className="flex items-center gap-1.5 text-sm font-bold text-accent">
                  <Tag className="w-4 h-4 text-accent shrink-0" />
                  <span>{event.price}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Capacity</span>
                <div className="flex items-center gap-1.5 text-sm font-bold text-text-primary">
                  <Users className="w-4 h-4 text-accent shrink-0" />
                  <span>{event.capacity} Slots</span>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form Card */}
          <div className="lg:col-span-4">
            <Card className="border border-border bg-subtle p-6 rounded-lg sticky top-32 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <Check className="w-12 h-12 text-emerald-600 mx-auto" />
                  <div>
                    <h3 className="text-lg font-bold font-heading uppercase text-text-primary">Registration Received</h3>
                    <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                      Thank you! Your registration for {event.title} is successful. Our event coordination desk will email you confirmation tickets and venue details shortly.
                    </p>
                  </div>
                  {leadId && (
                    <div className="bg-white p-3 rounded-xl border border-border inline-block">
                      <span className="text-[10px] font-bold text-text-muted uppercase block">Reference ID</span>
                      <span className="text-sm font-black font-mono text-accent">{leadId}</span>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="text-left mb-6">
                    <h3 className="text-lg font-bold font-heading uppercase text-text-primary">Register Interest</h3>
                    <p className="text-xs text-text-muted mt-1 uppercase">Submit details to reserve your delegate passes.</p>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={registerForm.phone}
                      onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Institution/Company</label>
                    <input
                      type="text"
                      required
                      value={registerForm.org}
                      onChange={(e) => setRegisterForm({ ...registerForm, org: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      placeholder="School/College Name"
                    />
                  </div>

                  {event.type === "Competition" && (
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Team Size (Max 5)</label>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        required
                        value={registerForm.teamSize}
                        onChange={(e) => setRegisterForm({ ...registerForm, teamSize: parseInt(e.target.value) || 1 })}
                        className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Additional Requirements</label>
                    <textarea
                      value={registerForm.notes}
                      onChange={(e) => setRegisterForm({ ...registerForm, notes: e.target.value })}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent h-20 resize-none"
                      placeholder="Special lab requirements, dietary details, team names..."
                    />
                  </div>

                  <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center py-3.5 font-bold text-white">
                    {isSubmitting ? "Registering..." : "Submit Registration"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
