import { Typography, withWidth, Hidden, Button } from "@material-ui/core";

const Oculto = (props) => {
  return (
    <div>
        <Typography variant="h6" color="initial">
            Ancho: {props.width}
        </Typography>

        <Hidden xsUp>
            <Button variant="contained">
                xsDown
            </Button>
        </Hidden>

        <Hidden xsDown>
            <Button variant="contained">
                xsUp
            </Button>
        </Hidden>

        <Hidden only='lg'>
            <Button variant="contained">
                only
            </Button>
        </Hidden>
    </div>
  )
}

export default withWidth()(Oculto);