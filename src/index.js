const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CI/CD Success</title>

        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', sans-serif;
                background: linear-gradient(135deg, #00b09b, #96c93d);
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
            }

            .card {
                background: rgba(255, 255, 255, 0.15);
                border-radius: 20px;
                padding: 40px;
                width: 70%;
                max-width: 600px;
                text-align: center;
                backdrop-filter: blur(12px);
                box-shadow: 0 8px 30px rgba(0,0,0,0.3);
                animation: pop 0.4s ease-out;
            }

            @keyframes pop {
                from { transform: scale(0.8); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }

            h1 {
                font-size: 2.5rem;
                margin-bottom: 10px;
            }

            p {
                font-size: 1.2rem;
                font-weight: 300;
            }

            .time-box {
                margin-top: 20px;
                padding: 12px;
                background: rgba(0,0,0,0.2);
                border-radius: 10px;
                font-size: 1rem;
            }

            .emoji {
                font-size: 3.5rem;
            }
        </style>
    </head>

    <body>
        <div class="card">
            <div class="emoji">🚀🎉</div>
            <h1>Deployment Successful!</h1>
            <p>Your CI/CD Pipeline with <b>Jenkins + Docker + AWS</b> is working perfectly.</p>

            <div class="time-box">
                Last Updated: <b>${new Date().toLocaleString()}</b>
            </div>
        </div>
    </body>
    </html>
    `;
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
