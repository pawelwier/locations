import { LatLng, LatLngLiteral } from "leaflet";
import { Writable, writable } from "svelte/store";

type ContextMenuStore = {
  latlng: LatLngLiteral,
  position: { x: number | null, y: number | null }
}

export const contextMenuStoreDefault: ContextMenuStore = {
  latlng: {
    lat: 0,
    lng: 0
  },
  position: {
    x: null,
    y: null
  }
}

export const contextMenuStore: Writable<ContextMenuStore> = writable(contextMenuStoreDefault)