import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getJobDetails } from '../../redux/actions/jobAction';
import { Link, useParams } from 'react-router-dom'
import {Loading} from '../Loader/Loading'
import './CardDetalis.css'
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

const { job , loading} = useSelector((state) => state.jobDetails)
const { isAuthenticated } = useSelector((state) => state.user)

  useEffect(()=>{
    dispatch(getJobDetails(id))
  },[dispatch,id])

  return (
    
    <>
    {
      loading ? <Loading /> :(
        <>
        <div className='JobDetails'>
          <div className='MainDetailContainer'>
          <div className="job-title">
          <h2>{job.title}</h2>
            </div>
            <section className='layout'>
            <div className="salary">
            <Typography sx={{ fontSize: 25, color: 'grey', fontWeight: 500 }} gutterBottom>
                    <IconButton> <PaidIcon sx={{ color: 'grey', fontSize: 25 }} /></IconButton> {job.salary} per Project
            </Typography>
              </div>
            <div className="perProject">
            <Typography sx={{ fontSize: 25, color: 'grey', fontWeight: 500 }} gutterBottom>
                    <IconButton> <AccessTimeFilledIcon sx={{ color: 'grey', fontSize: 25 }} /></IconButton> per Project
            </Typography>
            </div>
           <div className="job-location">
           <Typography sx={{ fontSize: 25, color: 'grey', fontWeight: 500 }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: 'grey', fontSize: 25 }} /></IconButton> {job.location}
            </Typography>
            </div>
            <div className="start-date">
            <Typography sx={{ fontSize: 25, color: 'grey', fontWeight: 500 }} gutterBottom>
                    <IconButton><CalendarTodayIcon sx={{ color: 'grey', fontSize: 25 }} /></IconButton> Starts ASAP
            </Typography>
          </div>
            </section>
            <section className='easy-apply'>
             {
               isAuthenticated? <Link to='/apply'>
               <button className='easy-apply-btn'>Easy Apply</button> 
               </Link> : <Link to='/login'>
               <button onClick={()=> alert('login first to apply')} className='easy-apply-btn'>Easy Apply</button> 
               </Link>

             }
              <a herf="#" className='tell-a-friend'>tell a friend</a>
              <Link to="/youtube">
              <button style={{
                marginTop:'20px'
              }} className='easy-apply-btn'>Click to verify your channel</button> 
              </Link>
              <div className="PostedBycard">
           <p className="posted">Posted By - <span className="posted-by">{job.postedBy}</span></p>
           </div>
            </section>
            <hr />
            <br />
           <div className='job-description'>
              <h2>About the job</h2>
              <ul>
                <li><p>{job.description}</p></li>
                <li><p>{job.description}</p></li>
              </ul>
            <h2>Job requirements</h2>
            <ul>
              <li>
              <p>{job.requirements}</p>
              </li>
            </ul>
           </div>
          </div>
    </div>
        </>
      )
    }

    </>
  )
}

export default CardDetail