import React from "react";

const ClientsSection = () => {
  return (
    <section 
      id="clients"
      className="py-24"
      style={{
        background: 'var(--bg-secondary)',
        padding: '100px 7.6923%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">
            Trusted by Web3 Leaders
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Working with the builders and innovators shaping the future of blockchain
          </p>
        </div>

        {/* Featured Client - Galaxy Ventures */}
        <div className="text-center mb-12">
          <div 
            className="inline-block p-12 dark-hover dark-transition"
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '0px'
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/csreop1b_Galaxy_Lockup_Horizontal_Black.png"
              alt="Galaxy Ventures"
              className="h-16 object-contain filter invert"
              style={{ maxWidth: '300px' }}
            />
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="p-12 text-center"
            style={{
              background: 'var(--bg-overlay)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '0px'
            }}
          >
            <blockquote className="body-large text-[var(--text-primary)] mb-8">
              "FanCon absolutely delivered for our Token 2049 coverage. Their understanding of the Web3 space and ability to capture the energy of our events is unmatched. The content they created helped us reach new audiences and build stronger connections in the ecosystem."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)]"></div>
              <div>
                <p className="heading-3 mb-1">Galaxy Ventures Team</p>
                <p className="body-small text-[var(--text-muted)]">Token 2049 Singapore Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Client Categories */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="heading-2 text-[var(--brand-primary)] mb-2">DeFi</div>
              <p className="body-small text-[var(--text-muted)]">Protocols & Platforms</p>
            </div>
            <div>
              <div className="heading-2 text-[var(--brand-primary)] mb-2">NFT</div>
              <p className="body-small text-[var(--text-muted)]">Collections & Marketplaces</p>
            </div>
            <div>
              <div className="heading-2 text-[var(--brand-primary)] mb-2">Gaming</div>
              <p className="body-small text-[var(--text-muted)]">Web3 Gaming Studios</p>
            </div>
            <div>
              <div className="heading-2 text-[var(--brand-primary)] mb-2">VCs</div>
              <p className="body-small text-[var(--text-muted)]">Investment Funds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;