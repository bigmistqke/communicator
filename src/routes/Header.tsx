import { A, Link, NavLink, Outlet, useNavigate } from '@solidjs/router'
import { createEffect, createSignal } from 'solid-js'
import { store } from '../Store'
import s from './Header.module.css'

export default () => {
  const navigate = useNavigate()
  createEffect(() => {
    if (!store.username) navigate('/')
  })
  const [index, setIndex] = createSignal(0)

  const introduction = [
    `welcome ${store.bools.alreadyVisited ? 'back ' : ''}${store.username}`,
    `welcome to communicator`,
    `...`,
    `in front of your eyes`,
    `some messages long gone`,
    `some messages just begun `,
  ]

  const animate = () => {
    setIndex((index) => index + 1)
    setTimeout(animate, 3000)
  }
  setTimeout(animate, 3000)

  return (
    <>
      <header class={s.header}>
        <span class={s.introduction}>{introduction[index()]}</span>
        <A href={'/'} end>
          messages
        </A>
        <A href="/stream">streams</A>
        <A href="/info" class={s.circleButton}>
          <span>?</span>
        </A>
      </header>
      <Outlet />
    </>
  )
}
