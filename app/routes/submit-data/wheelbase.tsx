import { useState } from "react";
import type { Brand, ForceFeedbackType } from "@prisma/client";
import type { ActionArgs } from "@remix-run/node";
import { createWheelbase } from "~/models/wheelbase.server"
import { getBrands } from "~/models/brand.server"
import { getPlatforms } from "~/models/platform.server"
import { Form, useLoaderData } from "@remix-run/react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  NativeSelect,
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
    torque: parseInt(bodyObj.torque as string),
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
    <Container>
      <h1>Wheelbase Form</h1>
      <Form method="post">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FreeSoloCreateOption
              options={brandInputOptions}
              inputName="brand"
              inputLabel="Brand"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="model"
              name="model"
              label="Model"
              required
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="torque"
              name="torque"
              label="Torque (Nm)"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="drive_type">Drive Type</InputLabel>
            <NativeSelect id="drive_type" name="drive_type" required>
              {driveTypeOptions.map((option) => (
                <option key={option.inputValue} value={option.inputValue}>
                  {option.name}
                </option>
              ))}
            </NativeSelect>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox id="swappable_wheels" name="swappable_wheels" />} label="Swappable Wheels" />
          </Grid>
          <DegreesOfRotation />
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox id="wheel_included" name="wheel_included" />} label="Wheel Included" />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox id="pedals_included" name="pedals_included" />} label="Pedals Included" />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

function DegreesOfRotation() {
  const [inputDisabled, setInputDisabled] = useState<"number" | null>(null);
  
  return (
    <Grid item xs={12}>
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
    </Grid>
  );
}