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