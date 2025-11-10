import NavHeader from './NavHeader';
import NavFooter from './NavFooter';

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen font-sans bg-[#181c24]">
      <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-gradient-to-br from-[#232a36] via-[#181c24] to-[#232a36]" />
      <NavHeader />
      <main className="flex-grow bg-transparent pt-28">
        {children}
      </main>
      <NavFooter />
    </div>
  );
};