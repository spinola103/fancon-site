import React from "react";
import { Mail, Send, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-16"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '60px 7.6923%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <img 
              src="https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/429jgfpj_FanCon_logo__3_-removebg-preview.png"
              alt="FanCon"
              className="h-8 object-contain"
            />
            <p className="body-medium text-[var(--text-secondary)] max-w-sm">
              Elite Web3 videography and photography services. Building trust through pixels, one frame at a time.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:bizdev@fancon.xyz"
                className="w-10 h-10 flex items-center justify-center dark-hover dark-transition"
                style={{
                  background: 'var(--bg-overlay)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px'
                }}
              >
                <Mail size={20} className="text-[var(--brand-primary)]" />
              </a>
              <a 
                href="https://t.me/Swapneel25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center dark-hover dark-transition"
                style={{
                  background: 'var(--bg-overlay)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px'
                }}
              >
                <Send size={20} className="text-[var(--brand-primary)]" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h4 className="heading-3">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="body-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] dark-transition">
                  Premium Videography
                </span>
              </li>
              <li>
                <span className="body-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] dark-transition">
                  Elite Photography
                </span>
              </li>
              <li>
                <span className="body-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] dark-transition">
                  Post-Production Magic
                </span>
              </li>
              <li>
                <span className="body-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] dark-transition">
                  Web3 Event Coverage
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="heading-3">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="body-small text-[var(--text-muted)] mb-1">General Enquiries</p>
                <a 
                  href="mailto:bizdev@fancon.xyz"
                  className="body-medium text-[var(--brand-primary)] hover:text-[var(--brand-active)] dark-transition"
                >
                  bizdev@fancon.xyz
                </a>
              </div>
              <div>
                <p className="body-small text-[var(--text-muted)] mb-1">Direct Contact</p>
                <a 
                  href="mailto:swapneel@bitgoro.com"
                  className="body-medium text-[var(--brand-primary)] hover:text-[var(--brand-active)] dark-transition"
                >
                  swapneel@bitgoro.com
                </a>
              </div>
              <div>
                <p className="body-small text-[var(--text-muted)] mb-1">Telegram</p>
                <a 
                  href="https://t.me/Swapneel25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-medium text-[var(--brand-primary)] hover:text-[var(--brand-active)] dark-transition inline-flex items-center gap-1"
                >
                  @Swapneel25
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div className="text-center md:text-left">
            <p className="body-small text-[var(--text-muted)]">
              © {currentYear} FanCon. All rights reserved.
            </p>
            <p className="body-small text-[var(--text-muted)] mt-1">
              Managed by RAKDAO / BITGORO LTD (License: 265708/6)
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="body-small text-[var(--text-muted)]">
              Building the future of Web3 content, one pixel at a time ⚡
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;