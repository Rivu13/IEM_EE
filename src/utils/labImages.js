const labImageModules = import.meta.glob('../assets/images/lab*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

export function getLabImage(filename) {
  const match = Object.entries(labImageModules).find(([path]) => path.endsWith(`/${filename}`))
  return match ? match[1] : null
}
