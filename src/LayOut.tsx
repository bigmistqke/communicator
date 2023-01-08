import { Outlet } from '@solidjs/router'
import { Show } from 'solid-js'
import all from './all'
import Message from './routes/Message'
import { store } from './Store'

export default () => {
  return (
    <>
      <Outlet />
      <Show
        when={all(
          store.selectedMessageId,
          store.username,
          store.messages?.find(
            (message) => message.id === store.selectedMessageId
          )
        )}
        keyed
      >
        {([id, username, { message }]) => (
          <Message
            id={id}
            message={message}
            username={username}
            isSelected={true}
          />
        )}
      </Show>
    </>
  )
}
