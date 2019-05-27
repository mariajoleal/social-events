import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import { login } from '../../utils/api';

// const useStyles = makeStyles(theme => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.common.white,
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

class LoginContainer extends Component {
  
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      success: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e)  {
    // console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
    // console.log(this.state);
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
        email: this.state.email,
        password: this.state.password
      };
      login(userData)
        .then((res) => {
          this.setState({
            success: res.data.success
          });
        })
        .catch((err) => {
          let emailError;
          let passError; 
          let message;

          if(err.response.data.emailnotfound) {
            emailError = true;
            passError = false;
            message = err.response.data.emailnotfound;
          } else {
            emailError = false;
            passError = true;
            message = err.response.data.passwordincorrect;
          }
          
          this.setState({
            errors: {
              emailError,
              passError,
              message
            },
          });
        });        
  };

  render() {
    const { success, errors } = this.state;
    const classes = {
      paper: {
          marginTop: '20%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
      },
    };
    return (
      success ? <Redirect to='/events' /> :
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.onSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={errors.emailError? errors.message : "Email Address"}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.onChange}
              error={errors.emailError}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={errors.passError? errors.message : "Password"}
              type="password"
              id="password"
              onChange={this.onChange}
              error={errors.passError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  } 
}

export default LoginContainer;