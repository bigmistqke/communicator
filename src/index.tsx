import { FirebaseProvider } from 'solid-firebase'
import { render } from 'solid-js/web'
import App from './App'
import firebaseConfig from '../config/firebaseConfig.json'

import './index.css'

document.documentElement.style.setProperty(
  '--full-height',
  `${window.innerHeight}px`
)

window.addEventListener('resize', () => {
  document.documentElement.style.setProperty(
    '--full-height',
    `${window.innerHeight}px`
  )
})

render(
  () => (
    <>
      <FirebaseProvider config={firebaseConfig}>
        <App />
      </FirebaseProvider>
    </>
  ),
  document.getElementById('root') as HTMLElement
)
