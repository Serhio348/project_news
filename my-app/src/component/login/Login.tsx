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
        <FormCard header="Login">
            <FormTextField
                autofocus
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
            <Button
                variant="contained"
                onClick={handleSubmit}
                className="button-click"
            >
                login.submit
            </Button>
        </FormCard>
    )
}

export default Registration;