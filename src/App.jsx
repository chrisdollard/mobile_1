import { useState, useEffect } from "react";

const C = {
  // Primary brand
  dark: "#181A23", darkMid: "#232633", crimson: "#D10046", orange: "#FF4200",
  // Gradient stops
  gradA: "#FF4200", gradB: "#D10046",
  // Golds
  gold: "#FFB133", goldLight: "#FFC15C", goldSoft: "#FFD085", goldPale: "#FFEFD6",
  // Roses
  rose: "#D83545", roseMid: "#E05D6A", roseLight: "#E8868F", rosePale: "#EFAEB5",
  // Grays
  grayDark: "#4F515C", gray: "#7B7D85", grayMid: "#A7A8AD", grayLight: "#D3D4D6",
  // UI
  warm: "#FAF8F5", warmDark: "#F0ECE5", card: "#ffffff",
  text: "#181A23", textMid: "#4F515C", textLight: "#7B7D85",
  success: "#2d9f7f", successBg: "#e8f7f1",
  warning: "#d69e2e", warningBg: "#fef9e7",
  danger: "#D10046", dangerBg: "#fef2f2",
  border: "#e8e4de",
  blue: "#2b7a9b", blueBg: "#e8f4f8",
  purple: "#7c5cbf", purpleBg: "#f3eef8",
  orangeUI: "#b45309", orangeBg: "#fef3e2",
  // Campfire
  campfire: "#e85d26", campfireBg: "#fef3ee", campfireLight: "#fff7f2",
  learner: "#6366f1", learnerBg: "#eef2ff",
};

// Icons
const I = {
  Mic: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  Camera: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  Video: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  Send: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  Check: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Shield: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  ChevRight: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
  ChevLeft: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>,
  Home: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Eye: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Plus: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Edit: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  Lock: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  User: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Users: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Image: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
  Clock: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Briefcase: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Play: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  Heart: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Map: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
  AlertCircle: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  Gift: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  Search: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Flame: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  Flag: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
  Refresh: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
  ArrowRight: ({ s = 24, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
};

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(12px)", transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>{children}</div>;
};

// Role-Up wordmark — "role" + elevated "up" in gold
const RoleUpLogo = ({ size = 32, light = true }) => {
  const lift = size * 0.33;
  const tracking = size > 40 ? -2 : size > 24 ? -1 : -0.5;
  return (
    <span style={{ display: "inline-flex", alignItems: "flex-end", fontFamily: "'Outfit', 'DM Sans', sans-serif", fontSize: size, letterSpacing: tracking, lineHeight: 1, whiteSpace: "nowrap" }}>
      <span style={{ fontWeight: 700, color: light ? "#fff" : C.dark }}>role</span>
      <span style={{ fontWeight: 800, color: C.gold, display: "inline-block", transform: `translateY(-${lift}px)`, marginLeft: -1 }}>up</span>
    </span>
  );
};

const StatusBar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 20px 4px", fontSize: 12, fontWeight: 600, color: C.dark }}>
    <span>9:41</span>
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      <svg width="16" height="12" viewBox="0 0 16 12"><rect x="0" y="5" width="3" height="7" rx="0.5" fill={C.dark}/><rect x="4.5" y="3" width="3" height="9" rx="0.5" fill={C.dark}/><rect x="9" y="1" width="3" height="11" rx="0.5" fill={C.dark}/><rect x="13" y="0" width="3" height="12" rx="0.5" fill={C.dark} opacity="0.3"/></svg>
      <svg width="24" height="12" viewBox="0 0 24 12"><rect x="0" y="0" width="21" height="12" rx="2" stroke={C.dark} strokeWidth="1" fill="none"/><rect x="21" y="3.5" width="2" height="5" rx="1" fill={C.dark}/><rect x="1.5" y="1.5" width="14" height="9" rx="1" fill={C.success}/></svg>
    </div>
  </div>
);

// Campfire helpers
const Avatar = ({ name, color, size = 28 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: size * 0.38, fontWeight: 700, color: "#fff" }}>
    {name.split(" ").map(w => w[0]).join("").slice(0, 2)}
  </div>
);

const RoleBadge = ({ role }) => {
  const cfg = {
    contributor: { label: "Contributor", bg: C.successBg, color: C.success },
    learner: { label: "Learner", bg: C.learnerBg, color: C.learner },
    observer: { label: "Observer", bg: C.purpleBg, color: C.purple },
  };
  const x = cfg[role] || cfg.contributor;
  return <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", background: x.bg, color: x.color, padding: "2px 6px", borderRadius: 4 }}>{x.label}</span>;
};

