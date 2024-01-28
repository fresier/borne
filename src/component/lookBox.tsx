"use client";

import { useAppStore } from "@/store/session";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import Selectable from "./selectable";

interface LookBoxProps {
  setLook: any;
}

interface formulaire {
  look: string;
}

export default function LookBox({ setLook }: LookBoxProps) {
  const duration = useAppStore.use.duration();
  const updateTimer = useAppStore.use.updateTimer();

  let formulaire: formulaire = {
    look: "",
  };
  const [showModal, setShowModal] = useState(false);
  const [valueForm, setValueForm] = useState(formulaire.look);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<formulaire> = async (formData) => {
    formData.look = valueForm;
    setIsLoading(true);
    setLook(formData.look);

    updateTimer(duration);
    setShowModal(false);
    setIsLoading(false);
  };

  //hook du formulaire
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<formulaire>();

  const { isLoading: fetchLoading, data } = useQuery({
    queryKey: ["personne"],
    queryFn: () =>
      fetch("https://monpsy.ulb.be/ajax/autocomplete/personne.php")
        .then((res) => res.json())
        .then((data) => {
          return data.users;
        }),
  });

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
          Vous cherchez une salle, une personne, un service ?
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="row">
              {fetchLoading && <p>Chargement...</p>}
              {data && (
                <Selectable
                  id="look"
                  option={data}
                  isClearable={true}
                  isSearchable={true}
                  setSelectValue={setValueForm}
                  {...register("look")}
                />
              )}
            </div>
          </div>
          <button
            className="btn btn-primary m-3 w-auto float-end"
            type="submit"
          >
            Rechercher
          </button>
        </form>
      </Modal>
    </>
  );
}
