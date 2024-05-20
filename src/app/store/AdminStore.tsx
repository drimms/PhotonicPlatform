import { makeAutoObservable } from "mobx";


export default class AdminStore {
    adminPage: boolean = false;

    constructor() {
        makeAutoObservable(this);
      }
    
    setAdmin(adminPage: boolean) {
       this.adminPage = adminPage
    }

}