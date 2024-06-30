"use client";

import { PropsWithChildren, useState } from "react";
import Header from "./header/Header";

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
      {children}
    </div>
  );
};

export default DashboardLayout;
