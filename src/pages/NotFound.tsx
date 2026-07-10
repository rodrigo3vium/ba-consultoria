import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Accent, Eyebrow, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-saas-void text-saas-body">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
        <div className="absolute -bottom-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-lg px-4 sm:px-6 text-center animate-fade-in">
        <Eyebrow>Erro 404</Eyebrow>
        <h1 className="mt-6 font-extrabold text-saas-ink text-[clamp(64px,12vw,120px)] leading-[1] tracking-tight">
          <Accent>404</Accent>
        </h1>
        <p className="mt-4 text-saas-body text-[17px] leading-relaxed">
          Oops! Page not found
        </p>
        <a href="/" className={`${SAAS_BTN_PRIMARY} mt-8`}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
