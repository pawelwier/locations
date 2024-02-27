import { LatLng, LeafletMouseEvent, type Map } from 'leaflet'
import { addLocation } from '../../controllers/locationController'
import { Location } from '../../types'

/* TODO: separate files */

function createLocation(latlng: LatLng, map: Map): void {
  /* TODO: add name input */
  const name = 'new location'
  
  const locations: Location[] = addLocation({
    latlng,
    name
  })
  
  map.closePopup()
  map.fireEvent('marker-added', { locations })
}

function roundLatLng(value: number, precision: number = 4): number {
  return Number(value.toFixed(precision))
}

function getLngText(lng: number): string {
  const direction = lng < 0 ? 'W' : 'E'
  return `${Math.abs(roundLatLng(lng))} ${direction}`
}

function getLatText(lat: number): string {
  const direction = lat < 0 ? 'S' : 'N'
  return `${Math.abs(roundLatLng(lat))} ${direction}`
}

function getAddLocationBtn(latlng: LatLng, map: Map): HTMLElement {
  const { lat, lng } = latlng
  const addLocationBtn: HTMLElement = document.createElement('button')

  addLocationBtn.innerHTML = 'Add location<br>'
  addLocationBtn.innerHTML += getLngText(lng)
  addLocationBtn.innerHTML += '<br>'
  addLocationBtn.innerHTML += getLatText(lat)
  addLocationBtn.onclick = () => createLocation(latlng, map)
  addLocationBtn.classList.add('add-location-btn')
  
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