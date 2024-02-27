import { LatLng } from "leaflet"

export type LocationData = {
  name: string
  latlng: LatLng
}

export type Location = {
  id: string // mongo id
  name: string
  latlng: LatLng
  /* 
    TODO:
    userIds: string[]
    ...
  */
}