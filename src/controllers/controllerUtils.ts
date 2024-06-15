import { FetchParams } from "../types"

export const defaultHeaders: Headers = new Headers()
defaultHeaders.set('Content-Type', 'application/json')

export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export async function fetchData<T>(fetchParams: FetchParams): Promise<T> {
  const { 
    url,
    method = FetchMethod.GET,
    headers = defaultHeaders,
    body 
  } = fetchParams
  const res = await fetch(url, {
    method,
    headers,
    body
  })

  return await res.json()
}