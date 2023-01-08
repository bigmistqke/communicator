import { createSignal, For, Show } from 'solid-js'
import all from '../all'
import { store } from '../Store'
import Message from './Message'

import s from './Stream.module.css'

export default () => {
  const [hidden, setHidden] = createSignal(true)
  const [hidden2, setHidden2] = createSignal(true)

  setTimeout(() => setHidden(false), 100)
  setTimeout(() => setHidden2(false), 100)

  return (
    <div
      class={s.page}
      style={{
        opacity: hidden() ? 0 : 1,
      }}
    >
      <div class={s.container}>
        <For each={store.youtubeUrls || []}>
          {({ url }) => (
            <div class={s.frameContainer}>
              <iframe
                style={{
                  opacity: hidden() ? 0 : 1,
                }}
                src={'https://www.youtube.com/embed/' + url + '?autoplay=1'}
              />
              loading...
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
