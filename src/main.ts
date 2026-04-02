export const httpsets: HTTPSets = {
    /**
    * A simple wrapper around the Fetch API to make HTTP requests easier.
    * Each method returns a promise that resolves to an object containing the JSON response and the HTTP status code.
    * @param url The URL to which the request is sent.
    * @param headers Optional headers to include in the request.
    */
  async GET<T>(url: string, headers?: Record<string, string>) {
    const res = await fetch(url, { method: "GET", headers });
    const json = (await res.json()) as T;

    return {
      json,
      status: res.status,
      headers: res.headers
    };
  },
  /**
    * A simple wrapper around the Fetch API to make HTTP requests easier.
    * Each method returns a promise that resolves to an object containing the JSON response and the HTTP status code.
    * @param url The URL to which the request is sent.
    * @param headers Optional headers to include in the request.
    * @param body Optional body to include in the request (for POST and PUT requests).
    */
  async POST<T>(url: string, headers?: Record<string, string>, body?: unknown) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(headers ?? {}),
      },
      body: JSON.stringify(body),
    });

    const json = (await res.json()) as T;

    return {
      json,
      status: res.status,
      headers: res.headers
    };
  },
  /**
    * A simple wrapper around the Fetch API to make HTTP requests easier.
    * Each method returns a promise that resolves to an object containing the JSON response and the HTTP status code.
    * @param url The URL to which the request is sent.
    * @param headers Optional headers to include in the request.
    * @param body Optional body to include in the request (for POST and PUT requests).
    */
  async PUT<T>(url: string, headers?: Record<string, string>, body?: unknown) {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(headers ?? {}),
      },
      body: JSON.stringify(body),
    });

    const json = (await res.json()) as T;

    return {
      json,
      status: res.status,
      headers: res.headers
    };
  },
    /**
    * A simple wrapper around the Fetch API to make HTTP requests easier.
    * Each method returns a promise that resolves to an object containing the JSON response and the HTTP status code.
    * @param url The URL to which the request is sent.
    * @param headers Optional headers to include in the request.
    * @module httpsets
    */
  async DELETE<T>(url: string, headers?: Record<string, string>) {
    const res = await fetch(url, { method: "DELETE", headers });
    const json = (await res.json()) as T;

    return {
      json,
      status: res.status,
      headers: res.headers
    };
  },
};



interface HTTPSets {
    GET<T>(url: string, headers?: Record<string, string>): Promise<{ json: T; status: number }>;
    POST<T>(url: string, headers?: Record<string, string>, body?: unknown): Promise<{ json: T; status: number }>;
    PUT<T>(url: string, headers?: Record<string, string>, body?: unknown): Promise<{ json: T; status: number }>;
    DELETE<T>(url: string, headers?: Record<string, string>): Promise<{ json: T; status: number }>;
}