"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Crown, Diamond, Layers, Leaf, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Prelude",
          id: "prelude",
        },
        {
          name: "Philosophy",
          id: "philosophy",
        },
        {
          name: "Craft",
          id: "craft",
        },
        {
          name: "Commitment",
          id: "commitment",
        },
      ]}
      brandName="LUXIS"
    />
  </div>

  <div id="prelude" data-section="prelude">
      <HeroLogo
      logoText="LUXIS"
      description="Where heritage converges with innovation, defining the modern silhouette through the lens of quiet luxury and uncompromising architectural intent."
      buttons={[
        {
          text: "Discover Collection",
          href: "#philosophy",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-sitting-chair-black-white-side-view_23-2149411361.jpg"
    />
  </div>

  <div id="philosophy" data-section="philosophy">
      <TextAbout
      useInvertedBackground={true}
      title="The Philosophy of Slow Fashion"
    />
  </div>

  <div id="craft" data-section="craft">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Diamond,
          title: "Artisanal Finishing",
          description: "Hand-stitched precision in every garment.",
        },
        {
          icon: Leaf,
          title: "Ethical Sourcing",
          description: "Sustainable wools, thoughtfully procured.",
        },
        {
          icon: Layers,
          title: "Italian Silks",
          description: "Unrivaled premium fibers for drape and longevity.",
        },
      ]}
      title="Mastery of Craft"
      description="Obsessive detail defines every stitch. From raw Italian silk to reclaimed sustainable wools, our artisanal finishing ensures that beauty persists beyond the season."
    />
  </div>

  <div id="muse" data-section="muse">
      <MetricCardThree
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          icon: Star,
          title: "Personal Style",
          value: "100%",
        },
        {
          id: "m2",
          icon: Crown,
          title: "Trend Longevity",
          value: "Infinite",
        },
        {
          id: "m3",
          icon: Award,
          title: "Artisanal Quality",
          value: "Unmatched",
        },
      ]}
      title="The Luxis Muse"
      description="A discerning individual who prioritizes substance over trend, valuing architectural form that mirrors a life well-lived."
    />
  </div>

  <div id="commitment" data-section="commitment">
      <TextAbout
      useInvertedBackground={false}
      title="Our Unwavering Commitment"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      text="The Luxis journey continues. Inquire about private appointments or bespoke consultations."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="LUXIS"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
