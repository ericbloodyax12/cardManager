import * as qs from 'qs';
import { toast } from 'react-toastify';
import { urlJoin } from 'url-join-ts';



import type { IApiService, RequestBehavior, ResponceBehavior, TMethod, TRequest, TRequestOptions } from './types';
import { ErrorService } from './error-service';



export class ApiService extends ErrorService implements IApiService {

  public readonly ApiUrl: string;

  constructor(
      private responseBehaviors: ResponceBehavior[] = [],
      private requestBehaviors: RequestBehavior[] = [],
      baseUrl: string
  ) {
    super();
    this.ApiUrl = baseUrl
  }

  public async get<T>(requestData: TRequest): Promise<T> {
    return await this.RequestHandler<T>(requestData.path, 'GET', undefined, requestData.headers, requestData.options);
  }

  public async post<T>({ path, body, headers, options }: TRequest): Promise<T> {
    return await this.RequestHandler(path, 'POST', body, headers, options);
  }

  public async put<T>({ path, body, headers, options }: TRequest): Promise<T> {
    return await this.RequestHandler(path, 'PUT', body, headers, options);
  }

  public async delete<T>({ path, body, headers, options }: TRequest): Promise<T> {
    return await this.RequestHandler(path, 'DELETE', body, headers, options);
  }

  public async patch<T>({ path, body, headers, options }: TRequest): Promise<T> {
    return await this.RequestHandler(path, 'PATCH', body, headers, options);
  }

  public sendBeacon(url: string, body: any) { // todo: натянуть на общую логику обработки запросов и ответов
    const headers = {
      type: this.DEFAULT_HEADER,
    };
    const blob = new Blob([JSON.stringify(body)], headers);
    window.navigator.sendBeacon(url, blob);
  }

  private async RequestHandler<T>(
      path: string,
      method: TMethod,
      body?: any,
      headers?: { [key: string]: string },
      options?: TRequestOptions
  ): Promise<T> {
    const resultHeaders = this.getRequestHeaders(headers); // todo: переместить в requestBehaviors
    await Promise.all(this.requestBehaviors.map((behavior) => behavior({ path, body, method, headers, options })));
    let baseResponse: Response | null = null;
    const stringifiedBody = JSON.stringify(body)
    try {
      baseResponse = await fetch(urlJoin(options?.baseUrl ?? this.ApiUrl, path),
          {
            headers: resultHeaders,
            method,
            body:stringifiedBody,
            credentials: options?.credentials ?? 'include',
          } as RequestInit);
    } catch (e: any) { // тут обрабатываются ошибки сети
      displayError();
      throw new Error(e);
    }
    return await this.ResponseHandler(baseResponse, options);
  }

  private async ResponseHandler<T>(
      response: Response,
      options?: TRequestOptions
  ): Promise<T> {
    if (!response.ok) {
      const behaviors = [
        super.UnauthorizeProcessingCookiesBehavior,
        super.InternalServerErrorProcessingBehavior,
      ];
      await Promise.all(behaviors.concat(this.responseBehaviors).map((behavior) => behavior(response, options?.isHideErrorCallback)));
      throw new Error();
    } else {
      if (response.status === 204) {
        return {} as T;
      }
      const data = options?.isBlob
          ? await response.blob()
          : (options?.isText)
              ? await response.text()
              : await response.json();
      return data as T;
    }
  }

  private getRequestHeaders(headers: { [key: string]: string } = { 'Content-Type': this.DEFAULT_HEADER }) {
    if (!('Content-Type' in headers)) {
      headers['Content-Type'] = this.DEFAULT_HEADER;
    } else if (headers['Content-Type'] === 'multipart/form-data') {
      delete headers['Content-Type']; // браузер сам поставит заголовок с корректным boundary
    }
    return Object.keys(headers).length !== 0 ? headers : undefined;
  }

  protected CreateQueryStringFrom(obj: any): string {
    const str = this._getQueryStringForSingleObject(obj);
    return "?" + str;
  }

  protected CreateFromQueryString(...arg: any[]): string {
    let result: string[] = [];
    arg.forEach(obj => {
      const str = this._getQueryStringForSingleObject(obj);
      result.push(str);
    });
    return "?" + result.join("&");
  }

  private _getQueryStringForSingleObject(obj: any) {
    for (const prop in obj) {
      if (obj[prop] === null || obj[prop] === undefined) {
        delete obj[prop];
      }
    } // todo: топорный вариант, попробовать через TS переписать
    const str = qs.stringify(obj,
        { allowDots: true }
    );
    return str;
  }

  private readonly DEFAULT_HEADER = "application/json; charset=utf-8";
}








const displayError = () => {
  toast.error("Ошибка сети");
  console.group("Ошибка сети.");
  // Вывод ошибки неверно указанного имени сервера
  console.group('net::ERR_NAME_NOT_RESOLVED');
  console.error('Не удалось подключиться к серверу.');
  console.log('Проверьте правильность написания имени сервера и повторите попытку.');
  console.groupEnd();

  // Вывод ошибки CORS
  console.group('CORS');
  console.error('Запрос был заблокирован из-за политики безопасности CORS.');
  console.log('Обратитесь к администратору сервера для разрешения этой проблемы.');
  console.groupEnd();

  // Вывод ошибки закрытых портов подключения
  console.group('Не удается получить доступ к сайту');
  console.error('Не удалось установить соединение с сервером из-за закрытых портов.');
  console.log('Убедитесь, что требуемые порты открыты и повторите попытку.');
  console.groupEnd();
  console.groupEnd();
}