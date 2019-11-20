export interface Opts {
  format: string
  name: string
  type: string
  fileType: string
}

export const capitalize = (value: string): string => {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

export const deCapitalize = (value: string): string => {
  return `${value.toLowerCase()}`
}
