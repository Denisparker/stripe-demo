export default async function request<T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: {
    body?: {
      [key: string]: any
    }
    bodyFormData?: {
      [key: string]: any
    }
    apiKey?: boolean
    token?: string
    baseUrl?: string
    next?: RequestInit["next"]
    cache?: RequestInit["cache"]
  }
): Promise<{
  data: T | null
  error: {
    message: string
    statusCode?: number
  } | null
}> {
  try {

    const baseUrl = options?.baseUrl || process.env.NEXT_PUBLIC_BACKEND_URL
    const headers = {
      "Accept": "application/json"
    }
    let body: string | FormData | undefined = undefined

    if (options?.apiKey) {
      headers["X-Api-Key"] = process.env.NEXT_PUBLIC_X_API_KEY as string
    }

    if (options?.token) {
      headers["Authorization"] = `Bearer ${options.token}`
    }

    if (!options?.bodyFormData) {
      headers["Content-Type"] = "application/json;charset=UTF-8"
    }

    if (options?.body) {
      body = JSON.stringify(options.body)
    } else if (options?.bodyFormData) {
      const data = new FormData()

      for (const i in options.bodyFormData) {
        data.append(i, options.bodyFormData[i])
      }

      body = data
    }

    const res = await fetch(`${baseUrl}${url}`, {
      method,
      headers,
      body,
      cache: options?.cache,
      next: options?.next
    })

    const json = await res.json()

    if (json.statusCode < 200 || json.statusCode > 299) {
      return {
        data: null,
        error: json
      }
    }

    return {
      data: json,
      error: null
    }
  } catch (err) {
    return {
      data: null,
      error: {
        message: err
      }
    }
  }
}
