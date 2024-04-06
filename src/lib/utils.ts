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
    else resObject[key] = objInput[key];
  })

  return resObject;
}

const parseXML = (config: string, input: string) => {
}



export const parseData = (config: string, input: string, type: "xml" | "json") => {
  let result, error

  try {
    result = type === "xml" ? parseXML(config, input) : parseJSON(config, input);
  } catch (err) {
    error = err
  }

  return { result, error }
};