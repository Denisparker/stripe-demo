import clsx from "clsx"
import {twMerge} from "tailwind-merge"

export default function cn(...i: clsx.ClassValue[]) {
  return twMerge(clsx(i))
}
