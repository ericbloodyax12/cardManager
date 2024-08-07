import {UserTokensInfoI} from "@/dto/auth/auth-dto";


export type propertyPanelPositionType = { isVisible: boolean, position?: 'right' | 'down' | 'none' };
export type TDataType<T> = Extract<StorageType, { name: T }>['data'];
export type TDataKeysUnionType<T> = keyof TDataType<T>;
export interface ILoadedReferences {
  [id: number]: boolean,
}

export enum StorageTypeNames {
  UserToken = 'userToken'

  // ConfigGuid = 'configGuid' // гуид конфигурации из-под которой был выполнен последний успешный вход
}

export type StorageType =
    {name: StorageTypeNames.UserToken, data: UserTokensInfoI | undefined}
// | { name: StorageTypeNames.ConfigGuid, data: string }
// | { name: StorageTypeNames.GantTaskInfo, data: { [key: string]: {currentSelectedTask?: TTaskType, expandedTasksKeys?: string[]} }}
// | { name: StorageTypeNames.GanttDiagramPosition, data: {[key: string]: {scaleType?: TScaleTypes, position?: {top: number; left: number}, scaleElementWidth?: number}}}
    ;


export class StorageHelper {
  private static readonly _storage = window.localStorage;
  static getData<K extends StorageTypeNames>(type: K): TDataType<K> | null;

  static getData(type: StorageTypeNames) {
    let data: string | null = null;
    data = this._storage.getItem(type);
    return data ? JSON.parse(data) : null;
  }

  static setData<T>(type: { name: StorageTypeNames, data: TDataType<T> }): void {
    if (type.data === undefined)
      throw new Error("Необходимо задать данные при работе с localStorage");
    this._storage.setItem(type.name, JSON.stringify(type.data));
  }

  static remove(type: StorageType): void;
  static remove(type: StorageTypeNames): void;
  static remove(type: StorageType | StorageTypeNames) {
    let name: string | null = null;
    if (typeof type === 'string')
      name = type;
    else
      name = type.name;

    const obj = this._storage.getItem(name);
    if (!obj)
      return;
    this._storage.removeItem(name);
  }
}
