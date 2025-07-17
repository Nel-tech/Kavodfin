import { MessageCircleHeart, Signal, DollarSign, PhoneCall } from "lucide-react";

const values = [
  { title: "Beginners", desc: "New to Forex trading" },
  { title: "Busy People", desc: "Limited time to analyze" },
  { title: "Tired Traders", desc: "Frustrated with losses" },
  { title: "Growth Seekers", desc: "Want financial freedom" },
];

const testimonials = [
  {
    name: "Emmanuel T.",
    role: "Day Trader",
    text: "I doubled my account in 2 weeks with your signals! The accuracy is unbelievable.",
  },
  {
    name: "Grace A.",
    role: "Part-time Trader",
    text: "Best decision I've made in Forex. No more guessing games or sleepless nights.",
  },
  {
    name: "Chuks I.",
    role: "Professional Trader",
    text: "KavodFin changed my trading journey forever. Consistent profits every month.",
  },
];

const steps = [
  {
    id: 1,
    title: 'Join the VIP WhatsApp Group',
    description:
      'Tap the button below to connect with us instantly on WhatsApp. No stress. No signup forms.',
    icon: MessageCircleHeart,
    button: {
      label: 'Join Now',
      link: 'https://chat.whatsapp.com/FEZGuJbpOof60XCaerA9zo', 
      icon: PhoneCall, 
    },
  },
  {
    id: 2,
    title: 'Get Daily Accurate Forex Signals',
    description:
      'Once you’re in, you’ll receive daily trading signals — including entry price, stop loss, and take profit. We do the analysis. You follow the signal.',
    icon: Signal,
  },
  {
    id: 3,
    title: 'Copy, Paste & Profit',
    description:
      'Use your trading app to copy the signal, execute the trade, and start seeing results — even if you’re a total beginner!',
    icon: DollarSign,
  },
];

export { values, testimonials, steps }; 

