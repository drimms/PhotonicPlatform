import { makeAutoObservable } from "mobx";


export default class AdminStore {
    adminPage: boolean = true;

    constructor() {
        makeAutoObservable(this);
      }
    
    setAdmin(adminPage: boolean) {
       this.adminPage = adminPage
    }

}