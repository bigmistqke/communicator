import { useNavigate } from '@solidjs/router'
import { createSignal } from 'solid-js'
import { setLocation, setUsername } from '../Store'
import s from './LogIn.module.css'

export default () => {
  let name: HTMLInputElement, location: HTMLInputElement

  const enter = () => {
    setLocation(location.value || 'somewhere')
    setUsername(name.value || 'anonymous')
  }

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
          ref={name!}
        />
        <input
          class={s.input}
          placeholder="location"
          onkeydown={onkeydown}
          ref={location!}
        />
        <button class={s.button} onclick={enter}>
          enter
        </button>
      </div>
    </div>
  )
}
