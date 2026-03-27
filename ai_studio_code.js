import { useState } from "react";

const sessions =[
  {
    number: 1,
    title: "Survival Sounds & Alphabet",
    focus: "Pronunciation — the 20% that prevents 80% of misunderstandings",
    color: "#E63946",
    emoji: "🔊",
    blocks:[
      {
        time: "0:00–0:30",
        label: "French Sound System",
        activity: "Master nasal vowels (an, en, in, on, un), silent letters, and liaison rules. These 3 rules cover 90% of pronunciation confusion.",
        resource: "Forvo.com — search each sound, hear native speakers",
      },
      {
        time: "0:30–1:10",
        label: "Top 100 Words by Frequency",
        activity: "Learn the 100 most common French words. These alone cover ~50% of spoken French. Focus on: être, avoir, faire, aller + pronouns + articles.",
        resource: "Anki deck: 'French Top 100' (free, ankiweb.net)",
      },
      {
        time: "1:10–1:45",
        label: "Shadowing Practice",
        activity: "Pick one 2-min clip. Listen → pause → repeat every sentence mimicking rhythm and melody. Don't translate — mimic.",
        resource: "YouTube: 'Français Authentique' — Épisode 1",
      },
    ],
    review: "Write the 10 trickiest words from today. Record yourself saying them. Compare to a native speaker on Forvo.",
  },
  {
    number: 2,
    title: "Core Grammar in 2 Hours",
    focus: "Present tense + essential sentence structures — the skeleton of every sentence",
    color: "#F4A261",
    emoji: "🏗️",
    blocks:[
      {
        time: "0:00–0:40",
        label: "Present Tense — 5 Verbs That Matter",
        activity: "Conjugate and drill être (to be), avoir (to have), faire (to do), aller (to go), vouloir (to want). These 5 verbs appear in 60% of everyday sentences.",
        resource: "Conjuguemos.com — free verb drills",
      },
      {
        time: "0:40–1:20",
        label: "Sentence Formula",
        activity: "Learn the 3 core structures: Subject + verb + object. Negation: ne...pas. Questions: Est-ce que... / intonation rise. Build 20 sentences using today's verbs.",
        resource: "Language Transfer 'Complete French' — Track 1–5 (free, languagetransfer.org)",
      },
      {
        time: "1:20–1:45",
        label: "Apply It",
        activity: "Describe your daily routine out loud: Je me lève... Je vais au travail... Je mange... Use every verb from today at least once.",
        resource: "Write in a notes app, then check with DeepL for accuracy",
      },
    ],
    review: "Without looking, write 10 sentences about yourself using today's 5 verbs. Check errors and note patterns.",
  },
  {
    number: 3,
    title: "Job-Critical Vocabulary",
    focus: "Professional language: your industry words + meeting/email phrases",
    color: "#2A9D8F",
    emoji: "💼",
    blocks:[
      {
        time: "0:00–0:30",
        label: "Your Industry Vocabulary",
        activity: "Make a list of 40 words specific to your job in English. Translate and learn them. This is the 20% of vocabulary that will matter 80% of the time at work.",
        resource: "DeepL.com (superior to Google Translate for nuance)",
      },
      {
        time: "0:30–1:10",
        label: "Workplace Phrases",
        activity: "Master: greetings, introductions, 'I don't understand / can you repeat?', asking for help, agreeing/disagreeing politely, time expressions (demain, la semaine prochaine, etc.).",
        resource: "BBC Languages: 'Ma France' series — Episodes on work & meetings",
      },
      {
        time: "1:10–1:45",
        label: "Email Templates",
        activity: "Write 3 work emails in French: introduction, request, and follow-up. Use formal openings (Madame/Monsieur) and closings (Cordialement).",
        resource: "WordReference.com for formal phrasing lookup",
      },
    ],
    review: "Test yourself: cover the French, read the English, and say the French aloud. Aim for 35/40 without hesitation.",
  },
  {
    number: 4,
    title: "Listening Immersion",
    focus: "Train your ear — comprehension is the gateway to speaking",
    color: "#457B9D",
    emoji: "🎧",
    blocks:[
      {
        time: "0:00–0:40",
        label: "Graded Listening",
        activity: "Start with A2-level audio. Listen once for gist, then again for detail. Note every word you don't know — look up only the top 10 most repeated.",
        resource: "InnerFrench Podcast — Episodes 1–3 (podcast designed for learners, free)",
      },
      {
        time: "0:40–1:15",
        label: "News French",
        activity: "Watch a 5-min news clip with French subtitles (not English). Pause when lost. The goal: follow the topic, not every word.",
        resource: "TV5Monde — 'Journal en français facile' (journalenfacilefacile.rfi.fr)",
      },
      {
        time: "1:15–1:45",
        label: "Dictation Practice",
        activity: "Play 30 seconds of audio, pause, write exactly what you heard, replay and correct. Do 4 rounds. Brutal but highly effective.",
        resource: "Dictées.net or use any InnerFrench clip",
      },
    ],
    review: "Summarize in French (3–5 sentences) what today's podcast episode was about. Use your own words.",
  },
  {
    number: 5,
    title: "Speaking Without Fear",
    focus: "Output training — most learners skip this and plateau",
    color: "#6A4C93",
    emoji: "🗣️",
    blocks:[
      {
        time: "0:00–0:30",
        label: "The Mimic Method",
        activity: "Choose a 1-min monologue from a French speaker you like. Listen 3x, then speak along simultaneously (not after — during). Kills your accent fast.",
        resource: "YouTube: 'Easy French' — Street interviews with subtitles",
      },
      {
        time: "0:30–1:10",
        label: "Speaking Session with AI",
        activity: "Open a new Claude chat. Ask it to roleplay as a French colleague and hold a 30-min conversation. Ask it to correct you after each message. Force yourself to respond without translating.",
        resource: "Claude.ai — prompt: 'Parle-moi en français, corrige mes erreurs'",
      },
      {
        time: "1:10–1:45",
        label: "Italki Lesson",
        activity: "Book a 45-min lesson with a community tutor. Brief them: 'Beginner, work-focused, please correct my grammar.' This is your most valuable investment.",
        resource: "Italki.com — community tutors from €5–10/hr",
      },
    ],
    review: "Write 5 things you struggled to say today. Look up how to say them. Practice them 5x each aloud.",
  },
  {
    number: 6,
    title: "Past Tense Unlocked",
    focus: "Passé composé — lets you tell stories and explain anything",
    color: "#E76F51",
    emoji: "⏳",
    blocks:[
      {
        time: "0:00–0:40",
        label: "Passé Composé Formula",
        activity: "avoir/être + past participle. Learn the 17 être verbs (DR. & MRS. VANDERTRAMP). Drill 20 sentences about past events.",
        resource: "Language Transfer — Track 16–20",
      },
      {
        time: "0:40–1:15",
        label: "Story Telling Drill",
        activity: "Describe your last weekend or a past job experience entirely in French. Aim for 10+ sentences. Use hier (yesterday), la semaine dernière (last week).",
        resource: "Write in Notes, check with Claude or DeepL",
      },
      {
        time: "1:15–1:45",
        label: "Conversation in the Past",
        activity: "Claude roleplay: 'Ask me about my previous job in French and make me respond only in passé composé.' 30 minutes of targeted drilling.",
        resource: "Claude.ai",
      },
    ],
    review: "Conjugate avoir and être in passé composé from memory. Then write 8 sentences about a past event without notes.",
  },
  {
    number: 7,
    title: "Reading & Writing Fluency",
    focus: "Written French — critical for emails, reports, and Slack messages",
    color: "#219B55",
    emoji: "✍️",
    blocks:[
      {
        time: "0:00–0:30",
        label: "Intensive Reading",
        activity: "Read one article from Le Monde Simplifié or a graded reader. Every unknown word: guess from context first, then look up. Annotate.",
        resource: "Le Monde en français facile (lemondefacile.com) — A2/B1 articles",
      },
      {
        time: "0:30–1:15",
        label: "Write a Work Report",
        activity: "Write a 200-word summary of an imaginary project or meeting in French. Use: d'abord, ensuite, enfin (first, then, finally) to structure. Use formal register.",
        resource: "Check with DeepL Write (write.deepl.com) for style corrections",
      },
      {
        time: "1:15–1:45",
        label: "Error Analysis",
        activity: "Take your written work from Sessions 2–6. Categorize errors: grammar, vocabulary, or word order? The pattern reveals your biggest weakness.",
        resource: "Paste into Claude: 'Correct this French text and explain each error'",
      },
    ],
    review: "Rewrite your best paragraph from today without looking. Compare versions. Improvement is the metric.",
  },
  {
    number: 8,
    title: "Social French & Soft Skills",
    focus: "Small talk, politeness registers, and relationship-building language",
    color: "#C77DFF",
    emoji: "🤝",
    blocks:[
      {
        time: "0:00–0:30",
        label: "Tu vs Vous Mastery",
        activity: "Learn when to use tu (informal) vs vous (formal/plural). In work contexts, default to vous until invited otherwise. Practice switching registers with the same sentences.",
        resource: "Kwiziq.com — free grammar lessons on register",
      },
      {
        time: "0:30–1:10",
        label: "Small Talk Formulas",
        activity: "Drill the 20 most useful social phrases: Ça va?, Comment s'est passé votre weekend?, Je suis ravi(e) de vous rencontrer, À bientôt. Role-play a coffee machine conversation.",
        resource: "FrenchPod101 — 'French Social Expressions' free episodes",
      },
      {
        time: "1:10–1:45",
        label: "Cultural Nuance",
        activity: "French workplace culture is formal. Learn: la bise etiquette, meeting norms, 'non' doesn't mean hostile. Understanding culture prevents career-damaging misreads.",
        resource: "YouTube: 'Comme une Française' — Cultural videos by Géraldine",
      },
    ],
    review: "Practice a 2-minute self-introduction entirely in French, including your role, experience, and why you're excited about this job.",
  },
  {
    number: 9,
    title: "Intensive Speaking Simulation",
    focus: "Job interview and meeting simulation — stress-test everything",
    color: "#FF6B6B",
    emoji: "🎯",
    blocks:[
      {
        time: "0:00–0:45",
        label: "Mock Job Interview",
        activity: "Ask Claude to conduct a French job interview for your specific role. Answer every question in French. Ask it to rate fluency and flag errors afterward.",
        resource: "Claude.ai — 'Conduis un entretien d'embauche en français pour[ton poste]'",
      },
      {
        time: "0:45–1:20",
        label: "Meeting Simulation",
        activity: "Simulate a project kickoff meeting in French. You present, respond to questions, and take notes. 35 minutes forces you to think fast without a safety net.",
        resource: "Italki session OR Claude roleplay",
      },
      {
        time: "1:20–1:45",
        label: "Pronunciation Polish",
        activity: "Record your voice on a 2-min monologue. Listen back critically. Identify your top 3 pronunciation issues and drill those specific sounds for 20 mins.",
        resource: "Voice Memos (any phone) + Forvo.com for correct versions",
      },
    ],
    review: "List every question or phrase that stumped you. These are your final-session priorities.",
  },
  {
    number: 10,
    title: "Consolidation & Launch",
    focus: "Reinforce everything, build a maintenance system, and go live",
    color: "#06D6A0",
    emoji: "🚀",
    blocks:[
      {
        time: "0:00–0:30",
        label: "Spaced Repetition Review",
        activity: "Review ALL Anki cards from Sessions 1–9. Focus on red (failed) cards. Your retention of these 200+ words is your vocabulary foundation.",
        resource: "AnkiWeb.net or Anki mobile app",
      },
      {
        time: "0:30–1:10",
        label: "Full Mock Day",
        activity: "Conduct an entire 40-minute work simulation in French: greeting colleagues, email writing, attending a meeting, and wrapping up. No English allowed.",
        resource: "Italki tutor briefed in advance + Claude as backup",
      },
      {
        time: "1:10–1:45",
        label: "Build Your 30-Day Maintenance Plan",
        activity: "Set up: 15 min Anki daily, 1 Italki session/week, InnerFrench podcast during commute, 1 French article weekly. Growth now comes from volume, not sessions.",
        resource: "Duolingo as a daily habit keeper (don't rely on it alone — supplement)",
      },
    ],
    review: "Final assessment: record a 3-minute video of yourself in French — who you are, your career, and your goals. Watch it. You've come a long way.",
  },
];

