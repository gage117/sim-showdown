import { ForceFeedbackType } from "@prisma/client";

export type Brand = {
  id: number;
  name: string;
  slug: string;
  wheelbases?: Wheelbase[];
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Wheelbase = {
  id: number;
  slug: string;
  model: string;
  brandId: number;
  brand: Brand;
  price: number;
  torque?: number;
  drive_type: string;
  swappable_wheels: boolean;
  platforms: Platform[];
  degrees_of_rotation?: string;
  wheel_included: boolean;
  pedals_included: boolean;
  notes?: string[];
};

export type NewWheelbase = {
  model: string;
  brand: Brand['name'];
  price: number;
  torque: number;
  drive_type: ForceFeedbackType;
  swappable_wheels: boolean;
  platforms: Platform['name'][];
  degrees_of_rotation: string;
  wheel_included: boolean;
  pedals_included: boolean;
  notes?: string[];
};

const { PedalType, SensorType, ForceUnit } = require('@prisma/client');

export type Pedal = {
  id: number;
  slug: string;
  model: string;
  brandId: number;
  brand: Brand;
  type: typeof PedalType;
  price: number;
  throttle_sensor: typeof SensorType;
  brake_sensor: typeof SensorType;
  brake_sensor_load_max?: number;
  brake_sensor_load_unit?: typeof ForceUnit;
  clutch_sensor: typeof SensorType;
  heel_plate_included: boolean;
  platforms: Platform[];
  notes?: string[];
};