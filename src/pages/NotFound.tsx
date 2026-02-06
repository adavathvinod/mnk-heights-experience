import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl font-display font-bold text-primary mb-4">
          404
        </h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-amber-600"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-muted text-foreground font-semibold px-6 py-3 rounded-lg border border-border transition-all duration-300 hover:bg-secondary"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
