import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
   '@global': {
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    },
    appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
    flexWrap: 'wrap',
    },
    toolbarTitle: {
    flexGrow: 1,
    },
    link: {
    margin: theme.spacing(1, 1.5),
    },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));