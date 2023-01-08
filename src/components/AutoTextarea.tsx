import clsx from 'clsx'
import { createEffect } from 'solid-js'
import s from './AutoTextarea.module.css'

export default (props: {
  oninput?: (e: InputEvent) => void
  onkeydown?: (e: KeyboardEvent) => void
  ref?: (textarea: HTMLTextAreaElement) => void
  placeholder?: string
  class?: string
}) => {
  let textarea: HTMLTextAreaElement
  let wrapper: HTMLDivElement

  const oninput = (e: InputEvent) => {
    wrapper.dataset.replicatedValue = textarea.value
    props.oninput?.(e)
  }

  const onkeydown = (e: KeyboardEvent) => {
    props.onkeydown?.(e)
  }

  createEffect(() => props.ref?.(textarea))

  return (
    <div class={clsx(s.wrapper, props.class)} ref={wrapper!}>
      <div />
      <textarea
        name="text"
        id="text"
        ref={textarea!}
        oninput={oninput}
        onkeydown={onkeydown}
        placeholder={props.placeholder}
        rows={1}
      ></textarea>
    </div>
  )
}
