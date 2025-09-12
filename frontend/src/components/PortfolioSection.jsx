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
    {
      title: "Event Moments",
      url: "https://drive.google.com/file/d/14k5A8bnxXjvxO--2suTIWheuWTND0XpE/view?usp=sharing",
      category: "event"
    },
    {
      title: "Networking Session", 
      url: "https://drive.google.com/file/d/18_mjiOe4aWoIebYRnQghwY9tLMuXJubT/view?usp=sharing",
      category: "networking"
    },
    {
      title: "Conference Highlights",
      url: "https://drive.google.com/file/d/1A_JIntzC7cXgP4uCC_q5RFdMsUom5jz5/view?usp=sharing",
      category: "conference"
    },
    {
      title: "Speaker Portraits",
      url: "https://drive.google.com/file/d/1BQGufxiHspSoPeAKYT1rpUyp-oil3gNX/view?usp=sharing",
      category: "portraits"
    },
    {
      title: "Panel Discussion",
      url: "https://drive.google.com/file/d/1GtaNWsj4lHPLLwjKGHkjAzKbFPG94lMl/view?usp=sharing",
      category: "panel"
    },
    {
      title: "Exhibition Floor",
      url: "https://drive.google.com/file/d/1Gudd7lJT1HcAfcbSwUIVckdlCPL2lDBb/view?usp=sharing",
      category: "exhibition"
    }
  ];

  const convertDriveUrl = (url) => {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileId) {
      return `https://drive.google.com/uc?id=${fileId[1]}`;
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photography.map((photo, index) => (
              <div key={index} className="group dark-hover dark-transition">
                <div className="aspect-square overflow-hidden mb-3">
                  <img
                    src={convertDriveUrl(photo.url)}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 dark-transition"
                    loading="lazy"
                  />
                </div>
                <h4 className="body-medium mb-1">{photo.title}</h4>
                <p className="body-small text-[var(--text-muted)] capitalize">
                  {photo.category}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;