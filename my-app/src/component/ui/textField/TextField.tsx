import React, { useEffect, useRef } from "react";

import "./TextField.scss";

type PropsType = {
    autofocus?: boolean
    label: string
    type?: string
    value?: string
    placeholder?: string
    setValue: (value: string) => void
}

const TextField: React.FC<PropsType> = ({
    autofocus,
    label,
    type = "text",
    value,
    placeholder,
    setValue,
}) => {

    const nameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            nameRef.current?.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <div className="text-field-container">
            <div className="label">
                {label}
            </div>
            <input
                ref={nameRef}
                value={value || ""}
                onChange={handleChange}
                className="input"
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextField;