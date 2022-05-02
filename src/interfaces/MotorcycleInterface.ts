import { z } from 'zod';

import { vehicleSchema } from './VehicleInterface';

const motorcycleSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().min(1).max(5).int(),
});

const MotorcycleType = z.intersection(vehicleSchema, motorcycleSchema);

type Motorcycle = z.infer<typeof MotorcycleType>;

export { MotorcycleType, Motorcycle };
