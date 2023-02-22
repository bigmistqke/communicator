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
          store.messages?.find(
            (message) => message.id === store.selectedMessageId
          )
        )}
        keyed
      >
        {([id, { message, username, timestamp, location }]) => (
          <Message
            id={id}
            selected={true}
            message={message}
            username={username}
            timestamp={timestamp}
            location={location}
          />
        )}
      </Show>
    </>
  )
}
