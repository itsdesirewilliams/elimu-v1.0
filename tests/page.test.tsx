import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

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
});
