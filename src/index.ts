import { server } from './server/server'

server.listen(process.env.PORT || 3333, () => {
  console.log(`Sistema rodando na porta ${process.env.PORT || 3333}`)
})