import { z } from "zod";

export const optionalString = z.string().trim().optional().or(z.literal("")); // accepts undefined or empty string

export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GenerelInfoValues = z.infer<typeof generalInfoSchema>; //creates a type from the z.object defined earlier

export const personalInfoSchema = z.object({
  //custom validation rules
  photo: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Must be an image file!",
    )
    .refine(
      (file) => !file || file.size <= 1024 * 1024 * 4,
      "File must be less then 4mb",
    ),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
});

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;

export const resumeSchema = z.object({
  ...generalInfoSchema.shape,
  ...personalInfoSchema.shape,
});

export type ResumeValues = Omit<z.infer<typeof resumeSchema>, "photo"> & {
  //we omit the original photo type and redeclare it with the new Type, resumeVals will be later send in bulk to the bkend
  id?: string;
  photo?: File | string | null;
};
