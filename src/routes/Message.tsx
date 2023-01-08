import clsx from 'clsx'
import { Show } from 'solid-js'
import Morse from '../components/Morse'
import s from './Message.module.css'

export default (props: {
  id: string
  isSelected: boolean
  message: string
  username: string
  borders?: boolean
}) => {
  return (
    <div
      id={props.id}
      class={clsx({
        [s.messageContainer]: true,
        [s.selected]: props.isSelected,
        [s.borders]: props.borders,
      })}
    >
      <label>{props.username}</label>
      <div class={s.messageRow}>
        <div class={s.message}>{props.message}</div>
        <Show when={props.isSelected}>
          <Morse message={props.message} />
        </Show>
      </div>
    </div>
  )
}
