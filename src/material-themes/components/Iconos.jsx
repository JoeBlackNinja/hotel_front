import {AccessAlarm, ThreeDRotation, DeleteForever} from '@mui/icons-material'
import { Button, IconButton } from '@material-ui/core'

export default function Iconos() {
  return (
    <div>
        <AccessAlarm
            color='primary'
            fontSize='large'
        />
        <ThreeDRotation
            color='action'
            fontSize='large'
        />
        <DeleteForever
            color='secondary'
            fontSize='large'
        />
        <Button 
            variant="contained" 
            color="secondary"
            endIcon={<DeleteForever/>}
        >            
        Erre con erre cigarro
        </Button>

        <br></br>

        <IconButton aria-label="delete">
            <DeleteForever
                color='secondary'
                fontSize='large'
            />
        </IconButton>

    </div>
  )
}
