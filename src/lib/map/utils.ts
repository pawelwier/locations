import { LeafletMouseEvent, type Map } from 'leaflet'
import { contextMenuStore, contextMenuStoreDefault } from '../../stores/mapStores'

export function addMapEventListeners(map: Map): void {
  map.on('contextmenu', (e: LeafletMouseEvent) => {
    const {latlng, originalEvent: { clientX, clientY }} = e
    contextMenuStore.set({
      latlng,
      position: { x: clientX, y: clientY }
    })
  })

  map.on('click', (e: LeafletMouseEvent) => {
    contextMenuStore.set(contextMenuStoreDefault)
  })
}