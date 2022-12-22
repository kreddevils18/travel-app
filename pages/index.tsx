import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Memory from '../components/Memory';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      <Memory />
      {/* Explore */}
      {/* Plan */}
      {/* Footer */}
    </div>
  );
}
