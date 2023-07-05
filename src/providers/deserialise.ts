import { decompress } from "providers";

export function deserialise<T>(data: string): T {
  return JSON.parse(decompress(atob(data)));
}
