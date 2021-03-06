import React from 'react';
import { Link } from 'react-router-dom'

function C1P2(props) {
    return (
        <div>
            <p>The star grows larger in your view, slowly at first, but quickly appears to engulf all those around it. Within moments it dwarfs the moon, and it gains a fiery tail of red and white streaks. You watch as it draws closer, and the clouds part as it crashes through them an into the ocean. The shockwave knocks you from your feet, and all you can hear now is a ringing in your ears. You get to your feet and return to the cliff's edge, where you see a wave, at least one-hundred feet tall, rise from the ocean and slam into the coast below you. </p>
            <p>Though you survived the cataclysm, you can't help but feel this isn't over, as you look toward the impact point, and see a frothing whirlpool in its wake. After a few moments, the water calms, and aside from the damage to the coast, nothing seems out of place.</p>
            <p>Your eyes begin to feel heavy, and before long, you find yourself drifting off into a slumber.</p>
            <Link to='/c1p3'><button>Continue...</button></Link>
        </div>
    );
}

export default C1P2;