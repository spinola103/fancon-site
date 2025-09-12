import React from "react";
import { Zap, Crown, Rocket, Check } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "The Keynote Capture",
      price: "$1400",
      currency: "(USD / USDC)",
      icon: Zap,
      description: "Look, you're on stage to make an impact. We get in, capture your entire keynote or panel perfectly, and get you the assets while the event is still buzzing. No fluff, just high-quality content ready to ship.",
      features: [
        "High-resolution photos of your talk",
        "Full video of your keynote",
        "Key moment clips, ready for socials",
        "A professional highlight reel / after-movie"
      ],
      delivery: "Photos and full video the **next day**, edited highlight reel within **3 days**",
      popular: false
    },
    {
      name: "The Founder's Playbook",
      price: "$2600",
      currency: "(USD / USDC)",
      icon: Crown,
      description: "Your talk is just the start. This is for founders who need to build a narrative. We'll capture your keynote and then create a library of content that'll fuel your personal brand for the next month.",
      features: [
        "Everything from The Keynote Capture",
        "Candid Founder Clips: Behind-the-scenes footage of you networking",
        "On-Site Podcast: 30-minute session diving deeper into your vision",
        "Repurposed Clips: 10+ social-ready clips to keep momentum going"
      ],
      delivery: "Complete package delivery within 5 days",
      popular: true
    },
    {
      name: "The Full Send",
      price: "Custom Quote",
      currency: "",
      icon: Rocket,
      description: "Your project is making a serious splash at TOKEN2049, and you need to document the entire takeover. We become your embedded media team for the day. You focus on shaking hands and closing deals; we'll handle capturing the legacy.",
      features: [
        "Everything from The Founder's Playbook",
        "Full-day coverage with multi-person team",
        "Coverage of booth, side events, and team dinners",
        "Attendee testimonials as social proof",
        "Same Night social edits to maximize hype in real-time"
      ],
      delivery: "Real-time delivery during event + full package within 7 days",
      popular: false
    }
  ];

  return (
    <section 
      className="py-32"
      style={{
        background: 'var(--bg-primary)',
        padding: '120px 7.6923%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="display-large mb-8">
            Packages That Hit Different 💰
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Three ways to work with us at TOKEN2049. Pick your vibe, we'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index}
                className={`relative p-10 dark-hover dark-transition ${
                  pkg.popular 
                    ? 'border-2 border-[var(--brand-primary)] transform scale-105' 
                    : 'border border-[var(--border-subtle)]'
                }`}
                style={{
                  background: pkg.popular 
                    ? 'var(--brand-hover)' 
                    : 'var(--bg-secondary)',
                  borderRadius: '0px'
                }}
              >
                {pkg.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm font-medium"
                    style={{
                      background: 'var(--brand-primary)',
                      color: '#000000',
                      borderRadius: '0px'
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <IconComponent 
                    size={48} 
                    className="text-[var(--brand-primary)] mb-6" 
                  />
                  <h3 className="heading-1 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="display-medium text-[var(--brand-primary)]">
                      {pkg.price}
                    </span>
                    {pkg.currency && (
                      <span className="body-medium text-[var(--text-muted)] ml-2">
                        {pkg.currency}
                      </span>
                    )}
                  </div>
                  <p className="body-medium text-[var(--text-secondary)] leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="heading-3 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check 
                          size={20} 
                          className="text-[var(--brand-primary)] mt-0.5 flex-shrink-0" 
                        />
                        <span className="body-small text-[var(--text-secondary)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div 
                    className="p-4 mb-6"
                    style={{
                      background: 'var(--bg-overlay)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0px'
                    }}
                  >
                    <p className="body-small text-[var(--text-secondary)]">
                      <strong>Delivery:</strong> {pkg.delivery}
                    </p>
                  </div>
                </div>

                <button 
                  className={pkg.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {pkg.price === "Custom Quote" ? "Get Custom Quote" : "Book This Package"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div 
            className="inline-block p-8"
            style={{
              background: 'var(--bg-overlay)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '0px'
            }}
          >
            <p className="body-large text-[var(--text-primary)] mb-4">
              Need something custom? Let's talk.
            </p>
            <p className="body-medium text-[var(--text-secondary)]">
              Every project is different. DM us your requirements and we'll craft something that absolutely sends it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;