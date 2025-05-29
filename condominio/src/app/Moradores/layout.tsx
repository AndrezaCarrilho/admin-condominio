import SideNav from "../Components/sidenav";

export default function MoradoresLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <main style={{ flex: 1, padding: "1rem" }}>
        {children}
      </main>
    </div>
  );
}
