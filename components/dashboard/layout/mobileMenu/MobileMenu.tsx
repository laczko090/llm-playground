import { Key } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<String>;
  handleMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { isOpen, navItems, handleMenuOpen } = props;
  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-75"
        aria-hidden="true"
        data-testid="mobile-menu-overlay"
        onClick={() => handleMenuOpen(false)}
      ></div>
      <nav
        className={`fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-indigo-700 dark:bg-indigo-900 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        data-testid="mobile-menu-nav"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <button
            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => handleMenuOpen(false)}
          >
            <Cross1Icon />
          </button>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            {navItems.map((item) => (
              <a
                key={item as Key}
                href={`/dashboard/${item.toLowerCase()}`}
                className="text-indigo-100 hover:bg-indigo-600 dark:hover:bg-indigo-800 px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
