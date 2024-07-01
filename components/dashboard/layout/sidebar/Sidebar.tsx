import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Key } from "react";

interface SidebarProps {
  navItems: Array<String>;
}

const Sidebar = (props: SidebarProps) => {
  const { navItems } = props;

  return (
    <aside
      className="hidden md:flex md:flex-shrink-0"
      data-testid="dashboard-sidebar"
    >
      <div className="flex flex-col w-64 bg-indigo-700 dark:bg-indigo-900">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item as Key}>
                <NavigationMenu.Link
                  className="block px-4 py-2 rounded-lg text-indigo-100 hover:bg-indigo-600 dark:hover:bg-indigo-800 transition-colors duration-200"
                  href={`/dashboard/${item.toLowerCase()}`}
                  data-testid={`sidebar-link-${item.toLocaleLowerCase()}`}
                >
                  {item}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </aside>
  );
};

export default Sidebar;
