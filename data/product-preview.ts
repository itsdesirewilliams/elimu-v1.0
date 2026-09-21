export const productPreview = {
  eyebrow: "Product preview",
  title: "Step through a real Lesson.",
  intro:
    "This is a real Elimu Boost Lesson, walked through Step by Step — the way every course works. Click through it.",
  course: "Mathematics S4",
  lessonTitle: "Solving Linear Equations",
  steps: [
    {
      equation: "2x + 4 = 14",
      explanation: "Start here. The goal: get x alone on one side.",
    },
    {
      equation: "2x = 10",
      explanation: "Subtract 4 from both sides to isolate the x term.",
    },
    {
      equation: "x = 5",
      explanation: "Divide both sides by 2 — and the equation is solved.",
    },
  ],
  backLabel: "Back",
  nextLabel: "Next step",
  xpPerStep: 10,
  yourTurn: {
    label: "Your turn",
    question: "Solve: 3x + 6 = 21",
    revealLabel: "Reveal answer",
    answer: "x = 7",
    answerExplanation:
      "Subtract 6 from both sides, then divide by 3 — the same moves as the lesson.",
    xpBonus: 10,
  },
} as const;
