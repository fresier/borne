"use client";

import { useAppStore } from "@/store/session";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Selectable from "./selectable";

interface FormProps {
  request: string;
  setLook: any;
  setShowModal: any;
  title: string;
  queryKey: string;
  limiteChar?: number;
}

interface formulaire {
  look: string;
}

export default function Form({
  request,
  setLook,
  setShowModal,
  title,
  queryKey,
  limiteChar = 0,
}: FormProps) {
  let formulaire: formulaire = {
    look: "",
  };

  const duration = useAppStore.use.duration();
  const updateTimer = useAppStore.use.updateTimer();

  const [valueForm, setValueForm] = useState(formulaire.look);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<formulaire> = async (formData) => {
    formData.look = valueForm;
    setIsLoading(true);

    setLook({
      type: queryKey,
      look: formData.look,
    });

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
    queryKey: [queryKey],
    queryFn: () =>
      fetch(request)
        .then((res) => res.json())
        .then((data) => {
          return data.datas;
        }),
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mb-3">
          <div className="row">
            <p className="mx-3">{title}</p>
            {fetchLoading && <p>Chargement...</p>}
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
