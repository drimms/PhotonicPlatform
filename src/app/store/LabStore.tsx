import { makeAutoObservable } from "mobx";


export default class LabStore {
    loadPage: boolean = true;

    theory: object = [];
    practice: object = [];
    question: object = [];

    constructor() {
        makeAutoObservable(this);
      }
    
    setAdmin(loadPage: boolean) {
       this.loadPage = loadPage
    }

    setTheory(theory: object) {
      this.theory = theory
    }

    setPractice(practice: object) {
      this.practice = practice
    }

    setQuest(question: object) {
      this.question = question
    }

}