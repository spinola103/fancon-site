import React from "react";
import { Check, Zap, Clock, Award } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Check,
      title: "Native Web3 Understanding",
      description: "We speak your language - from WAGMI to diamond hands, we get the culture"
    },
    {
      icon: Award,
      title: "Token 2049 Singapore Expertise",
      description: "Proven track record covering Asia's biggest Web3 event"
    },
    {
      icon: Zap,
      title: "Elite Quality Standards",
      description: "Premium content that matches your brand's alpha status"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Because time is alpha in this space - quick delivery without compromise"
    }
  ];

  return (
    <section 
      className="py-24"
      style={{
        background: 'var(--bg-primary)',
        padding: '100px 7.6923%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">
            Why We're Different in This Space
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Building trust through proven expertise and understanding of the Web3 ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-8 dark-hover dark-transition"
                style={{
                  background: 'var(--bg-overlay)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px'
                }}
              >
                <div className="flex-shrink-0">
                  <div 
                    className="w-12 h-12 flex items-center justify-center"
                    style={{
                      background: 'var(--brand-primary)',
                      borderRadius: '0px'
                    }}
                  >
                    <IconComponent size={24} className="text-black" />
                  </div>
                </div>
                
                <div>
                  <h3 className="heading-3 mb-3 text-[var(--text-primary)]">
                    {point.title}
                  </h3>
                  <p className="body-medium text-[var(--text-secondary)]">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="display-medium text-[var(--brand-primary)] mb-2">500+</div>
              <p className="body-medium text-[var(--text-secondary)]">Events Covered</p>
            </div>
            <div className="p-6">
              <div className="display-medium text-[var(--brand-primary)] mb-2">50+</div>
              <p className="body-medium text-[var(--text-secondary)]">Web3 Brands Served</p>
            </div>
            <div className="p-6">
              <div className="display-medium text-[var(--brand-primary)] mb-2">24hr</div>
              <p className="body-medium text-[var(--text-secondary)]">Average Turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;