import { useEffect, ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tracker } from "@/lib/tracking";

interface PageLayoutProps {
  children: ReactNode;
  trackingName: string;
  className?: string;
}

const PageLayout = ({ children, trackingName, className = "" }: PageLayoutProps) => {
  useEffect(() => {
    tracker.page(trackingName);
  }, [trackingName]);

  return (
    <div className={`min-h-screen bg-saas-void text-saas-body ${className}`}>
      <Header />
      <main className="pt-[108px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
