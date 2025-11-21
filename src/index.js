const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>CI/CD Deployment – Version 3</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                height: 100vh;
                font-family: Arial, sans-serif;
                background: linear-gradient(120deg, #ff9a9e, #fad0c4, #fbc2eb);
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            .box {
                background: rgba(255, 255, 255, 0.8);
                padding: 30px 40px;
                border-radius: 20px;
                text-align: center;
                width: 80%;
                max-width: 600px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                animation: fadeIn 0.6s ease-out;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            h1 {
                font-size: 2.8rem;
                margin-bottom: 10px;
                color: #d62828;
            }
            p {
                font-size: 1.3rem;
                margin-top: 5px;
            }
            .footer {
                margin-top: 18px;
                font-size: 1rem;
                color: #6a0572;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="box">
            <h1>🔥 Version 3 Deployed Successfully!</h1>
            <p>Your CI/CD pipeline is working perfectly with Jenkins, Docker & AWS.</p>
            <p>This is the <b>NEW updated page</b> — if you see this, deployment works!</p>
            <div class="footer">
                Updated at: ${new Date().toLocaleString()}
            </div>
        </div>
    </body>
    </html>
    `;
    res.send(html);
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});
