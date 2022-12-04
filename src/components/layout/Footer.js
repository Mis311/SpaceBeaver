import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";

export default function Footer() {
  return (
    <BottomNavigation sx={{ alignItems: "center" }}>
      <p className="footer__paragraph">
        Made with dedication by{" "}
        <a
          href="http://www.github.com/Mis311"
          target={"_blank"}
          rel="noreferrer"
        >
          Mis311
        </a>
      </p>
    </BottomNavigation>
  );
}
