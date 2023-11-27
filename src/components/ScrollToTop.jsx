import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <>
      <div className="flex">
        <FloatingWhatsApp
          phoneNumber="+971522760013"
          chatMessage=""
          messageDelay="1"
          accountName="Azeem Tourism"
        />
      </div>
    </>
  );
}
