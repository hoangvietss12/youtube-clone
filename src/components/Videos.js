import { Stack, Box } from "@mui/system";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelVideo";

function Videos({ videos, direction }) {
    return ( 
        <Stack
            direction
            flexWrap='wrap'
            justifyContent='start'
            gap={2}
        >
            {videos.map((video, index) => {
                return (
                    <Box key={index}>
                        {video.id.videoId && <VideoCard video={video} />}
                        {video.id.channelId && <ChannelCard channelDetail={video} />}
                    </Box>
                )
            })}
        </Stack>
     );
}

export default Videos;