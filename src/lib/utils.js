import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const parseJSON = (config: string, input: string) => {
  const objConfig = JSON.parse(config);
  const objInput = JSON.parse(input);
  const resObject: { ['string']?: unknown } = {};

  Object.keys(objConfig).forEach((key) => {
    if (objInput[key] === undefined) throw new Error("Input data does not have a key that is not in the config");
    else { resObject[key] = objInput[key]; }
  })

  return resObject;
}




export const parseData = (config: string, input: string, type: "json" | 'xml') => {
  let result, error

  console.log({ type })
  try {
    result = parseJSON(config, input);
  } catch (err) {
    error = err
  }

  return { result, error }
};