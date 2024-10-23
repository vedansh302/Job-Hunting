import express from "express"
import {postJob,getAllJobs,getAdminJobs,getJobById} from "../controllers/job.controller.js"
const router = express.Router()

import isAuthenticated from "../middlewares/isAuthenticated.js"

router.route("/post").post(isAuthenticated,postJob)
router.route("/get").get(isAuthenticated,getAllJobs)
router.route("/get-Admin-jobs").get(isAuthenticated,getAdminJobs)
router.route("/get/:id").get(isAuthenticated,getJobById)

export default router
