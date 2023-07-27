import * as React from 'react';
import dynamic from 'next/dynamic';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false})

 function Video() {
    return (
        <div id="video" className=''>
            <ReactPlayer
                className=''
                url='https://www.youtube.com/watch?v=oZNs8WxwfD8'
                controls={false}
                playing={true}
                muted={true}
                width="100vw%"
                height="100vh"
                loop={true}
            />
        </div>

    );
}
export default Video
