import axios from 'axios';
import { JOB_LOAD_FAIL, 
    JOB_LOAD_REQUEST, 
    JOB_LOAD_SUCCESS,
    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL
 } from "../constants/jobconstant"


export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/v1/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}


//get job details
export const getJobDetails = (id) => async (dispatch)=>{
    try{
        dispatch({type: JOB_DETAILS_REQUEST});
        
        const { data } = await axios.get(`/api/v1/job/${id}`)
        dispatch({
            type:JOB_DETAILS_SUCCESS,
            payload: data.job,
        });
    }catch(error){
        dispatch({
            type: JOB_DETAILS_FAIL,
            payload:error.response.data.message,
        })
    }
}
