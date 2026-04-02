export const httpsets: HTTPSets = {
  async GET<T>(url: string, headers?: Record<string, string>) {
    const res = await fetch(url, { method: "GET", headers });
    const json = (await res.json()) as T;

    return {
      json,
      status: res.status,
    };
  },

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
    };
  },

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
    };
  },

  async DELETE<T>(url: string, headers?: Record<string, string>) {
    const res = await fetch(url, { method: "DELETE", headers });
    const json = (await res.json()) as T;

    return {
      json,
      status: res.status,
    };
  },
};



interface HTTPSets {
    GET<T>(url: string, headers?: Record<string, string>): Promise<{ json: T; status: number }>;
    POST<T>(url: string, headers?: Record<string, string>, body?: unknown): Promise<{ json: T; status: number }>;
    PUT<T>(url: string, headers?: Record<string, string>, body?: unknown): Promise<{ json: T; status: number }>;
    DELETE<T>(url: string, headers?: Record<string, string>): Promise<{ json: T; status: number }>;
}