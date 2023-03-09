import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import Videos from './Videos';
import SideBar from './SideBar';
import ChannelCard from './ChannelVideo';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function ChannelDetail() {
    const [channelDetail, setChannelDetail] = useState(null)
    const [channelVideos, setChannelVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`channel?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]))
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setChannelVideos(data?.items))
    }, [id])

    return ( 
        <Stack 
            sx={{
                display: 'flex',
                flexDirection: { sx: 'column', md: 'row' }
            }}
        >
            <SideBar />
            <Box 
                sx={{
                    ml: '10px',
                    width: '100%'
                }}
            >
                <Box>
                    <div
                        style={{
                            height:'300px',
                            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                            zIndex: 10,
                        }}
                    />
                    <ChannelCard channelDetail={channelDetail} marginTop="-100px"/>
                </Box>

                <Box display='flex' p={2} sx={{ mr: { sm: '100px' }}}>
                    <Videos videos={channelVideos}/>
                </Box>
            </Box>
        </Stack>
     );
}

export default ChannelDetail;