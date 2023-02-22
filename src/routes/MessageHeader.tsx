import { Timestamp } from 'firebase/firestore'
import { For, Show } from 'solid-js'

import s from './MessageHeader.module.css'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const doubleDigits = (date: number) =>
  date.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })

export default (props: {
  username: string
  location: string
  timestamp: Timestamp
  selected: boolean
}) => {
  const getDate = (timestamp: number) => {
    const date = new Date(timestamp)
    const time = [
      doubleDigits(date.getDate()),
      doubleDigits(date.getMonth() + 1),
      date.getFullYear(),
      doubleDigits(date.getHours()),
      doubleDigits(date.getMinutes()),
      doubleDigits(date.getSeconds()),
    ]
    return [
      `${time[3]}:${time[4]}:${time[5]}`,
      `${time[0]}/${time[1]}/${time[2]}`,
    ]
  }
  return (
    <header class={s.messageHeader}>
      <span>{props.username}</span>
      <span>{props.location}</span>
      <For each={getDate(props.timestamp?.seconds * 1000)}>
        {(date) => <span>{date}</span>}
      </For>
      <Show when={props.selected}>
        <span class={s.isCommunicating}>now communicating</span>
      </Show>
    </header>
  )
}
