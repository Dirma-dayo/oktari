"use client";

import { motion } from "framer-motion";

export default function PizzaRecipePage() {
  const steps = [
    "1. prepare ur dough (flour + water + yeast + salt)",
    "2. knead it like ur trying to beat dark souls",
    "3. let it rest (take a nap too)",
    "4. spread sauce (tomato, garlic, a lil sugar if ur wild)",
    "5. cheese. lots. more. cheese.",
    "6. throw on toppings (pineapple if u wanna start fights)",
    "7. bake till kwispy + golden (220°C, ~12min)",
    "8. congrats, u just made pizza",
    "yes idk what to put so i put a pizza recipe"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-900 via-black to-orange-900 text-slate-100 p-8">
      <h1 className="text-4xl font-bold mb-6">🍕 forbidden pizza scroll</h1>

      <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 shadow-lg w-full max-w-lg">
        {steps.map((step, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.5, duration: 0.4 }}
            className="font-mono text-lg mb-2"
          >
            {step}
          </motion.p>
        ))}
      </div>

      <motion.p
        className="mt-8 text-sm text-slate-400 font-mono"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        serve hot. share with nobody. kys. ily.
      </motion.p>
    </div>
  );
}
