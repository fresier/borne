"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "./form";
import loadAutocomplete from "./loadAutocomplete";

interface LookBoxProps {
  setLook: any;
}

export default function LookBox({ setLook }: LookBoxProps) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    loadAutocomplete().then((result) => {
      if (!result.success) return;
      setData(result.json.datas);
      setLoadData(true);
    });
  }, []);

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
        <p className="mx-3">
          Vous cherchez une personne, un service ou un bureau ?
        </p>

        {loadData && data && (
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
