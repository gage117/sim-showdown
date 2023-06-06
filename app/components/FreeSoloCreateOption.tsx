import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { InputLabel } from '@mui/material';

export type FreeSoloOptionType = {
  name: string;
  inputValue?: string;
}

const filter = createFilterOptions<FreeSoloOptionType>();

export default function FreeSoloCreateOption({ options, inputName, inputLabel, required }: { options: FreeSoloOptionType[], inputName: string, inputLabel: string, required?: boolean }) {
  const [value, setValue] = useState<FreeSoloOptionType | null>(null);

  return (<>
    <InputLabel htmlFor={inputName}>{inputLabel}{required ? ' *' : ''}</InputLabel>
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            name: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={inputName}
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} name={inputName} required={required} />
      )}
    />
  </>);
}