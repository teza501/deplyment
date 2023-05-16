const express = require('express');
const router = express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobTypeController');
const { isAuthenticated } = require('../middleware/auth');



//job type routes

router.post('/type/create', isAuthenticated, createJobType)
router.get('/type/jobs', allJobsType)
router.put('/type/update/:type_id', isAuthenticated, updateJobType)
router.delete('/type/delete/:type_id', isAuthenticated, deleteJobType)





module.exports = router;