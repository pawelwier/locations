import { LeafletMouseEvent, type Map, LeafletEvent } from 'leaflet'
import { Location } from '../../types'
import { getAddLocationBtn } from '../location/utils'

export function addMapEventListeners(
  map: Map, markerCb: (m: Map) => Promise<void>
): void {
  map.on('contextmenu', (e: LeafletMouseEvent) => {
    const { latlng } = e
    map.openPopup(getAddLocationBtn(latlng, map), latlng, {
      closeButton: false
    })
  })
  map.on('marker-added', async (e: LeafletEvent) => {
    await markerCb(map)
    const event = e as unknown as { location: Location }

    // TODO: add alert modal
    console.log('new location:', event.location.name, 'created')
  })
  map.on('marker-removed', async (e: LeafletEvent) => {
    await markerCb(map)
  })
}