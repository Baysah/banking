import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
};

const Rootlayout = ({children}: LayoutProps) => {
  const loggedIn = { firstName: 'Baysah', lastName: 'Korti' };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="Horizon Bank Logo" width={34} height={34} />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

export default Rootlayout