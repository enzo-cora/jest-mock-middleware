import { Router } from 'express'
import { simpleAuthGuard } from "./middlewares/simpleAuthGuard.js";
import { advancedAuthGuard } from "./middlewares/advancedAuthGuard.js";

const router = Router();
const controller = async (req, res)=> res.status(200).send("OK")

router.get('/route1', advancedAuthGuard(false), controller);
router.get('/route2', simpleAuthGuard, controller);

export default router
