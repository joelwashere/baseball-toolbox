import { Footer } from "./footer";
import { NavBar } from "./navbar";

export const Layout = ({ children }: any) => {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <NavBar />
        <main className="h-full">{children}</main>
        <Footer />
      </div>
    </>
  )
}