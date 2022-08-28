import React, { FormEvent, useState } from 'react';

export const ModalBooking = ({
   active,
   loading,
   closeModal,
   onSubmit,
}: any) => {
   const [content, setContent] = useState('');

   const handleInputContent = (_e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(_e.target.value);
   };

   return (
      <div
         className={`modal__booking-wrapper ${
            active && 'modal__booking--active'
         }`}>
         <div className="modal__booking">
            <div className="modal__title">
               <p>Book as the creator of this website</p>
            </div>

            <div className="modal__profile">
               <img
                  src="/images/pp-666.png"
                  alt="Alifya Difa Afasyah"
                  width={120}
                  height={120}
               />

               <h4>A. D. Afasyah</h4>
               <a
                  href="https://www.linkedin.com/in/adafasyah"
                  target={'_blank'}
                  rel="noreferrer">
                  linkedin.com/in/adafasyah
               </a>
            </div>

            <div className="modal__text-box">
               <textarea
                  rows={7}
                  draggable={false}
                  onChange={handleInputContent}></textarea>
            </div>

            <div className="modal__actions">
               <button
                  className="button--color-primary button--large button--full"
                  disabled={loading}
                  onClick={() => onSubmit(content)}>
                  {loading ? 'Loading...' : 'Submit'}
               </button>
            </div>

            <button className="close-button" onClick={closeModal}>
               <img src="/images/close.png" alt="close" />
            </button>
         </div>
      </div>
   );
};

export default ModalBooking;
