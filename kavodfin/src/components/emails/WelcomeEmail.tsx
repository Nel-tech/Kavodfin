"use client"

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';

interface WelcomeEmailProps {
  name: string;
}

export default function WelcomeEmail({ name }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to KavodFin - Start Your Forex Journey</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome {name}! 🎉</Heading>
          <Text style={text}>
            Thank you for joining KavodFin. You&apos;re one step closer to making $3,000 - $5,000/month from Forex trading.
          </Text>
          <Text style={text}>
            Watch the video we sent you to learn how to get started with our copy trading system.
          </Text>
          <Text style={text}>
            Have questions? Reply to this email and we&apos;ll get back to you ASAP.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: '#f6f9fc', fontFamily: 'Montserrat, sans-serif' };
const container = { margin: '0 auto', padding: '20px 0 48px' };
const h1 = { color: '#059669', fontSize: '24px' };
const text = { color: '#333', fontSize: '16px', lineHeight: '26px' };