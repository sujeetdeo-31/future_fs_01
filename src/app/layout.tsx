
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elite Portfolio | Modern Software Engineer',
  description: 'Showcase of premium development projects, skills, and professional experience of a senior software architect.',
  openGraph: {
    title: 'Elite Portfolio | Premium Software Development',
    description: 'Expertise in modern web technologies, cloud architecture, and high-performance applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
