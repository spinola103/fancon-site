import React, { useState } from "react";
import { Play, Camera, Grid } from "lucide-react";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const videos = [
    {
      title: "Token 2049 Highlights",
      mediaId: "7tjecnceqn",
      embedScript: "7tjecnceqn.js",
      category: "event_coverage"
    },
    {
      title: "Blockchain Conference",
      mediaId: "1m3dnmhbmf",
      embedScript: "1m3dnmhbmf.js",
      category: "conference"
    },
    {
      title: "Web3 Networking",
      mediaId: "lxkgb2af1n",
      embedScript: "lxkgb2af1n.js",
      category: "networking"
    },
    {
      title: "Crypto Summit",
      mediaId: "zk6fz6rkk6",
      embedScript: "zk6fz6rkk6.js",
      category: "summit"
    },
    {
      title: "DeFi Conference",
      mediaId: "4th0sbtuwu",
      embedScript: "4th0sbtuwu.js",
      category: "defi",
      aspect: "0.5625",
      paddingTop: "177.78%"
    },
    {
      title: "NFT Launch Event",
      mediaId: "6pl76z3gif",
      embedScript: "6pl76z3gif.js",
      category: "nft"
    },
    {
      title: "Web3 Panel Discussion",
      mediaId: "xgq7lfqpve",
      embedScript: "xgq7lfqpve.js",
      category: "panel",
      aspect: "0.5625",
      paddingTop: "177.78%"
    },
    {
      title: "Blockchain Expo",
      mediaId: "b83db5vlx2",
      embedScript: "b83db5vlx2.js",
      category: "expo"
    },
    {
      title: "Strategic Partnership",
      mediaId: "b7lsxctpxn",
      embedScript: "b7lsxctpxn.js",
      category: "partnership"
    }
  ];

  const photography = [
    // Featured showcase image - H__B0824-min.JPG
    {
      title: "Elite Event Coverage",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/myxbsq6l_H__B0824-min.JPG",
      category: "featured",
      featured: true
    },
    // Additional uploaded professional photos
    {
      title: "Professional Photography",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/5px5c4c2_H__B0596-min.JPG",
      category: "event"
    },
    {
      title: "Event Coverage",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/zpj8ozn3_H__B0631-min.JPG",
      category: "event"
    },
    {
      title: "Conference Moments",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/hg8tceaq_H__B0825-min.JPG",
      category: "event"
    },
    {
      title: "Professional Documentation",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/496ubnj2_H__B0830-min.JPG",
      category: "event"
    },
    {
      title: "Event Photography",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/rdl3ysc4_H__B0513-min.JPG",
      category: "event"
    },
    {
      title: "Web3 Conference",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/v3w1nvq9_H__B0645-min.JPG",
      category: "event"
    },
    {
      title: "Networking Coverage",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/l75hdrch_H__B0857-min.JPG",
      category: "event"
    },
    {
      title: "Professional Event Photos",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/k4nd50ds_H__B0825-min.JPG",
      category: "event"
    },
    {
      title: "Conference Documentation",
      url: "https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/tq65m991_H__B0790-min.JPG",
      category: "event"
    }
  ];

  const convertDriveUrl = (url) => {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId[1]}`;
    }
    return url;
  };

  return (
    <section 
      id="portfolio"
      className="py-24"
      style={{
        background: 'var(--bg-secondary)',
        padding: '100px 7.6923%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">
            Our Portfolio Hits Different 💎
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Recent work from the trenches of Web3 events and blockchain conferences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-2" style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 font-medium flex items-center gap-2 dark-transition ${
                activeTab === 'videos'
                  ? 'bg-[var(--brand-primary)] text-black'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              style={{ borderRadius: '0px' }}
            >
              <Play size={20} />
              Videography
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 font-medium flex items-center gap-2 dark-transition ${
                activeTab === 'photos'
                  ? 'bg-[var(--brand-primary)] text-black'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              style={{ borderRadius: '0px' }}
            >
              <Camera size={20} />
              Photography
            </button>
          </div>
        </div>

        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group dark-hover dark-transition">
                <div className="mb-4">
                  <script src={`https://fast.wistia.com/embed/${video.embedScript}`} async type="module"></script>
                  <div 
                    dangerouslySetInnerHTML={{
                      __html: `
                        <style>
                          wistia-player[media-id='${video.mediaId}']:not(:defined) { 
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${video.mediaId}/swatch'); 
                            display: block; 
                            filter: blur(5px); 
                            padding-top:${video.paddingTop || '56.25%'}; 
                          }
                        </style>
                        <wistia-player media-id="${video.mediaId}" aspect="${video.aspect || '1.7777777777777777'}"></wistia-player>
                      `
                    }}
                  />
                </div>
                <h3 className="heading-3 mb-2">{video.title}</h3>
                <p className="body-small text-[var(--text-muted)] capitalize">
                  {video.category.replace('_', ' ')}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Photography Grid */}
        {activeTab === 'photos' && (
          <div>
            {/* Featured Image */}
            {photography.find(photo => photo.featured) && (
              <div className="mb-12">
                <h3 className="heading-2 mb-6 text-center">Featured Work</h3>
                <div className="max-w-4xl mx-auto">
                  <div className="group dark-hover dark-transition">
                    <div className="aspect-video overflow-hidden mb-4">
                      <img
                        src={photography.find(photo => photo.featured).url}
                        alt={photography.find(photo => photo.featured).title}
                        className="w-full h-full object-cover group-hover:scale-105 dark-transition"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="heading-3 mb-2 text-center">{photography.find(photo => photo.featured).title}</h4>
                    <p className="body-medium text-[var(--text-muted)] text-center capitalize">
                      Premium Event Coverage
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Regular Photography Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {photography.filter(photo => !photo.featured).map((photo, index) => (
                <div key={index} className="group dark-hover dark-transition">
                  <div className="aspect-square overflow-hidden mb-3">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 dark-transition"
                      loading="lazy"
                      onError={(e) => {
                        console.log(`Failed to load image: ${photo.url}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h4 className="body-medium mb-1">{photo.title}</h4>
                  <p className="body-small text-[var(--text-muted)] capitalize">
                    {photo.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;