import { SideBar } from "./sidebar";

export const SideBarLayout = ({ children }: any) => {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <SideBar />
        <main className="m-0">{children}</main>
      </div>
    </>
  )
}