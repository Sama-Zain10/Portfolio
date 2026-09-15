import { motion } from "framer-motion";

const lines: { tokens: { text: string; cls: string }[] }[] = [
  { tokens: [{ text: "router.post(", cls: "text-accent-blue" }, { text: "'/api/auth/login'", cls: "text-accent-cyan" }, { text: ",", cls: "text-ink-500" }] },
  { tokens: [{ text: "  validate(loginSchema),", cls: "text-ink-300" }] },
  { tokens: [{ text: "  async (req, res) => {", cls: "text-ink-300" }] },
  { tokens: [{ text: "    const user = ", cls: "text-ink-300" }, { text: "await", cls: "text-accent-violet" }, { text: " findUser(req.body);", cls: "text-ink-300" }] },
  { tokens: [{ text: "    const ok = ", cls: "text-ink-300" }, { text: "await", cls: "text-accent-violet" }, { text: " bcrypt.compare(...);", cls: "text-ink-300" }] },
  { tokens: [{ text: "    if (!ok) ", cls: "text-accent-violet" }, { text: "return res.status(401).end();", cls: "text-ink-300" }] },
  { tokens: [{ text: "    const token = signJwt(user.id);", cls: "text-ink-300" }] },
  { tokens: [{ text: "    return res.json({ token });", cls: "text-ink-300" }] },
  { tokens: [{ text: "  }", cls: "text-ink-300" }] },
  { tokens: [{ text: ");", cls: "text-ink-500" }] },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.4 },
  },
};

const line = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function CodePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-md rounded-xl border border-white/10 bg-base-850/80 shadow-glow backdrop-blur-sm"
    >
      <div className="absolute -inset-px -z-10 rounded-xl bg-grad-primary opacity-20 blur-xl" aria-hidden />
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        <span className="ml-3 font-mono text-xs text-ink-500">auth.routes.ts</span>
      </div>
      <motion.pre
        variants={container}
        initial="hidden"
        animate="show"
        className="overflow-x-auto p-5 font-mono text-[13px] leading-6"
      >
        {lines.map((l, i) => (
          <motion.div key={i} variants={line} className="whitespace-pre">
            {l.tokens.map((t, j) => (
              <span key={j} className={t.cls}>
                {t.text}
              </span>
            ))}
          </motion.div>
        ))}
      </motion.pre>
    </motion.div>
  );
}
