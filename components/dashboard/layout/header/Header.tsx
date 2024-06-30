"use client";

import React from "react";
import {
  MoonIcon,
  SunIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import * as Avatar from "@radix-ui/react-avatar";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  isDarkMode: boolean;
  handleSetMobileMenuOpen: (isOpen: boolean) => void;
  handleSetDarkMode: (isDark: boolean) => void;
}

const Header = (props: HeaderProps) => {
  const {
    isMobileMenuOpen,
    isDarkMode,
    handleSetMobileMenuOpen,
    handleSetDarkMode,
  } = props;

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleSetMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            >
              {isMobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </button>
            <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 ml-2 md:ml-0">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleSetDarkMode(!isDarkMode)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 mr-4"
            >
              {isDarkMode ? (
                <SunIcon data-testid="sun-icon" />
              ) : (
                <MoonIcon data-testid="moon-icon" />
              )}
            </button>
            <Avatar.Root
              data-testid="user-avatar"
              className="inline-flex h-8 w-8 select-none items-center justify-center overflow-hidden rounded-full bg-indigo-100 dark:bg-indigo-900"
            >
              <Avatar.Image
                className="h-full w-full object-cover"
                src="https://example.com/avatar.jpg"
                alt="User avatar"
              />
              <Avatar.Fallback
                className="text-sm font-medium uppercase text-indigo-600 dark:text-indigo-400"
                delayMs={600}
              >
                PL
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
