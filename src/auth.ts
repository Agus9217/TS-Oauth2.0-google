import passport from "passport";
import {
  Strategy as GoogleStrategy,
  StrategyOptionsWithRequest,
} from "passport-google-oauth20";
import { Request } from "express";
import dotenv from "dotenv";

dotenv.config();

const googleStrategyOptions: StrategyOptionsWithRequest = {
  clientID: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  callbackURL: "http://localhost:3000/auth/google/crear",
  passReqToCallback: true,
};

passport.use(
  new GoogleStrategy(googleStrategyOptions, function (
    request: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: Function
  ) {
    console.log({
      accessToken: `${accessToken}`,
      refreshToken: `${refreshToken}`,
    });
    done(null, profile);
  })
);

passport.serializeUser((user: any, done: Function) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: Function) => {
  done(null, user);
});
