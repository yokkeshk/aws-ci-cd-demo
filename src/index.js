const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const html = `
        <h1 style="font-family: Arial; color: green;">
            🚀 CI/CD Pipeline Working Successfully!
        </h1>
        <p style="font-size: 18px;">
            Your Node.js application has been automatically deployed using Jenkins, Docker, and AWS EC2.
        </p>
        <p style="font-weight: bold; color: #333;">
            Last updated: ${new Date().toLocaleString()}
        </p>
    `;
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
