import { Box, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            minHeight: 400,
            backgroundImage: `url('https://ytjobs.co/static/media/heroPhoto.dbdcfa4f.png')`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#eceff1",
            textAlign: 'left',
            [theme.breakpoints.down('sm')]: {
                minHeight: 300,
                backgroundPosition: "center",
                textAlign: 'center'
            }

        }

    ));
    const ContentBox = styled(Box)(({ theme }) => (
        {
            margin: 'auto',
            marginLeft: '5rem',
            fontSize:'1.3rem',
            color:'#262627',
            fontFamily:'sans-serif',
            [theme.breakpoints.down('sm')]: {
                maxWidth: '90%'
            }
        }
    ));
    return (
        <>
            <StyleHeader >
            <ContentBox>
                    <h1>Discover the best YouTube professionals</h1>
                    <p>Whether a talented YouTube professional or creator, here you</p>
                    <p>can find your dream job or next ideal teammate. Let's create!</p>
                    <Link to='/jobs'>
                    <button style={{
                         backgroundColor: '#e73950',
                         color: 'white',
                         border: 'none',
                         borderRadius: '5px',
                         padding: '10px 20px',
                         cursor: 'pointer',
                         fontSize: '20px'
                    }}>Explore Jobs!</button>
                    </Link>
                </ContentBox>
            </StyleHeader>
        </>
    )
}

export default Header