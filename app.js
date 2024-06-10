const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "The RESTapi is working"
    });
});

app.listen(5000, () => {
    console.log("Server up and running")
})