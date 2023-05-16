import { Box, Button, InputBase } from '@mui/material';
import React, { useRef, useEffect ,useState} from 'react';


const Youtube = () => {
  const [channelId, setChannelId] = useState(''); // state variable to hold channelId
  const videoContainer = useRef(null);
const KEY = 'AIzaSyDnTMm4rYPv5NUI2pSnpSLH3-iK94nj9zE'

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch channel data using the entered channelId
      const channelRes = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?key=${KEY}&part=snippet,contentDetails&id=${channelId}`
      );
      const channelData = await channelRes.json();
      const playlistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

      const playlistRes = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${KEY}&part=snippet&maxResults=10&playlistId=${playlistId}`
      );
      const playlistData = await playlistRes.json();
      const videoIds = playlistData.items.map(item => item.snippet.resourceId.videoId);

      append(playlistData.items);
      // Use the video IDs to play the videos
      // ... Your code to play the videos using the videoIds ...
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const append = data => {
    data.forEach(({snippet, videoId}) => {
              const img = snippet.thumbnails.high.url;
              const title = snippet.title;
              const channelTitle = snippet.channelTitle;
        
              // Create new div
              const div = document.createElement('div');
              const image = document.createElement('img');
              image.src = img;
              const name = document.createElement('p');
              name.innerText = title;
              const Cname = document.createElement('p');
              Cname.innerText = channelTitle;
              div.append(image, name, Cname);
              videoContainer.current.append(div);
            });
  };

  return (
    <div className='channel-input' style={{marginLeft:'20%'}}>
        <h1>Verify your Channel</h1>
        <h2>to check the functionality of youtube Api you can use this id: <b style={{backgroundColor:'crimson', color:'white'}}>UCtpDorOuxwQ1URGQ0WLIXmQ</b></h2>
        <b>Note:- Any youtube channel id will work same the above mentioned id is just for your reference</b>
        <form style={{ width: '50%' }} onSubmit={handleFormSubmit}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin:'30px' , border: '0.2px solid crimson'}}>

                <InputBase sx={{ bgcolor: 'white', padding: '10px' }}
                    fullWidth={true}
                    id="search"
                    name="search"
                    label="search"
                    placeholder='Enter your channel Id eg:UCtpDorOuxwQ1URGQ0WLIXmQ '
                    value={channelId} // bind the value to the state variable
                    onChange={(event) => setChannelId(event.target.value)} // update the state on input change
                />

                <Button color="primary" variant="contained" type="submit" 
                style={{
                    backgroundColor:'crimson',
                    color:'white'
                }}
                >
                    Search
                </Button>
            </Box>
        </form>
        <div ref={videoContainer} style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px'
        }}>
      {/* Video container */}
    </div>
    </div>
  );
};

export default Youtube;






// import { Box, Button, InputBase } from '@mui/material';
// import React, { useRef, useEffect } from 'react';

// const KEY = 'AIzaSyDnTMm4rYPv5NUI2pSnpSLH3-iK94nj9zE'
// const channelId = "UCD8F8vyfNRIcBITYpPZoSjA"

// const Youtube = () => {
//   const videoContainer = useRef(null);

//   useEffect(() => {
//     const mostPopular = async () => {
//       try {
//         const channelRes = await fetch(
//           `https://youtube.googleapis.com/youtube/v3/channels?key=${KEY}&part=snippet,contentDetails&id=${channelId}`
//         );
//         const channelData = await channelRes.json();
//         const playlistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

//         const playlistRes = await fetch(
//           `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${KEY}&part=snippet&maxResults=10&playlistId=${playlistId}`
//         );
//         const playlistData = await playlistRes.json();
//         const videoIds = playlistData.items.map(item => item.snippet.resourceId.videoId);

//         append(playlistData.items);
//         // Use the video IDs to play the videos
//         // ... Your code to play the videos using the videoIds ...
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };
//     mostPopular();
//   }, []);

//   const append = data => {
//     data.forEach(({snippet, videoId}) => {
//       const img = snippet.thumbnails.high.url;
//       const title = snippet.title;
//       const channelTitle = snippet.channelTitle;

//       // Create new div
//       const div = document.createElement('div');
//       const image = document.createElement('img');
//       image.src = img;
//       const name = document.createElement('p');
//       name.innerText = title;
//       const Cname = document.createElement('p');
//       Cname.innerText = channelTitle;
//       div.append(image, name, Cname);
//       videoContainer.current.append(div);
//     });
//   };

//   return (
//     <div className='channel-input'>
//         <h1>Verify your Channel</h1>
//         <form style={{ width: '50%' }}>
//             <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin:'30px' , marginLeft:'50%', border: '0.2px solid crimson'}}>

//                 <InputBase sx={{ bgcolor: 'white', padding: '10px' }}
//                     fullWidth={true}
//                     id="search"
//                     name="search"
//                     label="search"
//                     placeholder='Enter your channel Id'
//                 />

//                 <Button color="primary" variant="contained" type="submit" 
//                 style={{
//                     backgroundColor:'crimson',
//                     color:'white'
//                 }}
//                 >
//                     Search
//                 </Button>
//             </Box>
//         </form>
//         <div ref={videoContainer}>
//       {/* Video container */}
//     </div>
//     </div>
//   );
// };

// export default Youtube;




