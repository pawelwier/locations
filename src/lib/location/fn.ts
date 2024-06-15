import { createLocationStore, mapStore, selectedLocationStore } from '../../stores/mapStores'
import { addLocation, removeLocation, updateLocation } from '../../controllers/locationController'
import { pendingActionStore } from '../../stores/utilStores'
import { Location } from '../../types'
import { LocationUpdateData } from '../../types/Location'

export async function createLocation(name: string, lat: number, lng: number): Promise<Location> {
  const location: Location = await addLocation({
    lat,
    lng,
    name
  })
  
  mapStore.subscribe(map => map && map.fireEvent('marker-added', { location }))
  createLocationStore.set(null)
  pendingActionStore.set(null)
  
  return location
}

export async function deleteLocation(location: Location | null): Promise<void> {
  if (!location) return
  await removeLocation(location._id.$oid)

  mapStore.subscribe(map => map && map.fireEvent('marker-removed', { location }))
  selectedLocationStore.set(null)
  pendingActionStore.set(null)
}

export async function editLocation(id: string, updateData: LocationUpdateData): Promise<void> {
  await updateLocation(id, updateData)

  mapStore.subscribe(map => map && map.fireEvent('marker-updated', { updateData }))
  selectedLocationStore.set(null)
  pendingActionStore.set(null)
}