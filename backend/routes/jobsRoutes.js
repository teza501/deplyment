const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobsController');
const { isAuthenticated } = require('../middleware/auth');



//jobs routes

router.post('/job/create', isAuthenticated, createJob);
router.get('/job/:id', singleJob);
router.put('/job/update/:job_id', isAuthenticated, updateJob);
router.get('/jobs/show', showJobs);



module.exports = router;