import clsx from 'clsx'
import { Timestamp } from 'firebase/firestore'
import { createEffect, For, Show } from 'solid-js'
import Morse from '../components/Morse'
import s from './Message.module.css'
import MessageHeader from './MessageHeader'

export default (props: {
  id: string
  selected: boolean
  message: string
  location: string
  timestamp: Timestamp
  username: string
  borders?: boolean
  past?: boolean
}) => {
  createEffect(() => console.log('timestamp is ', props.timestamp))

  return (
    <div
      id={props.id}
      class={clsx({
        [s.messageContainer]: true,
        [s.selected]: props.selected,
        [s.borders]: props.borders,
        [s.past]: props.past,
      })}
    >
      <MessageHeader {...props} />
      <div class={s.messageRow}>
        <div class={s.message}>{props.message}</div>
        <Show when={props.selected} fallback={<span />}>
          <Morse message={props.message} />
        </Show>
      </div>
    </div>
  )
}
