import React, { useState } from "react";
import FormValuesType from "../../types/formValuesType";
import Button from "@mui/material/Button";
import FormCard from "../ui/formCard/FormCard";
import FormTextField from "../ui/formTextField/FormTextField";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import Login1 from "./Login1";


const Login: React.FC = () => {
    const [values, setValues] = useState<FormValuesType>({});

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

    }

    return (

        <FormCard header="Login" >

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
            {
                <div className="form-error">
                    No active account found with the given credentials
                </div>
            }
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

export default Login;