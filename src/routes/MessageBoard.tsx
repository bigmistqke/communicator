import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore'
import {
  createEffect,
  createSelector,
  createSignal,
  For,
  on,
  onMount,
  Show,
} from 'solid-js'

import { store } from '../Store'
import Message from './Message'
import s from './MessageBoard.module.css'
import MessageInput from './MessageInput'

export default () => {
  const [hidden, setHidden] = createSignal(true)

  let allMessages: HTMLDivElement

  // todo only when u enter it yourself or when you are already scrolled to the bottom
  createEffect(
    on(
      () => store.messages!.length,
      () => {
        if (
          store.messages?.[store.messages?.length - 1].username ===
          store.username
        ) {
          scrollToBottom()
          setTimeout(scrollToBottom, 100)
        }
      }
    )
  )

  const centerSelectedMessage = () => {
    const selectedMessage = document.querySelector(
      '#' + store.selectedMessageId
    )
    if (selectedMessage) {
      const scrollTop =
        (selectedMessage as HTMLElement).offsetTop +
        (selectedMessage as HTMLElement).offsetHeight / 2 -
        allMessages.offsetHeight / 2

      allMessages.scrollTop = scrollTop
    } else {
      allMessages.scrollTop = allMessages.scrollHeight
    }
  }

  onMount(() => {
    setTimeout(() => {
      centerSelectedMessage()
      setHidden(false)
    }, 100)
  })

  const scrollToBottom = () => {
    console.log('this happens?')
    allMessages.scrollTop = allMessages.scrollHeight
  }

  const isSelected = createSelector(() => store.selectedMessageId)

  return (
    <div class={s.container}>
      <div
        class={s.allMessages}
        ref={allMessages!}
        style={{ opacity: hidden() ? 0 : 1 }}
      >
        <For each={store.messages}>
          {({ message, username, id }) => (
            <Message
              isSelected={!hidden() && isSelected(id)}
              borders={isSelected(id)}
              message={message}
              username={username}
              id={id}
            />
          )}
        </For>
      </div>

      <MessageInput />
    </div>
  )
}
