import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getWheelbases } from '~/models/wheelbase.server';
import type { Wheelbase } from '~/types';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';

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
  { field: 'torque', headerName: 'Torque (Nm)', width: 120, type: 'number', align: 'right' },
  { field: 'drive_type', headerName: 'Drive Type', width: 150 },
  { field: 'swappable_wheels', headerName: 'Swappable Wheels', type: 'boolean', width: 150 },
  { field: 'platforms', headerName: 'Platforms', width: 170 },
  { field: 'degrees_of_rotation', headerName: 'Degrees of Rotation', width: 150 },
  { field: 'wheel_included', headerName: 'Wheel Included', type: 'boolean', width: 150 },
  { field: 'pedals_included', headerName: 'Pedals Included', type: 'boolean', width: 150 },
  { field: 'notes', headerName: 'Notes', width: 150 },
];


export const loader = async () => {
  return json({ wheelbases: await getWheelbases() })
}

export default function WheelbaseTable() {
  const {wheelbases} = useLoaderData()
  const rows: GridRowsProp = wheelbases.map((wheelbase: Wheelbase) => {
    return {
      id: wheelbase.id,
      model: wheelbase.model,
      brand: wheelbase.brand.name,
      price: wheelbase.price,
      torque: wheelbase.torque,
      drive_type: wheelbase.drive_type,
      swappable_wheels: wheelbase.swappable_wheels,
      platforms: wheelbase.platforms.map((platform) => platform.name).join(', '),
      degrees_of_rotation: wheelbase.degrees_of_rotation,
      wheel_included: wheelbase.wheel_included,
      pedals_included: wheelbase.pedals_included,
      notes: wheelbase.notes,
    }
  })
    
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </div>
  );
}