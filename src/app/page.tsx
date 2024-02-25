"use client";

import { useEffect } from "react";

import Ascenseur from "@/component/ascenseur";
import DevTools from "@/component/devTools";
import LookBox from "@/component/lookBox";
import Pub from "@/component/pub";
import ResultBox from "@/component/resultBox";
import { useAppStore } from "@/store/session";

export default function Home() {
  const showPub = useAppStore.use.showPub();
  const showResult = useAppStore.use.showResult();
  const setEtage = useAppStore.use.setEtage();
  const setLook = useAppStore.use.setLook();
  const look = useAppStore.use.look();
  const setShowResult = useAppStore.use.setShowResult();
  const setShowPub = useAppStore.use.setShowPub();
  const updateTimer = useAppStore.use.updateTimer();
  const duration = useAppStore.use.duration();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const e = urlParams.get("e");
    setEtage(parseInt(e || "9"));
  }, []);

  useEffect(() => {
    if (look.look.length === 0) return;
    console.log("useEffect look", look);
    setShowResult(true);
    setShowPub(false);
    updateTimer(duration);
  }, [look]);

  return (
    <>
      {showPub && <Pub />}
      {showResult && <ResultBox look={look} setLook={setLook} />}
      <LookBox setLook={setLook} />
      <Ascenseur />
      <DevTools />
    </>
  );
}
