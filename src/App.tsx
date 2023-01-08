import { createEffect, createSignal, Show } from 'solid-js'
import { Route, Router, Routes } from '@solidjs/router'
import { collection, getFirestore, orderBy, query } from 'firebase/firestore'
import { useFirebaseApp, useFirestore } from 'solid-firebase'

import MessageBoard from './routes/MessageBoard'
import './Store'

import LayOut from './LayOut'
import Header from './routes/Header'
import Info from './routes/Info'
import LogIn from './routes/LogIn'
import Stream from './routes/Stream'
import { initStore, store } from './Store'

import s from './App.module.css'

export default () => {
  const app = useFirebaseApp()
  const db = getFirestore(app)
  const messages = useFirestore(
    query(collection(db, 'messages'), orderBy('timestamp'))
  )
  const youtubeUrls = useFirestore(query(collection(db, 'youtubeUrls')))

  const [initialized, setInitialized] = createSignal(false)

  const selectedMessageId = useFirestore(collection(db, 'selectedMessageId'))

  createEffect(() => {
    console.log(
      'youtubeUrls, selectedMessageId',
      youtubeUrls,
      selectedMessageId
    )
    if (db && messages.data && selectedMessageId.data && youtubeUrls.data) {
      initStore(
        db,
        messages.data,
        selectedMessageId.data[0].selectedMessageId,
        youtubeUrls.data
      )
      setInitialized(true)
    }
  })

  return (
    <Show when={initialized()}>
      <div class={s.page}>
        <Router>
          <Show when={store.username} fallback={<LogIn />}>
            <Routes>
              <Route path="/" component={Header}>
                <Route path="/" component={MessageBoard} />
                <Route path="/*" component={LayOut}>
                  <Route path="/info" component={Info} />
                  <Route path="/stream" component={Stream} />
                </Route>
              </Route>
            </Routes>
          </Show>
        </Router>
      </div>
    </Show>
  )
}
