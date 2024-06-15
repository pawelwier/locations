import { LeafletMouseEvent, type Map, LeafletEvent, marker, Marker, LatLng } from 'leaflet'
import { Location } from '../../types'
import { getAddLocationBtn } from '../location/utils'
import { selectedLocationStore } from '../../stores/mapStores'

export function isSameMarker(latlng1: LatLng, latlng2: LatLng): boolean {
  const { lat: lat1, lng: lng1 } = latlng1
  const { lat: lat2, lng: lng2 } = latlng2
  return lat1 === lat2 && lng2 === lng2
}

export function addMapEventListeners(map: Map): void {
  map.on('contextmenu', (e: LeafletMouseEvent) => {
    const { latlng } = e
    map.openPopup(getAddLocationBtn(latlng, map), latlng, {
      closeButton: false
    })
  })
  
  map.on('marker-added', async (e: LeafletEvent) => {
    const event = e as unknown as { location: Location }
    const { location } = event
    const locationMarker: Marker = marker(location.latlng).addTo(map)

    locationMarker.on('click', () => {
      selectedLocationStore.set(location)
    })

    console.log('new location:', location.name, 'created')
  })

  map.on('marker-removed', async (e: LeafletEvent) => {
    const event = e as unknown as { location: Location }
    map.eachLayer(layer => {
      const marker = layer as Marker
      if (marker.getLatLng && isSameMarker(marker.getLatLng(), event.location.latlng)) {
        map.removeLayer(marker)
      }
    })

    console.log('new location:', event.location.name, 'removed')
  })
}