import { useNavigate } from '@solidjs/router'
import { createSignal } from 'solid-js'
import { setUsername } from '../Store'
import s from './LogIn.module.css'

export default () => {
  let ref: HTMLInputElement
  const navigate = useNavigate()
  const [error, setError] = createSignal()

  const enter = () => setUsername(ref.value || 'anonymous')

  const onkeydown = (e) => {
    if (e.code === 'Enter') {
      enter()
    }
  }

  return (
    <div class={s.page}>
      <div class={s.inputContainer}>
        <input
          class={s.input}
          placeholder="username"
          onkeydown={onkeydown}
          ref={ref!}
        />
        <button class={s.button} onclick={enter}>
          enter
        </button>
      </div>
    </div>
  )
}
