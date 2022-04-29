import { z } from 'zod';

import { vehicleSchema } from './VehicleInterface';

const motorcycleSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z
    .number({ invalid_type_error: 'EngineCapacity must be a number' })
    .gt(0, { message: 'EngineCapacity must be greater than 0' })
    .lte(5, { message: 'EngineCapacity must be equal or less than 2500' })
    .int({ message: 'EngineCapacity must be an integer' }),
});

const MotorcycleType = z.intersection(vehicleSchema, motorcycleSchema);

type Motorcycle = z.infer<typeof MotorcycleType>;

export { MotorcycleType, Motorcycle };
