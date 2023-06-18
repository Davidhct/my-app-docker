"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 4000;
// Enable CORS
app.use((0, cors_1.default)());
app.get("/api/data", (req, res) => {
    const data = {
        message: "Hello world from the server!",
        value: 42,
    };
    res.send(data);
});
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
