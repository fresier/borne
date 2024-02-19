"use client";

import { useState } from "react";

import Footer from "@/component/footer";
import LookBox from "@/component/lookBox";
import Pub from "@/component/pub";
import ResultBox from "@/component/resultBox";
import { useAppStore } from "@/store/session";

export default function Home() {
  const showPub = useAppStore.use.showPub();
  const showResult = useAppStore.use.showResult();
  const [look, setLook] = useState("");

  return (
    <>
      {showPub && <Pub />}
      {showResult && <ResultBox look={look} setLook={setLook} />}
      <LookBox setLook={setLook} />
      <Footer />
    </>
  );
}
