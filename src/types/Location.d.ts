import { LatLng } from "leaflet"

export type LocationData = {
  lat: number
  lng: number
  name?: string
}

export type LocationUpdateData = {
  lat?: number
  lng?: number
  name?: string
}

export type Location = {
  _id: { $oid: string } // mongo id
  name: string
  latlng: LatLng
  /* 
    TODO:
    userIds: string[]
    ...
  */
}
