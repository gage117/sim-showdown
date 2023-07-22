import { useState } from "react";
import type { Brand, SensorType, ForceUnit } from "@prisma/client";
import { PedalType } from "@prisma/client";
import type { ActionArgs } from "@remix-run/node";
import { createPedal } from "~/models/pedal.server"
import { getBrands } from "~/models/brand.server"
import { getPlatforms } from "~/models/platform.server"
import { Form, useLoaderData } from "@remix-run/react";
import {
  Container,
  Stack,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  FormControlLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import FreeSoloCreateOption from "~/components/FreeSoloCreateOption";
import type {FreeSoloOptionType} from "~/components/FreeSoloCreateOption";
import AddNotes from "~/components/AddNotes";
import {
  PedalTypeLabels,
  SensorLabels,
  ForceUnitLabels,
} from "~/types/enumMaps";
import type { NewPedal, Platform } from "~/types";

const pedalTypeMap: {
  [key: string]: PedalType[]
} = {
  throttle: [
    PedalType.THROTTLE,
    PedalType.THROTTLE_BRAKE,
    PedalType.THREE_PEDAL,
    PedalType.PROGRAMMABLE
  ],
  brake: [
    PedalType.BRAKE,
    PedalType.THROTTLE_BRAKE,
    PedalType.THREE_PEDAL,
    PedalType.PROGRAMMABLE
  ],
  clutch: [
    PedalType.CLUTCH,
    PedalType.THREE_PEDAL,
    PedalType.PROGRAMMABLE
  ],
}

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const bodyObj = Object.fromEntries(body.entries());
  console.log(bodyObj);

  const platformsString = bodyObj.platforms as string;
  const platforms = platformsString.split(",").map((platform) => platform.trim());
  const notes = Object.entries(bodyObj).filter(([key, value]) => key.startsWith("note-")).map(([key, value]) => value as string);
  const pedal: NewPedal = {
    model: bodyObj.model as string,
    brand: bodyObj.brand as Brand['name'],
    price: parseInt(bodyObj.price as string),
    type: bodyObj.type as PedalType,
    throttle_sensor: bodyObj.throttle_sensor as SensorType,
    brake_sensor: bodyObj.brake_sensor as SensorType,
    clutch_sensor: bodyObj.clutch_sensor as SensorType,
    brake_sensor_load_max: parseInt(bodyObj.brake_sensor_load_max as string) || undefined,
    brake_sensor_load_unit: bodyObj.brake_sensor_load_unit as ForceUnit,
    heel_plate_included: bodyObj.heel_plate_included === "on",
    platforms: platforms as Platform['name'][],
    notes: notes,
  }
  const pedalResponse = await createPedal(pedal);
  return pedalResponse;
}

export const loader = async () => {
  try {
    const brands = await getBrands();
    const platforms = await getPlatforms();
    return {brands, platforms};
  }
  catch (error) {
    console.error(error);
    return new Response("Error");
  }
}

