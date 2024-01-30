"use client";

import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "./form";

interface LookBoxProps {
  setLook: any;
}

export default function LookBox({ setLook }: LookBoxProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className=""
        style={{
          position: "absolute",
          zIndex: "100",
          top: "0",
          right: "0",
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
            height="160"
            src="/assets/img/logo-besoin-daide.png"
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
        <p className="mx-3">Vous cherchez ...</p>

        {/* <Form
          setLook={setLook}
          setShowModal={setShowModal}
          limiteChar={2}
          request="https://monpsy.ulb.be/ajax/autocomplete/personne.php"
          title="Une personne ?"
          queryKey="personne"
        />

        <Form
          setLook={setLook}
          setShowModal={setShowModal}
          request="https://monpsy.ulb.be/ajax/autocomplete/service.php"
          title="Un service ou centre de recherche ?"
          queryKey="service"
        />

        <Form
          setLook={setLook}
          setShowModal={setShowModal}
          request="https://monpsy.ulb.be/ajax/autocomplete/bureau.php"
          title="Un bureau ?"
          queryKey="bureau"
        />

        <hr /> */}
        <Form
          setLook={setLook}
          setShowModal={setShowModal}
          request="https://monpsy.ulb.be/ajax/autocomplete/fusion.php"
          title="Une personne, un service ou un bureau ?"
          queryKey="fusion"
        />
      </Modal>
    </>
  );
}
