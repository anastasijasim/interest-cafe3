import { Box, Button, IconButton, Typography } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const forExample = () => {
  return (
    <div>
    <Button>Text</Button>
    <Button variant='text'disabled>Text</Button>
    <Button variant='contained' disabled>Contained</Button>
    <Button variant='outlined'disabled>Outlined</Button>
    <Button variant='outlined'>Outlined</Button>
    <Button variant='outlined'disableElevation onClick={()=> alert ("Say hello")}>Outlined</Button>
    <hr/>
    <Button color='secondary'>Text</Button>
    <Button variant='text'disabled>Text</Button>
    <Button variant='contained'color='secondary'>Contained</Button>
    <Button variant='outlined'disabled>Outlined</Button>
    <Button variant='outlined' color="error">Outlined</Button>
    <Button variant='outlined' color="info">Outlined</Button>
    <Button variant='outlined'disableElevation onClick={()=> alert ("Say hello")}>Outlined</Button>
    <hr/>
    <Button variant="outlined" startIcon={<DeleteIcon />}>
      Delete
    </Button>
    <Button variant="contained" endIcon={<SendIcon />}>
      Send
    </Button>
    <hr/>
    <IconButton aria-label="delete"><DeleteIcon /></IconButton>
    <hr/>
    <Typography variant='h6'>Anastasija</Typography>
    <Typography variant="body2">Anastasija</Typography>
    <Typography variant='subtitle1'>Anastasija</Typography>
    <Typography variant="subtitle2">Anastasija </Typography>
    <Typography variant="body1" color="primary">Anastasija</Typography>
    <Typography color="textSecondary">Anastasija sekantis</Typography>
    <br/>
    <Box padding={5}>Anastasija</Box>
    <Box 
      p={1} 
      sx={(theme)=>({border:`1px solid ${theme.palette.primary.dark}`})}>
        Anastasija
    </Box>
    </div>
  )
}

export default forExample


//yarn add @mui/material @emotion/react @emotion/styled
//https://classic.yarnpkg.com/en/package/normalize.css
//index.css faile @import "normalize.css/normalize.css";
//yarn add @mui/icons-material
//yarn dev
//https://mui.com/material-ui/react-typography/#component

//padding = 1*8 2*8 3*8 = () => {
  