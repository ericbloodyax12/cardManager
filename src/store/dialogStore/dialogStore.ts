import {makeAutoObservable} from "mobx";

type TDialogState = {
  isVisible: boolean;
  headerTitle: string;
}
export class DialogStore {
  private _dialogState: TDialogState | null = null;

    constructor() {
      makeAutoObservable(this)
    }

  public get DialogState() {
      return this._dialogState;
  }

  openNewDialog(value: TDialogState) {
    this._dialogState = value;
  }

  closeDialog() {
    this._dialogState = null;
  }
}