type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  context: string;
  photo?: string;
};

export const testimonialsSection: {
  eyebrow: string;
  title: string;
  footnote: string;
  items: Testimonial[];
} = {
  eyebrow: "Testimonials",
  title: "What Our Students Say",
  footnote:
    "Illustrative student stories — real students will share their own words here as ElimuBoost grows.",
  items: [
    {
      quote:
        "The Step-by-step Lessons finally made equations make sense. I stopped memorising and started understanding.",
      name: "Awet Majok",
      initials: "AM",
      context: "Additional Mathematics S4",
    },
    {
      quote:
        "My teacher moves fast. At home, I walk every Lesson again at my own pace until it sticks.",
      name: "Deng Chol",
      initials: "DC",
      context: "Physics S4",
    },
    {
      quote:
        "Quizzes after every topic show me exactly what I still need to work on.",
      name: "Nyachang Tir",
      initials: "NT",
      context: "Biology S4",
    },
  ],
};
