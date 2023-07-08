import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import type { Prisma } from "@prisma/client";
import { getShifters } from '~/models/shifter.server';
import StyledDataGrid from "~/components/StyledDataGrid";
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { ShifterTypeLabels, ShifterSpeedTypeLabels, ShifterThrowTypeLabels, SensorLabels } from "~/types/enumMaps";
import { Container } from "@mui/material";
type GetShiftersReturnType = Prisma.PromiseReturnType<typeof getShifters>

const columns: GridColDef[] = [
  { field: 'model', headerName: 'Model', width: 200 },
  { field: 'brand', headerName: 'Brand', width: 120 },
  { field: 'type', headerName: 'Type', width: 150,
    valueFormatter: (params) => {
      return ShifterTypeLabels[params.value] || 'N/A'
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
  { field: 'speeds', headerName: 'Speeds', width: 150,
    valueFormatter: (params) => {
      const labels = params.value.map((speed: keyof typeof ShifterSpeedTypeLabels) => ShifterSpeedTypeLabels[speed]).join(', ')
      return labels
    }
  },
  { field: 'throw', headerName: 'Throw', width: 150,
    valueFormatter: (params) => {
      return ShifterThrowTypeLabels[params.value]
     }
  },
  { field: 'proprietary', headerName: 'Proprietary', width: 150, type: 'boolean' },
  { field: 'sensorType', headerName: 'Sensor Type', width: 150,
    valueFormatter: (params) => {
      return SensorLabels[params.value]
    }
  },
  { field: 'platforms', headerName: 'Platforms', width: 170 },
  { field: 'notes', headerName: 'Notes', width: 150 },
];


export const loader = async () => {
  return json({ pedals: await getShifters() })
}

export default function ShifterTable() {
  const {pedals} = useLoaderData()
  const rows: GridRowsProp = pedals.map((pedal: GetShiftersReturnType[0]) => {
    return {
      id: pedal.id,
      model: pedal.model,
      brand: pedal.brand.name,
      type: pedal.type,
      price: pedal.price,
      speeds: pedal.speeds,
      throw: pedal.throw,
      proprietary: pedal.proprietary,
      sensorType: pedal.sensorType,
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