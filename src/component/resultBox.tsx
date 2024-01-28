"use client";

import { useAppStore } from "@/store/session";
import { useRef } from "react";
import { FicheMembre } from "./ficheMembre";

interface ResultBoxProps {
  look: string;
}
export default function ResultBox({ look }: ResultBoxProps) {
  const duration = useAppStore.use.duration();
  const updateTimer = useAppStore.use.updateTimer();

  const ref = useRef(null);

  const handleClickInside = () => {
    updateTimer(duration);
  };

  return (
    <>
      <div
        ref={ref}
        id="resultBox"
        className="resetTimer"
        onClick={handleClickInside}
        style={{
          position: "absolute",
          zIndex: "1",
          top: "0",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="container">
          <div
            className="card card-primary bg-white m-3 position-absolute top-50 start-50 translate-middle"
            style={{
              width: "75%",
            }}
          >
            {look && <FicheMembre ulbid={look} />}
          </div>
        </div>
      </div>
    </>
  );
}
