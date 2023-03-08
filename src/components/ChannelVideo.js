import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture, demoChannelTitle } from "../utils/constant";


function ChannelCard({ channelDetail }) {
    return ( 
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px'},
                heigth: '326px',
                margin: 'auto'
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <CardMedia 
                        image={channelDetail?.snippet?.thumnails?.high?.url ||  demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            mb: 2,
                            border: '1px solid #e3e3e3'
                        }}
                    />

                    <Typography variant="h6">
                        {channelDetail?.snippet?.title || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>

                    {channelDetail?.statistics?.subcriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subcriberCount).toLocateString()}
                            Subcribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
     );
}

export default ChannelCard;