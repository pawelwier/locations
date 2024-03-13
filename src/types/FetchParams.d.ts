export type FetchParams = {
  url: string,
  method?: Method,
  headers?: Headers,
  body?: JSON<unknown>
}