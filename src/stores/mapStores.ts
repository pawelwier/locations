import { LatLngLiteral, Map } from "leaflet"
import { Writable, writable } from "svelte/store"
import { Location } from "../types"

export const mapStore: Writable<Map | null> = writable(null)
export const selectedLocationStore: Writable<Location | null> = writable(null)
export const createLocationStore: Writable<LatLngLiteral | null> = writable(null)