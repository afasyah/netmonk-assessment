export interface ModalBookingPropsInterface {
   active: boolean;
   loading: boolean;
   closeModal: () => void;
   onSubmit: (payload: string) => void;
}
