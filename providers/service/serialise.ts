import { compressService } from "providers";

export function serialiseService<T>(data: T): string {
  return btoa(compressService(JSON.stringify(data)));
}
