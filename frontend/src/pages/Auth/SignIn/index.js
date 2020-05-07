import React from 'react';

import { Grid, Typography, Paper, TextField, Button } from '@material-ui/core';

import useStyles from './styles';

import icon_signin from '~/assets/icon_signin.svg';

export default function SignIn() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      direction="column"
      justify="space-between"
      container
      xs={12}
    >
      <Grid item className={classes.box}>
        <img className={classes.svgIcon} src={icon_signin} alt="Ícone Layout" />
        <Typography align="center" variant="h4" color="black">
          Work - Flow
        </Typography>
      </Grid>
      <Grid item className={classes.boxForm}>
        <Paper className={classes.paper} elevation={3}>
          <form className={classes.form}>
            <TextField
              label="E-mail"
              size="small"
              variant="filled"
              color="secondary"
              fullWidth
            />
            <TextField
              className={classes.marginTop}
              label="Senha"
              size="small"
              variant="filled"
              color="secondary"
              fullWidth
            />
            <Button
              className={classes.buttonForm}
              color="secondary"
              variant="contained"
            >
              Entrar
            </Button>
          </form>
        </Paper>
      </Grid>

      <Grid item className={classes.footer}>
        <Typography align="center">Powered by Matheus</Typography>
      </Grid>
    </Grid>
  );
}
