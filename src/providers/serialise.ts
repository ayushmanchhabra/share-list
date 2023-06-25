import { compress } from "providers";

export function serialise<T>(data: T): string {
  return btoa(compress(JSON.stringify(data)));
}
