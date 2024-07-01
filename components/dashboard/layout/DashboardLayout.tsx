"use client";

import { PropsWithChildren, useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const navItems = ["Overview", "Analytics", "Projects", "Tasks", "Settings"];

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? "dark" : ""}`}>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        isDarkMode={isDarkMode}
        handleSetDarkMode={setIsDarkMode}
        handleSetMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar navItems={navItems} />
        <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
