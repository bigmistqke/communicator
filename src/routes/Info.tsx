import { createSignal, onMount } from 'solid-js'
import { store } from '../Store'
import s from './Info.module.css'

export default () => {
  let ref: HTMLElement
  const [hidden, setHidden] = createSignal(true)
  setTimeout(() => setHidden(false), 100)
  onMount(() => {
    ref.scrollTop = 0
  })

  const infos = [
    `Communicator is a powerful statement about the role of technology in contemporary society. By beaming messages in Morse code into the night sky via a laser light, we are using a medium that is both ancient and futuristic to communicate ideas and emotions that transcend borders and boundaries.

The first edition of Communicator, which took place in Ukraine during a time of war, was particularly poignant. It served as a reminder that, even in the midst of conflict and chaos, the human spirit can find a way to reach out and connect with others.

At its core, Communicator is about giving voice to the voiceless and shining a light on the multiple layers and dimensions of oppression that shape our world. It is about using the power of technology to challenge power structures and give power back to the people.

Through Communicator, we aim to create a space for open and honest dialogue, free from the constraints of traditional power dynamics. We believe that this is essential to creating a more just and equitable society.

Ultimately, Communicator is a celebration of the cosmic forces that connect us all. It is a tribute to the resilience and strength of the human spirit, and a call to action for us to work together to create a brighter, more harmonious future.`,
    `Communicator is a political commentary on the intersection of technology, language, and power. By projecting Morse code into the nightsky through a large laser beam, Communicator seeks to draw attention to the ways in which governments and institutions manipulate communication for their own purposes. 

The first installation of Communicator took place in Ukraine during a time of conflict and unrest. The use of searchlights to transmit Morse code into the cosmos serves as a metaphor for the far-reaching and multi-layered levels of control and power exercised by governments and other institutions. In today's globalized and highly interconnected world, the manipulation of language and communication remains a powerful tool for shaping public opinion and exerting influence on a global scale. 
By bringing Morse code into the 21st century and projecting it on a grand scale, Communicator aims to spark a conversation about the role of technology in shaping geopolitical dynamics and to encourage viewers to think critically about the forces that shape the way we communicate. In a time of anarchy and shifting power structures, Communicator invites us to consider the ways in which we can resist the manipulation of language and communication as a means of oppression and to imagine a world in which technology serves as a tool for liberation rather than control.`,
    `The use of a laser light to beam messages into the night sky in the midst of conflict is a particularly striking aspect of Communicator. The searchlight serves as a beacon, cutting through the darkness and turmoil of war to reach out to the cosmos and connect with others.

Through this use of technology, we are able to bring a critical lens to bear on the conflict and the power structures that shape it. By shining a light on these issues, we are able to expose the hidden dynamics at play and challenge dominant narratives.
 
At the same time, the use of the searchlight also serves as a reminder of the vastness and beauty of the cosmos. It is a reminder that, despite the struggles and divisions of our world, we are all connected by a shared humanity and a common destiny.
 
Through Communicator, we hope to spark a dialogue that will allow us to move beyond conflict and towards a more harmonious and equitable future. By using technology to connect and communicate, we can build bridges of understanding and cooperation that will serve as a foundation for a more peaceful and prosperous world.`,
    `Communicator is a powerful tool for addressing geopolitical struggles and the complex power dynamics that shape our world. By beaming messages in Morse code into the night sky via a laser light, the project brings attention to these issues and encourages critical reflection on the ways in which institutions and power structures exert influence.

The use of Morse code as a language for these messages adds another layer of meaning to the project. Morse code was originally developed as a way to communicate over long distances using simple equipment, and it has a rich history as a medium for resistance and dissent. By using Morse code in Communicator, we are reclaiming this legacy and bringing it into the 21st century.
 
The searchlight used in Communicator serves as a beacon, cutting through the darkness and illuminating the geopolitical struggles that often go unseen. It is a reminder that, even in the face of seemingly insurmountable obstacles, it is possible to find a way to connect and communicate with others.
 
Ultimately, Communicator is about using technology to challenge power structures and give voice to the voiceless. It is about shining a light on the complex issues that shape our world and working towards a more just and equitable future.`,
    `Communicator is a metaphor for the power of language to ignite change and challenge the status quo. It is a spark that can set the world ablaze, illuminating the struggles of those who have been silenced and oppressed.

Like a fist smashing through glass, the power of language has the potential to shatter the chains of imprisonment and give voice to the voiceless. Through Communicator, we hope to spark a dialogue about the role of language in shaping our world and to encourage critical reflection on the ways in which language is used as an instrument of control.

Communicator is a poetic exploration of the complexities of power and the human desire for freedom and self-expression. It is a call to action to challenge the silences and censorship that often prevent us from examining the society in which we live. It is a reminder that, just as a single flame can ignite a raging inferno, the power of language has the potential to incite powerful and violent change.`,
    `Communicator is a metaphor for the power of language to bring light to the darkness and expose the systems of oppression that seek to silence and imprison us. It is a beam of photons, cutting through the night and illuminating the struggles of those who have been forced to hide in the shadows.

Like a fire that consumes all in its path, the power of language has the potential to break free from the constraints of power dynamics and give voice to the voiceless. Through Communicator, we hope to spark a dialogue about the role of language in shaping our world and to encourage critical reflection on the ways in which language is used as an instrument of control.
 
Communicator is a poetic exploration of the complexities of power and the human desire for freedom and self-expression. It is a call to action to challenge the silences and censorship that often prevent us from examining the society in which we live. It is a reminder that, just as the Large Hadron Collider at CERN unleashes forces that were previously hidden from view, the power of language has the potential to uncover the hidden mechanisms of power and incite powerful and transformative change. `,
    `The Morse code is a strange sound
It echoes in my head
I try to ignore it, push it down
But it's driving me to bedlam

I see the flashing in the sky
It's mesmerizing, I can't look away
I feel a strange urge to reply
But with what, I cannot say

The letters swirl in my mind
A jumbled, nonsensical mess
I don't know what they mean
But I must send them, I must confess

The Morse code consumes me
I can't escape its grasp
It controls my thoughts and actions
I'm trapped in its clasp.`,
    `Language has the power to both limit and expand our understanding of the world. It shapes our thoughts and perceptions, and can act as both a prison and a key. Morse code, with its dots and dashes, is a perfect example of this duality. It is a simple and universal system of communication, yet it can also be used to obscure and conceal meaning.

In the context of institutional power, language becomes even more significant. It can be used as a tool of control, a way to enforce hierarchies and maintain the status quo. The panopticon, with its central searchlight and system of surveillance, is a metaphor for this kind of power dynamic. The searchlight illuminates and exposes, while the prison walls enclose and restrict.

In the vast expanse of space, language and communication become even more crucial. In the midst of space warfare and the quest for dominance, the ability to communicate and understand one another can be the difference between victory and defeat.

But language also has the power to transcend these boundaries and bring us together. It can be a bridge across the divide, a way to connect and understand one another. Morse code may be a simple system of dots and dashes, but it holds within it the potential for infinite meaning and understanding.`,
    `Communicator is a provocative exploration of the power dynamics of language and communication. Using Morse code and a beam of light, it transmits messages into the night sky, illuminating the darkness and breaking through the silence.

But language can be a double-edged sword, capable of both concealing and revealing the truth. In the hands of those in power, it can be used to manipulate and deceive, to imprison and silence. Communicator acknowledges and challenges these negative aspects of language, using it as a tool of resistance and empowerment.

However, the project is not without its risks. By using language in this way, it may be co-opted by those in power and used to reinforce existing hierarchies. It is a provocative and potentially controversial endeavor, one that may spark conflict and disagreement.

Despite these risks, Communicator holds the potential for significant change and understanding. Like a plastic, malleable substance, it has the power to shape and mold the world around us. It can be a force for change and understanding, breaking down barriers and illuminating the truth. The true power of Communicator lies in its ability to bring about transformation and connection, using the simple yet profound medium of language and communication.`,
    `Communicator is an exploration of the immaterial nature of language and communication. Using Morse code and a beam of light, it transmits messages into the night sky, illuminating the darkness and breaking through the silence.

But language is an elusive and intangible thing, prone to dissonance and noise. It can be misconstrued and misunderstood, creating confusion and conflict. Communicator acknowledges and embraces these aspects of language, using them as a source of tension and meaning.

The project is a source of dissonance and noise in the broader communication landscape, challenging the status quo and offering an alternative perspective. It is a beacon of hope in a world where power and injustice often reign supreme, a way to connect and communicate despite the obstacles.

Like a beam of light, Communicator pierces through the darkness, bringing clarity and understanding to the world around us. It is a reminder of the power of language and communication, and the ways in which they can shape and transform the world. The true power of Communicator lies in its ability to bring about transformation and connection, using the simple yet profound medium of language and communication.`,
  ]

  const info = infos[Math.floor(Math.random() * infos.length)]
  return (
    <div
      class={s.container}
      style={{
        opacity: hidden() ? 0 : 1,
      }}
      ref={ref}
    >
      {info}
    </div>
  )
}
