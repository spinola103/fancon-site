import React from "react";
import { Mail, Send, Building, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section 
      id="contact"
      className="py-32"
      style={{
        background: 'var(--bg-primary)',
        padding: '120px 7.6923%'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="display-large mb-8">
            Ready to Create Some Alpha Content? 🚀
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Let's discuss your next Web3 event coverage or content needs
          </p>
          <p className="heading-3 text-[var(--brand-primary)] mt-8">
            DM us and let's make something that absolutely sends it
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="heading-2 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{
                    background: 'var(--brand-primary)',
                    borderRadius: '0px'
                  }}
                >
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <p className="body-medium text-[var(--text-muted)]">General Enquiries</p>
                  <a 
                    href="mailto:bizdev@fancon.xyz"
                    className="heading-3 text-[var(--brand-primary)] hover:text-[var(--brand-active)] dark-transition"
                  >
                    bizdev@fancon.xyz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{
                    background: 'var(--brand-primary)',
                    borderRadius: '0px'
                  }}
                >
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <p className="body-medium text-[var(--text-muted)]">Direct Contact</p>
                  <a 
                    href="mailto:swapneel@bitgoro.com"
                    className="heading-3 text-[var(--brand-primary)] hover:text-[var(--brand-active)] dark-transition"
                  >
                    swapneel@bitgoro.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{
                    background: 'var(--brand-primary)',
                    borderRadius: '0px'
                  }}
                >
                  <Send size={24} className="text-black" />
                </div>
                <div>
                  <p className="body-medium text-[var(--text-muted)]">Telegram</p>
                  <a 
                    href="https://t.me/Swapneel25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="heading-3 text-[var(--brand-primary)] hover:text-[var(--brand-active)] dark-transition"
                  >
                    @Swapneel25
                  </a>
                </div>
              </div>
            </div>

            <div 
              className="p-6 mt-8"
              style={{
                background: 'var(--bg-overlay)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0px'
              }}
            >
              <p className="body-medium text-[var(--text-secondary)]">
                For any customisation and specific requirements, let us know.
              </p>
            </div>
          </div>

          {/* Agency Information */}
          <div className="space-y-8">
            <h3 className="heading-2 mb-8">Agency Details</h3>
            
            <div 
              className="p-8 space-y-6"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0px'
              }}
            >
              <div className="flex items-start gap-4">
                <Building size={24} className="text-[var(--brand-primary)] mt-1" />
                <div>
                  <p className="heading-3 mb-2">Managed By</p>
                  <p className="body-medium text-[var(--text-secondary)]">
                    Swapneel - Freelance Marketing and Event Management Agency
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building size={24} className="text-[var(--brand-primary)] mt-1" />
                <div>
                  <p className="heading-3 mb-2">Parent Company</p>
                  <p className="body-medium text-[var(--text-secondary)]">
                    RAKDAO / BITGORO LTD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FileText size={24} className="text-[var(--brand-primary)] mt-1" />
                <div>
                  <p className="heading-3 mb-2">License Number</p>
                  <p className="body-medium text-[var(--text-secondary)]">
                    265708/6
                  </p>
                </div>
              </div>

              <div>
                <p className="heading-3 mb-3">Permitted Activities</p>
                <ul className="space-y-2">
                  <li className="body-medium text-[var(--text-secondary)] flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--brand-primary)]" style={{ borderRadius: '0px' }}></div>
                    Public relations and Marketing Services
                  </li>
                  <li className="body-medium text-[var(--text-secondary)] flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--brand-primary)]" style={{ borderRadius: '0px' }}></div>
                    Events Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;