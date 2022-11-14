import { Footer } from "./footer";
import { SideBar } from "./sidebar";

export const Layout = ({ children }: any) => {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <SideBar />
        <main className="m-0 ml-14">{children}</main>
      </div>
      <Footer />
    </>
  )
}