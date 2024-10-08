import { Router } from "express";
import { addReviews, getReviews } from "../controllers/reviews.js";

// create a router
const reviewRouter = Router();

// create routes
reviewRouter.post('/review', addReviews)

reviewRouter.get('/reviews', getReviews)


// export router
export default reviewRouter;
