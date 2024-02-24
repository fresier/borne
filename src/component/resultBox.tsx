"use client";

import { useAppStore } from "@/store/session";
import { useRef } from "react";
import { FicheMembre } from "./ficheMembre";
import FicheService from "./ficheService";
import { Plan } from "./plan";

interface ResultBoxProps {
  look: any;
  setLook: any;
}
export default function ResultBox({ look, setLook }: ResultBoxProps) {
  const duration = useAppStore.use.duration();
  const updateTimer = useAppStore.use.updateTimer();

  const ref = useRef(null);

  const handleClickInside = () => {
    updateTimer(duration);
  };

  console.log("look", look);
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
            {look.type == "fusion" && (
              <>
                <FicheMembre ulbid={look.look} setLook={setLook} />
                <FicheService id={look.look} setLook={setLook} />
                <Plan id={look.look} setLook={setLook} />
              </>
            )}
            {look.type == "local" && <Plan id={look.look} setLook={setLook} />}
          </div>
        </div>
      </div>
    </>
  );
}
