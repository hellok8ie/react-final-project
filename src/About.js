import { Stack } from 'react-bootstrap'
import kart from './Kart.jpg'
import './About.css'

function About () {
    return (
        <>
            <Stack className='stuffHolder' direction='horizontal' gap={3}>
                <img className='goKart col-8' alt='go-kart' src={kart}/>   
                <div className='col-4'>
                    <h1>Russell Racing</h1>
                    <h5>Est. 2019</h5>
                    <p>
                    Biff. You got a real attitude problem, McFly. You're a slacker. You remind me of you father when he went her, he was a slacker too. David, watch your mouth. You come here and kiss your mother before you go, come here. Uh, look me up when you get there. In that case, I'll tell you strait out.
                    <br/>
                    Right, okay, so right around 9:00 she's gonna get very angry with me. Bear with me, Marty, all of your questions will be answered. Roll tape, we'll proceed. Doc, you gotta help me. you were the only one who knows how your time machine works. I'm really gonna miss you. Doc, about the future- It's information about the future isn't it. I warned you about this kid. The consequences could be disastrous.
                    <br/>
                    Oh, then I wanna give her a call, I don’t want her to worry about you. You okay, is everything alright? Can’t be. This is nuts. Aw, c’mon. I’m too loud. I can’t believe it. I’m never gonna get a chance to play in front of anybody. Great Scott. Let me see that photograph again of your brother. Just as I thought, this proves my theory, look at your brother.
                    </p>
                </div>
            </Stack>
        </>
    )
}

export default About