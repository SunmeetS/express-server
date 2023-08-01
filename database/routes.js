import {Router} from 'express'
import { addLinks, getLatestLinks } from "./controller.js"

const router = Router();

router.post("/addLinks", addLinks);
router.get("/getLatestLinks", getLatestLinks);

export default router