import { Outlet } from "react-router";

export default function App() {
  return (
    <div>
      <header>
        <h1>Hello World</h1>
      </header>
      <aside>
        <p>SideBar</p>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
