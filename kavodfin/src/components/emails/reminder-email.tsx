"use client"

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';

interface ReminderEmailProps {
  name: string;
  joinUrl: string;
}

export default function ReminderEmail({ name, joinUrl }: ReminderEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Don&apos;t Miss Out - Join KavodFin Now</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Hey {name}, Don&apos;t Miss Out! ⏰</Heading>
          <Text style={text}>
            We noticed you haven&apos;t joined our community yet. 
          </Text>
          <Text style={text}>
            Spots are filling up fast, and we don&apos;t want you to miss this opportunity 
            to start earning $3,000 - $5,000/month through Forex trading.
          </Text>
          <Button style={button} href={joinUrl}>
            Join Now - Limited Spots
          </Button>
          <Text style={text}>
            Remember: If our system doesn&apos;t work for you, we&apos;ll pay you $100. 
            You have nothing to lose!
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
const button = {
  backgroundColor: '#059669',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 20px',
};