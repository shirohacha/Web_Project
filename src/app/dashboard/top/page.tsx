import React from "react";
import Link from "next/link";
import "../../global.css";
import DashboardLayout, { getSiteNameSmart } from "../layout";

export default function Page() {
  return (
    <DashboardLayout>
      <h1>{getSiteNameSmart}</h1>
      <ul>
        <li>TTWRガイド</li>
        <li>ストーリー</li>
        <li>商品</li>
        <li>
          <Link href="">マイページ</Link>
        </li>
        <li>カート</li>
      </ul>
      <h1>
        <span>どうしてサイトを</span>
        <br />
        作ろうと思ったの？
        <br />
        という問いかけに
        <br />
        向き合うために
      </h1>
      <p>
        想いやキャリアなどを紹介する
        <br />
        TTWR公式オウンドメディアです
      </p>
      <div>
        <h3>ストーリー</h3>
      </div>
    </DashboardLayout>
  );
}
