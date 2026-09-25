import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { curatedPhotos } from '../../data/instagramMedia';
import { LightboxModal } from '../common/LightboxModal';
import { InstagramPhoto } from '../../types';
import { Maximize2, Instagram, Heart } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<InstagramPhoto | null>(null);

  // Split photos into two distinct sets for the dual-row marquee
  const half = Math.ceil(curatedPhotos.length / 2);
  const row1Original = curatedPhotos.slice(0, half);
  const row2Original = curatedPhotos.slice(half);

  // Duplicate arrays for seamless infinite looping
  const row1 = [...row1Original, ...row1Original, ...row1Original];
  const row2 = [...row2Original, ...row2Original, ...row2Original];

  const handleOpenPhoto = (photo: InstagramPhoto) => {
    setSelectedPhoto(photo);
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <SectionHeading
          eyebrow="Guest Moments"
          title="Captured Aboard Boat & Bites"
          description="A continuous stream of authentic memories, celebrations, and culinary joy shared by our guests at Anthem Circle."
        />
      </div>

      {/* Dual Row Continuous Marquee Container */}
      <div className="relative w-full space-y-6 marquee-container select-none">
        {/* Soft edge gradient fades for cinematic blend */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-brand-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-brand-cream to-transparent z-10 pointer-events-none" />

        {/* Row 1: Sliding continuously to the RIGHT */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex gap-5">
            {row1.map((photo, index) => (
              <div
                key={`row1-${photo.id}-${index}`}
                onClick={() => handleOpenPhoto(photo)}
                className="w-72 sm:w-88 md:w-96 h-56 sm:h-64 rounded-3xl overflow-hidden relative cursor-pointer group shrink-0 border border-brand-border/60 shadow-md bg-white hover:border-brand-orange/50 transition-all duration-300"
              >
                <img
                  src={photo.displayUrl}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                  <div className="pr-2">
                    <p className="font-serif text-sm sm:text-base text-white line-clamp-1 font-medium">
                      {photo.caption}
                    </p>
                    {photo.likes > 0 && (
                      <span className="flex items-center gap-1 text-[11px] font-sans text-brand-orange mt-1">
                        <Heart className="w-3 h-3 fill-brand-orange" />
                        <span>{photo.likes.toLocaleString()} likes</span>
                      </span>
                    )}
                  </div>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-brand-orange transition-colors shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding continuously to the LEFT */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex gap-5">
            {row2.map((photo, index) => (
              <div
                key={`row2-${photo.id}-${index}`}
                onClick={() => handleOpenPhoto(photo)}
                className="w-72 sm:w-88 md:w-96 h-56 sm:h-64 rounded-3xl overflow-hidden relative cursor-pointer group shrink-0 border border-brand-border/60 shadow-md bg-white hover:border-brand-orange/50 transition-all duration-300"
              >
                <img
                  src={photo.displayUrl}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                  <div className="pr-2">
                    <p className="font-serif text-sm sm:text-base text-white line-clamp-1 font-medium">
                      {photo.caption}
                    </p>
                    {photo.likes > 0 && (
                      <span className="flex items-center gap-1 text-[11px] font-sans text-brand-orange mt-1">
                        <Heart className="w-3 h-3 fill-brand-orange" />
                        <span>{photo.likes.toLocaleString()} likes</span>
                      </span>
                    )}
                  </div>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-brand-orange transition-colors shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-xs font-sans text-brand-muted">
          Hover to pause sliding • Click any moment to view in high resolution
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          isOpen={!!selectedPhoto}
          onClose={handleCloseLightbox}
          media={{
            type: 'image',
            src: selectedPhoto.displayUrl,
            caption: selectedPhoto.caption,
            instagramUrl: selectedPhoto.url
          }}
        />
      )}
    </section>
  );
};
