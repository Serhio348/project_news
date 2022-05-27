import React from 'react';

import "./FormCard.scss";

type PropsType = {
    header?: string,
    children?: any,
    loading?: boolean
}

const FormCard: React.FC<PropsType> = ({ header, children, loading }) => {

    return (
        <form className='form-card-container'>
            {header &&
                <div className='header'>{header}</div>
            }
            {children}
            {loading && <div className="loader">...</div>}
        </form>
    )
}

export default FormCard;