import Express, { Application } from 'express'
import Cors from 'cors'
import Routes from './api/Routes'

class Server {
  public application: Application

  constructor() {
    this.application = Express()
    this.plugins()
    this.routes()
  }

  private plugins(): void {
    this.application.use(Express.urlencoded({ extended: true }))
    this.application.use(Express.json())
    this.application.use(Cors())
  }

  private routes(): void {
    this.application.use(Routes)
  }
}

export default new Server().application