const imageModules = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

export function getImage(filename) {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith(`/${filename}`))
  return match ? match[1] : null
}
