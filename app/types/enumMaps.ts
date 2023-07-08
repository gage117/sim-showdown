const {
  SensorType,
  ForceUnit,
  PedalType,
  ForceFeedbackType,
  ShifterType,
  ShifterSpeedType,
  ShifterThrowType,
  HandbrakeMountingPosition,
} = require('@prisma/client');

export const SensorLabels = {
  [SensorType.POTENTIOMETER]: 'Potentiometer',
  [SensorType.HALL]: 'Hall Effect',
  [SensorType.LOAD_CELL]: 'Load Cell',
  [SensorType.HYDRAULIC_PRESSURE]: 'Hydraulic',
  [SensorType.INDUCTIVE]: 'Inductive',
  [SensorType.MAGNETIC]: 'Magnetic',
  [SensorType.OPTICAL]: 'Optical',
  [SensorType.OTHER]: 'Other',
  [SensorType.NONE]: 'None',
  [SensorType.NA]: 'Unknown',
};

export const ForceUnitLabels = {
  [ForceUnit.KG]: 'kg',
  [ForceUnit.LBS]: 'lbs',
  [ForceUnit.NEWTONS]: 'N',
  [ForceUnit.NM]: 'Nm',
  [ForceUnit.PSI]: 'psi',
  [ForceUnit.BAR]: 'bar',
  [ForceUnit.LB]: 'lb',
  [ForceUnit.LBFT]: 'lb-ft',
  [ForceUnit.LBIN]: 'lb-in',
  [ForceUnit.NA]: 'N/A',
  [ForceUnit.OTHER]: 'Other',
};

export const PedalTypeLabels = {
  [PedalType.THROTTLE]: 'Throttle',
  [PedalType.BRAKE]: 'Brake',
  [PedalType.CLUTCH]: 'Clutch',
  [PedalType.THROTTLE_BRAKE]: 'Throttle/Brake',
  [PedalType.THREE_PEDAL]: '3-Pedal',
  [PedalType.PROGRAMMABLE]: 'Programmable',
};

export const ForceFeedbackTypeLabels = {
  [ForceFeedbackType.GEAR]: 'Gear Driven',
  [ForceFeedbackType.BELT]: 'Belt Driven',
  [ForceFeedbackType.DIRECT_DRIVE]: 'Direct Drive',
  [ForceFeedbackType.NA]: 'N/A',
  [ForceFeedbackType.OTHER]: 'Other',
};

export const ShifterTypeLabels = {
  [ShifterType.H_PATTERN]: 'H-Pattern',
  [ShifterType.SEQUENTIAL]: 'Sequential',
  [ShifterType.SEQUENTIAL_HPATTERN]: 'Combo',
  [ShifterType.OTHER]: 'Other',
}

export const ShifterSpeedTypeLabels = {
  [ShifterSpeedType.FIVE_PLUS_REVERSE]: '5+R',
  [ShifterSpeedType.SIX_PLUS_REVERSE]: '6+R',
  [ShifterSpeedType.SEVEN_PLUS_REVERSE]: '7+R',
  [ShifterSpeedType.EIGHT_PLUS_REVERSE]: '8+R',
  [ShifterSpeedType.SEQUENTIAL]: 'SQ',
  [ShifterSpeedType.OTHER]: 'Other',
}

export const ShifterThrowTypeLabels = {
  [ShifterThrowType.SHORT]: 'Short',
  [ShifterThrowType.MEDIUM]: 'Medium',
  [ShifterThrowType.LONG]: 'Long',
  [ShifterThrowType.ADJUSTABLE]: 'Adjustable',
  [ShifterThrowType.OTHER]: 'Other',
}

export const HandbrakeMountingPositionLabels = {
  [HandbrakeMountingPosition.HORIZONTAL]: 'Horizontal',
  [HandbrakeMountingPosition.VERTICAL]: 'Vertical',
  [HandbrakeMountingPosition.VERTICAL_HORIZONTAL]: 'Adjustable',
  [HandbrakeMountingPosition.OTHER]: 'Other'
}