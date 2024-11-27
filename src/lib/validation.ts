import { z } from "zod";

export const optionalString = z.string().trim().optional().or(z.literal("")); // accepts undefined or empty string

export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GenerelInfoValues = z.infer<typeof generalInfoSchema>; //creates a type from the z.object defined earlier
