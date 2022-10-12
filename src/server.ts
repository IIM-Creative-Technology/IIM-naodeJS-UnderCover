import * as dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV === "development" ? '.env.development' : '.env'),
});

async function main(): Promise<void> {
    const port = process.env.PORT || 3000;
    const app = express();
    app.listen(port);
    console.log(`Listening on port http://localhost:${port}`);
}

async function createApp(): Promise<express.Application> {
    const app = express();

    /* Add Routes Here */
    // app.use(stock.routes());

    return app;
}
createApp();
main();