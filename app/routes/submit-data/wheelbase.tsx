import { useState } from "react";
import type { Brand, ForceFeedbackType } from "@prisma/client";
import type { ActionArgs } from "@remix-run/node";
import { createWheelbase } from "~/models/wheelbase.server"
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
} from "@mui/material";
import FreeSoloCreateOption from "~/components/FreeSoloCreateOption";
import type {FreeSoloOptionType} from "~/components/FreeSoloCreateOption";
import { ForceFeedbackTypeLabels } from "~/types/enumMaps";
import type { NewWheelbase, Platform } from "~/types";

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const bodyObj = Object.fromEntries(body.entries());
  
  const platformsString = bodyObj.platforms as string;
  const platforms = platformsString.split(",").map((platform) => platform.trim());
  const wheelbase: NewWheelbase = {
    model: bodyObj.model as string,
    brand: bodyObj.brand as Brand['name'],
    price: parseInt(bodyObj.price as string),
    torque: bodyObj.torque ? parseInt(bodyObj.torque as string) : undefined,
    drive_type: bodyObj.drive_type as ForceFeedbackType,
    swappable_wheels: bodyObj.swappable_wheels === "on",
    degrees_of_rotation: bodyObj.degrees_of_rotation as string,
    wheel_included: bodyObj.wheel_included === "on",
    pedals_included: bodyObj.pedals_included === "on",
    platforms: platforms as Platform['name'][],
  }
  const wheelbaseResponse = await createWheelbase(wheelbase);
  return wheelbaseResponse;
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
  

export default function WheelbaseForm() {
  const response: {brands: Brand[], platforms: Platform[]} | Error = useLoaderData();
  if (response instanceof Error) {
    return <div>{response.message}</div>;
  }
  const brandInputOptions: FreeSoloOptionType[] = response.brands.map((brand) => ({ name: brand.name, inputValue: brand.name }));
  const driveTypeOptions = Object.entries(ForceFeedbackTypeLabels).map(([key, value]) => ({ name: value, inputValue: key }));
  
  return (
    <Container maxWidth='xs' sx={{ margin: '70px auto'}}>
      <h1>Add a Wheelbase</h1>
      <Form method="post">
        <Stack spacing={2}>
          <FreeSoloCreateOption
            options={brandInputOptions}
            inputName="brand"
            inputLabel="Brand"
            required
          />
          <TextField
            id="model"
            name="model"
            label="Model"
            required
          />
          <TextField
            id="price"
            name="price"
            label="Price (USD)"
            type="number"
            inputProps={{
              step: 0.01,
            }}
            required
          />
          <TextField
            id="torque"
            name="torque"
            label="Torque (Nm)"
            type="number"
          />
          <InputLabel htmlFor="drive_type">Drive Type</InputLabel>
          <Select
            id="drive_type"
            name="drive_type"
            required
            defaultValue={driveTypeOptions[0].inputValue}
          >
            {driveTypeOptions.map((option) => (
              <MenuItem key={option.inputValue} value={option.inputValue}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <FormControlLabel control={<Checkbox id="swappable_wheels" name="swappable_wheels" />} label="Swappable Wheels" />
          <DegreesOfRotation />
          <FormControlLabel control={<Checkbox id="wheel_included" name="wheel_included" />} label="Wheel Included" />
          <FormControlLabel control={<Checkbox id="pedals_included" name="pedals_included" />} label="Pedals Included" />
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
          <Button color="secondary" variant="contained" type="submit">Submit</Button>
        </Stack>
      </Form>
    </Container>
  );
}

function DegreesOfRotation() {
  const [inputDisabled, setInputDisabled] = useState<"number" | null>(null);
  
  return (
    <Stack direction="row" alignItems='center' gap={2}>
      <TextField
        id="degrees_of_rotation"
        name="degrees_of_rotation"
        label="Degrees of Rotation"
        type="number"
        disabled={inputDisabled === "number"}
        onChange={(event) => {
          if (Number(event.target.value) < 0) {
            event.target.value = '0';
          }
          return event;
        }}
        sx={{ flexGrow: 1 }}
      />       
      <FormControlLabel control={
        <Checkbox
          id="infinite"
          name="infinite"
          onChange={(event) => {
            if (event.target.checked) {
              setInputDisabled('number');
            }
            else {
              setInputDisabled(null);
            }
            return event;
          }}
        />
      } label="Infinite" />
    </Stack>
  );
}