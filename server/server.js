import express from "express";
import morgan from "morgan";
import fs from "fs";

const app = express();
const PORT = 8254;

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

    res.render(view, {
        menuList: db.menuList,
    });
};

const rootRouter = express.Router();
rootRouter.get("*", rootController);

const db = {
    menuList: {},
};

const readMenuList = () => {
    const dataFile = fs.readFileSync(
        process.cwd() + "/src/data/menuList.json",
        "utf-8"
    );
    const dataJson = JSON.parse(dataFile);

    return dataJson;
};

db.menuList = readMenuList();

app.use("/static", express.static("dist"));
app.use("/favicon.ico", express.static("dist/favicon.ico"));
app.use("*/none", (req, res) => {
    res.status(404).send("404");
});
app.use("/", rootRouter);

app.listen(
    PORT,
    console.log(
        `\n\n\n===============================\nServer Listening on: http://localhost:${PORT}`
    )
);
