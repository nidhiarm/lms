import { createServer } from 'http'
import { parse } from 'url'
import * as next from 'next'

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer((req:any, res:any) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const fs = require('fs');
    var cron = require('node-cron');
 
    cron.schedule('* * * * *', () => {
      fs.writeFile("./static/test1.txt", "Hey there!", function(err:any) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
      }); 
    });
    
    if (pathname === '/') {
      app.render(req, res, '/', query)
    } else if (pathname === '/home') {
      app.render(req, res, '/home', query)
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(port, (err:any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})