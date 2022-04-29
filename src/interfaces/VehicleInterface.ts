import { z } from 'zod';

const vehicleSchema = z.object({
  model: z.string({ invalid_type_error: 'Model must be a string' })
    .min(3, { message: 'Model must be 3 or more characters long' }),
  year: z.number({ invalid_type_error: 'Year must be a number' })
    .gte(1900, { message: 'Year must be 1900 or more' })
    .lte(2022, { message: 'Year must be 2050 or less' }),
  color: z.string({ invalid_type_error: 'Color must be a string' })
    .min(3, { message: 'Color must be 3  or more characters long' }),
  status: z.boolean({ invalid_type_error: 'Status must be a boolean' })
    .optional(),
  buyValue: z.number({ invalid_type_error: 'buyValue must be a number' })
    .int({ message: 'buyValue must be an integer' }),
});

type Vehicle = z.infer<typeof vehicleSchema>;

export { vehicleSchema, Vehicle };
