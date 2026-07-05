import * as React from "react";

export type RoutePath = 
  | "/"
  | "/services/residential"
  | "/services/commercial"
  | "/services/agricultural"
  | "/projects"
  | "/about"
  | "/contact"
  | "/subsidy";

interface RouterContextType {
  path: RoutePath;
  navigate: (to: RoutePath) => void;
}

const RouterContext = React.createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  // Start with the current window pathname or home
  const [path, setPath] = React.useState<RoutePath>(() => {
    const initialPath = window.location.hash.replace("#", "") as RoutePath;
    const allowed: RoutePath[] = [
      "/",
      "/services/residential",
      "/services/commercial",
      "/services/agricultural",
      "/projects",
      "/about",
      "/contact",
      "/subsidy"
    ];
    return allowed.includes(initialPath) ? initialPath : "/";
  });

  const navigate = React.useCallback((to: RoutePath) => {
    setPath(to);
    window.location.hash = to;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hashPath = window.location.hash.replace("#", "") as RoutePath;
      const allowed: RoutePath[] = [
        "/",
        "/services/residential",
        "/services/commercial",
        "/services/agricultural",
        "/projects",
        "/about",
        "/contact",
        "/subsidy"
      ];
      if (allowed.includes(hashPath)) {
        setPath(hashPath);
      } else if (!hashPath) {
        setPath("/");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    
    // Set initial hash if empty to help with consistent routing
    if (!window.location.hash) {
      window.location.hash = "/";
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}
