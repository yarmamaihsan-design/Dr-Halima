import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutFoundation } from './components/AboutFoundation';
import { ImpactStats } from './components/ImpactStats';
import { FounderSection } from './components/FounderSection';
import { Programs } from './components/Programs';
import { ImpactStory } from './components/ImpactStory';
import { MediaGallery } from './components/MediaGallery';
import { VideoGallery } from './components/VideoGallery';
import { NewsEvents } from './components/NewsEvents';
import { ApplicationSection } from './components/ApplicationSection';
import { ApplicationPopup } from './components/ApplicationPopup';
import { DonationSection } from './components/DonationSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProgramForApply, setSelectedProgramForApply] = useState<string | undefined>(undefined);

  const handleOpenApply = (programTitle?: string) => {
    if (programTitle) {
      setSelectedProgramForApply(programTitle);
    }
    const applyElement = document.getElementById('apply');
    if (applyElement) {
      applyElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDonate = () => {
    const donateElement = document.getElementById('donate');
    if (donateElement) {
      donateElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPrograms = () => {
    const programsElement = document.getElementById('programs');
    if (programsElement) {
      programsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-poppins selection:bg-[#008751] selection:text-white">
      {/* Header Navigation */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenDonate={handleOpenDonate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenApply={() => handleOpenApply()}
          onOpenDonate={handleOpenDonate}
        />

        {/* About Foundation Section */}
        <AboutFoundation />

        {/* Impact Statistics */}
        <ImpactStats />

        {/* Founder Editorial Section */}
        <FounderSection />

        {/* Programs Grid & Cards */}
        <Programs
          onOpenApplyForProgram={(title) => handleOpenApply(title)}
        />

        {/* Impact Story Journey */}
        <ImpactStory />

        {/* Media Gallery */}
        <MediaGallery />

        {/* Video Gallery */}
        <VideoGallery />

        {/* News & Upcoming Events */}
        <NewsEvents
          onOpenApplyForProgram={(title) => handleOpenApply(title)}
        />

        {/* Application Section & Online Form */}
        <ApplicationSection
          initialProgramName={selectedProgramForApply}
        />

        {/* Donation Portal */}
        <DonationSection />

        {/* Contact Section & Map */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp Chat Button */}
      <WhatsAppButton />

      {/* Entry Notification Popup for Open Applications */}
      <ApplicationPopup
        onApply={() => handleOpenApply()}
        onViewPrograms={handleViewPrograms}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
