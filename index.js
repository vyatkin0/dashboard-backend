const app = require('./app')
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('json-server listening on http://localhost:' + port)
})
