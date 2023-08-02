import express, { Request, Response } from 'express'
const app = express();


function getHello(req: Request, res: Response) {
    const params = req.query
    const parsed = JSON.parse('{"hello": "world"}')
    console.log(parsed);
    // HTML, CSS, Ficher mp3
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <title> hello world ! </title>
            <h1 style="color:tomato;">Hello, ${params.ARO}</h1>
        </body>
        </html>
    `);
}

app.get("/hello", getHello)

app.listen(8080)
