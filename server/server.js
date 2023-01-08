const { cert, initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const { find, findIndex } = require('./utils/find.js')
const DMX = require('dmx')
const xmorse = require('xmorse')

const serviceAccount = require('../config/c0mmunicat0r-firebase-adminsdk-1xsp3-23f86e2561.json')

const MORSE_CONFIG = {
  space: ' ',
  long: '-',
  short: '*',
}

const app = async () => {
  let hasNextMessages = true

  initializeApp({
    credential: cert(serviceAccount),
  })

  const db = getFirestore()

  let [messages, selectedMessageId] = await Promise.all([
    await db.collection('messages').orderBy('timestamp').get(),
    await db.collection('selectedMessageId').doc('selectedMessageId').get(),
  ])

  db.collection('messages')
    .orderBy('timestamp')
    .onSnapshot(
      (messagesSnapshot) => (messages = messagesSnapshot),
      (err) => console.log(`Encountered error: ${err}`)
    )

  selectedMessageId = selectedMessageId.exists
    ? selectedMessageId.data()?.selectedMessageId
    : undefined

  const selectedMessage = find(
    messages,
    (doc) => doc.id === selectedMessageId
  )?.data()

  if (!selectedMessageId) console.error('selectedMessageId is undefined')

  let selectedMessageIndex = findIndex(
    messages,
    (doc) => doc.id === selectedMessageId
  )

  if (!selectedMessageIndex) console.error('selectedMessageIndex is undefined')

  const animateMessage = (message) => {
    const morse = xmorse.encode(message, MORSE_CONFIG)
    console.log('morse', morse)
    let index = 0
  }

  animateMessage(selectedMessage.message)

  const incrementSelectedMessage = async () => {
    selectedMessageIndex++
    const nextMessage = find(
      messages,
      (_, index) => index === selectedMessageIndex
    )
    const res = await db
      .collection('selectedMessageId')
      .doc('selectedMessageId')
      .update({ selectedMessageId: nextMessage.id })
  }

  // setTimeout(incrementSelectedMessage, 2000)
}
app()
