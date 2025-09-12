import React from "react";
import { ArrowRight, Play, Zap, Shield, Globe } from "lucide-react";

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
        paddingTop: '120px'
      }}
    >
      <div className="w-full" style={{ padding: '0 7.6923%' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <h1 className="display-huge" style={{ marginTop: '40px' }}>
                  Elite Web3 Videography
                </h1>
                <p className="body-large text-[var(--text-secondary)] max-w-xl">
                  Capturing the future of blockchain - where innovation meets cinematic storytelling for Token 2049 and beyond
                </p>
                <p className="heading-3 text-[var(--brand-primary)]">
                  Building trust through pixels, one frame at a time 📸⚡
                </p>
              </div>

              {/* Web3 Elements */}
              <div className="flex flex-wrap gap-6 py-6">
                <div className="flex items-center gap-3 px-4 py-2" style={{ background: 'var(--bg-overlay)', border: '1px solid var(--border-subtle)', borderRadius: '0px' }}>
                  <Zap size={20} className="text-[var(--brand-primary)]" />
                  <span className="body-small text-[var(--text-secondary)]">Lightning Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2" style={{ background: 'var(--bg-overlay)', border: '1px solid var(--border-subtle)', borderRadius: '0px' }}>
                  <Shield size={20} className="text-[var(--brand-primary)]" />
                  <span className="body-small text-[var(--text-secondary)]">Trusted by Web3 Leaders</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2" style={{ background: 'var(--bg-overlay)', border: '1px solid var(--border-subtle)', borderRadius: '0px' }}>
                  <Globe size={20} className="text-[var(--brand-primary)]" />
                  <span className="body-small text-[var(--text-secondary)]">Global Event Coverage</span>
                </div>
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
            </div>

            {/* Right Side - Featured Work Preview */}
            <div className="relative">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="heading-2 mb-3">Featured Work</h3>
                  <p className="body-medium text-[var(--text-secondary)]">
                    Latest from our elite portfolio
                  </p>
                </div>
                
                <div className="relative max-w-lg mx-auto">
                  <script src="https://fast.wistia.com/embed/6pl76z3gif.js" async type="module"></script>
                  <div 
                    className="dark-hover dark-transition"
                    dangerouslySetInnerHTML={{
                      __html: `
                        <style>
                          wistia-player[media-id='6pl76z3gif']:not(:defined) { 
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/6pl76z3gif/swatch'); 
                            display: block; 
                            filter: blur(5px); 
                            padding-top:56.25%; 
                            border-radius: 0px;
                          }
                        </style>
                        <wistia-player media-id="6pl76z3gif" aspect="1.7777777777777777"></wistia-player>
                      `
                    }}
                  />
                </div>
                
                <div className="text-center">
                  <p className="body-small text-[var(--text-muted)]">
                    Professional Web3 event coverage that absolutely sends it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;