import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  const defaultProps = {
    isMobileMenuOpen: false,
    isDarkMode: false,
    handleSetMobileMenuOpen: vi.fn(),
    handleSetDarkMode: vi.fn(),
  };

  it("renders the dashboard title", () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders the hamburger menu icon when mobile menu is closed", () => {
    render(<Header {...defaultProps} />);
    expect(
      screen.getByRole("button", { name: /open menu/i }),
    ).toBeInTheDocument();
  });

  it("renders the close icon when mobile menu is open", () => {
    render(<Header {...defaultProps} isMobileMenuOpen={true} />);
    expect(
      screen.getByRole("button", { name: /close menu/i }),
    ).toBeInTheDocument();
  });

  it("renders the moon icon when dark mode is off", () => {
    render(<Header {...defaultProps} />);
    expect(
      screen.getByRole("button", { name: /toggle dark mode/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });

  it("renders the sun icon when dark mode is on", () => {
    render(<Header {...defaultProps} isDarkMode={true} />);
    expect(
      screen.getByRole("button", { name: /toggle dark mode/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
  });

  it("calls handleSetMobileMenuOpen when hamburger menu is clicked", () => {
    const mockHandleSetMobileMenuOpen = vi.fn();
    render(
      <Header
        {...defaultProps}
        handleSetMobileMenuOpen={mockHandleSetMobileMenuOpen}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(mockHandleSetMobileMenuOpen).toHaveBeenCalledWith(true);
  });

  it("calls handleSetDarkMode when dark mode toggle is clicked", () => {
    const mockHandleSetDarkMode = vi.fn();
    render(
      <Header {...defaultProps} handleSetDarkMode={mockHandleSetDarkMode} />,
    );
    fireEvent.click(screen.getByRole("button", { name: /toggle dark mode/i }));
    expect(mockHandleSetDarkMode).toHaveBeenCalledWith(true);
  });

  it("renders the avatar", () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByTestId("user-avatar")).toBeInTheDocument();
  });
});
