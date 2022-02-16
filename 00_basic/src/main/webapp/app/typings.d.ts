declare module '*.json' {
  const value: any
  export default value
}

declare module '*.svg?inline' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.jpg'
declare module '*.png'
declare module '*.gif'

declare module '@easylogic/react-summernote'
