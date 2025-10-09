import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import logo_ts from "../components/assets/images/_logo_transparent.png";
import Footer from "@/components/common/footer";
import CardNav from "@/components/common/CardNav";
import type { CardNavItem } from "@/components/common/CardNav";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  fallback: ['sans-serif']
});

const navItems: CardNavItem[] = [
  {
    label: "Home",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Homepage", href: "/", ariaLabel: "Go to Homepage" },
      { label: "About Us", href: "/about", ariaLabel: "Learn About Us" },
    ],
  },
  {
    label: "Talent Hunt",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      {
        label: "Details",
        href: "/talent-hunt",
        ariaLabel: "Talent Hunt Details",
      },
      {
        label: "Apply Now",
        href: "/apply",
        ariaLabel: "Apply for Talent Hunt",
      },
    ],
  },
  {
    label: "Resources",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      {
        label: "Guidelines",
        href: "/guidelines",
        ariaLabel: "Talent Hunt Guidelines",
      },
      {
        label: "FAQ",
        href: "/faq",
        ariaLabel: "Frequently Asked Questions",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "TalentHunt 2025 - Marketing Agency Talent Hunt",
  description:
    "Join the most innovative marketing agency and unleash your creative potential. We're searching for extraordinary talent to shape the future of digital marketing.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CardNav
          logo={logo_ts.src}
          logoAlt="Company Logo"
          items={navItems}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
