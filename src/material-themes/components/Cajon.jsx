import { makeStyles, Drawer } from "@material-ui/core"

const estilosCajon = makeStyles(theme => ({
    drawer:{
        width: 240,
        flexShrink: 0
    },
    drawerPaper:{
        width: 240,
    },
}));

const Cajon = () => {

    const clasesCajon = estilosCajon();

  return (
    <Drawer
        className={clasesCajon.drawer}
        variant="permanent"
        classes={{
            paper:classes.drawerPaper,
        }}
        anchor="left"
    >

    </Drawer>
  )
}

export default Cajon