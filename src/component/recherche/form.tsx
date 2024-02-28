"use client";

import { useAppStore } from "@/store/session";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Selectable from "./selectable";

interface FormProps {
  setLook: any;
  setShowModal: any;
  title: string;
  limiteChar?: number;
  data: any;
}

interface formulaire {
  look: string;
}

export default function Form({
  setLook,
  setShowModal,
  title,
  limiteChar = 0,
  data,
}: FormProps) {
  let formulaire: formulaire = {
    look: "",
  };

  const duration = useAppStore.use.duration();
  const updateTimer = useAppStore.use.updateTimer();

  const [valueForm, setValueForm] = useState(formulaire.look);

  const onSubmit: SubmitHandler<formulaire> = async (formData) => {
    formData.look = valueForm;

    setLook({
      type: "fusion",
      look: formData.look,
    });

    updateTimer(duration);
    setShowModal(false);
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mb-3">
          <div className="row">
            <p className="mx-3">{title}</p>
            {data && (
              <>
                <Selectable
                  className=""
                  id="look"
                  option={data}
                  isClearable={true}
                  isSearchable={true}
                  setSelectValue={setValueForm}
                  {...register("look")}
                  limiteChar={limiteChar}
                />
              </>
            )}
          </div>
          <button className="btn btn-primary float-end my-2" type="submit">
            Rechercher
          </button>
        </div>
      </form>
    </>
  );
}
