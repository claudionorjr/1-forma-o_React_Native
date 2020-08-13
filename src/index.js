import './index.css'
import * as serviceWorker from './serviceWorker'
import TaskController from './controller/TaskController'

new TaskController()
serviceWorker.unregister()
