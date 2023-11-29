import { Request, Response, NextFunction } from "express";

const isLoggedIn = (req: Request, res: Response, next: NextFunction): void => {
  console.log(req.user);
  req.user ? next() : res.status(401).redirect('/');
}

export default isLoggedIn;
