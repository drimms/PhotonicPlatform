import { action, makeAutoObservable, observable  } from 'mobx';
import AdminStore from './AdminStore';

export default class Store {  
  adminStore: AdminStore

  constructor() {
    this.adminStore = new AdminStore()
  }
  
}

export const store = new Store();