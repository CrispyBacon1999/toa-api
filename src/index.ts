import axios from "axios";
import HTTPHeaders from "./util/HTTPHeaders";

const api_endpoint = "https://theorangealliance.com/api";

class API {
  private _api_key: string;
  private _app_name: string;

  constructor(api_key: string, application_name: string) {
    this._api_key = api_key;
    this._app_name = application_name;
  }

  headers(): HTTPHeaders {
    return {
      "Content-Type": "application/json",
      "X-TOA-Key": this._api_key,
      "X-Application-Origin": this._app_name
    };
  }

  async fetch<T>(url: string): Promise<T> {
    if (url.charAt(0) !== "/") {
      // If there is no leading slash, add one
      url = "/" + url;
    }

    return await axios.get(api_endpoint + url, { headers: this.headers() });
  }

  async getAPI(): Promise<string> {
    return await this.fetch<string>("/");
  }
}

export default API;
