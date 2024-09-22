import {makeAutoObservable} from "mobx";

export class DialogStore {
  private _isDialogVisible: boolean = false;

    constructor() {
      makeAutoObservable(this)
    }

  public get IsDialogVisible() {
      return this._isDialogVisible;
  }

  setIsDialogVisible(value: boolean) {
    this._isDialogVisible = value;
  }
}