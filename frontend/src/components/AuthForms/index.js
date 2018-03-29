import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";
import PropTypes from "prop-types";

export const LoginForm = (props, context) => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input type="text" placeholder={context.t("Username")} className={styles.textInput} />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={styles.textInput}
      />
      <input type="submit" value={context.t("Log in")} className={styles.button} />
    </form>
    <span className={styles.divider}>or</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Log in
      with Facebook
    </span>
    <span className={styles.forgotLink}>Forgot password?</span>
  </div>
);

export const SignupForm = (props, context) => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <button className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Log in with
      Facebook
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type="email" placeholder={context.t("Email")} className={styles.textInput} />
      <input type="text" placeholder={context.t("Full Name")} className={styles.textInput} />
      <input
        type="username"
        placeholder={context.t("Username")}
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={styles.textInput}
      />
      <input type="submit" value={context.t("Sign up")} className={styles.button} />
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};