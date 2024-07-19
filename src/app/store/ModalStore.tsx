import { makeAutoObservable } from "mobx";


export default class ModalStore {
    modalShow: boolean = true;
    modalDelete: boolean = false;

    constructor() {
        makeAutoObservable(this);
      }
    
    setShow(modalShow: boolean) {
       this.modalShow = modalShow
    }

    setDelete(modalDelete: boolean) {
      this.modalDelete = modalDelete;
    }

}