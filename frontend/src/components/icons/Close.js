import React from 'react';

const Close = ({ toggleModal }) => {
    return (
        <div className='top-modal-button' onClick={toggleModal}>
            <svg xmlns='http://www.w3.org/2000/svg' style={{ margin: '0px 12px' }} width='22' height='22' fill='currentColor' className='bi bi-x-lg' viewBox='0 0 18 18'>
                <path fillRule='evenodd' d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z' />
                <path fillRule='evenodd' d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z' />
            </svg>
        </div>
    );
};

export default Close;