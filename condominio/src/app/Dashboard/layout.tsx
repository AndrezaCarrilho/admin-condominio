import SideNav from "../Components/sidenav";

export default function MoradoresLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}

