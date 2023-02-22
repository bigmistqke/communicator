import { createStorage } from '@solid-primitives/storage'
import {
  addDoc,
  collection,
  DocumentData,
  Firestore,
  FirestoreError,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { createStore } from 'solid-js/store'
import { localStorage } from 'reactive-localstorage'
import { createEffect, on } from 'solid-js'

const [cookie, setCookie] = createStorage({
  api: localStorage,
  prefix: 'communicator',
})

interface UseFireStoreReturn<T> {
  data: T
  loading: boolean
  error: FirestoreError | null
}

const MESSAGE_THROTTLE_TIMESPAN = 10000

const [store, setStore] = createStore<{
  location?: string
  username?: string
  db?: Firestore
  messages?: DocumentData[]
  selectedMessageId?: string
  selectedMessageTimestamp?: Timestamp
  youtubeUrls?: DocumentData[]
  light: boolean
  timeToNextMessage: number
  bools: {
    alreadyVisited: boolean
    canSendMessage: boolean
    isMobile: boolean
  }
}>({
  location: cookie.location,
  username: cookie.username,
  db: undefined,
  messages: undefined,
  selectedMessageId: undefined,
  selectedMessageTimestamp: undefined,
  youtubeUrls: undefined,
  light: false,
  timeToNextMessage: !cookie.lastMessageSent
    ? 0
    : Math.max(
        0,
        MESSAGE_THROTTLE_TIMESPAN - (Date.now() - +cookie.lastMessageSent)
      ),
  bools: {
    alreadyVisited: !!cookie.username,
    canSendMessage:
      !cookie.lastMessageSent ||
      Date.now() > +cookie.lastMessageSent + MESSAGE_THROTTLE_TIMESPAN,
    isMobile: /Android|iPhone/i.test(navigator.userAgent),
  },
})

const setTimeToNextMessage = () => {
  const timeToNextMessage = !cookie.lastMessageSent
    ? 0
    : Math.max(
        0,
        Math.round(
          MESSAGE_THROTTLE_TIMESPAN - (Date.now() - +cookie.lastMessageSent)
        )
      )
  setStore('timeToNextMessage', timeToNextMessage)
}

const runTimeToNextMessageTimer = () => {
  if (store.timeToNextMessage === 0) return
  setTimeToNextMessage()
  setTimeout(runTimeToNextMessageTimer, 1000)
}

const initTimeToNextMessageTimer = () => {
  setTimeToNextMessage()
  runTimeToNextMessageTimer()
}

if (store.timeToNextMessage !== 0) runTimeToNextMessageTimer()
window.addEventListener('focus', initTimeToNextMessageTimer)
localStorage.on('change', (key) =>
  key === 'communicator.lastMessageSent'
    ? initTimeToNextMessageTimer()
    : undefined
)

const initStore = (
  db: Firestore,
  messages: DocumentData[],
  selectedMessageId: string,
  youtubeUrls: DocumentData[]
) => {
  const selectedMessageTimestamp = messages.find(
    (message) => message.id === selectedMessageId
  )?.timestamp as Timestamp

  createEffect(
    on(
      () => messages,
      () => console.log('messages', messages)
    )
  )

  setStore({
    db,
    messages,
    selectedMessageId,
    youtubeUrls,
    selectedMessageTimestamp,
  })
}

const setUsername = (username: string) => {
  setStore('username', username)
  setCookie('username', username)
  console.log(cookie.username)
}
const setLocation = (location: string) => {
  setStore('location', location)
  setCookie('location', location)
  console.log(cookie.location)
}

const setLight = (bool: boolean) => {
  setStore('light', bool)

  /* const svg = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 50$0%22><text y=%250%22 font-size=%22250%22>${
    store.light ? '◯' : '⬤'
  }</text></svg>`
  document.querySelector("link[rel~='icon']").href = svg */
}

const submitMessage = (message: string) => {
  setCookie('lastMessageSent', Date.now().toString())
  setTimeToNextMessage()
  runTimeToNextMessageTimer()
  addDoc(collection(store.db!, 'messages'), {
    message,
    username: store.username,
    location: 'brussels',
    timestamp: serverTimestamp(),
  })
}

export { store, initStore, setUsername, setLocation, setLight, submitMessage }
