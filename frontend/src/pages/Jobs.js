import React, { useEffect, useState } from 'react'
import './jobs.css';
import { Box, Card, ListItemIcon, Pagination, Stack,MenuItem, MenuList, Typography, Slider, CardContent } from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { jobLoadAction } from '../redux/actions/jobAction';
import { Link, useParams } from 'react-router-dom'
import CardElement from '../component/card/CardElement';
import {Loading} from '../component/Loader/Loading'
import SelectComponent from '../component/card/SelectComponents';
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchInputEl from '../component/Header/SearchInputEl';

const Jobs = () => {

  const {jobs, pages, loading, setUniqueLocation } = useSelector(state => state.loadJobs)
  const { jobType } = useSelector(state => state.jobTypeAll)
  const dispatch = useDispatch();
  const { keyword, location,cat} = useParams()

  const [page, setPage ] = useState(1);
  //const [cat, setCat] = useState('');

  useEffect(()=>{
    dispatch(jobLoadAction(page,keyword,cat,location))
  },[dispatch,page,keyword,cat,location])


  useEffect(() => {
    dispatch(jobTypeLoadAction());
}, []);



  return (
    <div>
      <SearchInputEl />
        <h1 style={{ fontSize:37, marginLeft:30}}>Jobs</h1>
        <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
          <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                  <Box sx={{ pb: 2 }}>
                    <Typography component="h4" sx={{ color: "#e73950", fontWeight: 600 }}>
                       Filter job by category
                    </Typography>
                  </Box>
                  {
  jobType && jobType.map((jobTypeName) => (
    <Link to={`/search/cat/${jobTypeName._id.toString()}`} key={jobTypeName._id}>
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {jobTypeName.jobTypeName}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  ))
}
                                {/* <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} /> */} 
              </Card>
                 {/* jobs by location */}
                 <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    {/* <h4>Filter by category</h4> */}
                                    <Typography component="h4" sx={{ color: 'crimson', fontWeight: 600 }}>
                                        Filter job by location
                                    </Typography>
                                    <MenuList>
                                        {
                                            setUniqueLocation && setUniqueLocation.map((location, i) => (
                                                <MenuItem key={i}>
                                                    <ListItemIcon>
                                                        <LocationOnIcon sx={{ color: 'crimson', fontSize: 18 }} />
                                                    </ListItemIcon>
                                                    <Link style={{color:'crimson',fontSize:18}} to={`/search/location/${location}`}>{location}</Link>
                                                </MenuItem>

                                            ))
                                        }

                                    </MenuList>  
                                </Box>
                  </Card>       
            </Box>



            <Box sx={{ flex: 5, p: 2 }}>
                {
                  loading ? <>
                  <Loading />
                  </> : jobs && jobs.length === 0 ? 
                  <>
                   <Box
                       sx={{
                        minHeight: '350px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>

                        <h2>No result found!</h2>
                    </Box>
                  </>:jobs && jobs
                  .map((job,i)=>(
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

export default Jobs