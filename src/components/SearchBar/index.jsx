import { Autocomplete, TextField } from '@mui/material';

import { MOCK_DATA } from './constants';

import './index.scss';

export const SearchBar = () => {
  return (
    <div className='search'>
      <p>Our Search</p>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          sx={{ width: 340 }}
          disableClearable
          options={MOCK_DATA.map((option) => option.first_name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Type in name..."
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
    </div>
  )
}