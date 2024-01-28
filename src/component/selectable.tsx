import React, { useCallback, useState } from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

interface Props {
    option: any
    id: string
    setSelectValue?: any
    defaultValue?: any
    isMulti?: boolean
    className?: string
    name?: string
    isClearable?: boolean
    isSearchable?: boolean
}

const Selectable = React.forwardRef((props: Props, ref) => {

    const [ showOptions, setShowOptions ] = useState(false);

    const handleInputChange = useCallback((typedOption:any) => {
        setShowOptions((typedOption.length > 2 ) ? true : false);
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
            components={animatedComponents}
            options={ showOptions ? props.option : [] } 
            onInputChange = { handleInputChange }
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: '0px',
                }),
            }}
            onChange=
                {(!props.isMulti) ? 
                    (e: any) => {props.setSelectValue(e.value)} : 
                    (e: any) => {props.setSelectValue(e.map((obj: any) => obj.value))}
                }
            defaultValue=
                {(!props.isMulti && props.defaultValue) ? 
                    props.option.find((obj: any) => obj.value === props.defaultValue) : 
                    props.option.filter((obj: any) => props.defaultValue?.includes(obj.value))
                }
        />
    ) 
})

Selectable.displayName = 'Selectable';

export default Selectable;