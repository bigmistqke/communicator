import { createSignal, onMount } from 'solid-js'
import { store } from '../Store'
import s from './Info.module.css'

export default () => {
  const [hidden, setHidden] = createSignal(true)
  setTimeout(() => setHidden(false), 100)

  return (
    <div
      class={s.container}
      style={{
        opacity: hidden() ? 0 : 1,
      }}
    >
      <div class={s.info}>
        <div>
          Communicator is an instrument for the expression of collective
          desires, wishes and thoughts. It aims to provide a democratic,
          interactive platform for expressions and voices. It's an opportunity
          to say, deliver, or an appeal on the scale of the city to someone
          specific or to all at once.
          <br />
          <br />
          The work has been specificaly designed to be projected in Den Hague,
          NL. The city has always been a significant location for justice on a
          global scale. From the World War II trials to the Yugoslavian Tribunal
          to the International Criminal Court, it has played an integral role in
          managing and creating peace around the world. Communicator will thus
          continue and contribute to city's role as being a key democratic world
          agent.
          <br />
          <br />
          Communicator was originally developed for Detali festival in
          Ivano-Frakivsk, Ukraine, but in light of the latest events there, it
          has been reimagined to be a global patform witnesssed on a global
          scale.
        </div>
      </div>
      <br />
      <br />
      <div class={s.credits}>
        <span class={s.creditsTitle}>credits:</span>
        <label for="concept">Concept, Direction</label>
        <a id="concept" href="https://seredyak.com/" target="blank">
          Bogdan Seredyak
        </a>
      </div>
      <div class={s.credits}>
        <span />
        <label for="design">Design, Code</label>
        <a
          id="design"
          href="https://www.instagram.com/karlwwwille"
          target="blank"
        >
          Cyberspatial Research Group
        </a>
      </div>
      <div class={s.credits}>
        <span />
        <label for="curation">Curation</label>
        <a
          id="curation"
          href="https://www.instagram.com/vagrantbaker"
          target="blank"
        >
          Maia Kenney
        </a>
      </div>
      <br />
      <br />
      <div class={s.support}>
        <span class={s.supportTitle}>
          <span class={s.big}>project has been supported by:</span>
          <span class={s.small}>support by:</span>
        </span>
        <a href="www.denhaag.nl" target="blank">
          City of Den Hague
        </a>
      </div>
      <div class={s.support}>
        <span />
        <a>Your Grant</a>
      </div>
      <br />
      <br />
    </div>
  )
}
