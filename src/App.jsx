import { useState, useEffect, useRef } from "react";

const COLORS = {
  navy: "#1a2744",
  navyLight: "#243352",
  navyMid: "#1e2d48",
  accent: "#c8a24e",
  accentLight: "#f5ecd4",
  accentGlow: "#d4a94220",
  warm: "#faf8f5",
  warmDark: "#f0ece5",
  card: "#ffffff",
  text: "#1a2744",
  textMid: "#4a5568",
  textLight: "#8895a7",
  success: "#2d9f7f",
  successBg: "#e8f7f1",
  warning: "#d69e2e",
  warningBg: "#fef9e7",
  danger: "#c53030",
  dangerBg: "#fef2f2",
  border: "#e8e4de",
};

// Lucide-style SVG icons as components
const Icons = {
  Mic: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  ),
  Camera: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  Send: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Check: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Shield: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  ChevronRight: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  ChevronLeft: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  Brain: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A5.5 5.5 0 0 0 4 7.5c0 1.5.5 2.8 1.4 3.8A5.5 5.5 0 0 0 4 15a5.5 5.5 0 0 0 5.5 5.5c1.3 0 2.5-.5 3.5-1.2a5 5 0 0 0 3.5 1.2A5.5 5.5 0 0 0 22 15c0-1.4-.5-2.7-1.4-3.7A5.5 5.5 0 0 0 22 7.5 5.5 5.5 0 0 0 16.5 2c-1.3 0-2.5.4-3.5 1.2A5.5 5.5 0 0 0 9.5 2z"/>
      <path d="M12 2v20"/>
    </svg>
  ),
  Book: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  Home: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Eye: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Plus: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  Edit: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  Lock: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  User: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Image: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
    </svg>
  ),
  Clock: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
};

// Fade-in animation wrapper
const FadeIn = ({ children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    }}>{children}</div>
  );
};

// Status bar
const StatusBar = () => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "8px 20px 4px", fontSize: 12, fontWeight: 600, color: COLORS.navy
  }}>
    <span>9:41</span>
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      <svg width="16" height="12" viewBox="0 0 16 12"><rect x="0" y="5" width="3" height="7" rx="0.5" fill={COLORS.navy}/><rect x="4.5" y="3" width="3" height="9" rx="0.5" fill={COLORS.navy}/><rect x="9" y="1" width="3" height="11" rx="0.5" fill={COLORS.navy}/><rect x="13" y="0" width="3" height="12" rx="0.5" fill={COLORS.navy} opacity="0.3"/></svg>
      <svg width="24" height="12" viewBox="0 0 24 12"><rect x="0" y="0" width="21" height="12" rx="2" stroke={COLORS.navy} strokeWidth="1" fill="none"/><rect x="21" y="3.5" width="2" height="5" rx="1" fill={COLORS.navy}/><rect x="1.5" y="1.5" width="14" height="9" rx="1" fill={COLORS.success}/></svg>
    </div>
  </div>
);

