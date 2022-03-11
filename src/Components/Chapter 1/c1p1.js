import React from 'react';
import { Link } from 'react-router-dom'

function C1P1(props) {
    return (
        <div>
            <h1>Chapter 1</h1>
            <p>You stand at the precipice of a rocky cliff, looking out at upon a vast twinkling ocean at night. The sound of waves gently rolling onto the beach below you remind you of pleasant times. In the dark blue twilight sky, the stars shine brightly, as far cry from the emptiness seen from the light polluted skies of cities.</p>
            <p>One star, in particular, catches your attention; a stark contrast to the blues and whites, this one shines an angry crimson. It fills you with a sense of dread.</p>
            <Link to='/c1p2'>
                <button>Continue...</button>
            </Link>
        </div>
    );
}

export default C1P1;