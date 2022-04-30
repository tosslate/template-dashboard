import { createStoreon } from 'storeon'
import { storeonLogger } from 'storeon/devtools'
import notification from './states/notification'
import setting from './states/setting'
import project from './states/project'
import order from './states/order'
import user from './states/user'

const logger = process.env.NODE_ENV === 'development'
  ? storeonLogger
  : false

export default createStoreon([
  notification,
  setting,
  project,
  order,
  user,
  logger
])
