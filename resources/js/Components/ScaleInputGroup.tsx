import { FormControl, FormControlLabel, Radio, RadioGroup, SelectChangeEvent, useMediaQuery, useTheme } from "@mui/material"

interface Props {
  id: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => void
  data : string
}

const ScaleInputGroup = ({id, name, onChange, data}: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <FormControl sx={{ width: '100%' }}>
      <RadioGroup
        row={!isSmallScreen}
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
        sx={{ justifyContent: 'space-between' }}
      >
        <FormControlLabel
          value="1"
          control={<Radio onChange={onChange} />}
          label="Aに近い"
          labelPlacement={isSmallScreen ? 'end' : 'bottom'}
          id={id}
          name={name}
          checked={data === '1'}
        />
        <FormControlLabel
          value="2"
          control={<Radio onChange={onChange} />}
          label="Aにやや近い"
          labelPlacement={isSmallScreen ? 'end' : 'bottom'}
          id={id}
          name={name}
          checked={data === '2'}
        />
        <FormControlLabel
          value="3"
          control={<Radio onChange={onChange} />}
          label="Bにやや近い"
          labelPlacement={isSmallScreen ? 'end' : 'bottom'}
          id={id}
          name={name}
          checked={data === '3'}
        />
        <FormControlLabel
          value="4"
          control={<Radio onChange={onChange} />}
          label="Bに近い"
          labelPlacement={isSmallScreen ? 'end' : 'bottom'}
          id={id}
          name={name}
          checked={data === '4'}
        />
      </RadioGroup>
    </FormControl>
  )
}

export default ScaleInputGroup