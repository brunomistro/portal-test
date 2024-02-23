import { createPortal } from "react-dom";
import PortalTest from "./PortalTest";

export default function Home() {
  return (
    <>
      <div>aaa</div>
      <PortalTest />
      {/* {createPortal(<div>bbb</div>, document.getElementById("portal-test")!)} */}
    </>
  );
}