// Nav bar at bottom
const NavBar = ({ activeTab, onNav }) => {
  const tabs = [
    { id: "home", label: "Home", icon: Icons.Home },
    { id: "tribal", label: "Knowledge", icon: Icons.Book },
    { id: "cognitive", label: "Cognitive", icon: Icons.Brain },
    { id: "review", label: "Review", icon: Icons.Eye },
  ];
  return (
    <div style={{
      display: "flex", justifyContent: "space-around", alignItems: "center",
      borderTop: `1px solid ${COLORS.border}`, background: COLORS.card, padding: "6px 0 18px",
    }}>
      {tabs.map(tab => {
        const active = activeTab === tab.id;
        return (
          <button key={tab.id} onClick={() => onNav(tab.id)} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
            background: "none", border: "none", cursor: "pointer", padding: "4px 12px",
          }}>
            <tab.icon size={20} color={active ? COLORS.accent : COLORS.textLight} />
            <span style={{
              fontSize: 10, fontWeight: active ? 700 : 500,
              color: active ? COLORS.accent : COLORS.textLight,
              letterSpacing: "0.02em",
            }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// =====================
// SCREEN: Onboarding
// =====================
const OnboardingScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("Sarah Mitchell");
  const [role, setRole] = useState("Sr. Asset Recovery Specialist");
  const [responsibilities, setResponsibilities] = useState([
    { text: "Asset valuation & appraisal", added: true },
    { text: "Salvage vendor management", added: true },
    { text: "Regulatory compliance (environmental)", added: true },
    { text: "SAP disposition processing", added: true },
    { text: "Cross-department coordination", added: false },
    { text: "New hire training & mentorship", added: false },
  ]);

  const toggleResp = (i) => {
    const next = [...responsibilities];
    next[i].added = !next[i].added;
    setResponsibilities(next);
  };

  if (step === 0) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: COLORS.navy }}>
      <StatusBar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", textAlign: "center" }}>
        <FadeIn>
          <div style={{
            width: 72, height: 72, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent}dd)`,
            display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
            boxShadow: `0 8px 32px ${COLORS.accent}40`,
          }}>
            <Icons.Shield size={36} color={COLORS.navy} />
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 700, margin: "0 0 8px", fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Welcome to ABRAXIS
          </h1>
        </FadeIn>
        <FadeIn delay={300}>
          <p style={{ color: "#ffffffbb", fontSize: 14, lineHeight: 1.6, margin: "0 0 12px" }}>
            Your knowledge matters. ABRAXIS helps you capture and protect what you know — on your terms.
          </p>
        </FadeIn>
        <FadeIn delay={450}>
          <div style={{
            background: "#ffffff12", borderRadius: 12, padding: "14px 20px", margin: "16px 0 32px",
            border: "1px solid #ffffff18",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <Icons.Lock size={16} color={COLORS.accent} />
              <span style={{ color: COLORS.accent, fontSize: 13, fontWeight: 600 }}>Your Knowledge, Your Control</span>
            </div>
            <p style={{ color: "#ffffff99", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
              Everything you share goes to your private draft space first. Nothing is visible to your organization until you review and approve it.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={600}>
          <button onClick={() => setStep(1)} style={{
            background: COLORS.accent, color: COLORS.navy, border: "none", borderRadius: 12,
            padding: "14px 48px", fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 4px 20px ${COLORS.accent}50`,
          }}>Get Started</button>
        </FadeIn>
      </div>
    </div>
  );

  if (step === 1) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: COLORS.warm }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <p style={{ fontSize: 12, color: COLORS.textLight, margin: "0 0 4px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Step 1 of 2</p>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>Your Profile</h2>
        <p style={{ fontSize: 13, color: COLORS.textMid, margin: "0 0 20px", lineHeight: 1.4 }}>This helps ABRAXIS understand your role and tailor conversations to your expertise.</p>
      </div>
      <div style={{ padding: "0 20px", flex: 1 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid, display: "block", marginBottom: 6 }}>Full Name</label>
        <div style={{
          background: COLORS.card, border: `1.5px solid ${COLORS.border}`, borderRadius: 10,
          padding: "12px 14px", fontSize: 15, color: COLORS.text, marginBottom: 16,
        }}>{name}</div>
        <label style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid, display: "block", marginBottom: 6 }}>Job Title</label>
        <div style={{
          background: COLORS.card, border: `1.5px solid ${COLORS.border}`, borderRadius: 10,
          padding: "12px 14px", fontSize: 15, color: COLORS.text, marginBottom: 16,
        }}>{role}</div>
        <label style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid, display: "block", marginBottom: 6 }}>Department</label>
        <div style={{
          background: COLORS.card, border: `1.5px solid ${COLORS.border}`, borderRadius: 10,
          padding: "12px 14px", fontSize: 15, color: COLORS.text, marginBottom: 16,
        }}>Investment Recovery</div>
        <label style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMid, display: "block", marginBottom: 6 }}>Years in Role</label>
        <div style={{
          background: COLORS.card, border: `1.5px solid ${COLORS.border}`, borderRadius: 10,
          padding: "12px 14px", fontSize: 15, color: COLORS.text,
        }}>14 years</div>
      </div>
      <div style={{ padding: "16px 20px 24px" }}>
        <button onClick={() => setStep(2)} style={{
          background: COLORS.navy, color: "#fff", border: "none", borderRadius: 12,
          padding: "14px 0", fontSize: 15, fontWeight: 600, cursor: "pointer", width: "100%",
        }}>Continue</button>
      </div>
    </div>
  );

  if (step === 2) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: COLORS.warm }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <p style={{ fontSize: 12, color: COLORS.textLight, margin: "0 0 4px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Step 2 of 2</p>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>Your Responsibilities</h2>
        <p style={{ fontSize: 13, color: COLORS.textMid, margin: "0 0 16px", lineHeight: 1.4 }}>Select the areas you're responsible for. You can add or modify these anytime.</p>
      </div>
      <div style={{ flex: 1, padding: "0 20px", overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
        {responsibilities.map((r, i) => (
          <button key={i} onClick={() => toggleResp(i)} style={{
            display: "flex", alignItems: "center", gap: 12, width: "100%",
            background: r.added ? COLORS.accentLight : COLORS.card,
            border: `1.5px solid ${r.added ? COLORS.accent + "60" : COLORS.border}`,
            borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left",
            transition: "all 0.2s ease",
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: 6,
              background: r.added ? COLORS.accent : "transparent",
              border: r.added ? "none" : `2px solid ${COLORS.border}`,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {r.added && <Icons.Check size={14} color={COLORS.navy} />}
            </div>
            <span style={{ fontSize: 14, color: COLORS.text, fontWeight: r.added ? 600 : 400 }}>{r.text}</span>
          </button>
        ))}
        <button style={{
          display: "flex", alignItems: "center", gap: 8, width: "100%",
          background: "transparent", border: `1.5px dashed ${COLORS.border}`,
          borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", color: COLORS.textLight,
        }}>
          <Icons.Plus size={18} color={COLORS.textLight} />
          <span style={{ fontSize: 14 }}>Add custom responsibility</span>
        </button>
      </div>
      <div style={{ padding: "16px 20px 24px" }}>
        <button onClick={onComplete} style={{
          background: COLORS.navy, color: "#fff", border: "none", borderRadius: 12,
          padding: "14px 0", fontSize: 15, fontWeight: 600, cursor: "pointer", width: "100%",
        }}>Complete Setup</button>
      </div>
    </div>
  );
};

// =====================
// SCREEN: Home Dashboard
// =====================
const HomeScreen = ({ onNav }) => (
  <div style={{ flex: 1, background: COLORS.warm, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
    <StatusBar />
    <div style={{ padding: "12px 20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <p style={{ fontSize: 13, color: COLORS.textLight, margin: 0 }}>Good morning,</p>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: COLORS.navy, margin: "2px 0 0", fontFamily: "'DM Serif Display', Georgia, serif" }}>Sarah</h1>
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icons.User size={20} color={COLORS.accent} />
        </div>
      </div>

      {/* Progress card */}
      <div style={{
        background: COLORS.navy, borderRadius: 16, padding: "18px 20px", marginBottom: 20,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: COLORS.accent + "12" }} />
        <p style={{ fontSize: 12, color: "#ffffff80", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Knowledge Capture Progress</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12 }}>
          <span style={{ fontSize: 32, fontWeight: 700, color: "#fff" }}>34%</span>
          <span style={{ fontSize: 12, color: COLORS.accent }}>4 of 6 areas started</span>
        </div>
        <div style={{ background: "#ffffff20", borderRadius: 6, height: 6, overflow: "hidden" }}>
          <div style={{ background: COLORS.accent, height: "100%", width: "34%", borderRadius: 6, transition: "width 1s ease" }} />
        </div>
      </div>

      {/* Two mode cards */}
      <p style={{ fontSize: 12, color: COLORS.textLight, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Capture Modes</p>

      <button onClick={() => onNav("tribal")} style={{
        display: "flex", alignItems: "center", gap: 14, width: "100%",
        background: COLORS.card, border: `1.5px solid ${COLORS.border}`, borderRadius: 14,
        padding: "16px", marginBottom: 10, cursor: "pointer", textAlign: "left",
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12, background: "#e8f4f8",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <Icons.Book size={24} color="#2b7a9b" />
        </div>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: COLORS.navy, display: "block" }}>Tribal Knowledge</span>
          <span style={{ fontSize: 12, color: COLORS.textLight, lineHeight: 1.4 }}>Capture what you know — voice, text, photos of notes & tools</span>
        </div>
        <Icons.ChevronRight size={20} color={COLORS.textLight} />
      </button>

      <button onClick={() => onNav("cognitive")} style={{
        display: "flex", alignItems: "center", gap: 14, width: "100%",
        background: COLORS.card, border: `1.5px solid ${COLORS.border}`, borderRadius: 14,
        padding: "16px", marginBottom: 20, cursor: "pointer", textAlign: "left",
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12, background: "#f3eef8",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <Icons.Brain size={24} color="#7c5cbf" />
        </div>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: COLORS.navy, display: "block" }}>Cognitive Session</span>
          <span style={{ fontSize: 12, color: COLORS.textLight, lineHeight: 1.4 }}>Walk through how you think, decide, and handle exceptions</span>
        </div>
        <Icons.ChevronRight size={20} color={COLORS.textLight} />
      </button>

      {/* Pending review */}
      <button onClick={() => onNav("review")} style={{
        display: "flex", alignItems: "center", gap: 12, width: "100%",
        background: COLORS.warningBg, border: `1.5px solid ${COLORS.warning}30`,
        borderRadius: 12, padding: "12px 14px", marginBottom: 20, cursor: "pointer", textAlign: "left",
      }}>
        <Icons.Eye size={20} color={COLORS.warning} />
        <span style={{ fontSize: 13, color: COLORS.text, flex: 1 }}>
          <strong>3 items</strong> pending your review before sharing
        </span>
        <Icons.ChevronRight size={18} color={COLORS.warning} />
      </button>

      {/* Recent activity */}
      <p style={{ fontSize: 12, color: COLORS.textLight, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Recent Activity</p>
      {[
        { area: "Asset Valuation", type: "Voice note", time: "2h ago", icon: Icons.Mic },
        { area: "SAP Workaround", type: "Photo + annotation", time: "Yesterday", icon: Icons.Camera },
        { area: "Vendor Negotiation", type: "Cognitive session", time: "2 days ago", icon: Icons.Brain },
      ].map((item, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "10px 0", borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none",
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, background: COLORS.warmDark,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <item.icon size={18} color={COLORS.textMid} />
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: COLORS.text, display: "block" }}>{item.area}</span>
            <span style={{ fontSize: 12, color: COLORS.textLight }}>{item.type}</span>
          </div>
          <span style={{ fontSize: 11, color: COLORS.textLight }}>{item.time}</span>
        </div>
      ))}
      <div style={{ height: 16 }} />
    </div>
  </div>
);

// =====================
// SCREEN: Tribal Knowledge Capture
// =====================
const TribalScreen = ({ onNav }) => {
  const [activeArea, setActiveArea] = useState(null);
  const [recording, setRecording] = useState(false);
  const [showCapture, setShowCapture] = useState(false);
  const [pulseSize, setPulseSize] = useState(1);

  useEffect(() => {
    if (!recording) return;
    const iv = setInterval(() => setPulseSize(p => p === 1 ? 1.15 : 1), 600);
    return () => clearInterval(iv);
  }, [recording]);

  const areas = [
    { name: "Asset Valuation & Appraisal", progress: 45, items: 8 },
    { name: "Salvage Vendor Management", progress: 20, items: 3 },
    { name: "Regulatory Compliance", progress: 60, items: 12 },
    { name: "SAP Disposition Processing", progress: 10, items: 2 },
  ];

  if (activeArea !== null && showCapture) {
    return (
      <div style={{ flex: 1, background: COLORS.warm, display: "flex", flexDirection: "column" }}>
        <StatusBar />
        <div style={{ padding: "12px 20px 0" }}>
          <button onClick={() => setShowCapture(false)} style={{
            display: "flex", alignItems: "center", gap: 4, background: "none", border: "none",
            color: COLORS.accent, fontSize: 13, fontWeight: 600, cursor: "pointer", padding: 0, marginBottom: 8,
          }}>
            <Icons.ChevronLeft size={18} color={COLORS.accent} /> Back
          </button>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: COLORS.navy, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>{areas[activeArea].name}</h2>
          <p style={{ fontSize: 12, color: COLORS.textLight, margin: "0 0 16px" }}>Capture what you know about this area</p>
        </div>

        <div style={{ flex: 1, padding: "0 20px", overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
          {/* Voice capture */}
          <div style={{
            background: COLORS.card, borderRadius: 14, padding: "20px", marginBottom: 12,
            border: `1.5px solid ${recording ? COLORS.accent + "60" : COLORS.border}`,
            transition: "border-color 0.3s",
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: "0 0 4px" }}>Voice Capture</p>
            <p style={{ fontSize: 12, color: COLORS.textLight, margin: "0 0 16px" }}>Describe what you know — in your own words</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
              <button onClick={() => setRecording(!recording)} style={{
                width: 64, height: 64, borderRadius: "50%", border: "none", cursor: "pointer",
                background: recording ? COLORS.danger : COLORS.navy,
                display: "flex", alignItems: "center", justifyContent: "center",
                transform: `scale(${recording ? pulseSize : 1})`,
                transition: "all 0.3s ease",
                boxShadow: recording ? `0 0 24px ${COLORS.danger}40` : `0 4px 16px ${COLORS.navy}30`,
              }}>
                {recording
                  ? <div style={{ width: 20, height: 20, borderRadius: 4, background: "#fff" }} />
                  : <Icons.Mic size={28} color="#fff" />}
              </button>
            </div>
            {recording && (
              <div style={{ textAlign: "center", marginTop: 12 }}>
                <span style={{ fontSize: 14, color: COLORS.danger, fontWeight: 600 }}>Recording... 0:34</span>
                <div style={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 8 }}>
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} style={{
                      width: 3, height: 8 + Math.random() * 20, borderRadius: 2,
                      background: COLORS.accent, opacity: 0.4 + Math.random() * 0.6,
                    }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Text capture */}
          <div style={{
            background: COLORS.card, borderRadius: 14, padding: "20px", marginBottom: 12,
            border: `1.5px solid ${COLORS.border}`,
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: "0 0 8px" }}>Text Note</p>
            <div style={{
              background: COLORS.warm, borderRadius: 10, padding: "12px", minHeight: 60,
              fontSize: 14, color: COLORS.textLight, border: `1px solid ${COLORS.border}`,
            }}>
              Type your knowledge here...
            </div>
          </div>

          {/* Photo capture */}
          <div style={{
            background: COLORS.card, borderRadius: 14, padding: "20px", marginBottom: 12,
            border: `1.5px solid ${COLORS.border}`,
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: "0 0 4px" }}>Photo Capture</p>
            <p style={{ fontSize: 12, color: COLORS.textLight, margin: "0 0 12px" }}>Photograph cheat sheets, notebooks, sticky notes, or screen layouts</p>
            <div style={{ display: "flex", gap: 10 }}>
              <button style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                background: COLORS.warm, border: `1.5px dashed ${COLORS.border}`, borderRadius: 12,
                padding: "16px 8px", cursor: "pointer",
              }}>
                <Icons.Camera size={24} color={COLORS.textMid} />
                <span style={{ fontSize: 12, color: COLORS.textMid }}>Take Photo</span>
              </button>
              <button style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                background: COLORS.warm, border: `1.5px dashed ${COLORS.border}`, borderRadius: 12,
                padding: "16px 8px", cursor: "pointer",
              }}>
                <Icons.Image size={24} color={COLORS.textMid} />
                <span style={{ fontSize: 12, color: COLORS.textMid }}>From Gallery</span>
              </button>
            </div>
            {/* Mock captured photo */}
            <div style={{
              marginTop: 12, background: COLORS.warmDark, borderRadius: 10, padding: 10,
              border: `1px solid ${COLORS.border}`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 8, background: `linear-gradient(135deg, #e8dcc8, #d4c4a8)`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  fontSize: 10, color: COLORS.textMid, textAlign: "center", lineHeight: 1.2,
                }}>
                  <span>SAP<br/>notes</span>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: COLORS.text, display: "block" }}>sap_workaround_notes.jpg</span>
                  <span style={{ fontSize: 11, color: COLORS.textLight }}>Tagged: "SAP bypass for bulk disposal"</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: 16 }} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, background: COLORS.warm, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>Tribal Knowledge</h2>
        <p style={{ fontSize: 13, color: COLORS.textMid, margin: "0 0 16px", lineHeight: 1.4 }}>Select a responsibility area to capture what you know through voice, text, or photos.</p>
      </div>
      <div style={{ padding: "0 20px" }}>
        {areas.map((area, i) => (
          <button key={i} onClick={() => { setActiveArea(i); setShowCapture(true); }} style={{
            width: "100%", background: COLORS.card, border: `1.5px solid ${COLORS.border}`,
            borderRadius: 14, padding: "16px", marginBottom: 10, cursor: "pointer", textAlign: "left",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: COLORS.navy }}>{area.name}</span>
              <span style={{ fontSize: 12, color: COLORS.textLight }}>{area.items} items</span>
            </div>
            <div style={{ background: COLORS.warmDark, borderRadius: 4, height: 5, overflow: "hidden", marginBottom: 4 }}>
              <div style={{ background: area.progress > 40 ? COLORS.success : COLORS.accent, height: "100%", width: `${area.progress}%`, borderRadius: 4 }} />
            </div>
            <span style={{ fontSize: 11, color: COLORS.textLight }}>{area.progress}% captured</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// =====================
// SCREEN: Cognitive Elicitation
// =====================
const CognitiveScreen = () => {
  const [voiceMode, setVoiceMode] = useState(false);
  const [messages] = useState([
    { from: "ai", text: "Hi Sarah. Let's talk about how you handle asset valuations. When a new piece of equipment comes in for recovery, what's the first thing you look at?" },
    { from: "user", text: "First thing I do is check if it's on our high-value list — that's a spreadsheet I keep separately from SAP. If it's over $50K original cost, it gets a different process." },
    { from: "ai", text: "That's interesting — you mentioned a separate spreadsheet outside SAP. Can you tell me more about why that exists? What does it give you that SAP doesn't?" },
    { from: "user", text: "SAP doesn't track market conditions for salvage. My spreadsheet has vendor contacts, recent sale prices for similar equipment, and seasonal patterns. Like — transformer prices spike in Q3 because of summer maintenance cycles." },
    { from: "ai", text: "So you're essentially maintaining a market intelligence layer that the official system doesn't capture. That seasonal pricing knowledge — is that something you learned from experience, or is it documented somewhere?" },
  ]);

  const [speaking, setSpeaking] = useState(false);
  const [pulseAI, setPulseAI] = useState(1);

  useEffect(() => {
    if (!speaking) return;
    const iv = setInterval(() => setPulseAI(p => p === 1 ? 1.08 : 1), 500);
    return () => clearInterval(iv);
  }, [speaking]);

  return (
    <div style={{ flex: 1, background: COLORS.warm, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 8px", borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: COLORS.navy, margin: 0, fontFamily: "'DM Serif Display', Georgia, serif" }}>Cognitive Session</h2>
            <span style={{ fontSize: 12, color: COLORS.textLight }}>Asset Valuation & Appraisal</span>
          </div>
          {/* Voice/Text toggle */}
          <div style={{
            display: "flex", background: COLORS.warmDark, borderRadius: 8, padding: 3,
          }}>
            <button onClick={() => setVoiceMode(false)} style={{
              padding: "6px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600,
              background: !voiceMode ? COLORS.navy : "transparent",
              color: !voiceMode ? "#fff" : COLORS.textLight,
            }}>Text</button>
            <button onClick={() => setVoiceMode(true)} style={{
              padding: "6px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600,
              background: voiceMode ? COLORS.navy : "transparent",
              color: voiceMode ? "#fff" : COLORS.textLight,
            }}>Voice</button>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch", padding: "12px 20px" }}>
        {messages.map((msg, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: msg.from === "user" ? "flex-end" : "flex-start",
              marginBottom: 12,
            }}>
              {msg.from === "ai" && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent}cc)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: COLORS.navy }}>A</span>
                  </div>
                  <span style={{ fontSize: 11, color: COLORS.textLight, fontWeight: 500 }}>ABRAXIS</span>
                </div>
              )}
              <div style={{
                maxWidth: "85%", padding: "10px 14px", borderRadius: 14,
                background: msg.from === "user" ? COLORS.navy : COLORS.card,
                color: msg.from === "user" ? "#fff" : COLORS.text,
                fontSize: 14, lineHeight: 1.5,
                border: msg.from === "ai" ? `1px solid ${COLORS.border}` : "none",
                borderTopLeftRadius: msg.from === "ai" ? 4 : 14,
                borderTopRightRadius: msg.from === "user" ? 4 : 14,
              }}>
                {msg.text}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Input area */}
      {voiceMode ? (
        <div style={{
          padding: "16px 20px 24px", borderTop: `1px solid ${COLORS.border}`,
          background: COLORS.card, textAlign: "center",
        }}>
          <p style={{ fontSize: 12, color: COLORS.textLight, margin: "0 0 12px" }}>
            {speaking ? "Listening..." : "Tap to speak your response"}
          </p>
          <button onClick={() => setSpeaking(!speaking)} style={{
            width: 64, height: 64, borderRadius: "50%", border: "none", cursor: "pointer",
            background: speaking ? COLORS.success : COLORS.navy,
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto",
            transform: `scale(${speaking ? pulseAI : 1})`,
            transition: "all 0.3s ease",
            boxShadow: speaking ? `0 0 32px ${COLORS.success}40` : `0 4px 16px ${COLORS.navy}30`,
          }}>
            <Icons.Mic size={28} color="#fff" />
          </button>
        </div>
      ) : (
        <div style={{
          padding: "12px 20px 24px", borderTop: `1px solid ${COLORS.border}`,
          background: COLORS.card, display: "flex", gap: 8, alignItems: "flex-end",
        }}>
          <div style={{
            flex: 1, background: COLORS.warm, borderRadius: 20, padding: "10px 16px",
            fontSize: 14, color: COLORS.textLight, border: `1px solid ${COLORS.border}`,
            minHeight: 20,
          }}>
            Type your response...
          </div>
          <button style={{
            width: 40, height: 40, borderRadius: "50%", border: "none",
            background: COLORS.navy, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <Icons.Send size={18} color="#fff" />
          </button>
        </div>
      )}
    </div>
  );
};

// =====================
// SCREEN: Review / Gatekeeping
// =====================
const ReviewScreen = () => {
  const [items, setItems] = useState([
    {
      id: 1, type: "voice", area: "Asset Valuation",
      title: "High-value equipment threshold process",
      summary: "Described separate tracking spreadsheet for items over $50K, including vendor contacts and seasonal pricing patterns for transformers.",
      time: "Today, 9:12 AM", status: "pending",
    },
    {
      id: 2, type: "photo", area: "SAP Processing",
      title: "SAP bulk disposal bypass procedure",
      summary: "Photo of handwritten notes showing steps to batch-process disposal orders when SAP's individual processing times out.",
      time: "Yesterday", status: "pending",
    },
    {
      id: 3, type: "cognitive", area: "Vendor Management",
      title: "Vendor negotiation decision framework",
      summary: "Captured decision criteria for choosing between auction vs. direct sale based on equipment condition, market timing, and volume.",
      time: "2 days ago", status: "pending",
    },
  ]);

  const updateStatus = (id, status) => {
    setItems(items.map(item => item.id === id ? { ...item, status } : item));
  };

  const typeIcons = { voice: Icons.Mic, photo: Icons.Camera, cognitive: Icons.Brain };
  const typeColors = { voice: "#2b7a9b", photo: "#b45309", cognitive: "#7c5cbf" };

  return (
    <div style={{ flex: 1, background: COLORS.warm, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>Review & Approve</h2>
        <p style={{ fontSize: 13, color: COLORS.textMid, margin: "0 0 4px", lineHeight: 1.4 }}>Your captured knowledge stays private until you approve it.</p>
        <div style={{
          display: "flex", alignItems: "center", gap: 6, marginBottom: 16,
          background: COLORS.accentLight, borderRadius: 8, padding: "8px 12px",
        }}>
          <Icons.Shield size={14} color={COLORS.accent} />
          <span style={{ fontSize: 12, color: COLORS.navy, fontWeight: 500 }}>Only you can see these items until approved</span>
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        {items.map((item) => {
          const TypeIcon = typeIcons[item.type];
          return (
            <div key={item.id} style={{
              background: COLORS.card, borderRadius: 14, padding: "16px", marginBottom: 10,
              border: `1.5px solid ${item.status === "approved" ? COLORS.success + "40" : item.status === "redacted" ? COLORS.danger + "40" : COLORS.border}`,
              opacity: item.status === "redacted" ? 0.5 : 1,
              transition: "all 0.3s ease",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: typeColors[item.type] + "18",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <TypeIcon size={16} color={typeColors[item.type]} />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.navy, display: "block" }}>{item.title}</span>
                  <span style={{ fontSize: 11, color: COLORS.textLight }}>{item.area} · {item.time}</span>
                </div>
              </div>
              <p style={{ fontSize: 13, color: COLORS.textMid, lineHeight: 1.5, margin: "0 0 12px" }}>{item.summary}</p>

              {item.status === "pending" ? (
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => updateStatus(item.id, "approved")} style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                    background: COLORS.success, color: "#fff", border: "none", borderRadius: 8,
                    padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer",
                  }}>
                    <Icons.Check size={16} color="#fff" /> Approve
                  </button>
                  <button onClick={() => updateStatus(item.id, "editing")} style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                    background: "transparent", color: COLORS.navy, border: `1.5px solid ${COLORS.border}`,
                    borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer",
                  }}>
                    <Icons.Edit size={16} /> Edit
                  </button>
                  <button onClick={() => updateStatus(item.id, "redacted")} style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "transparent", color: COLORS.danger, border: `1.5px solid ${COLORS.danger}30`,
                    borderRadius: 8, padding: "10px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer",
                  }}>
                    Redact
                  </button>
                </div>
              ) : (
                <div style={{
                  display: "flex", alignItems: "center", gap: 6, padding: "8px 12px",
                  background: item.status === "approved" ? COLORS.successBg : COLORS.dangerBg,
                  borderRadius: 8,
                }}>
                  <span style={{
                    fontSize: 13, fontWeight: 600,
                    color: item.status === "approved" ? COLORS.success : COLORS.danger,
                  }}>
                    {item.status === "approved" ? "Approved — visible to organization" : "Redacted — removed from sharing"}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// =====================
// MAIN APP
// =====================
export default function AbraxisPrototype() {
  const [screen, setScreen] = useState("onboarding");
  const [activeTab, setActiveTab] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [showAnnotation, setShowAnnotation] = useState(true);
  const showNav = screen !== "onboarding";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 500);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNav = (tab) => {
    setActiveTab(tab);
    setScreen(tab);
  };

  const screenContent = (
    <>
      {screen === "onboarding" && <OnboardingScreen onComplete={() => { setScreen("home"); setActiveTab("home"); }} />}
      {screen === "home" && <HomeScreen onNav={handleNav} />}
      {screen === "tribal" && <TribalScreen onNav={handleNav} />}
      {screen === "cognitive" && <CognitiveScreen />}
      {screen === "review" && <ReviewScreen />}
    </>
  );

  // Mobile: full-screen native app experience
  if (isMobile) {
    return (
      <div style={{
        height: "100dvh", display: "flex", flexDirection: "column",
        background: COLORS.card,
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      }}>
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}>
          {screenContent}
        </div>
        {showNav && <NavBar activeTab={activeTab} onNav={handleNav} />}
      </div>
    );
  }

  // Desktop: phone frame presentation
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: `linear-gradient(145deg, #f0ece5 0%, #e4ddd3 50%, #d8d0c4 100%)`,
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: "20px",
    }}>
      {/* Background label */}
      <div style={{ position: "fixed", top: 24, left: 0, right: 0, textAlign: "center" }}>
        <span style={{
          fontSize: 13, fontWeight: 600, color: COLORS.navy + "40",
          letterSpacing: "0.15em", textTransform: "uppercase",
        }}>ABRAXIS Mobile App Prototype</span>
      </div>

      {/* Phone frame */}
      <div style={{
        width: 375, height: 812, borderRadius: 44, overflow: "hidden",
        background: COLORS.card,
        boxShadow: `
          0 0 0 10px #1a1a1a,
          0 0 0 12px #333,
          0 20px 60px rgba(0,0,0,0.35),
          0 0 100px rgba(26, 39, 68, 0.15)
        `,
        display: "flex", flexDirection: "column", position: "relative",
      }}>
        {/* Notch */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 150, height: 28, background: "#1a1a1a", borderRadius: "0 0 18px 18px", zIndex: 10,
        }}>
          <div style={{
            position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)",
            width: 60, height: 5, borderRadius: 3, background: "#333",
          }} />
        </div>

        {/* Screen content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: 28, overflow: "hidden" }}>
          {screenContent}
        </div>

        {/* Nav bar */}
        {showNav && <NavBar activeTab={activeTab} onNav={handleNav} />}

        {/* Home indicator */}
        <div style={{
          position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)",
          width: 134, height: 5, borderRadius: 3, background: "#ddd",
        }} />
      </div>

      {/* Side annotations */}
      {showAnnotation && (
      <div style={{ position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)", maxWidth: 200 }}>
        <div style={{
          background: COLORS.card, borderRadius: 12, padding: "14px 16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: `1px solid ${COLORS.border}`,
          position: "relative",
        }}>
          <button onClick={() => setShowAnnotation(false)} style={{
            position: "absolute", top: 8, right: 8, width: 24, height: 24, borderRadius: "50%",
            background: COLORS.warmDark, border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" stroke={COLORS.textMid} strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="10" y2="10"/><line x1="10" y1="2" x2="2" y2="10"/>
            </svg>
          </button>
          <p style={{ fontSize: 11, fontWeight: 700, color: COLORS.navy, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Navigation</p>
          <p style={{ fontSize: 12, color: COLORS.textMid, margin: "0 0 4px", lineHeight: 1.5 }}>
            Use the bottom tabs to explore each screen, or tap through the onboarding flow.
          </p>
          <div style={{ borderTop: `1px solid ${COLORS.border}`, margin: "10px 0", paddingTop: 10 }}>
            <p style={{ fontSize: 10, color: COLORS.textLight, margin: 0 }}>ABRAXIS, Inc. · Confidential</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
