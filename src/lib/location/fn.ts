import { createLocationStore, mapStore } from '../../stores/mapStores'
import { addLocation, removeLocation } from '../../controllers/locationController'
import { pendingActionStore } from '../../stores/utilStores'
import { Location } from '../../types'

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

export async function deleteLocation(id: string): Promise<void> {
  await removeLocation(id)

  mapStore.subscribe(map => map && map.fireEvent('marker-removed'))
  createLocationStore.set(null)
  pendingActionStore.set(null)
}