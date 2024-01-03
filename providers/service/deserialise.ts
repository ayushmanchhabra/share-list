import { decompressService } from "providers";

export function deserialiseService<T>(data: string): T {
  return JSON.parse(decompressService(atob(data)));
}
