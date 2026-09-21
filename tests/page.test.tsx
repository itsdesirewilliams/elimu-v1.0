import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent, within } from "@testing-library/react";
import Home from "@/app/page";

afterEach(cleanup);

describe("Homepage route", () => {
  it("renders without errors and shows the brand", () => {
    render(<Home />);

    expect(
      screen.getByRole("img", { name: /elimu boost wordmark/i })
    ).toHaveAttribute("src", expect.stringContaining("wordmark-green.png"));
    expect(
      screen.getByRole("img", { name: /elimu boost mark/i })
    ).toHaveAttribute("src", expect.stringContaining("mark-green.png"));
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
    expect(screen.getByText(/Lesson \d+ of \d+/)).toBeInTheDocument();
    expect(screen.getByText("+10 XP")).toBeInTheDocument();
    expect(screen.getByText(/\d-day streak/)).toBeInTheDocument();
  });

  it("anchors the primary navigation to the page sections", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "Courses" })).toHaveAttribute(
      "href",
      "#courses"
    );
    expect(screen.getByRole("link", { name: "How It Works" })).toHaveAttribute(
      "href",
      "#how-it-works"
    );
    expect(screen.getByRole("link", { name: "Features" })).toHaveAttribute(
      "href",
      "#features"
    );
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
