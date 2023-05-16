const Job = require('../models/jobModel');
const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create job
exports.createJob = async (req, res, next) => {
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            requirements:req.body.requirements,
            user: req.user.id,
            postedBy:req.body.postedBy
        });
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//update job by id.
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, { new: true }).populate('jobType', 'jobTypeName').populate('user', 'firstName lastName');
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//show job 
exports.showJobs = async (req, res, next) => {
    // enable search
    const keyword = req.query.keyword
      ? {
          title: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};

     
  
    // filter jobs by category ids
    const jobTypeCategory = await JobType.find({}, { _id: 1 });
    const ids = jobTypeCategory.map((cat) => cat._id);
    const cat = req.query.cat ? req.query.cat : ids;
  

     //jobs by location

    const jobByLocation = await Job.find({}, { location: 1 });
    const locations = jobByLocation.map(val => val.location);
    const setUniqueLocation = [...new Set(locations)];
    const location = req.query.location;
    const locationFilter = location ? location : setUniqueLocation;



    // enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find({ ...keyword,jobType: cat,location:locationFilter }).countDocuments();
    const jobs = await Job.find({ ...keyword,jobType:cat ,location:locationFilter })
      .skip(pageSize * (page - 1))
      .limit(pageSize);
  
    res.status(200).json({
      success: true,
      jobs,
      page,
      pages: Math.ceil(count / pageSize),
      count,
      setUniqueLocation
      
    });
  };
  


// exports.showJobs = async (req, res, next) => {

//     //enable search 
//     const keyword = req.query.keyword ? {
//     title: {
//         $regex: req.query.keyword,
//         $options: 'i'
//     }
//     } : {}

//      // filter jobs by category ids
//      let ids = [];
//      const jobTypeCategory = await JobType.find({}, { _id: 1 });
//      jobTypeCategory.forEach(cat => {
//          ids.push(cat._id);
//      })
 
//      let cat = req.query.cat;
//      let categ = cat !== '' ? cat : ids;


//     //enable pagination
//     const pageSize = 2;
//     const page = Number(req.query.pageNumber)||1;
//    // const count = await Job.find({}).estimatedDocumentCount();
//     const count = await Job.find({...keyword,jobType: categ}).countDocuments();

//     try {
//         const jobs = await Job.find({...keyword,jobType: categ}).skip(pageSize * (page-1))
//         res.status(200).json({
//             success:true,
//             jobs,
//             page,
//             pages:Math.ceil(count/ pageSize),
//             count,
            
//         })
//     } catch (error) {
//         next(error)
//     }

// }   





