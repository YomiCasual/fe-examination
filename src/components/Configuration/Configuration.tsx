import { useState } from 'react';

import { configurationContent } from './constant';
import AccordionTab from './widgets/AccordionTab';
import CustomModal from '../../reusables/Modal';
import ClapSvg from '../../assets/svgs/clap.svg';
import { useModalHook } from '../../hooks';

const Configuration = () => {
  const [selected, setSelected] = useState(1);

  const { open, handleClose, handleOpen } = useModalHook();

  return (
    <div className='configuration center'>
      <h3>Select Configuration</h3>
      <div className='configuration__content'>
        {configurationContent.map((content) => (
          <div key={content.id}>
            <AccordionTab
              handleClick={() => setSelected(content.id)}
              content={content}
              selected={selected}
            />
          </div>
        ))}
        <div className='btn__group'>
          <button onClick={handleOpen} className='btn btn__primary'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <span>Update Configuration</span>
          </button>
          <button className='btn btn__outline'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </span>

            <span>Cancel</span>
          </button>
        </div>
      </div>

      {open && (
        <CustomModal backdropClose={handleClose}>
          <div className='configuration__modal'>
            <img src={ClapSvg} alt='clap' />
            <h3>Great Job!</h3>
            <p>Your configurations have been updated successfully.</p>
          </div>
        </CustomModal>
      )}
    </div>
  );
};

export default Configuration;
