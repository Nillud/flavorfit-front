export function getClearData(object: object) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => key !== '__typename')
  )
}
