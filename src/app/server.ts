import type {Server} from "http";
import app from "./app.js";


async function bootstrap() {
    let server: Server | null = null;
    try {
        server = app.listen(5000, () => {
            console.log("Server is running on port 5000");
        })
    } catch (e) {
        console.log(e)
    }
}

bootstrap();