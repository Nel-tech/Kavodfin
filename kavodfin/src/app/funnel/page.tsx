'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ArrowDown, Target, Users, TrendingUp, DollarSign, Zap, CheckCircle, Star, Play, Shield, Clock, Award, MessageCircle } from 'lucide-react';

const SalesFunnel = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      text: "I went from $0 to $5,000 monthly in just 3 months. The system is incredibly simple to follow!",
      earnings: "$5,000/month"
    },
    {
      name: "Mike Chen",
      role: "Online Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      text: "No trading experience needed. I just copy, paste, and earn. Best decision I ever made!",
      earnings: "$3,200/month"
    },
    {
      name: "Jessica Williams",
      role: "Stay-at-home Mom",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      text: "Perfect for busy parents. I work 30 minutes a day and make more than my old full-time job.",
      earnings: "$4,500/month"
    }
  ];

  const pricingFeatures = [
    "Personal Landing Page Setup",
    "Real-time Tracking Dashboard",
    "Daily High-Pip Forex Signals",
    "24/7 WhatsApp Support Group",
    "Commission Payment System",
    "Marketing Materials & Templates",
    "Weekly Training Sessions",
    "Lifetime Access & Updates"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* AWARENESS - Hero Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-gradient-to-br from-green-900 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <Badge className="bg-yellow-400 text-green-900 text-sm font-bold px-4 py-2 mb-6">
            #1 FOREX CPA SYSTEM
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Tired of Watching Others
            <span className="text-yellow-400"> Make Money Online?</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Join the proven Forex CPA system built for real people — no trading skills needed.
            Start earning daily commissions in 24 hours!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-yellow-400 text-green-900 hover:bg-yellow-300 px-8 py-4 text-lg font-bold shadow-xl"
              onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Free Training
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 px-8 py-4 text-lg font-bold"
              onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Real Results
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center items-center gap-8 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>2,847+ Active Members</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>$1.2M+ Paid Out</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-yellow-400" />
        </div>
      </section>

      {/* INTEREST - Video Section */}
      <section id="video" className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">
            Your Journey to Financial Freedom Starts Here
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Watch this exclusive training and discover exactly how our members are earning
            $3,000-$10,000+ monthly with zero trading experience.
          </p>

          <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-green-900/20 mb-8">
            <div className="bg-gradient-to-br from-green-900 to-green-700 w-full h-full flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                <p className="text-xl font-semibold">Free Training Video</p>
                <p className="text-green-200">Click to watch (12 minutes)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { icon: Clock, title: "Quick Setup", desc: "Get started in under 30 minutes" },
              { icon: Shield, title: "Risk-Free", desc: "No upfront investment required" },
              { icon: Award, title: "Proven System", desc: "1000+ success stories" }
            ].map((item, i) => (
              <Card key={i} className="bg-white border-2 border-green-100 hover:border-green-300 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONSIDERATION - Results & Testimonials */}
      <section id="results" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">
              Real People, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. See what our members are earning with our proven system.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8 space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all ${i === activeTestimonial ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    width={20}
                    height={20}
                    className=" rounded-full border-4 border-yellow-400"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-semibold text-green-900 mb-6 leading-relaxed">
                  &quot;{testimonials[activeTestimonial].text}&quot;
                </blockquote>

                <div className="space-y-2">
                  <p className="text-lg font-bold text-green-800">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                  <Badge className="bg-yellow-400 text-green-900 font-bold">
                    Earning: {testimonials[activeTestimonial].earnings}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "2,847+", label: "Active Members", icon: Users },
              { number: "$1.2M+", label: "Total Paid Out", icon: DollarSign },
              { number: "94%", label: "Success Rate", icon: TrendingUp },
              { number: "24/7", label: "Support Available", icon: MessageCircle }
            ].map((stat, i) => (
              <Card key={i} className="text-center p-6 border-2 border-green-100 hover:border-green-300 transition-all">
                <CardContent className="p-0">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <div className="text-3xl font-bold text-green-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DESIRE - Benefits & Features */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;ve eliminated all the guesswork. Just follow our proven system and start earning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "🚀 Plug & Promote System",
                description: "Get your personalized landing page, referral links, and live tracking dashboard. Everything is set up for you in minutes."
              },
              {
                icon: TrendingUp,
                title: "📊 Daily Forex Signals",
                description: "Our professional traders deliver high-pip signals daily. Earn commissions every time your referrals take action on our signals."
              },
              {
                icon: CheckCircle,
                title: "💰 Zero Experience Required",
                description: "No trading knowledge needed. No marketing skills required. Just copy your unique link, share it, and start earning commissions."
              },
              {
                icon: Zap,
                title: "⚡ Instant Notifications",
                description: "Get real-time alerts for every commission earned. Track your progress with our advanced analytics dashboard."
              },
              {
                icon: Users,
                title: "👥 Private Community",
                description: "Join our exclusive WhatsApp group with 2,800+ successful members. Get support, tips, and motivation 24/7."
              },
              {
                icon: DollarSign,
                title: "💸 Weekly Payouts",
                description: "Receive your commissions every week directly to your account. No minimum payout requirements or hidden fees."
              }
            ].map((benefit, i) => (
              <Card key={i} className="bg-white border-2 border-green-100 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-100 to-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INTENT - Pricing & Offer */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-yellow-400 text-green-900 text-sm font-bold px-4 py-2 mb-6">
            LIMITED TIME OFFER
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of successful members earning daily commissions with our proven system.
          </p>

          <Card className="bg-gradient-to-br from-green-900 to-green-700 text-white border-none shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold mb-2">FREE</div>
                <p className="text-green-200 text-lg">No upfront cost • No hidden fees</p>
              </div>

              <div className="space-y-4 mb-8 text-left">
                {pricingFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-400 text-green-900 p-4 rounded-xl mb-8">
                <p className="font-bold text-lg">🎯 Success Guarantee</p>
                <p className="text-sm">Make your first commission within 30 days or get personal 1-on-1 coaching FREE</p>
              </div>

              <Button
                size="lg"
                className="w-full bg-yellow-400 text-green-900 hover:bg-yellow-300 py-4 text-xl font-bold shadow-xl"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Now - It&apos;s FREE!
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ACTION - Final CTA */}
      <section id="cta" className="py-20 px-6 md:px-20 text-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Earning
            <span className="text-yellow-400"> Daily Commissions?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Join our exclusive WhatsApp group right now and get everything you need to start earning immediately.
            Your financial freedom is just one click away!
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">2,847+</div>
                <div className="text-green-200">Members Earning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">$4,200</div>
                <div className="text-green-200">Avg. Monthly Earnings</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://wa.me/YOUR_WHATSAPP_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-yellow-400 text-green-900 hover:bg-yellow-300 px-12 py-6 text-xl font-bold shadow-2xl rounded-full transform hover:scale-105 transition-all"
              >
                <MessageCircle className="mr-3 w-6 h-6" />
                Join WhatsApp Group Now
              </Button>
            </a>
            <p className="text-green-200 text-sm">
              🔒 100% Secure • No Spam • Leave Anytime
            </p>
          </div>
        </div>
      </section>

      {/* RETENTION - Footer */}
      <section className="py-12 px-6 text-center bg-gray-900 text-gray-400">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-3">Support</h4>
              <p className="text-sm">24/7 WhatsApp Support</p>
              <p className="text-sm">Live Training Sessions</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Community</h4>
              <p className="text-sm">2,847+ Active Members</p>
              <p className="text-sm">Success Stories Daily</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Guarantee</h4>
              <p className="text-sm">30-Day Success Promise</p>
              <p className="text-sm">No Risk • No Fees</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm">© {new Date().getFullYear()} KavodFin - Empowering Financial Freedom</p>
            <p className="text-xs mt-2 text-gray-500">Built with proven marketing psychology • Designed for maximum conversions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesFunnel;
