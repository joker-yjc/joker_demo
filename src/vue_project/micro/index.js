import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from 'qiankun'

registerMicroApps([
  {
    name: 'VueMicroApp',
    entry: 'http://localhost:10000',
    container: '#iframe',
    activeRule: '/vue',
  },
])

addGlobalUncaughtErrorHandler((event) => {
  console.error(event)
  const { message } = event
  // 加载失败时提示
  console.error(message)
})
export default start
