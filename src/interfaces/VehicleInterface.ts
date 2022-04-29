import { z } from 'zod';

const vehicleSchema = z.object({

});

type Vehicle = z.infer<typeof vehicleSchema>;

export { vehicleSchema, Vehicle };
