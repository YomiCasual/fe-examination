import React from 'react';

type CustomModalProps = {
  width?: number;
  backdropClose?: () => void;
  children: React.ReactNode;
};

const CustomModal = ({
  children,
  backdropClose,
  width,
}: CustomModalProps): JSX.Element => {
  const styles = {
    maxWidth: width,
  };
  return (
    <div onClick={backdropClose} className='modal__layout'>
      <div className='modal__container'>
        <div className='modal__child' style={styles}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