const resourceLinks =[
  { name: "Anki", url: "https://ankiweb.net", desc: "Flashcard system" },
  { name: "Language Transfer", url: "https://www.languagetransfer.org", desc: "Free audio course" },
  { name: "InnerFrench", url: "https://innerfrench.com", desc: "Learner podcast" },
  { name: "Italki", url: "https://www.italki.com", desc: "Tutors from €5/hr" },
  { name: "Forvo", url: "https://forvo.com", desc: "Native pronunciation" },
  { name: "DeepL", url: "https://deepl.com", desc: "Best translator" },
  { name: "Kwiziq", url: "https://kwiziq.com", desc: "Grammar drills" },
  { name: "TV5Monde", url: "https://tv5monde.com", desc: "French news" },
];

export default function FrenchPlan() {
  const [activeSession, setActiveSession] = useState(0);
  const[completed, setCompleted] = useState({});
  const [showReview, setShowReview] = useState(false);

  const session = sessions[activeSession];
  const totalCompleted = Object.keys(completed).length;

  const toggleComplete = (sessionNum) => {
    setCompleted((prev) =>
      prev[sessionNum]
        ? (({ [sessionNum]: _, ...rest }) => rest)(prev)
        : { ...prev, [sessionNum]: true }
    );
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#f0ece3",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #0d1117 50%, #0a1a0a 100%)",
        borderBottom: "1px solid #222",
        padding: "32px 24px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at 30% 50%, rgba(230,57,70,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(42,157,143,0.08) 0%, transparent 60%)",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#888", marginBottom: "8px", textTransform: "uppercase" }}>
            20-Hour Mastery Program
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "normal",
            margin: "0 0 6px",
            letterSpacing: "-1px",
            color: "#f0ece3",
          }}>
            Le Français <span style={{ color: "#E63946", fontStyle: "italic" }}>Essentiel</span>
          </h1>
          <div style={{ fontSize: "14px", color: "#888", marginBottom: "20px" }}>
            The 20% of French that drives 80% of results — for professionals with no time to waste
          </div>
          {/* Progress bar */}
          <div style={{ maxWidth: "360px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#666", marginBottom: "6px" }}>
              <span>{totalCompleted} of 10 sessions complete</span>
              <span>{totalCompleted * 10}%</span>
            </div>
            <div style={{ background: "#1a1a2e", borderRadius: "4px", height: "6px", overflow: "hidden" }}>
              <div style={{
                width: `${totalCompleted * 10}%`,
                height: "100%",
                background: "linear-gradient(90deg, #E63946, #2A9D8F)",
                borderRadius: "4px",
                transition: "width 0.4s ease",
              }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", maxWidth: "1100px", margin: "0 auto", padding: "0" }}>
        {/* Session List Sidebar */}
        <div style={{
          width: "200px",
          flexShrink: 0,
          borderRight: "1px solid #1a1a1a",
          padding: "20px 0",
          minHeight: "calc(100vh - 200px)",
        }}>
          {sessions.map((s, i) => (
            <button
              key={s.number}
              onClick={() => { setActiveSession(i); setShowReview(false); }}
              style={{
                display: "block",
                width: "100%",
                padding: "12px 16px",
                background: activeSession === i ? `${s.color}15` : "transparent",
                border: "none",
                borderLeft: `3px solid ${activeSession === i ? s.color : "transparent"}`,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "14px" }}>{completed[s.number] ? "✅" : s.emoji}</span>
                <div>
                  <div style={{ fontSize: "10px", color: "#666", letterSpacing: "1px" }}>SESSION {s.number}</div>
                  <div style={{
                    fontSize: "11px",
                    color: activeSession === i ? s.color : "#aaa",
                    fontWeight: activeSession === i ? "bold" : "normal",
                    lineHeight: 1.3,
                    fontFamily: "system-ui, sans-serif",
                  }}>
                    {s.title}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "28px 32px" }}>
          {/* Session Header */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{
                    background: `${session.color}22`,
                    border: `1px solid ${session.color}44`,
                    color: session.color,
                    padding: "2px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontFamily: "system-ui, sans-serif",
                    letterSpacing: "1px",
                  }}>
                    SESSION {session.number} OF 10 · 2 HOURS
                  </span>
                </div>
                <h2 style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: "normal",
                  margin: "0 0 6px",
                  color: "#f0ece3",
                  display: "flex", alignItems: "center", gap: "10px"
                }}>
                  <span>{session.emoji}</span> {session.title}
                </h2>
                <p style={{ margin: 0, fontSize: "13px", color: "#888", fontStyle: "italic", fontFamily: "system-ui, sans-serif" }}>
                  🎯 {session.focus}
                </p>
              </div>
              <button
                onClick={() => toggleComplete(session.number)}
                style={{
                  padding: "10px 20px",
                  background: completed[session.number] ? "#1a3a1a" : `${session.color}22`,
                  border: `1px solid ${completed[session.number] ? "#2a5a2a" : session.color + "66"}`,
                  borderRadius: "8px",
                  color: completed[session.number] ? "#4CAF50" : session.color,
                  cursor: "pointer",
                  fontSize: "12px",
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "0.5px",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
              >
                {completed[session.number] ? "✓ Done" : "Mark Complete"}
              </button>
            </div>
          </div>

          {/* Toggle */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
            {["Session Plan", "15-min Review"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setShowReview(i === 1)}
                style={{
                  padding: "8px 18px",
                  background: (i === 1) === showReview ? session.color : "transparent",
                  border: `1px solid ${(i === 1) === showReview ? session.color : "#333"}`,
                  borderRadius: "6px",
                  color: (i === 1) === showReview ? "#fff" : "#888",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontFamily: "system-ui, sans-serif",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {!showReview ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {session.blocks.map((block, i) => (
                <div key={i} style={{
                  background: "#0f0f1a",
                  border: `1px solid #1e1e30`,
                  borderLeft: `4px solid ${session.color}`,
                  borderRadius: "10px",
                  padding: "20px 24px",
                  transition: "border-color 0.2s",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                    <div>
                      <span style={{
                        background: `${session.color}22`,
                        color: session.color,
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontFamily: "monospace",
                        marginRight: "8px",
                      }}>
                        {block.time}
                      </span>
                      <span style={{ fontWeight: "bold", fontSize: "15px", color: "#f0ece3" }}>{block.label}</span>
                    </div>
                  </div>
                  <p style={{
                    margin: "0 0 12px",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "#bbb",
                    fontFamily: "system-ui, sans-serif",
                  }}>
                    {block.activity}
                  </p>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    background: "#0a0a14",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #1a1a28",
                  }}>
                    <span style={{ fontSize: "11px", color: "#555" }}>📌 RESOURCE:</span>
                    <span style={{ fontSize: "12px", color: "#2A9D8F", fontFamily: "system-ui, sans-serif" }}>{block.resource}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              background: "#0f0f1a",
              border: `1px solid ${session.color}44`,
              borderRadius: "12px",
              padding: "28px 32px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{
                  background: `${session.color}22`,
                  border: `1px solid ${session.color}44`,
                  borderRadius: "50%",
                  width: "40px", height: "40px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                }}>
                  ⏱️
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#666", letterSpacing: "2px", fontFamily: "system-ui, sans-serif" }}>END-OF-SESSION</div>
                  <div style={{ fontSize: "16px", color: session.color }}>15-Minute Review</div>
                </div>
              </div>
              <p style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#ccc",
                fontFamily: "system-ui, sans-serif",
                margin: 0,
              }}>
                {session.review}
              </p>
              <div style={{
                marginTop: "20px",
                padding: "14px 16px",
                background: "#0a0a14",
                borderRadius: "8px",
                border: "1px solid #1a1a28",
                fontSize: "12px",
                color: "#666",
                fontFamily: "system-ui, sans-serif",
              }}>
                💡 <strong style={{ color: "#888" }}>Why it matters:</strong> Retrieval practice (actively recalling information) boosts long-term retention by up to 50% compared to re-reading. This 15 minutes doubles the value of your 2-hour session.
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
            <button
              onClick={() => { setActiveSession(Math.max(0, activeSession - 1)); setShowReview(false); }}
              disabled={activeSession === 0}
              style={{
                padding: "10px 24px",
                background: "transparent",
                border: "1px solid #333",
                borderRadius: "8px",
                color: activeSession === 0 ? "#444" : "#888",
                cursor: activeSession === 0 ? "default" : "pointer",
                fontSize: "13px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              ← Previous Session
            </button>
            <button
              onClick={() => { setActiveSession(Math.min(9, activeSession + 1)); setShowReview(false); }}
              disabled={activeSession === 9}
              style={{
                padding: "10px 24px",
                background: activeSession === 9 ? "transparent" : session.color,
                border: `1px solid ${session.color}`,
                borderRadius: "8px",
                color: activeSession === 9 ? "#444" : "#fff",
                cursor: activeSession === 9 ? "default" : "pointer",
                fontSize: "13px",
                fontFamily: "system-ui, sans-serif",
                fontWeight: "bold",
              }}
            >
              Next Session →
            </button>
          </div>
        </div>
      </div>

      {/* Resources footer */}
      <div style={{
        borderTop: "1px solid #1a1a1a",
        padding: "24px",
        marginTop: "20px",
        background: "#080810",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#555", marginBottom: "14px", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
            YOUR CORE RESOURCE STACK
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {resourceLinks.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "8px 14px",
                  background: "#0f0f1a",
                  border: "1px solid #1e1e30",
                  borderRadius: "8px",
                  color: "#aaa",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "system-ui, sans-serif",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  gap: "2px",
                  transition: "all 0.2s",
                  minWidth: "90px",
                  textAlign: "center",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#444"; e.currentTarget.style.color = "#f0ece3"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e30"; e.currentTarget.style.color = "#aaa"; }}
              >
                <span style={{ fontWeight: "bold" }}>{r.name}</span>
                <span style={{ fontSize: "10px", color: "#555" }}>{r.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}