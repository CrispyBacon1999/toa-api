import HTTPHeaders from "./util/HTTPHeaders";
declare class API {
    private _api_key;
    private _app_name;
    constructor(api_key: string, application_name: string);
    headers(): HTTPHeaders;
    fetch<T>(url: string): Promise<T>;
    getAPI(): Promise<string>;
}
export default API;
