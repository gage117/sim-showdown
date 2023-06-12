import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getPedals } from '~/models/pedal.server';
import type { Pedal } from '~/types';
import StyledDataGrid from "~/components/StyledDataGrid";
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { ForceUnitLabels, PedalTypeLabels, SensorLabels } from "~/types/enumMaps";
import { Container } from "@mui/material";

const columns: GridColDef[] = [
  { field: 'model', headerName: 'Model', width: 200 },
  { field: 'brand', headerName: 'Brand', width: 120 },
  { field: 'type', headerName: 'Type', width: 150,
    valueFormatter: (params) => {
      return PedalTypeLabels[params.value]
    }
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    align: 'right',
    width: 150,
    valueFormatter: (params) => {
      return `$${params.value.toFixed(2)}`
     },
  },
  { field: 'throttle_sensor', headerName: 'Throttle Sensor', width: 150,
    valueFormatter: (params) => {
      return SensorLabels[params.value]
    }
  },
  { field: 'brake_sensor', headerName: 'Brake Sensor', width: 150,
    valueFormatter: (params) => {
      console.log(params.value);
      
      return SensorLabels[params.value]
     }
  },
  { field: 'clutch_sensor', headerName: 'Clutch Sensor', width: 150,
    valueFormatter: (params) => {
      return SensorLabels[params.value]
    }
  },
  { field: 'brake_sensor_load_max', headerName: 'Brake Max Force', type: 'number', width: 150 },
  { field: 'brake_sensor_load_unit', headerName: 'Brake Force Unit', width: 150,
    valueFormatter: (params) => {
      return ForceUnitLabels[params.value]
    }
  },
  { field: 'heel_plate_included', headerName: 'Heel Plate Included', type: 'boolean', width: 150 },
  { field: 'platforms', headerName: 'Platforms', width: 170 },
  { field: 'notes', headerName: 'Notes', width: 150 },
];


export const loader = async () => {
  return json({ pedals: await getPedals() })
}

export default function PedalTable() {
  const {pedals} = useLoaderData()
  const rows: GridRowsProp = pedals.map((pedal: Pedal) => {
    return {
      id: pedal.id,
      model: pedal.model,
      brand: pedal.brand.name,
      type: pedal.type,
      price: pedal.price,
      throttle_sensor: pedal.throttle_sensor,
      brake_sensor: pedal.brake_sensor,
      brake_sensor_load_max: pedal.brake_sensor_load_max,
      brake_sensor_load_unit: pedal.brake_sensor_load_unit,
      clutch_sensor: pedal.clutch_sensor,
      platforms: pedal.platforms.map((platform) => platform.name).join(', '),
      heel_plate_included: pedal.heel_plate_included,
      notes: pedal.notes,
    }
  })
    
  return (
    <Container maxWidth="xl" style={{ margin: '20px auto' }}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        sx={{ maxHeight: '85vh'}}
      />
    </Container>
  );
}