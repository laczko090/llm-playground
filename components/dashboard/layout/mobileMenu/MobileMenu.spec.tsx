import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileMenu from "./MobileMenu";

describe("MobileMenu", () => {
  const mockHandleMenuOpen = vi.fn();
  const navItems = ["Home", "About", "Contact"];

  it("renders correctly when closed", () => {
    render(
      <MobileMenu
        isOpen={false}
        navItems={navItems}
        handleMenuOpen={mockHandleMenuOpen}
      />
    );

    const menuElement = screen.getByTestId("mobile-menu-nav");
    expect(menuElement).toHaveClass("-translate-x-full");
    expect(menuElement).not.toHaveClass("translate-x-0");
  });

  it("renders correctly when open", () => {
    render(
      <MobileMenu
        isOpen={true}
        navItems={navItems}
        handleMenuOpen={mockHandleMenuOpen}
      />
    );

    const menuElement = screen.getByTestId("mobile-menu-nav");
    expect(menuElement).toHaveClass("translate-x-0");
    expect(menuElement).not.toHaveClass("-translate-x-full");
  });

  it("displays all nav items", () => {
    render(
      <MobileMenu
        isOpen={true}
        navItems={navItems}
        handleMenuOpen={mockHandleMenuOpen}
      />
    );

    navItems.forEach((item) => {
      const linkElement = screen.getByText(item);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute(
        "href",
        `/dashboard/${item.toLowerCase()}`
      );
    });
  });

  it("calls handleMenuOpen when clicking the close button", () => {
    render(
      <MobileMenu
        isOpen={true}
        navItems={navItems}
        handleMenuOpen={mockHandleMenuOpen}
      />
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(mockHandleMenuOpen).toHaveBeenCalledWith(false);
  });

  it("calls handleMenuOpen when clicking the overlay", () => {
    render(
      <MobileMenu
        isOpen={true}
        navItems={navItems}
        handleMenuOpen={mockHandleMenuOpen}
      />
    );

    const overlay = screen.getByTestId("mobile-menu-overlay");
    fireEvent.click(overlay);
    expect(mockHandleMenuOpen).toHaveBeenCalledWith(false);
  });
});
