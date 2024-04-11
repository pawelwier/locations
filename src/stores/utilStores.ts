import { Writable, writable } from "svelte/store"
import { LocationActionEnum } from "../types"

export const pendingActionStore: Writable<LocationActionEnum | null> = writable(null)
