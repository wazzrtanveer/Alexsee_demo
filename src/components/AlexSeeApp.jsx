import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';
import Header from './Header';
import HomePage from './HomePage';
import CollectionsPage from './CollectionsPage';
import FrameDetailPage from './FrameDetailPage';
import ServicesPage from './ServicesPage';
import BoutiquePage from './BoutiquePage';
import AppointmentPage from './AppointmentPage';
import NotFoundPage from './NotFoundPage';

import { sanityClient, FRAMES_QUERY, SERVICES_QUERY, SETTINGS_QUERY, urlFor } from '../lib/sanity';
import { 
  frames as mockFrames, 
  services as mockServices, 
  settings as mockSettings, 
  boutiqueImages as mockBoutiqueImages 
} from '../data/mockData';

export default function AlexSeeApp() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState("home");
  const [selectedFrameId, setSelectedFrameId] = useState("lumiere-d-avron");
  const [preSelectedFrameModel, setPreSelectedFrameModel] = useState("");

  // States for content data
  const [frames, setFrames] = useState(mockFrames);
  const [services, setServices] = useState(mockServices);
  const [settings, setSettings] = useState(mockSettings);
  const [boutiqueImages, setBoutiqueImages] = useState(mockBoutiqueImages);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentView, selectedFrameId]);

  // Fetch from Sanity CMS if configured
  useEffect(() => {
    const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
    if (projectId && projectId !== 'placeholder') {
      // Fetch frames
      sanityClient.fetch(FRAMES_QUERY)
        .then(data => {
          if (data && data.length > 0) {
            const mapped = data.map(f => ({
              ...f,
              images: f.images ? f.images.map(img => urlFor(img)) : []
            }));
            setFrames(mapped);
          }
        })
        .catch(err => console.error("Error fetching frames from Sanity:", err));

      // Fetch services
      sanityClient.fetch(SERVICES_QUERY)
        .then(data => {
          if (data && data.length > 0) {
            const mapped = data.map(s => ({
              ...s,
              image: urlFor(s.image)
            }));
            setServices(mapped);
          }
        })
        .catch(err => console.error("Error fetching services from Sanity:", err));

      // Fetch settings
      sanityClient.fetch(SETTINGS_QUERY)
        .then(data => {
          if (data) {
            const mapped = {
              ...data,
              hours: data.hours || mockSettings.hours
            };
            setSettings(mapped);
            if (data.boutiqueImages && data.boutiqueImages.length > 0) {
              setBoutiqueImages(data.boutiqueImages.map(img => urlFor(img)));
            }
          }
        })
        .catch(err => console.error("Error fetching settings from Sanity:", err));
    }
  }, []);

  const handleSelectFrame = (frameId) => {
    setSelectedFrameId(frameId);
    setCurrentView("frame-detail");
  };

  const handleRequestAppointmentWithFrame = (frameModel) => {
    setPreSelectedFrameModel(frameModel);
    setCurrentView("contact");
  };

  const handleClearPreSelectedFrame = () => {
    setPreSelectedFrameModel("");
  };

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomePage 
          frames={frames}
          settings={settings}
          onNavigate={setCurrentView} 
          onSelectFrame={handleSelectFrame} 
        />;
      case "collections":
        return <CollectionsPage 
          frames={frames}
          onSelectFrame={handleSelectFrame} 
          onNavigate={setCurrentView} 
        />;
      case "frame-detail":
        return <FrameDetailPage 
          frameId={selectedFrameId} 
          frames={frames}
          settings={settings}
          onNavigate={setCurrentView} 
          onSelectFrame={handleSelectFrame} 
          onRequestAppointmentWithFrame={handleRequestAppointmentWithFrame} 
        />;
      case "services":
        return <ServicesPage 
          services={services}
          onNavigate={setCurrentView} 
        />;
      case "boutique":
        return <BoutiquePage 
          settings={settings}
          boutiqueImages={boutiqueImages}
          onNavigate={setCurrentView} 
        />;
      case "contact":
        return <AppointmentPage 
          preSelectedFrameModel={preSelectedFrameModel} 
          settings={settings}
          onNavigate={setCurrentView} 
          onClearPreSelectedFrame={handleClearPreSelectedFrame} 
        />;
      case "404":
      default:
        return <NotFoundPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div id="alexsee-app-wrapper" className="min-h-screen bg-ivory text-optical-black relative font-sans noise-overlay selection:bg-cobalt selection:text-ivory">
      {/* Custom Lens Cursor */}
      <CustomCursor />

      {/* Intro Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Site Header */}
      {!loading && (
        <Header currentView={currentView} onNavigate={setCurrentView} />
      )}

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.main
            key={currentView === "frame-detail" ? `frame-detail-${selectedFrameId}` : currentView}
            id="main-content-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="w-full"
          >
            {renderView()}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
