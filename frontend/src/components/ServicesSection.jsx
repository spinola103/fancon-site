import React from "react";
import { Video, Camera, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      name: "Premium Videography",
      priority: 1,
      badge: "Our Alpha Play",
      icon: Video,
      description: "Cinematic coverage of Web3 events, project launches, and blockchain conferences. We make your WAGMI moments look absolutely fire 🔥",
      highlight: true
    },
    {
      name: "Elite Photography",
      priority: 2,
      icon: Camera,
      description: "High-quality stills that capture the energy of the crypto space. From networking sessions to keynote moments - we've got your back.",
      highlight: false
    },
    {
      name: "Post-Production Magic",
      priority: 3,
      icon: Sparkles,
      description: "Complete editing suite with color grading, motion graphics, and delivery. Making your content ready for socials and beyond.",
      highlight: false
    }
  ];

  return (
    <section 
      id="services"
      className="py-32"
      style={{
        background: 'var(--bg-primary)',
        padding: '120px 7.6923%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="display-large mb-8">
            Services That Absolutely Send It
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            From capturing your project's moon mission to documenting the next unicorn launch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative p-8 dark-hover dark-transition ${
                  service.highlight 
                    ? 'border-2 border-[var(--brand-primary)]' 
                    : 'border border-[var(--border-subtle)]'
                }`}
                style={{
                  background: service.highlight 
                    ? 'var(--brand-hover)' 
                    : 'var(--bg-secondary)',
                  borderRadius: '0px'
                }}
              >
                {service.badge && (
                  <div 
                    className="absolute -top-3 left-6 px-3 py-1 text-sm font-medium"
                    style={{
                      background: 'var(--brand-primary)',
                      color: '#000000',
                      borderRadius: '0px'
                    }}
                  >
                    {service.badge}
                  </div>
                )}

                <div className="mb-6">
                  <IconComponent 
                    size={40} 
                    className="text-[var(--brand-primary)]" 
                  />
                </div>

                <h3 className="heading-2 mb-4">
                  {service.name}
                </h3>

                <p className="body-medium text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;