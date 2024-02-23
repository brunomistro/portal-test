"use client";

import React, { useEffect, useState } from "react";
import reactDom, { createPortal } from "react-dom";

export default function PortalTest() {
  const content = <div>bbb</div>;

  // to detect document has been mounted
  const [docEl, setDocEl] = useState<HTMLElement | null>();

  // run after document mounted
  useEffect(() => {
    setDocEl(document.getElementById("portal-test"));
  }, []);

  console.log(docEl);

  return (
    <>
      {docEl && <p>asdasd</p>}
      {docEl && createPortal(content, document.getElementById("portal-test")!)}
    </>
  );
}
