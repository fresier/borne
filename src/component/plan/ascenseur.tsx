"use client";

import { useAppStore } from "@/store/session";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { GiTeleport } from "react-icons/gi";

export default function Ascenseur() {
  const showAscenseur = useAppStore.use.showAscenseur();
  const setShowAscenseur = useAppStore.use.setShowAscenseur();
  const setLook = useAppStore.use.setLook();

  const [showModal, setShowModal] = useState(showAscenseur);

  const handleClose = () => {
    setShowModal(false);
    setShowAscenseur(false);
  };

  useEffect(() => {
    setShowModal(showAscenseur);
  }, [showAscenseur]);

  const teleport = (etage: number) => {
    if (etage === 3) setLook({ look: `S.UB.3.100`, type: "local" });
    else setLook({ look: `S.DB.${etage}.100`, type: "local" });
    setShowAscenseur(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => handleClose()}
        size="xl"
        fullscreen={"md-down"}
        enforceFocus={false}
        // backdrop="static"
        centered
      >
        <h3 className="m-3">
          <GiTeleport /> Téléportation
        </h3>
        <p className="mx-3">Où souhaitez-vous vous rendre ?</p>
        <button className="btn btn-primary m-1" onClick={() => teleport(10)}>
          Batiment D, Niveau 10
        </button>
        <button className="btn btn-primary m-1" onClick={() => teleport(9)}>
          Batiment D, Niveau 9
        </button>
        <button className="btn btn-primary m-1" onClick={() => teleport(8)}>
          Batiment D, Niveau 8
        </button>
        <button className="btn btn-primary m-1" onClick={() => teleport(3)}>
          Batiment U, Niveau 3
        </button>
      </Modal>
    </>
  );
}
