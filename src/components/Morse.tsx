import clsx from 'clsx'
import { createEffect, createSignal, onCleanup } from 'solid-js'
import { encode } from 'xmorse'
import { setLight, store } from '../Store'

import s from './Morse.module.css'

const MORSE_CONFIG = {
  space: ' ',
  long: '-',
  short: '*',
}

const TIMESPAN = 1000

export default (props: { message: string }) => {
  const [index, setIndex] = createSignal<number>(0)

  const morse = encode(props.message, MORSE_CONFIG) + ' '

  const iterate = () => setIndex((index) => (index + 1) % morse.length)

  const [stop, setStop] = createSignal(false)
  onCleanup(() => setStop(true))

  const animate = () => {
    if (stop()) return
    const nextCharacterIsSpace = morse[(index() + 1) % morse.length] === ' '
    const character = morse[index()]
    iterate()

    if (character === ' ') {
      setTimeout(() => {
        animate()
      }, TIMESPAN)
      return
    }
    setLight(true)

    if (character === '-') {
      setTimeout(() => {
        if (stop()) return

        setLight(false)
        setTimeout(
          () => {
            animate()
          },
          !nextCharacterIsSpace ? TIMESPAN : 0
        )
      }, TIMESPAN)
      return
    }

    if (character === '*') {
      setTimeout(() => {
        setLight(false)
        setTimeout(
          () => {
            animate()
          },
          !nextCharacterIsSpace ? TIMESPAN : 0
        )
      }, TIMESPAN / 3)
    }
  }
  animate()

  return <div class={clsx({ [s.light]: true, [s.on]: store.light })} />
}
