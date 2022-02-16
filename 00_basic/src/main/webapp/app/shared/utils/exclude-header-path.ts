export const excludeHeaderPath = (path: string): boolean => {
  const nonHeaderPath = ['/', '/login', '/register']
  return nonHeaderPath.includes(path)
}
