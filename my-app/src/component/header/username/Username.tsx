import React from 'react';
import { useSelector } from '../../hooks/useSelector';

const Username: React.FC = () => {
    const access = useSelector(state => state.user.token)
    const Username = useSelector(state => state.user.email)
    return (
        <div className='header-username'>
            {Username}
        </div>
    );
};

export default Username;