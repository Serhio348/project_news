import { CircularProgress } from '@mui/material';
import React from 'react';

import "./FormCard.scss";

type PropsType = {
    header?: string,
    children?: any,
    loading?: boolean
}

const FormCard: React.FC<PropsType> = ({ header, children, loading }) => {

    return (
        <form className={'form-card-container'}>
            <div data-testid="form-content" className={`form-content ${loading ? "_loading" : ""}`}>
                {header &&
                    <div className='header'>{header}</div>
                }
                {children}
            </div>
            {loading && <div className="loader">
                <CircularProgress />
            </div>}
        </form>
    )
}

export default FormCard;