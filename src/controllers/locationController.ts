import { locations } from "../data";
import { Location, LocationData } from "../types";

export function getLocations(): Location[] {
  /* TODO: get db results */
  return locations
}

export function addLocation(data: LocationData): Location[] {
  /* TODO: add to db, return record */
  const location = {
    id: Math.random().toString(),
    ...data,
  }
  locations.push(location)

  return locations
}