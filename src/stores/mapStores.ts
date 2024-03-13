import { Writable, writable } from "svelte/store"
import { Location } from "../types"

export const selectedLocationStore: Writable<Location | null> = writable(null)