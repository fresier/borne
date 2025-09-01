"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Form from "./form";
import loadAutocomplete from "./loadAutocomplete";

interface LookBoxProps {
  setLook: any;
  showModal: boolean;
  setShowModal: any;
}

export default function LookBox({
  setLook,
  showModal,
  setShowModal,
}: LookBoxProps) {
  const { isLoading, data } = useQuery({
    queryKey: ["autocomplete"],
    queryFn: async () => (await loadAutocomplete())?.json,
  });

  return (
    <>
      <div
        className=""
        style={{
          position: "fixed",
          zIndex: "100",
          top: "-40px",
          // Push completely off-screen to the right without creating horizontal scrollbar
          right: "-10px",
          width: "216px",
          height: "160px",
          lineHeight: "20px",
          //'backgroundColor':'#1F2A2E'
        }}
      >
        <a href="#" onClick={() => setShowModal(true)}>
          <Image
            alt="help ?"
            width="216"
            height="216"
            src="/assets/img/BoutonEcranFac.png"
          />
        </a>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        fullscreen={"md-down"}
        enforceFocus={false}
        // backdrop="static"
        centered
      >
        <h3 className="m-3">Besoin d'aide ?</h3>
        <p className="mx-3">
          Vous cherchez une personne, un service ou un bureau ?
        </p>

        {!isLoading && data && (
          <Form
            setLook={setLook}
            setShowModal={setShowModal}
            title=""
            data={data}
          />
        )}
      </Modal>
    </>
  );
}
