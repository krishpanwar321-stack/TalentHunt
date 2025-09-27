import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo_ts from "../components/assets/images/_logo_transparent.png";
import Footer from "@/components/footer";
import CardNav from "@/components/CardNav";
import type { CardNavItem } from "@/components/CardNav";

const inter = Inter({ subsets: ["latin"] });

const navItems: CardNavItem[] = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Company", href: "/company", ariaLabel: "About Company" },
      { label: "Careers", href: "/careers", ariaLabel: "About Careers" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      {
        label: "Featured",
        href: "/projects/featured",
        ariaLabel: "Featured Projects",
      },
      {
        label: "Case Studies",
        href: "/projects/case-studies",
        ariaLabel: "Project Case Studies",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      {
        label: "Email",
        href: "mailto:hello@example.com",
        ariaLabel: "Email us",
      },
      {
        label: "Twitter",
        href: "https://twitter.com/yourhandle",
        ariaLabel: "Twitter",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/company/yourcompany",
        ariaLabel: "LinkedIn",
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
      <body className={inter.className}>
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
