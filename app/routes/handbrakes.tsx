import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import type { Prisma } from "@prisma/client";
import { getHandbrakes } from '~/models/handbrake.server';
import StyledDataGrid from "~/components/StyledDataGrid";
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { HandbrakeMountingPositionLabels, SensorLabels } from "~/types/enumMaps";
import { Container } from "@mui/material";
type GetHanbrakesReturnType = Prisma.PromiseReturnType<typeof getHandbrakes>

const columns: GridColDef[] = [
  { field: 'model', headerName: 'Model', width: 200 },
  { field: 'brand', headerName: 'Brand', width: 120 },
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
  { field: 'mountingPosition', headerName: 'Mounting Position', width: 150,
    valueFormatter: (params) => {
      return HandbrakeMountingPositionLabels[params.value] || 'N/A'
     }
  },
  { field: 'sensorType', headerName: 'Sensor Type', width: 150,
    valueFormatter: (params) => {
      return SensorLabels[params.value]
    }
  },
  { field: 'adjustableAngle', headerName: 'Adjustable Angle', width: 150, type: 'boolean' },
  { field: 'adjustableTravel', headerName: 'Adjustable Travel', width: 150, type: 'boolean' },
  { field: 'adjustablePressure', headerName: 'Adjustable Pressure', width: 150, type: 'boolean' },
  { field: 'platforms', headerName: 'Platforms', width: 170 },
  { field: 'notes', headerName: 'Notes', width: 150 },
];


export const loader = async () => {
  return json({ pedals: await getHandbrakes() })
}

export default function ShifterTable() {
  const {pedals} = useLoaderData()
  const rows: GridRowsProp = pedals.map((pedal: GetHanbrakesReturnType[0]) => {
    return {
      id: pedal.id,
      model: pedal.model,
      brand: pedal.brand.name,
      price: pedal.price,
      mountingPosition: pedal.mountingPosition,
      sensorType: pedal.sensorType,
      adjustableAngle: pedal.adjustableAngle,
      adjustableTravel: pedal.adjustableTravel,
      adjustablePressure: pedal.adjustablePressure,
      platforms: pedal.platforms.map((platform) => platform.name).join(', '),
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