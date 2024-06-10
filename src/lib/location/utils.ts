import { LatLng, type Map } from 'leaflet'
import { createLocationStore } from '../../stores/mapStores'

function openCreateLocationModal(latlng: LatLng, map: Map) {
  const { lat, lng } = latlng
  
  createLocationStore.set({
    lat,
    lng
  })

  map.closePopup()
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

export function getAddLocationBtn(latlng: LatLng, map: Map): HTMLElement {
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