import { TextField, styled } from '@mui/material'

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    paddingTop: '12px',
    // vertical padding + font size from searchIcon
    paddingBottom: '12px',
  },
}))
export default StyledInput
