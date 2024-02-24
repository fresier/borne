"use client";

import { useEffect, useState } from "react";

import DevTools from "@/component/devTools";
import LookBox from "@/component/lookBox";
import Pub from "@/component/pub";
import ResultBox from "@/component/resultBox";
import { useAppStore } from "@/store/session";

export default function Home() {
  const showPub = useAppStore.use.showPub();
  const showResult = useAppStore.use.showResult();
  const setEtage = useAppStore.use.setEtage();
  const [look, setLook] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const e = urlParams.get("e");
    setEtage(parseInt(e || "9"));
  }, []);

  return (
    <>
      {showPub && <Pub />}
      {showResult && <ResultBox look={look} setLook={setLook} />}
      <LookBox setLook={setLook} />
      <DevTools />
    </>
  );
}