export default function PedalForm() {
  const pedalTypeSelectOptions = Object.entries(PedalTypeLabels).map(([key, value]) => ({ name: value, inputValue: key as PedalType }));
  const sensorTypeSelectOptions = Object.entries(SensorLabels).map(([key, value]) => ({ name: value, inputValue: key as SensorType }));
  const forceUnitSelectOptions = Object.entries(ForceUnitLabels).map(([key, value]) => ({ name: value, inputValue: key as ForceUnit }));

  const [pedalType, setPedalType] = useState<PedalType>(pedalTypeSelectOptions[0].inputValue);
  
  const response: {brands: Brand[], platforms: Platform[]} | Error = useLoaderData();
  if (response instanceof Error) {
    return <div>{response.message}</div>;
  }
  const brandInputOptions: FreeSoloOptionType[] = response.brands.map((brand) => ({ name: brand.name, inputValue: brand.name }));
  
  return (
    <Container maxWidth='xs' sx={{ margin: '70px auto'}}>
      <h1>Add a Pedal(set)</h1>
      <Form method="post">
        <Stack spacing={2}>
          <InputLabel htmlFor="type">Pedal Type *</InputLabel>
          <Select
            id="type"
            name="type"
            required
            defaultValue={pedalTypeSelectOptions[0].inputValue}
            onChange={(event) => {
              setPedalType(event.target.value as PedalType);
              return event;
            }}
          >
            {pedalTypeSelectOptions.map((option) => (
              <MenuItem key={option.inputValue} value={option.inputValue}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <FreeSoloCreateOption
            options={brandInputOptions}
            inputName="brand"
            inputLabel="Brand"
            required
          />
          <InputLabel htmlFor="model">Model *</InputLabel>
          <TextField
            id="model"
            name="model"
            required
          />
          <InputLabel htmlFor="price">Price (USD) *</InputLabel>
          <OutlinedInput
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            id="price"
            name="price"
            type="number"
            inputProps={{
              min: 0,
              step: 0.01,
            }}
            required
          />
          {pedalTypeMap.throttle.includes(pedalType) && (<>
            <InputLabel htmlFor="throttle_sensor">Throttle Sensor Type</InputLabel>
            <Select
              id="throttle_sensor"
              name="throttle_sensor"
              required
              defaultValue={sensorTypeSelectOptions[0].inputValue}
            >
              {sensorTypeSelectOptions.map((option) => (
                <MenuItem key={option.inputValue} value={option.inputValue}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </>)}
          {pedalTypeMap.brake.includes(pedalType) && (<>
          <InputLabel htmlFor="brake_sensor">Brake Sensor Type</InputLabel>
          <Select
            id="brake_sensor"
            name="brake_sensor"
            required
            defaultValue={sensorTypeSelectOptions[0].inputValue}
          >
            {sensorTypeSelectOptions.map((option) => (
              <MenuItem key={option.inputValue} value={option.inputValue}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <InputLabel htmlFor="brake_sensor_load_max">Brake Sensor Load Max</InputLabel>
          <Stack direction="row" spacing={2}>
            <Select
              id="brake_sensor_load_unit"
              name="brake_sensor_load_unit"
              required
              defaultValue={forceUnitSelectOptions[0].inputValue}
            >
              {forceUnitSelectOptions.map((option) => (
                <MenuItem key={option.inputValue} value={option.inputValue}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              id="brake_sensor_load_max"
              name="brake_sensor_load_max"
              type="number"
              inputProps={{
                step: 0.01,
              }}
              sx={{
                flexGrow: 1,
              }}
              defaultValue={0}
            />
          </Stack>
          </>)}
          {pedalTypeMap.clutch.includes(pedalType) && (<>
          <InputLabel htmlFor="clutch_sensor">Clutch Sensor Type</InputLabel>
          <Select
            id="clutch_sensor"
            name="clutch_sensor"
            required
            defaultValue={sensorTypeSelectOptions[0].inputValue}
          >
            {sensorTypeSelectOptions.map((option) => (
              <MenuItem key={option.inputValue} value={option.inputValue}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          </>)}
          <FormControlLabel control={<Checkbox id="heel_plate_included" name="heel_plate_included" />} label="Heel plate Included" />
          <InputLabel htmlFor="platforms">Platforms</InputLabel>
          <Select
            id="platforms"
            name="platforms"
            label="Platforms"
            multiple
            required
            renderValue={(selected) => (selected as string[]).join(', ')}
            defaultValue={['PC']}
          >
            {response.platforms.map((platform) => (
              <MenuItem key={platform.name} value={platform.name}>
                {platform.name}
              </MenuItem>
            ))}
          </Select>
          <AddNotes />
          <Button color="secondary" variant="contained" type="submit">Submit</Button>
        </Stack>
      </Form>
    </Container>
  );
}