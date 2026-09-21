import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent, within } from "@testing-library/react";
import Home from "@/app/page";

afterEach(cleanup);

describe("Homepage route", () => {
  it("renders the ElimuBoost wordmark as the single header logo", () => {
    render(<Home />);

    const header = screen.getByRole("banner");
    expect(within(header).getAllByRole("img")).toHaveLength(1);
    expect(
      within(header).getByRole("img", { name: /elimuboost wordmark/i })
    ).toHaveAttribute("src", expect.stringContaining("wordmark-green.png"));
    expect(
      screen.queryByRole("img", { name: "Elimu Boost Mark" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: /master senior 4/i })
    ).toBeInTheDocument();
  });

  it("renders the approved hero content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Master Senior 4. Pass Your CSE." })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/aligned to the South Sudan curriculum/)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "See How It Works" })
    ).toHaveAttribute("href", "#how-it-works");

    const heroSection = screen.getByRole("region", { name: "Hero" });
    expect(within(heroSection).getByText(/Lesson \d+ of \d+/)).toBeInTheDocument();
    expect(within(heroSection).getByText("+10 XP")).toBeInTheDocument();
    expect(within(heroSection).getByText(/\d-day streak/)).toBeInTheDocument();
  });

  it("anchors the primary navigation to the page sections", () => {
    render(<Home />);

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });

    expect(within(primaryNav).getByRole("link", { name: "Courses" })).toHaveAttribute(
      "href",
      "#courses"
    );
    expect(
      within(primaryNav).getByRole("link", { name: "How It Works" })
    ).toHaveAttribute("href", "#how-it-works");
    expect(
      within(primaryNav).getByRole("link", { name: "Features" })
    ).toHaveAttribute("href", "#features");
    screen
      .getAllByRole("link", { name: "Start Learning" })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "#courses");
      });
    for (const id of ["courses", "how-it-works", "features"]) {
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it("shows only the supported trust claims", () => {
    render(<Home />);

    for (const claim of [
      "Curriculum-aligned learning",
      "Interactive lessons",
      "Practice & quizzes",
      "Progress tracking",
      "Built for students",
    ]) {
      expect(screen.getByText(claim)).toBeInTheDocument();
    }
  });
});

describe("Mobile navigation", () => {
  it("opens a slide-down panel and closes it when a link is chosen", () => {
    render(<Home />);

    const toggle = screen.getByRole("button", { name: /menu/i });
    expect(
      screen.queryByRole("navigation", { name: "Mobile" })
    ).not.toBeInTheDocument();

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const panel = screen.getByRole("navigation", { name: "Mobile" });
    const panelCourses = within(panel).getByRole("link", { name: "Courses" });
    expect(panelCourses).toHaveAttribute("href", "#courses");

    fireEvent.click(panelCourses);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", { name: "Mobile" })
    ).not.toBeInTheDocument();
  });
});

describe("How It Works section", () => {
  it("walks the four steps and communicates the learning loop", () => {
    render(<Home />);

    const section = screen.getByRole("region", { name: "How It Works" });

    for (const step of ["Choose", "Learn", "Practice", "Master"]) {
      expect(
        within(section).getByRole("heading", { name: step })
      ).toBeInTheDocument();
    }
    for (const stage of ["Understand", "Recall", "Test", "Review", "Improve"]) {
      expect(within(section).getByText(stage)).toBeInTheDocument();
    }
    expect(within(section).getByText("01")).toBeInTheDocument();
    expect(within(section).getByText("04")).toBeInTheDocument();
    expect(within(section).getByText("The learning loop")).toBeInTheDocument();
  });
});

describe("Feature grid", () => {
  it("renders all eight features with concise descriptions", () => {
    render(<Home />);

    const section = screen.getByRole("region", { name: "Features" });

    for (const name of [
      "Interactive Learning",
      "Practice",
      "Quizzes",
      "Flashcards",
      "Progress Tracking",
      "Gamification",
      "Offline Learning",
      "Curriculum-Based",
    ]) {
      expect(
        within(section).getByRole("heading", { name })
      ).toBeInTheDocument();
    }
    for (const description of [
      /instead of skim/,
      /curriculum-based questions/,
      /build your streak/,
      /topic by topic/,
    ]) {
      expect(within(section).getByText(description)).toBeInTheDocument();
    }
  });
});

