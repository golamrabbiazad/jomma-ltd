import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortData(data: any[], field: string, ascending: boolean) {
  return [...data].sort((a, b) => {
    const order = ascending ? 1 : -1
    return a[field] < b[field] ? -order : a[field] > b[field] ? order : 0
  })
}
