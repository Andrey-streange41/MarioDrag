import {Router} from 'express';
import coordinateController from '../controller/index.js';

 const router = new Router();

router.get('/coordinate',coordinateController.getCoordinate);
router.post('/coordinate',coordinateController.setCoordinate);

export default router;