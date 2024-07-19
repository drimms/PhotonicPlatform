import { action, makeAutoObservable, observable  } from 'mobx';
import AdminStore from './AdminStore';
import ModalStore from './ModalStore';
import LabStore from './LabStore';

export default class Store {  
  adminStore: AdminStore;
  modalStore: ModalStore;
  labStore: LabStore;

  constructor() {
    this.adminStore = new AdminStore();
    this.modalStore = new ModalStore();
    this.labStore = new LabStore();
  }
  
}

export const store = new Store();