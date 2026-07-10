export const fdpProgrammes = Array.from({ length: 12 }, (_, i) => {
  const n = i + 1
  return {
    id: n,
    title: `Faculty Development Program ${n}`,
    description: 'Add Faculty Development Programme details here — title, dates, resource persons and a short summary.',
    isImage: n === 3,
  }
})
