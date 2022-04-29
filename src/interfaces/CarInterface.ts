import { z } from 'zod';

import { vehicleSchema } from './VehicleInterface';

const carSchema = z.object({
  doorsQty: z.number({ invalid_type_error: 'DoorsQty must be a number' })
    .gte(2, { message: 'DoorsQty must be 2 or more' })
    .lte(4, { message: 'DoorsQty must be 4 or less' }),
  seatsQty: z.number({ invalid_type_error: 'SeatQty must be a number' })
    .gte(2, { message: 'SeatQty must be 2 or more' })
    .lte(7, { message: 'SeatQty must be 7 or less' }),
});

const CarType = z.intersection(vehicleSchema, carSchema);

type Car = z.infer<typeof CarType>;

export { CarType, Car };
