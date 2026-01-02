export interface QueryParams {
  [key: string]: string | number | boolean
}

export interface ScrollToObjects {
  name: string
  date?: string
  id: string
  children?: ScrollToObjects[]
}
