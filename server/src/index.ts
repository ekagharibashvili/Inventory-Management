import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import inventoryRoutes from "./routes/inventoryRoutes";


const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/inventories', inventoryRoutes)


app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
