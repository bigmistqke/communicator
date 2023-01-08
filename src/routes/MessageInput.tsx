import { createEffect, createSignal, onMount, Show } from 'solid-js'
import AutoTextarea from 'solid-textarea-autosize'
import { store, submitMessage } from '../Store'
console.log(AutoTextarea)

import s from './MessageInput.module.css'

const Input = () => {
  const [textarea, setTextarea] = createSignal<HTMLTextAreaElement>()

  const onkeydown = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      submitMessage(textarea()!.value)
      textarea()!.value = ''
    }
  }

  createEffect(() => {
    if (!textarea()) return
    textarea()!.focus()
  })

  return (
    <>
      <div class={s.textareaContainer}>
        <AutoTextarea
          onkeydown={onkeydown}
          ref={(textarea) => setTextarea(textarea)}
          placeholder="your message"
          class={s.textarea}
          maxRows={4}
          spellcheck={false}
        />
      </div>
      <Show when={!store.bools.isMobile}>
        <button onclick={() => submitMessage(textarea()!.value)}>enter</button>
      </Show>
    </>
  )
}

export default () => {
  const [thanks, setThanks] = createSignal<number | undefined>(undefined)

  const waitMessage = () =>
    `wait ${Math.max(
      0,
      Math.round(store.timeToNextMessage / 1000 - 1)
    )} seconds`

  return (
    <div class={s.footer}>
      <Show
        when={store.timeToNextMessage === 0}
        fallback={<div class={s.marquee}>{waitMessage()}</div>}
      >
        <Input />
      </Show>
    </div>
  )
}
