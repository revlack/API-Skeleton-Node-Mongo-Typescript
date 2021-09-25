import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema } from "./schema/user.schema";

export default function (app: Express) {

    app.get("/users", (req: Request, resp: Response) => {
        resp.sendStatus(200);
    });

    app.post("/users", validateRequest(createUserSchema), createUserHandler);

}