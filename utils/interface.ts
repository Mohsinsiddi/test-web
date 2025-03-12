export interface Location {
  address1: string
  address2: string
  country: string
  state: string
  city: string
  pincode: string
}

export type ServiceDetail = {
  label: string
  value: string
}

export type TabData = {
  [key: string]: {
    service: string
    location: string
    details: ServiceDetail[]
  }[]
}
