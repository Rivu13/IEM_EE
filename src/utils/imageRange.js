export function imageRange(prefix, start, count, ext = 'png') {
  return Array.from({ length: count }, (_, i) => `${prefix}${start + i}.${ext}`)
}
