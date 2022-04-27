import { Stack } from 'react-bootstrap'
import kart from './Kart.jpg'

function About () {
    return (
        <>
        <Stack direction="horizontal" gap={3}>
            <p>
            <h1>Russell Racing</h1>
            <h3>Est. 2017</h3>
            Biff. You got a real attitude problem, McFly. You're a slacker. You remind me of you father when he went her, he was a slacker too. David, watch your mouth. You come here and kiss your mother before you go, come here. Uh, look me up when you get there. In that case, I'll tell you strait out.
            <br/>
            Right, okay, so right around 9:00 she's gonna get very angry with me. Bear with me, Marty, all of your questions will be answered. Roll tape, we'll proceed. Doc, you gotta help me. you were the only one who knows how your time machine works. I'm really gonna miss you. Doc, about the future- It's information about the future isn't it. I warned you about this kid. The consequences could be disastrous.
            <br/>
            Look, I'm just not ready to ask Lorraine out to the dance, and not you, nor anybody else on this planet is gonna make me change my mind. Hey, Doc? Doc. Hello, anybody home? Einstein, come here, boy. What's going on? Whoa, rock and roll. Yo Oh. Doc, look, all we need is a little plutonium. Look, there's a rhythmic ceremonial ritual coming up.
            <br/>
            Calvin, why do you keep calling me Calvin? Look me up when you get there, guess I'll be about 47. I'm gonna ram him. Can I go now, Mr. Strickland? Yeah, but I never picked a fight in my entire life.
            </p>
            <img alt='go-kart' src={kart}/>
        </Stack>
            
        </>
    )
}

export default About