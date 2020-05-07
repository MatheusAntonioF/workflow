import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url(/assets/background_signin.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '100%',
    position: 'fixed',
  },

  box: {
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  svgIcon: {
    height: '90%',
    width: '100%',
    marginTop: -15,
  },
  boxForm: {
    height: '56%',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    height: '70%',
    width: '80%',
    padding: 10,
    marginTop: 25,
  },

  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  marginTop: {
    marginTop: 25,
  },

  buttonForm: {
    margin: '40px 35%',
    fontWeight: 700,
  },

  footer: {
    height: '4%',
  },
}));

export default useStyles;
