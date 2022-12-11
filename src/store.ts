import { createStoreon } from 'storeon'
import { storeonLogger } from 'storeon/devtools'
import { persistState } from '@storeon/localstorage'
import token from './states/token'
import user from './states/user'

// prettier-ignore
const logger = process.env.NODE_ENV === 'development'
  ? storeonLogger
  : false

export default createStoreon([
  // notification,
  // setting,
  token,
  user,
  logger,
  persistState(['token'])
])
