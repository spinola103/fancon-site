import React from "react";
import { ArrowRight, Play } from "lucide-react";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: 'var(--bg-primary)',
        paddingTop: '80px'
      }}
    >
      <div className="w-full" style={{ padding: '0 7.6923%' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="display-huge">
                  Elite Web3 Videography
                </h1>
                <p className="body-large text-[var(--text-secondary)] max-w-xl">
                  Capturing the future of blockchain - where innovation meets cinematic storytelling for Token 2049 and beyond
                </p>
                <p className="heading-3 text-[var(--brand-primary)]">
                  Building trust through pixels, one frame at a time 📸⚡
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary group"
                >
                  GM! Let's Collab 🚀
                  <ArrowRight size={20} className="group-hover:translate-x-1 dark-transition" />
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="btn-secondary group"
                >
                  Check Our Alpha Portfolio
                  <Play size={20} className="group-hover:scale-110 dark-transition" />
                </button>
              </div>

              {/* Featured Video Preview */}
              <div className="mt-12">
                <p className="body-small text-[var(--text-muted)] mb-4">Latest Work Preview</p>
                <div className="relative max-w-md">
                  <script src="https://fast.wistia.com/embed/7tjecnceqn.js" async type="module"></script>
                  <div 
                    dangerouslySetInnerHTML={{
                      __html: `
                        <style>
                          wistia-player[media-id='7tjecnceqn']:not(:defined) { 
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7tjecnceqn/swatch'); 
                            display: block; 
                            filter: blur(5px); 
                            padding-top:56.25%; 
                          }
                        </style>
                        <wistia-player media-id="7tjecnceqn" aspect="1.7777777777777777"></wistia-player>
                      `
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Spline 3D */}
            <div className="relative">
              <div 
                className="relative"
                style={{ 
                  width: "100%", 
                  height: "700px", 
                  overflow: "visible"
                }}
              >
                <Spline 
                  scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;