import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import Button from "@mui/material/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";


const Registration: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});

    const handleSubmit = () => {
        console.log(values);
    }

    return (
        <FormCard header="Registration">

            <FormTextField
                autofocus
                label="Name"
                name="name"
                type="name"
                values={values}
                setValues={setValues}
            />
            <FormTextField
                label="Email"
                type="email"
                name="email"
                values={values}
                setValues={setValues}
            />
            <FormTextField
                label="Password"
                type="password"
                name="password"
                values={values}
                setValues={setValues}
            />
            <FormTextField
                label="Confirm password"
                type="password"
                name="confirmPassword"
                values={values}
                setValues={setValues}
            />
            <Button
                variant="contained"
                onClick={handleSubmit}
                className="button-click"
            >
                Registration
            </Button>
        </FormCard>
    )
}

export default Registration;