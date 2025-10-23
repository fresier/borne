import React, { useCallback, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

// Fonction de filtrage personnalisée qui ignore les points
const customFilterOption = (option: any, inputValue: string) => {
  if (!inputValue) return true;

  // Nettoie l'input et la valeur de l'option en supprimant les points
  const cleanInput = inputValue.toLowerCase().replace(/\./g, "");
  const cleanLabel = option.label.toLowerCase().replace(/\./g, "");
  const cleanValue = option.value.toLowerCase().replace(/\./g, "");

  // Recherche dans le label et la valeur
  return cleanLabel.includes(cleanInput) || cleanValue.includes(cleanInput);
};

interface Props {
  option: any;
  id: string;
  setSelectValue?: any;
  defaultValue?: any;
  isMulti?: boolean;
  className?: string;
  name?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  limiteChar?: number;
}

const Selectable = React.forwardRef((props: Props, ref) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = useCallback((typedOption: any) => {
    const limiteChar = props.limiteChar || 0;
    if (typedOption.length === 0) setShowOptions(true);
    else setShowOptions(typedOption.length > limiteChar ? true : false);
  }, []);

  return (
    <Select
      instanceId={props.id}
      id={props.id}
      name={props.name}
      menuPlacement="auto"
      className={props.className}
      isMulti={props.isMulti}
      isClearable={props.isClearable}
      isSearchable={props.isSearchable}
      closeMenuOnSelect={!props.isMulti}
      filterOption={customFilterOption}
      //components={animatedComponents}
      options={showOptions ? props.option : []}
      onInputChange={handleInputChange}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderRadius: "0px",
        }),
      }}
      onChange={
        !props.isMulti
          ? (e: any) => {
              props.setSelectValue(e.value);
            }
          : (e: any) => {
              props.setSelectValue(e.map((obj: any) => obj.value));
            }
      }
      defaultValue={
        !props.isMulti && props.defaultValue
          ? props.option.find((obj: any) => obj.value === props.defaultValue)
          : props.option.filter((obj: any) =>
              props.defaultValue?.includes(obj.value)
            )
      }
    />
  );
});

Selectable.displayName = "Selectable";

export default Selectable;
