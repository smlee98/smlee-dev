import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 8375;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/view");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const rootController = (req, res) => {
    let view;

    if (view === "") {
        view = "index";
    } else {
        view = req.path.substr(1, req.path.length);
    }

    res.render(view);
};

const rootRouter = express.Router();
rootRouter.get("*", rootController);

app.use("/static", express.static("dist"));
app.use("/favicon.ico", express.static("dist/favicon.ico"));
app.use("/", rootRouter);

app.listen(
    PORT,
    console.log(
        `\n\n\n===============================\nServer Listening on: http://localhost:${PORT}`
    )
);