describe("Product preview", () => {
  it("opens the Solving Linear Equations Lesson on its first Step", () => {
    render(<Home />);

    const section = screen.getByRole("region", { name: "Product Preview" });

    expect(
      within(section).getByRole("heading", { level: 3, name: "Solving Linear Equations" })
    ).toBeInTheDocument();
    expect(within(section).getByText("2x + 4 = 14")).toBeInTheDocument();
    expect(within(section).queryByText("2x = 10")).not.toBeInTheDocument();
    expect(within(section).queryByText("x = 5")).not.toBeInTheDocument();
    expect(within(section).getByText("Step 1 of 3")).toBeInTheDocument();
    expect(within(section).getByText("+10 XP")).toBeInTheDocument();
  });

  it("reveals Steps progressively with back/forward, updating progress and XP", () => {
    render(<Home />);

    const section = screen.getByRole("region", { name: "Product Preview" });
    const next = within(section).getByRole("button", { name: /next step/i });

    fireEvent.click(next);

    expect(within(section).getByText("2x = 10")).toBeInTheDocument();
    expect(within(section).getByText("Step 2 of 3")).toBeInTheDocument();
    expect(within(section).getByText("+20 XP")).toBeInTheDocument();

    fireEvent.click(within(section).getByRole("button", { name: /back/i }));

    expect(within(section).queryByText("2x = 10")).not.toBeInTheDocument();
    expect(within(section).getByText("Step 1 of 3")).toBeInTheDocument();
    expect(within(section).getByText("+10 XP")).toBeInTheDocument();

    fireEvent.click(next);
    fireEvent.click(next);

    expect(within(section).getByText("x = 5")).toBeInTheDocument();
    expect(within(section).getByText("Step 3 of 3")).toBeInTheDocument();
    expect(within(section).getByText("+30 XP")).toBeInTheDocument();
    expect(next).toBeDisabled();
  });

  it("presents the Your turn question and reveals the answer on click", () => {
    render(<Home />);

    const section = screen.getByRole("region", { name: "Product Preview" });
    const next = within(section).getByRole("button", { name: /next step/i });
    fireEvent.click(next);
    fireEvent.click(next);

    expect(within(section).getByText("Solve: 3x + 6 = 21")).toBeInTheDocument();
    expect(within(section).queryByText("x = 7")).not.toBeInTheDocument();

    fireEvent.click(
      within(section).getByRole("button", { name: /reveal answer/i })
    );

    expect(within(section).getByText("x = 7")).toBeInTheDocument();
    expect(within(section).getByText("+40 XP")).toBeInTheDocument();
  });
});

describe("Course grid", () => {
  it("renders the six curriculum-aligned Courses as product cards", () => {
    render(<Home />);

    const section = screen.getByRole("region", { name: "Courses" });

    for (const title of [
      "Additional Mathematics S4",
      "Mathematics S4",
      "Physics S4",
      "Chemistry S4",
      "Biology S4",
      "History S4",
    ]) {
      expect(
        within(section).getByRole("heading", { name: title })
      ).toBeInTheDocument();
    }

    const cards = within(section).getAllByRole("listitem");
    expect(cards).toHaveLength(6);
    expect(within(section).getAllByText("Mathematics")).toHaveLength(2);
    expect(within(section).getByText("Humanities")).toBeInTheDocument();
    expect(within(section).getByText(/extended paper/)).toBeInTheDocument();
    expect(within(section).getByText(/shaped the region/)).toBeInTheDocument();
    for (const card of cards) {
      expect(within(card).getByText(/Lessons/)).toBeInTheDocument();
      expect(within(card).getByText(/Senior 4/)).toBeInTheDocument();
      expect(
        within(card).getByRole("link", { name: /Preview a Lesson/i })
      ).toHaveAttribute("href", "#product-preview");
    }
    expect(document.getElementById("product-preview")).not.toBeNull();
  });
});

describe("Testimonials", () => {
  it("renders placeholder student stories with course context and initials fallback", () => {
    render(<Home />);

    const section = screen.getByRole("region", {
      name: "What Our Students Say",
    });

    for (const name of ["Awet Majok", "Deng Chol", "Nyachang Tir"]) {
      expect(within(section).getByText(name)).toBeInTheDocument();
    }
    for (const initials of ["AM", "DC", "NT"]) {
      expect(within(section).getByText(initials)).toBeInTheDocument();
    }
    for (const context of [
      "Additional Mathematics S4",
      "Physics S4",
      "Biology S4",
    ]) {
      expect(within(section).getByText(context)).toBeInTheDocument();
    }
    expect(
      within(section).getByText(/Illustrative student stories/i)
    ).toBeInTheDocument();
  });
});

describe("Final CTA", () => {
  it("closes the page with the approved headline and both anchor CTAs", () => {
    render(<Home />);

    const section = screen.getByRole("region", { name: "Get started" });

    expect(
      within(section).getByRole("heading", {
        level: 2,
        name: "Your Next Level Starts Here.",
      })
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("link", { name: "Start Learning" })
    ).toHaveAttribute("href", "#courses");
    expect(
      within(section).getByRole("link", { name: "Explore Courses" })
    ).toHaveAttribute("href", "#courses");
  });
});

describe("Footer", () => {
  it("carries the brand, section links, muted placeholders, and socials", () => {
    render(<Home />);

    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByRole("img", { name: /elimuboost wordmark/i })
    ).toHaveAttribute("src", expect.stringContaining("wordmark-green.png"));
    expect(
      within(footer).getByRole("link", { name: "Courses" })
    ).toHaveAttribute("href", "#courses");
    expect(
      within(footer).getByRole("link", { name: "How It Works" })
    ).toHaveAttribute("href", "#how-it-works");
    expect(
      within(footer).getByRole("link", { name: "Features" })
    ).toHaveAttribute("href", "#features");
    for (const placeholder of ["Contact", "Privacy", "Terms"]) {
      expect(within(footer).getByText(placeholder)).toBeInTheDocument();
    }
    for (const social of ["X", "Instagram", "Facebook", "WhatsApp"]) {
      expect(within(footer).getByLabelText(`${social} placeholder`)).toBeInTheDocument();
    }
    expect(within(footer).getByText(/© ElimuBoost/)).toBeInTheDocument();
  });
});
