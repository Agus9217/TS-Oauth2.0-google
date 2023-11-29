import express, { Router } from "express";
import passport from "passport";
import isLoggedIn from "../middlewares/isLoggedIn";
import path from "path";

const router: Router = express.Router();

router
  .get("/", (req, res) => {
    const indexPath = path.join(__dirname, "../client/index.html");
    res.sendFile(indexPath);
  })

  .get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
  )

  .get(
    "/auth/google/crear",
    passport.authenticate("google", {
      successRedirect: "/auth/protected",
      failureRedirect: "/auth/google/failure",
    })
  )

  .get("/auth/google/failure", (req, res) => {
    res.send("Something went wrong!");
  })

  .get("/auth/protected", isLoggedIn, (req, res) => {
    let name = (req as any).user.displayName; // TypeScript may not recognize `displayName` on `req.user`
    res.send(`Hello ${name} <a href='/auth/logout'>Bye logout</a>`);
  })

  .get("/auth/logout", (req, res, next) => {
    req.logout((err: Error) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });

export default router;
