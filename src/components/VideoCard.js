import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoChannelUrl, demoChannelTitle, demoVideoTitle,
demoThumbnailUrl, demoVideoUrl } from "../utils/constant";

function VideoCard({ video: { id: {videoId}, snippet } }) {


    return ( 
        <Card sx={{ width: { md: '310px', xs: '100%' }, borderRadius: 0, boxShadow: 'none' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                />
            </Link>

            <CardContent sx={{ background: '#1e1e1e', height: '90px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography fontWeight="bold" color="#fff" variant="subtitle1">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography color="gray" variant="subtitle1">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
     );
}

export default VideoCard;