import { Location, LocationData } from "../types"
import { LocationUpdateData } from "../types/Location"
import { FetchMethod, fetchData } from "./controllerUtils"

// TODO: move to .env
const API_URL = 'http://localhost:5050'

export async function getLocations(): Promise<Location[]> {
  const url = `${API_URL}/locations`

  return await fetchData<Location[]>({
    url
  })
}

export async function addLocation(data: LocationData): Promise<Location> {
  const url = `${API_URL}/locations`
  const { name, lat, lng } = data
  
  return await fetchData<Location>({
    url,
    method: FetchMethod.POST,
    body: JSON.stringify({
      name,
      lat,
      lng
    })
  })
}

export async function removeLocation(id: string): Promise<void> {
  const url = `${API_URL}/locations/${id}`
  
  return await fetchData<void>({
    url,
    method: FetchMethod.DELETE
  })
}


export async function updateLocation(id: string, data: LocationUpdateData): Promise<void> {
  const url = `${API_URL}/locations/${id}`
  const { name, lat, lng } = data

  return await fetchData<void>({
    url,
    method: FetchMethod.PATCH,
    body: JSON.stringify({
      name,
      lat,
      lng
    })
  })
}