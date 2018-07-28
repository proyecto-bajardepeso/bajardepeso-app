// import { MeasurementUnit } from "../measurement-unit/measurement-unit.model";

export interface Food {
    id: Number,
    name: String,
    image: String,
    stock?: Number,
    calories?: Number,
    ration_quantity?: Number,
    measurement_unit?: Number,
    associated_products?: Number[],
    measurement_unit_labels?: any
}