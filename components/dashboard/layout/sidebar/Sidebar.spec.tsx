import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  const defaultProps = {
    navItems: ["Overview", "Analytics", "Projects", "Tasks", "Settings"],
  };

  it("renders the sidebar title", () => {
    render(<Sidebar {...defaultProps} />);
    expect(screen.getByTestId("dashboard-sidebar")).toBeInTheDocument();
  });

  it("renders the links from props", () => {
    render(<Sidebar {...defaultProps} />);
    expect(screen.getAllByRole("link")).toHaveLength(5);
  });

  it.each(defaultProps.navItems)(
    "returns the correct link for sidebar items",
    (navItem) => {
      render(<Sidebar {...defaultProps} />);

      expect(
        screen.getByTestId(`sidebar-link-${navItem.toLocaleLowerCase()}`),
      ).toBeInTheDocument();
      expect(
        screen
          .getByTestId(`sidebar-link-${navItem.toLocaleLowerCase()}`)
          .getAttribute("href"),
      ).toBe(`/dashboard/${navItem.toLowerCase()}`);
    },
  );
});