const NavBar = ({ active, onNav }) => {
  const tabs = [
    { id: "home", label: "Dashboard", icon: I.Home },
    { id: "handover", label: "Capture", icon: I.Briefcase },
    { id: "campfire", label: "Campfire", icon: I.Flame },
    { id: "successor", label: "Onboarding", icon: I.Users },
    { id: "review", label: "Review", icon: I.Eye },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", borderTop: `1px solid ${C.border}`, background: C.card, padding: "6px 0 18px" }}>
      {tabs.map(t => {
        const isCF = t.id === "campfire";
        return (
          <button key={t.id} onClick={() => onNav(t.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "4px 8px" }}>
            <t.icon s={19} c={active === t.id ? (isCF ? C.campfire : C.crimson) : C.textLight} />
            <span style={{ fontSize: 9, fontWeight: active === t.id ? 700 : 500, color: active === t.id ? (isCF ? C.campfire : C.crimson) : C.textLight, letterSpacing: "0.02em" }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// ===== ONBOARDING =====
const OnboardingScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [sel, setSel] = useState([
    { text: "My daily routine & workflows", on: true },
    { text: "Key relationships & contacts", on: true },
    { text: "Systems, tools & workarounds", on: true },
    { text: "How I handle tricky decisions", on: true },
    { text: "Things only I know", on: false },
    { text: "My physical workspace setup", on: false },
  ]);
  const toggle = (i) => { const n = [...sel]; n[i].on = !n[i].on; setSel(n); };

  if (step === 0) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: C.dark }}>
      <StatusBar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", textAlign: "center" }}>
        <FadeIn>
          <div style={{ marginBottom: 24 }}>
            <RoleUpLogo size={48} light={true} />
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 700, margin: "0 0 8px", fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Leave Your Legacy
          </h1>
        </FadeIn>
        <FadeIn delay={300}>
          <p style={{ color: "#ffffffbb", fontSize: 14, lineHeight: 1.6, margin: "0 0 12px" }}>
            Walk through your role — we'll capture everything your successor needs and deliver it as structured, interactive training.
          </p>
        </FadeIn>
        <FadeIn delay={380}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center", marginBottom: 8 }}>
            <div style={{ height: 1, width: 24, background: "#ffffff30" }} />
            <span style={{ fontSize: 11, color: "#ffffff60", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>by ABRAXIS</span>
            <div style={{ height: 1, width: 24, background: "#ffffff30" }} />
          </div>
        </FadeIn>
        <FadeIn delay={450}>
          <div style={{ background: "#ffffff12", borderRadius: 12, padding: "14px 20px", margin: "16px 0 32px", border: "1px solid #ffffff18" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <I.Shield s={16} c={C.gold} />
              <span style={{ color: C.gold, fontSize: 13, fontWeight: 600 }}>You're in Control</span>
            </div>
            <p style={{ color: "#ffffff99", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
              Everything stays in your private draft until you review and approve it. You decide exactly what your successor sees.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={600}>
          <button onClick={() => setStep(1)} style={{ background: `linear-gradient(135deg, ${C.orange}, ${C.crimson})`, color: "#fff", border: "none", borderRadius: 12, padding: "14px 48px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${C.crimson}50` }}>Get Started</button>
        </FadeIn>
      </div>
    </div>
  );

  if (step === 1) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: C.warm }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <p style={{ fontSize: 12, color: C.textLight, margin: "0 0 4px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Step 1 of 2</p>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.dark, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>About Your Role</h2>
        <p style={{ fontSize: 13, color: C.textMid, margin: "0 0 20px", lineHeight: 1.4 }}>This helps us tailor conversations to your specific expertise and responsibilities.</p>
      </div>
      <div style={{ padding: "0 20px", flex: 1 }}>
        {[["Full Name", "Sarah Mitchell"], ["Job Title", "Sr. Asset Recovery Specialist"], ["Department", "Investment Recovery"], ["Years in Role", "14 years"], ["Last Day", "April 30, 2026"]].map(([label, val], i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: C.textMid, display: "block", marginBottom: 5 }}>{label}</label>
            <div style={{ background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 10, padding: "11px 14px", fontSize: 15, color: C.text }}>{val}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "16px 20px 24px" }}>
        <button onClick={() => setStep(2)} style={{ background: C.dark, color: "#fff", border: "none", borderRadius: 12, padding: "14px 0", fontSize: 15, fontWeight: 600, cursor: "pointer", width: "100%" }}>Continue</button>
      </div>
    </div>
  );

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: C.warm }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <p style={{ fontSize: 12, color: C.textLight, margin: "0 0 4px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Step 2 of 2</p>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.dark, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>What Should We Cover?</h2>
        <p style={{ fontSize: 13, color: C.textMid, margin: "0 0 16px", lineHeight: 1.4 }}>Select the areas your successor will need. You can always add more later.</p>
      </div>
      <div style={{ flex: 1, padding: "0 20px", overflowY: "auto" }}>
        {sel.map((t, i) => (
          <button key={i} onClick={() => toggle(i)} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", background: t.on ? C.goldPale : C.card, border: `1.5px solid ${t.on ? C.crimson + "60" : C.border}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left", transition: "all 0.2s ease" }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: t.on ? C.crimson : "transparent", border: t.on ? "none" : `2px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {t.on && <I.Check s={14} c={C.dark} />}
            </div>
            <span style={{ fontSize: 14, color: C.text, fontWeight: t.on ? 600 : 400 }}>{t.text}</span>
          </button>
        ))}
        <button style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", background: "transparent", border: `1.5px dashed ${C.border}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", color: C.textLight }}>
          <I.Plus s={18} c={C.textLight} />
          <span style={{ fontSize: 14 }}>Add custom topic</span>
        </button>
      </div>
      <div style={{ padding: "16px 20px 24px" }}>
        <button onClick={onComplete} style={{ background: C.dark, color: "#fff", border: "none", borderRadius: 12, padding: "14px 0", fontSize: 15, fontWeight: 600, cursor: "pointer", width: "100%" }}>Start My Handover</button>
      </div>
    </div>
  );
};

// ===== HOME DASHBOARD =====
const HomeScreen = ({ onNav, onTopic }) => {
  const daysLeft = 78;
  const progress = 34;
  return (
    <div style={{ flex: 1, background: C.warm, overflowY: "auto" }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 13, color: C.textLight, margin: 0 }}>Good morning,</p>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: C.dark, margin: "2px 0 0", fontFamily: "'DM Serif Display', Georgia, serif" }}>Sarah</h1>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${C.dark}, ${C.darkMid})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <I.User s={20} c={C.gold} />
          </div>
        </div>

        {/* Progress card */}
        <div style={{ background: C.dark, borderRadius: 16, padding: "18px 20px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: C.orange + "12" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <p style={{ fontSize: 12, color: "#ffffff80", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}><RoleUpLogo size={16} light={true} /></p>
            <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#ffffff18", borderRadius: 6, padding: "3px 8px" }}>
              <I.Clock s={12} c={C.gold} />
              <span style={{ fontSize: 11, color: C.gold, fontWeight: 600 }}>{daysLeft} days left</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12 }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: "#fff" }}>{progress}%</span>
            <span style={{ fontSize: 12, color: "#ffffff99" }}>4 of 6 topics started</span>
          </div>
          <div style={{ background: "#ffffff20", borderRadius: 6, height: 6, overflow: "hidden" }}>
            <div style={{ background: `linear-gradient(90deg, ${C.orange}, ${C.crimson})`, height: "100%", width: `${progress}%`, borderRadius: 6, transition: "width 1s ease" }} />
          </div>
        </div>

        {/* AI suggestion */}
        <div style={{ background: C.card, borderRadius: 14, padding: "14px 16px", marginBottom: 16, border: `1.5px solid ${C.gold}40`, boxShadow: `0 2px 12px ${C.gold}15` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: `linear-gradient(135deg, ${C.orange}, ${C.crimson})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.dark }}>A</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: C.gold }}>Suggested Next</span>
          </div>
          <p style={{ fontSize: 14, color: C.text, margin: "0 0 10px", lineHeight: 1.5 }}>
            You mentioned a separate spreadsheet for high-value items yesterday. Could you walk me through it today? A quick video would be perfect.
          </p>
          <button onClick={() => onTopic(0)} style={{ background: C.dark, color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Continue →
          </button>
        </div>

        {/* Campfire CTA */}
        <button onClick={() => onNav("campfire")} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", background: C.campfireLight, border: `1.5px solid ${C.campfire}25`, borderRadius: 14, padding: "14px 16px", marginBottom: 16, cursor: "pointer", textAlign: "left" }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: C.campfire + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <I.Flame s={20} c={C.campfire} />
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, display: "block" }}>
              Campfire Mode
              <span style={{ fontSize: 9, fontWeight: 700, color: C.campfire, background: C.campfire + "15", padding: "2px 6px", borderRadius: 4, marginLeft: 6, verticalAlign: "middle" }}>TEAM</span>
            </span>
            <span style={{ fontSize: 12, color: C.textLight }}>Capture, onboard, or refresh — together</span>
          </div>
          <I.ChevRight s={18} c={C.campfire} />
        </button>

        {/* Handover topics */}
        <p style={{ fontSize: 12, color: C.textLight, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Solo Capture Topics</p>
        {[
          { name: "Daily routine & workflows", progress: 45, items: 8, icon: I.Clock, color: C.blue },
          { name: "Key relationships & contacts", progress: 20, items: 3, icon: I.Users, color: C.purple },
          { name: "Systems, tools & workarounds", progress: 60, items: 12, icon: I.Map, color: C.orange },
          { name: "Tricky decisions & judgment calls", progress: 10, items: 2, icon: I.AlertCircle, color: C.danger },
        ].map((topic, i) => (
          <button key={i} onClick={() => onTopic(i)} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: "14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: topic.color + "14", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <topic.icon s={20} c={topic.color} />
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, display: "block", marginBottom: 4 }}>{topic.name}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ flex: 1, background: C.warmDark, borderRadius: 3, height: 4, overflow: "hidden" }}>
                  <div style={{ background: topic.progress > 40 ? C.success : C.crimson, height: "100%", width: `${topic.progress}%`, borderRadius: 3 }} />
                </div>
                <span style={{ fontSize: 11, color: C.textLight, flexShrink: 0 }}>{topic.items} items</span>
              </div>
            </div>
            <I.ChevRight s={18} c={C.textLight} />
          </button>
        ))}

        {/* Pending review */}
        <button onClick={() => onNav("review")} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", background: C.warningBg, border: `1.5px solid ${C.warning}30`, borderRadius: 12, padding: "12px 14px", marginBottom: 20, cursor: "pointer", textAlign: "left" }}>
          <I.Eye s={20} c={C.warning} />
          <span style={{ fontSize: 13, color: C.text, flex: 1 }}><strong>3 items</strong> ready for your review</span>
          <I.ChevRight s={18} c={C.warning} />
        </button>
        <div style={{ height: 8 }} />
      </div>
    </div>
  );
};

// ===== TOPIC CAPTURE =====
const TopicCapture = ({ topicIndex, onBack }) => {
  const topics = ["Daily Routine & Workflows", "Key Relationships & Contacts", "Systems, Tools & Workarounds", "Tricky Decisions & Judgment Calls"];
  const [recording, setRecording] = useState(false);
  const [videoRec, setVideoRec] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [pulseSize, setPulseSize] = useState(1);

  useEffect(() => {
    if (!recording && !speaking) return;
    const iv = setInterval(() => setPulseSize(p => p === 1 ? 1.12 : 1), 600);
    return () => clearInterval(iv);
  }, [recording, speaking]);

  const messages = [
    { from: "ai", text: "Let's walk through your typical day. When you arrive in the morning, what's the first thing you check or do?" },
    { from: "user", text: "First thing I do is check the overnight disposition queue in SAP. But before I open SAP, I check my personal spreadsheet to see if any high-value items came through." },
    { from: "ai", text: "That spreadsheet sounds important — could you show me? A quick photo or screen recording would help your successor understand exactly what to look for." },
    { from: "user", text: null, attachment: { type: "photo", label: "sap_workaround_spreadsheet.jpg", tag: "High-value tracking sheet" } },
    { from: "ai", text: "That's really helpful. I can see columns for vendor contacts and recent sale prices. You mentioned transformer prices spike in Q3 — could you record a quick walkthrough of how you check seasonal pricing?" },
  ];

  return (
    <div style={{ flex: 1, background: C.warm, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 8px", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              <I.ChevLeft s={20} c={C.crimson} />
            </button>
            <div>
              <h2 style={{ fontSize: 17, fontWeight: 700, color: C.dark, margin: 0, fontFamily: "'DM Serif Display', Georgia, serif" }}>{topics[topicIndex]}</h2>
              <span style={{ fontSize: 11, color: C.textLight }}>Session 3 of 5 · 12 min</span>
            </div>
          </div>
          <div style={{ display: "flex", background: C.warmDark, borderRadius: 8, padding: 3 }}>
            <button onClick={() => setVoiceMode(false)} style={{ padding: "5px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600, background: !voiceMode ? C.dark : "transparent", color: !voiceMode ? "#fff" : C.textLight }}>Text</button>
            <button onClick={() => setVoiceMode(true)} style={{ padding: "5px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600, background: voiceMode ? C.dark : "transparent", color: voiceMode ? "#fff" : C.textLight }}>Voice</button>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>
        {messages.map((msg, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "user" ? "flex-end" : "flex-start", marginBottom: 12 }}>
              {msg.from === "ai" && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: `linear-gradient(135deg, ${C.orange}, ${C.crimson})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.dark }}>A</span>
                  </div>
                  <span style={{ fontSize: 11, color: C.textLight, fontWeight: 500 }}>ABRAXIS</span>
                </div>
              )}
              {msg.text && (
                <div style={{ maxWidth: "85%", padding: "10px 14px", borderRadius: 14, background: msg.from === "user" ? C.dark : C.card, color: msg.from === "user" ? "#fff" : C.text, fontSize: 14, lineHeight: 1.5, border: msg.from === "ai" ? `1px solid ${C.border}` : "none", borderTopLeftRadius: msg.from === "ai" ? 4 : 14, borderTopRightRadius: msg.from === "user" ? 4 : 14 }}>
                  {msg.text}
                </div>
              )}
              {msg.attachment && (
                <div style={{ maxWidth: "85%", background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: 10, borderTopRightRadius: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 8, background: `linear-gradient(135deg, #e8dcc8, #d4c4a8)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <I.Image s={20} c={C.textMid} />
                    </div>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 500, color: C.text, display: "block" }}>{msg.attachment.label}</span>
                      <span style={{ fontSize: 11, color: C.textLight }}>{msg.attachment.tag}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      <div style={{ borderTop: `1px solid ${C.border}`, background: C.card }}>
        <div style={{ display: "flex", gap: 6, padding: "8px 20px 0" }}>
          {[{ icon: I.Camera, label: "Photo", color: C.orange }, { icon: I.Video, label: "Video", color: C.danger }, { icon: I.Image, label: "File", color: C.blue }].map((btn, i) => (
            <button key={i} onClick={() => { if (i === 1) setVideoRec(!videoRec); }} style={{ display: "flex", alignItems: "center", gap: 4, background: (i === 1 && videoRec) ? C.dangerBg : C.warmDark, border: (i === 1 && videoRec) ? `1px solid ${C.danger}40` : `1px solid ${C.border}`, borderRadius: 16, padding: "5px 10px", cursor: "pointer" }}>
              <btn.icon s={14} c={(i === 1 && videoRec) ? C.danger : btn.color} />
              <span style={{ fontSize: 11, fontWeight: 500, color: (i === 1 && videoRec) ? C.danger : C.textMid }}>{(i === 1 && videoRec) ? "Recording..." : btn.label}</span>
            </button>
          ))}
        </div>
        {voiceMode ? (
          <div style={{ padding: "12px 20px 24px", textAlign: "center" }}>
            <p style={{ fontSize: 12, color: C.textLight, margin: "0 0 10px" }}>{speaking ? "Listening..." : "Tap to speak"}</p>
            <button onClick={() => setSpeaking(!speaking)} style={{ width: 56, height: 56, borderRadius: "50%", border: "none", cursor: "pointer", background: speaking ? C.success : C.dark, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", transform: `scale(${speaking ? pulseSize : 1})`, transition: "all 0.3s ease", boxShadow: speaking ? `0 0 24px ${C.success}40` : `0 4px 16px ${C.dark}30` }}>
              <I.Mic s={24} c="#fff" />
            </button>
          </div>
        ) : (
          <div style={{ padding: "8px 20px 24px", display: "flex", gap: 8, alignItems: "flex-end" }}>
            <div style={{ flex: 1, background: C.warm, borderRadius: 20, padding: "10px 16px", fontSize: 14, color: C.textLight, border: `1px solid ${C.border}`, minHeight: 20 }}>
              Type your response...
            </div>
            <button style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: C.dark, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <I.Send s={18} c="#fff" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ===== HANDOVER TOPICS LIST =====
const HandoverScreen = ({ onTopic }) => (
  <div style={{ flex: 1, background: C.warm, overflowY: "auto" }}>
    <StatusBar />
    <div style={{ padding: "12px 20px 0" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: C.dark, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>Smart Offboarding</h2>
      <p style={{ fontSize: 13, color: C.textMid, margin: "0 0 16px", lineHeight: 1.4 }}>Walk through your role topic by topic. Talk, type, snap photos, or record quick videos — whatever feels natural.</p>
    </div>
    <div style={{ padding: "0 20px" }}>
      {[
        { name: "My daily routine & workflows", desc: "What you do first, recurring tasks, end-of-day checks", progress: 45, items: 8, icon: I.Clock, color: C.blue, sessions: 3 },
        { name: "Key relationships & contacts", desc: "Who to call, vendor relationships, internal allies", progress: 20, items: 3, icon: I.Users, color: C.purple, sessions: 1 },
        { name: "Systems, tools & workarounds", desc: "SAP shortcuts, spreadsheets, things the manual misses", progress: 60, items: 12, icon: I.Map, color: C.orange, sessions: 4 },
        { name: "Tricky decisions & judgment calls", desc: "When to escalate, exceptions, gray areas", progress: 10, items: 2, icon: I.AlertCircle, color: C.danger, sessions: 1 },
        { name: "Things only I know", desc: "Undocumented processes, institutional memory, tips", progress: 0, items: 0, icon: I.Heart, color: C.crimson, sessions: 0 },
        { name: "My workspace & physical setup", desc: "Binders, reference materials, equipment locations", progress: 0, items: 0, icon: I.Briefcase, color: C.textMid, sessions: 0 },
      ].map((topic, i) => (
        <button key={i} onClick={() => onTopic(Math.min(i, 3))} style={{ width: "100%", background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: "14px 16px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: topic.color + "14", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <topic.icon s={20} c={topic.color} />
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, display: "block" }}>{topic.name}</span>
              <span style={{ fontSize: 12, color: C.textLight }}>{topic.desc}</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 52 }}>
            <div style={{ flex: 1, background: C.warmDark, borderRadius: 3, height: 4, overflow: "hidden" }}>
              <div style={{ background: topic.progress > 40 ? C.success : topic.progress > 0 ? C.crimson : C.warmDark, height: "100%", width: `${Math.max(topic.progress, 0)}%`, borderRadius: 3 }} />
            </div>
            <span style={{ fontSize: 11, color: C.textLight, flexShrink: 0 }}>{topic.sessions} sessions · {topic.items} items</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

// ===== SUCCESSOR PREVIEW =====
const SuccessorScreen = () => (
  <div style={{ flex: 1, background: C.warm, overflowY: "auto" }}>
    <StatusBar />
    <div style={{ padding: "12px 20px 0" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: C.dark, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>Smart Onboarding</h2>
      <p style={{ fontSize: 13, color: C.textMid, margin: "0 0 8px", lineHeight: 1.4 }}>This is what your successor receives — an interactive knowledge base built from your captured expertise, organized for day-one readiness.</p>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16, background: C.goldPale, borderRadius: 8, padding: "8px 12px" }}>
        <I.Eye s={14} c={C.gold} />
        <span style={{ fontSize: 12, color: C.dark, fontWeight: 500 }}>Successor preview — only approved items shown</span>
      </div>
    </div>
    <div style={{ padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 12, padding: "10px 14px", marginBottom: 16 }}>
        <I.Search s={18} c={C.textLight} />
        <span style={{ fontSize: 14, color: C.textLight }}>Ask about this role...</span>
      </div>
      <p style={{ fontSize: 12, color: C.textLight, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Most Critical</p>
      <div style={{ background: C.card, borderRadius: 14, padding: 0, marginBottom: 10, border: `1.5px solid ${C.border}`, overflow: "hidden" }}>
        <div style={{ background: `linear-gradient(135deg, ${C.dark}, ${C.darkMid})`, padding: "20px 16px", position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 48, height: 48, borderRadius: "50%", background: "#ffffff30", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <I.Play s={24} c="#fff" />
          </div>
          <div style={{ position: "absolute", bottom: 8, right: 12 }}>
            <span style={{ fontSize: 11, color: "#ffffff80", background: "#00000040", padding: "2px 8px", borderRadius: 4 }}>2:34</span>
          </div>
        </div>
        <div style={{ padding: "12px 16px" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, display: "block", marginBottom: 2 }}>How I check seasonal pricing for transformers</span>
          <span style={{ fontSize: 12, color: C.textLight }}>Video walkthrough · Daily routine</span>
        </div>
      </div>
      <div style={{ background: C.card, borderRadius: 14, padding: "14px 16px", marginBottom: 10, border: `1.5px solid ${C.border}` }}>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ width: 64, height: 64, borderRadius: 10, background: `linear-gradient(135deg, #e8dcc8, #d4c4a8)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
            <I.Image s={20} c={C.textMid} />
            <div style={{ position: "absolute", bottom: -4, right: -4, width: 20, height: 20, borderRadius: "50%", background: C.blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <I.Mic s={10} c="#fff" />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, display: "block", marginBottom: 2 }}>SAP bulk disposal bypass</span>
            <span style={{ fontSize: 12, color: C.textLight, display: "block", marginBottom: 6 }}>Photo + voice annotation · Systems</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, background: C.warmDark, borderRadius: 12, padding: "3px 8px", cursor: "pointer" }}>
                <I.Play s={10} c={C.blue} />
                <span style={{ fontSize: 11, color: C.textMid }}>0:47</span>
              </div>
              <span style={{ fontSize: 11, color: C.textLight }}>voice annotation</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: C.card, borderRadius: 14, padding: "14px 16px", marginBottom: 10, border: `1.5px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: C.danger + "14", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <I.AlertCircle s={16} c={C.danger} />
          </div>
          <div>
            <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, display: "block" }}>When to auction vs. direct sale</span>
            <span style={{ fontSize: 12, color: C.textLight }}>Decision framework · Judgment calls</span>
          </div>
        </div>
        <div style={{ background: C.warm, borderRadius: 8, padding: "10px 12px", fontSize: 13, color: C.textMid, lineHeight: 1.5 }}>
          "If equipment is under 5 years old and market demand is strong, always go direct sale — you'll get 30-40% more. Auctions only make sense for bulk disposal of older items or when you need to clear warehouse space fast..."
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.success }} />
          <span style={{ fontSize: 11, color: C.success, fontWeight: 500 }}>High confidence · Verified across 3 sessions</span>
        </div>
      </div>
      <div style={{ background: C.card, borderRadius: 14, padding: "14px 16px", marginBottom: 10, border: `1.5px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: C.purple + "14", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <I.Users s={16} c={C.purple} />
          </div>
          <div>
            <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, display: "block" }}>Key vendor: Pacific Salvage (Mike R.)</span>
            <span style={{ fontSize: 12, color: C.textLight }}>Relationship · Contacts</span>
          </div>
        </div>
        <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.5, margin: 0 }}>
          "Mike's the best for transformer equipment. Call him directly — don't use their main line. He'll hold inventory for us if I give him 48hr notice. Tell him I sent you."
        </p>
      </div>
      <div style={{ background: C.dark, borderRadius: 12, padding: "14px 16px", marginBottom: 20, display: "flex", justifyContent: "space-around" }}>
        {[{ n: "23", l: "Items" }, { n: "4h", l: "Content" }, { n: "12", l: "Videos" }, { n: "89%", l: "Confidence" }].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#fff", display: "block" }}>{s.n}</span>
            <span style={{ fontSize: 10, color: "#ffffff60" }}>{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ===== CAMPFIRE MODE =====
const CampfireScreen = () => {
  const [view, setView] = useState("picker"); // picker | session
  const [sessionType, setSessionType] = useState(null); // capture | onboarding | ongoing
  const [showMap, setShowMap] = useState(false);

  const participants = [
    { name: "Sarah Mitchell", role: "contributor", label: "Sr. Asset Recovery", color: C.blue },
    { name: "Raj Patel", role: "contributor", label: "Procurement Lead", color: C.purple },
    { name: "Marcus Chen", role: sessionType === "onboarding" ? "learner" : "contributor", label: sessionType === "onboarding" ? "New Hire — Procurement" : "Operations Analyst", color: C.campfire },
  ];

  const captureMessages = [
    { from: "ai", text: "Welcome everyone. Let's map how the PO approval process actually works. Sarah, you typically initiate — walk us through what happens when a new purchase order comes in.", directed: "Sarah" },
    { from: "Sarah Mitchell", text: "When a PO comes in, first thing I check is whether it's under or over $5K. Under $5K I can approve directly. Over $5K needs Raj's sign-off." },
    { from: "ai", text: "Raj, Sarah says the threshold is $5K for your approval. Is that how you see it?", directed: "Raj", type: "triangulation" },
    { from: "Raj Patel", text: "Actually, it changed to $10K about six months ago. But I still get pinged on anything over $5K because Sarah's been doing it that way. I approve them anyway." },
    { from: "ai", text: "This is valuable — we've found a coherence gap. Sarah uses $5K, Raj says it's $10K. Both of you have been operating successfully with different thresholds. Let's capture both versions and flag this for resolution.", type: "coherence_gap" },
    { from: "Sarah Mitchell", text: "Honestly, I didn't know it changed. Where was that communicated?" },
    { from: "ai", text: "That's a great question. Raj, where is the updated threshold documented? And Sarah — once the PO is approved, who receives it on the other end?", directed: "Both", type: "exception" },
  ];

  const onboardingMessages = [
    { from: "ai", text: "Welcome everyone. Marcus is joining the procurement team and this campfire will walk through how PO approvals actually work here. Sarah, want to start us off?", directed: "Sarah" },
    { from: "Sarah Mitchell", text: "Sure. So when a PO comes in, the first thing is checking the dollar threshold. Anything under $10K I can approve directly — over that, Raj needs to sign off." },
    { from: "ai", text: "Marcus, this is a key decision point for your role. Can you think of a situation where you might not be sure whether something needs escalation?", directed: "Marcus", type: "coach" },
    { from: "Marcus Chen", text: "What about POs that are split into multiple smaller amounts — like if someone breaks a $15K order into three $5K orders?", learner: true },
    { from: "ai", text: "Great question, Marcus — that surfaces a real gap. Sarah, does that happen? And how do you handle it?", type: "learner_signal" },
    { from: "Sarah Mitchell", text: "Oh, it happens. We call it 'splitting.' There's no automated check for it — I just know the repeat vendors who try it. I keep a mental list." },
    { from: "ai", text: "This is exactly the kind of tacit knowledge that's hard to find in any manual. Sarah, could you name a few of those vendors so Marcus has a head start?", type: "coach" },
  ];

  const ongoingMessages = [
    { from: "ai", text: "Welcome back. Last campfire for PO Approvals was January 15th. Let's check what's changed. Sarah, last time the threshold was $10K with your direct approval. Still accurate?", type: "baseline" },
    { from: "Sarah Mitchell", text: "Actually, since the reorg we now have a middle tier. $5K–$10K needs team lead sign-off, and over $10K goes to Raj. That changed three weeks ago." },
    { from: "ai", text: "Flagging this as process drift from the prior capture. Updating: three tiers now instead of two. Raj, can you confirm this new structure?", type: "drift" },
    { from: "Raj Patel", text: "Confirmed. Finance pushed the change. It's in an email somewhere but I don't think the SOP doc was updated." },
    { from: "ai", text: "Noted — the documented process doesn't reflect the enacted process. This is now captured in the knowledge graph with the current date. Is the rest of the workflow still the same from last session, or have other steps changed too?", type: "baseline" },
  ];

  const messages = sessionType === "onboarding" ? onboardingMessages : sessionType === "ongoing" ? ongoingMessages : captureMessages;

  const processSteps = [
    { label: "PO Received", status: "captured" },
    { label: "Threshold Check", status: "gap" },
    { label: "Approval Routing", status: "captured", handoff: true },
    { label: "Vendor Validation", status: "pending" },
    { label: "Fulfillment", status: "pending", handoff: true },
  ];

  const learnerCoverage = [
    { topic: "PO Intake", done: true }, { topic: "Threshold Routing", done: true },
    { topic: "Splitting Detection", done: true }, { topic: "Vendor Validation", done: false },
    { topic: "Exception Handling", done: false }, { topic: "SAP Entry", done: false },
  ];

  // Picker
  if (view === "picker") return (
    <div style={{ flex: 1, background: C.warm, overflowY: "auto" }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.dark, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>
          <span style={{ color: C.campfire }}>Campfire</span> Mode
        </h2>
        <p style={{ fontSize: 13, color: C.textMid, margin: "0 0 20px", lineHeight: 1.5 }}>
          Gather your team around the campfire. Choose a session purpose.
        </p>
      </div>
      <div style={{ padding: "0 20px" }}>
        {[
          { key: "capture", icon: I.Flame, color: C.campfire, title: "Capture", ai: "Facilitator", desc: "Map how your team actually works — handoffs, coordination, shared heuristics. Before a departure or as proactive knowledge insurance." },
          { key: "onboarding", icon: I.Users, color: C.learner, title: "Onboarding", ai: "Coach", desc: "Bring new arrivals into the circle. The team walks through how things work while the AI coaches learners and tracks their coverage." },
          { key: "ongoing", icon: I.Refresh, color: C.success, title: "Ongoing", ai: "Auditor", desc: "Periodic team check-in. The AI compares current practice against prior captures — flagging drift and refreshing confidence." },
        ].map(s => (
          <button key={s.key} onClick={() => { setSessionType(s.key); setView("session"); }} style={{ width: "100%", background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: "16px", marginBottom: 10, cursor: "pointer", textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: s.color + "14", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <s.icon s={22} c={s.color} />
              </div>
              <div>
                <span style={{ fontSize: 16, fontWeight: 700, color: C.dark, display: "block" }}>{s.title}</span>
                <span style={{ fontSize: 11, color: C.textLight }}>AI mode: {s.ai}</span>
              </div>
            </div>
            <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
          </button>
        ))}

        <p style={{ fontSize: 12, color: C.textLight, margin: "14px 0 10px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Active Campfires</p>
        <div style={{ background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 12, padding: "14px", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.campfire, boxShadow: `0 0 8px ${C.campfire}60` }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, flex: 1 }}>PO Approval Workflow</span>
            <span style={{ fontSize: 11, color: C.textLight }}>3 online</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
            {participants.map((p, i) => <Avatar key={i} name={p.name} color={p.color} size={24} />)}
          </div>
        </div>
      </div>
    </div>
  );

  // Live session
  return (
    <div style={{ flex: 1, background: C.warm, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      {/* Header */}
      <div style={{ padding: "8px 20px 10px", borderBottom: `1px solid ${C.border}`, background: C.card }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <button onClick={() => setView("picker")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <I.ChevLeft s={20} c={C.textMid} />
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <I.Flame s={14} c={C.campfire} />
              <span style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>PO Approval Workflow</span>
            </div>
            <span style={{ fontSize: 11, color: C.textLight }}>
              {sessionType === "capture" ? "Capture · Facilitator" : sessionType === "onboarding" ? "Onboarding · Coach" : "Ongoing · Auditor"}
            </span>
          </div>
          <button onClick={() => setShowMap(!showMap)} style={{ background: showMap ? C.dark : C.warmDark, border: "none", borderRadius: 8, padding: "5px 9px", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <I.Flag s={11} c={showMap ? "#fff" : C.textMid} />
            <span style={{ fontSize: 10, fontWeight: 600, color: showMap ? "#fff" : C.textMid }}>Map</span>
          </button>
        </div>
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 2 }}>
          {participants.map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
              <Avatar name={p.name} color={p.color} size={22} />
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, color: C.text, display: "block", lineHeight: 1.2 }}>{p.name.split(" ")[0]}</span>
                <RoleBadge role={p.role} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process map */}
      {showMap && (
        <div style={{ padding: "10px 20px", borderBottom: `1px solid ${C.border}`, background: C.warmDark }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: C.textLight, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Live Process Map</p>
          <div style={{ display: "flex", alignItems: "center", gap: 3, flexWrap: "wrap" }}>
            {processSteps.map((st, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <div style={{ padding: "3px 7px", borderRadius: 5, fontSize: 10, fontWeight: 600, background: st.status === "captured" ? C.successBg : st.status === "gap" ? C.dangerBg : C.warmDark, color: st.status === "captured" ? C.success : st.status === "gap" ? C.danger : C.textLight, border: `1px solid ${st.status === "captured" ? C.success + "30" : st.status === "gap" ? C.danger + "30" : C.border}` }}>
                  {st.status === "gap" && "⚠ "}{st.label}
                </div>
                {i < processSteps.length - 1 && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {st.handoff && <span style={{ fontSize: 7, color: C.gold, fontWeight: 700, marginRight: 1 }}>H</span>}
                    <I.ArrowRight s={9} c={C.textLight} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Learner coverage bar (onboarding only) */}
      {sessionType === "onboarding" && (
        <div style={{ padding: "8px 20px", borderBottom: `1px solid ${C.border}`, background: C.learnerBg + "60" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Avatar name="Marcus Chen" color={C.campfire} size={16} />
              <span style={{ fontSize: 11, fontWeight: 600, color: C.learner }}>Marcus's Coverage</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.learner }}>50%</span>
          </div>
          <div style={{ background: "#e0e7ff", borderRadius: 3, height: 4, overflow: "hidden", marginBottom: 5 }}>
            <div style={{ background: C.learner, height: "100%", width: "50%", borderRadius: 3 }} />
          </div>
          <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {learnerCoverage.map((t, i) => (
              <span key={i} style={{ fontSize: 9, padding: "2px 5px", borderRadius: 4, background: t.done ? C.learner + "15" : C.warmDark, color: t.done ? C.learner : C.textLight, fontWeight: t.done ? 600 : 400 }}>
                {t.done ? "✓ " : ""}{t.topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Drift indicator (ongoing only) */}
      {sessionType === "ongoing" && (
        <div style={{ padding: "7px 20px", borderBottom: `1px solid ${C.border}`, background: C.warningBg + "80", display: "flex", alignItems: "center", gap: 8 }}>
          <I.AlertCircle s={14} c={C.warning} />
          <span style={{ fontSize: 11, color: C.text }}><strong>1 drift</strong> detected vs. Jan 15 baseline</span>
          <span style={{ fontSize: 10, color: C.warning, fontWeight: 600, marginLeft: "auto" }}>Approval threshold</span>
        </div>
      )}

      {/* Chat */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px 20px" }}>
        {messages.map((msg, i) => {
          const isAI = msg.from === "ai";
          const p = !isAI ? participants.find(x => x.name === msg.from) : null;
          const isGap = msg.type === "coherence_gap";
          const isDrift = msg.type === "drift";
          const isCoach = msg.type === "coach";
          const isSignal = msg.type === "learner_signal";
          const isBase = msg.type === "baseline";
          const isTri = msg.type === "triangulation";

          return (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ marginBottom: 12 }}>
                {isAI && (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4, flexWrap: "wrap" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: `linear-gradient(135deg, ${C.orange}, ${C.crimson})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: C.dark }}>A</span>
                      </div>
                      <span style={{ fontSize: 11, color: C.textLight, fontWeight: 500 }}>ABRAXIS</span>
                      {msg.directed && <span style={{ fontSize: 9, color: C.gold, fontWeight: 600 }}>→ {msg.directed}</span>}
                      {isTri && <span style={{ fontSize: 8, background: C.warningBg, color: C.warning, padding: "1px 5px", borderRadius: 3, fontWeight: 700 }}>TRIANGULATION</span>}
                      {isCoach && <span style={{ fontSize: 8, background: C.learnerBg, color: C.learner, padding: "1px 5px", borderRadius: 3, fontWeight: 700 }}>COACHING</span>}
                      {isBase && <span style={{ fontSize: 8, background: C.successBg, color: C.success, padding: "1px 5px", borderRadius: 3, fontWeight: 700 }}>BASELINE</span>}
                    </div>
                    <div style={{ maxWidth: "92%", padding: "10px 14px", borderRadius: 14, borderTopLeftRadius: 4, background: isGap ? C.dangerBg : isDrift ? C.warningBg : isSignal ? C.learnerBg : C.card, border: `1px solid ${isGap ? C.danger + "30" : isDrift ? C.warning + "30" : isSignal ? C.learner + "20" : C.border}`, fontSize: 13, lineHeight: 1.5, color: C.text }}>
                      {isGap && <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}><I.AlertCircle s={12} c={C.danger} /><span style={{ fontSize: 10, fontWeight: 700, color: C.danger, textTransform: "uppercase" }}>Coherence Gap Detected</span></div>}
                      {isDrift && <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}><I.AlertCircle s={12} c={C.warning} /><span style={{ fontSize: 10, fontWeight: 700, color: C.warning, textTransform: "uppercase" }}>Process Drift</span></div>}
                      {msg.text}
                    </div>
                  </div>
                )}
                {!isAI && p && (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
                      <Avatar name={p.name} color={p.color} size={20} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: p.color }}>{p.name.split(" ")[0]}</span>
                      <RoleBadge role={p.role} />
                      {msg.learner && <span style={{ fontSize: 8, background: C.learnerBg, color: C.learner, padding: "1px 5px", borderRadius: 3, fontWeight: 700 }}>QUESTION</span>}
                    </div>
                    <div style={{ maxWidth: "92%", padding: "10px 14px", borderRadius: 14, borderTopLeftRadius: 4, background: msg.learner ? C.learnerBg : p.color + "0a", border: `1px solid ${msg.learner ? C.learner + "20" : p.color + "18"}`, fontSize: 13, lineHeight: 1.5, color: C.text }}>
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Input */}
      <div style={{ padding: "8px 20px 24px", borderTop: `1px solid ${C.border}`, background: C.card }}>
        {sessionType === "onboarding" && (
          <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, width: "100%", background: C.learnerBg, border: `1px solid ${C.learner}20`, borderRadius: 8, padding: "5px", marginBottom: 6, cursor: "pointer" }}>
            <I.Flag s={11} c={C.learner} />
            <span style={{ fontSize: 11, fontWeight: 600, color: C.learner }}>Flag Confusion</span>
          </button>
        )}
        <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
          <button style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${C.border}`, background: C.warm, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <I.Camera s={15} c={C.textMid} />
          </button>
          <div style={{ flex: 1, background: C.warm, borderRadius: 20, padding: "9px 14px", fontSize: 13, color: C.textLight, border: `1px solid ${C.border}`, minHeight: 18 }}>
            Share with the team...
          </div>
          <button style={{ width: 36, height: 36, borderRadius: "50%", border: "none", background: C.campfire, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <I.Send s={15} c="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ===== REVIEW SCREEN =====
const ReviewScreen = () => {
  const [items, setItems] = useState([
    { id: 1, type: "campfire", area: "PO Approval Workflow", title: "Threshold coherence gap: $5K vs $10K", summary: "Sarah uses $5K approval threshold, Raj confirms it changed to $10K. Both operating with different thresholds. Flagged for resolution.", time: "Today, 10:15 AM", status: "pending", session: "Campfire · Capture" },
    { id: 2, type: "video", area: "Daily Routine", title: "Morning SAP queue check walkthrough", summary: "2:34 video showing how to prioritize the overnight disposition queue, including the high-value item pre-check.", time: "Today, 9:12 AM", status: "pending", session: "Solo Capture" },
    { id: 3, type: "campfire", area: "PO Approval Workflow", title: "Vendor splitting detection — tacit knowledge", summary: "Sarah maintains mental list of vendors who split POs to avoid threshold. No automated check exists. Captured vendor names and patterns.", time: "Yesterday", status: "pending", session: "Campfire · Onboarding" },
    { id: 4, type: "conversation", area: "Judgment Calls", title: "Auction vs. direct sale decision framework", summary: "Decision criteria based on equipment age, market demand, warehouse capacity, and vendor relationships.", time: "2 days ago", status: "pending", session: "Solo Capture" },
  ]);

  const update = (id, status) => setItems(items.map(item => item.id === id ? { ...item, status } : item));
  const typeIcons = { video: I.Video, photo: I.Camera, conversation: I.Mic, campfire: I.Flame };
  const typeColors = { video: C.danger, photo: C.orange, conversation: C.blue, campfire: C.campfire };

  return (
    <div style={{ flex: 1, background: C.warm, overflowY: "auto" }}>
      <StatusBar />
      <div style={{ padding: "12px 20px 0" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.dark, margin: "0 0 4px", fontFamily: "'DM Serif Display', Georgia, serif" }}>Review & Approve</h2>
        <p style={{ fontSize: 13, color: C.textMid, margin: "0 0 4px", lineHeight: 1.4 }}>Your handover items stay private until you approve them.</p>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16, background: C.goldPale, borderRadius: 8, padding: "8px 12px" }}>
          <I.Shield s={14} c={C.gold} />
          <span style={{ fontSize: 12, color: C.dark, fontWeight: 500 }}>Only you can see these until approved</span>
        </div>
      </div>
      <div style={{ padding: "0 20px" }}>
        {items.map((item) => {
          const TypeIcon = typeIcons[item.type];
          return (
            <div key={item.id} style={{ background: C.card, borderRadius: 14, padding: "16px", marginBottom: 10, border: `1.5px solid ${item.status === "approved" ? C.success + "40" : item.status === "redacted" ? C.danger + "40" : C.border}`, opacity: item.status === "redacted" ? 0.5 : 1, transition: "all 0.3s ease" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: typeColors[item.type] + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <TypeIcon s={16} c={typeColors[item.type]} />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.dark, display: "block" }}>{item.title}</span>
                  <span style={{ fontSize: 11, color: C.textLight }}>{item.session} · {item.time}</span>
                </div>
              </div>
              <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.5, margin: "0 0 12px" }}>{item.summary}</p>
              {item.status === "pending" ? (
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => update(item.id, "approved")} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: C.success, color: "#fff", border: "none", borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                    <I.Check s={16} c="#fff" /> Approve
                  </button>
                  <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "transparent", color: C.dark, border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                    <I.Edit s={16} /> Edit
                  </button>
                  <button onClick={() => update(item.id, "redacted")} style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", color: C.danger, border: `1.5px solid ${C.danger}30`, borderRadius: 8, padding: "10px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                    Redact
                  </button>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", background: item.status === "approved" ? C.successBg : C.dangerBg, borderRadius: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: item.status === "approved" ? C.success : C.danger }}>
                    {item.status === "approved" ? "Approved — included in handover" : "Redacted — removed from handover"}
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

// ===== MAIN APP =====
export default function App() {
  const [screen, setScreen] = useState("onboarding");
  const [activeTab, setActiveTab] = useState("home");
  const [activeTopic, setActiveTopic] = useState(null);
  const [showGuide, setShowGuide] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const showNav = screen !== "onboarding" && activeTopic === null;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 500);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNav = (tab) => { setActiveTab(tab); setScreen(tab); setActiveTopic(null); };
  const handleTopic = (i) => { setActiveTopic(i); };

  const screenContent = (
    <>
      {screen === "onboarding" && <OnboardingScreen onComplete={() => { setScreen("home"); setActiveTab("home"); }} />}
      {screen === "home" && activeTopic === null && <HomeScreen onNav={handleNav} onTopic={handleTopic} />}
      {screen === "handover" && activeTopic === null && <HandoverScreen onTopic={handleTopic} />}
      {screen === "campfire" && activeTopic === null && <CampfireScreen />}
      {screen === "successor" && activeTopic === null && <SuccessorScreen />}
      {screen === "review" && activeTopic === null && <ReviewScreen />}
      {activeTopic !== null && <TopicCapture topicIndex={activeTopic} onBack={() => setActiveTopic(null)} />}
    </>
  );

  // Mobile: full-screen native app experience
  if (isMobile) {
    return (
      <div style={{
        height: "100dvh", display: "flex", flexDirection: "column",
        background: C.card,
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {screenContent}
        </div>
        {showNav && <NavBar active={activeTab} onNav={handleNav} />}
      </div>
    );
  }

  // Desktop: phone frame presentation
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(145deg, #f0ece5 0%, #e4ddd3 50%, #d8d0c4 100%)`, fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "20px" }}>
      {/* Background label */}
      <div style={{ position: "fixed", top: 24, left: 0, right: 0, textAlign: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: C.grayMid, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          ABRAXIS · <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: "-0.5px" }}>role<span style={{ fontWeight: 800, color: C.gold }}>up</span></span> (PATENTS PENDING)
        </span>
      </div>

      {/* Phone frame */}
      <div style={{ width: 375, height: 812, borderRadius: 44, overflow: "hidden", background: C.card, boxShadow: `0 0 0 10px #1a1a1a, 0 0 0 12px #333, 0 20px 60px rgba(0,0,0,0.35), 0 0 100px rgba(24, 26, 35, 0.2)`, display: "flex", flexDirection: "column", position: "relative" }}>
        {/* Notch */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 150, height: 28, background: "#1a1a1a", borderRadius: "0 0 18px 18px", zIndex: 10 }}>
          <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 60, height: 5, borderRadius: 3, background: "#333" }} />
        </div>

        {/* Screen content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: 28, overflow: "hidden" }}>
          {screenContent}
        </div>

        {showNav && <NavBar active={activeTab} onNav={handleNav} />}

        {/* Home indicator */}
        <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", width: 134, height: 5, borderRadius: 3, background: "#ddd" }} />
      </div>

      {/* Side annotation */}
      {showGuide && (
        <div style={{ position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)", maxWidth: 220 }}>
          <div style={{ background: C.card, borderRadius: 12, padding: "14px 16px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: `1px solid ${C.border}`, position: "relative" }}>
            <button onClick={() => setShowGuide(false)} style={{ position: "absolute", top: 8, right: 8, width: 24, height: 24, borderRadius: "50%", background: C.warmDark, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: C.textLight, fontSize: 14, fontWeight: 600, lineHeight: 1 }}>✕</button>
            <p style={{ fontSize: 11, fontWeight: 700, color: C.dark, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em" }}><span style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.5px", textTransform: "none" }}>role<span style={{ fontWeight: 800, color: C.gold }}>up</span></span> · Guide</p>
            <div style={{ fontSize: 12, color: C.textMid, lineHeight: 1.5 }}>
              <p style={{ margin: "0 0 6px" }}><strong>Dashboard</strong> — Progress & AI suggestions</p>
              <p style={{ margin: "0 0 6px" }}><strong>Capture</strong> — Solo: walk through your role topic by topic</p>
              <p style={{ margin: "0 0 6px" }}><strong style={{ color: C.campfire }}>Campfire</strong> — Team: capture, onboard, or refresh together</p>
              <p style={{ margin: "0 0 6px" }}><strong>Onboarding</strong> — Preview what your successor receives</p>
              <p style={{ margin: "0" }}><strong>Review</strong> — Approve before anything is shared</p>
            </div>
            <div style={{ borderTop: `1px solid ${C.border}`, margin: "10px 0 0", paddingTop: 10 }}>
              <p style={{ fontSize: 10, color: C.textLight, margin: 0, lineHeight: 1.4 }}>Solo + Campfire → OLG → Arrival</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
