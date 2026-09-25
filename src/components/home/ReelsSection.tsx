import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SmartVideo } from './SmartVideo';
import { viralReels } from '../../data/instagramMedia';
import { LightboxModal } from '../common/LightboxModal';
import { InstagramReel } from '../../types';
import { Instagram, ExternalLink } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

export const ReelsSection: React.FC = () => {
  const [selectedReel, setSelectedReel] = useState<InstagramReel | null>(null);

  return (
    <section id="reels" className="py-20 md:py-32 bg-brand-ink text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <SectionHeading
            eyebrow="From Our Table"
            title="Viral Moments & Live Sizzles"
            description="Catch the authentic energy, sizzling platters, and joyful memories captured directly from our guest tables."
            theme="dark"
            align="left"
          />

          <a
            href={restaurantData.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-brand-orange text-white text-xs font-sans font-semibold uppercase tracking-wider transition-colors shrink-0 border border-white/10"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>Follow @{restaurantData.instagram.handle}</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Reels Grid (4 to 5 reels) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {viralReels.slice(0, 4).map((reel) => (
            <SmartVideo
              key={reel.id}
              reel={reel}
              onOpenModal={(r) => setSelectedReel(r)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox for video reels */}
      {selectedReel && (
        <LightboxModal
          isOpen={!!selectedReel}
          onClose={() => setSelectedReel(null)}
          media={{
            type: 'video',
            src: selectedReel.videoUrl,
            caption: selectedReel.caption,
            instagramUrl: selectedReel.url
          }}
        />
      )}
    </section>
  );
};
