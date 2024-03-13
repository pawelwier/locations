import { Location, LocationData } from "../types"
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
  return await fetchData<Location>({
    url,
    method: FetchMethod.POST,
    body: JSON.stringify(data)
  })
}