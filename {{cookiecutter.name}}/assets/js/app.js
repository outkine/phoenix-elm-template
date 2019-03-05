import css from '../css/app.scss'

import route from 'riot-route'

route('/', () => import(/* webpackChunkName: "home" */ './home.js'))

route.start(true)
