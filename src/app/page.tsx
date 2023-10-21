import React from "react";
import "./global.css";
import { css } from "../../styled-system/css";
import RootLayout, { getSiteTitle, getSiteName } from "./layout";

export default function Page() {
  return (
    <RootLayout>
      <h1>{getSiteName}</h1>
      <h2>{getSiteTitle}</h2>
      <p>TinyTrendWardrobeとは</p>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
      <p>Hello World</p>
    </RootLayout>
  );
}
