import { LatLng, LeafletMouseEvent, type Map } from 'leaflet'
import { createLocationStore, mapStore, resetLocationStores } from '../../stores/mapStores'
import { addLocation } from '../../controllers/locationController'
import { Location } from '../../types'
import { pendingActionStore } from '../../stores/utilStores'

/* TODO: separate files */

function openCreateLocationModal(latlng: LatLng, map: Map) {
  const { lat, lng } = latlng
  createLocationStore.set({
    lat,
    lng
  })

  map.closePopup()
}

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

function roundLatLng(value: number, precision: number): number {
  return Number(value.toFixed(precision))
}

export function getLngText(lng: number, precision: number = 4): string {
  const direction = lng < 0 ? 'W' : 'E'
  return `${Math.abs(roundLatLng(lng, precision))} ${direction}`
}

export function getLatText(lat: number, precision: number = 4): string {
  const direction = lat < 0 ? 'S' : 'N'
  return `${Math.abs(roundLatLng(lat, precision))} ${direction}`
}

function getAddLocationBtn(latlng: LatLng, map: Map): HTMLElement {
  const { lat, lng } = latlng
  
  const addLocationBtn: HTMLElement = document.createElement('button')
  addLocationBtn.innerHTML = 'Add location<br>'
  addLocationBtn.innerHTML += getLngText(lng)
  addLocationBtn.innerHTML += '<br>'
  addLocationBtn.innerHTML += getLatText(lat)
  addLocationBtn.onclick = () => openCreateLocationModal(latlng, map)
  addLocationBtn.classList.add('btn', 'btn-primary', 'add-location-btn')
  
  return addLocationBtn
}

export function addMapEventListeners(map: Map): void {
  map.on('contextmenu', (e: LeafletMouseEvent) => {
    const { latlng } = e
    map.openPopup(getAddLocationBtn(latlng, map), latlng, {
      closeButton: false
    })
  })
}