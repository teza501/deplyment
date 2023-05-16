import React, { useEffect, useState } from 'react'
import Header from '../component/Header/Header'
import { Box, Card, ListItemIcon, Pagination, Stack,MenuItem, MenuList, Typography } from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { jobLoadAction } from '../redux/actions/jobAction';
import { Link, useParams } from 'react-router-dom'
import CardElement from '../component/card/CardElement';
import {Loading} from '../component/Loader/Loading'
import SelectComponent from '../component/card/SelectComponents';
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = () => {

  
  const {jobs, pages, loading, setUniqueLocation } = useSelector(state => state.loadJobs)
  const dispatch = useDispatch();
  const { keyword, location} = useParams()

  const [page, setPage ] = useState(1);
  const [cat, setCat] = useState('');

  useEffect(()=>{
    dispatch(jobLoadAction(page,keyword,cat,location))
  },[dispatch,page,keyword,cat,location])


  useEffect(() => {
    dispatch(jobTypeLoadAction());
}, []);

const handleChangeCategory = (e) => {
  setCat(e.target.value);
}

  return (
    <div>
    <Header />
    <div className="home-header-container">
      <h1 className="home-header-title"
      >Featured Job Postings</h1>
      <Link to="/jobs" 
      style={{
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: 'crimson',
        padding: '8px 20px',
        marginRight:'40px',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease-in-out',
        cursor: 'pointer',
      }}
      className="view-details-link">
        View Details
      </Link>
    </div>
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
          <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          >

            <Box sx={{ flex: 7, p: 2 }}>
                {
                  loading ? <>
                  <Loading />
                  </> : jobs && jobs.length === 0 ? 
                  <>
                   <Box
                       sx={{
                        minHeight: '400px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>

                        <h2>No result found!</h2>
                    </Box>
                  </>:jobs && jobs.map((job,i)=>(
                    <CardElement 
                    key ={i}
                    id={job._id}
                    jobTitle={job.title}
                    description={job.description}
                    category={job.jobType ? job.jobType.jobTypeName :"No category"}
                    location={job.location}
                    postedBy={job.postedBy}
                    />
                  ))
                }
                <Stack spacing={2}>
                  <Pagination page={page} count={pages === 0 ? 1 : pages} 
                  onChange={(event,value) => setPage(value)}
                  />
                </Stack>
            </Box>
          </Stack>
        </Box>
    </div>
  )
}

export default Home