import { Router } from 'express';
import { getBookController, saveBookController, dropBookController } from '../controllers';
import checkAdmin from '../middleware/checkAdmin';
import { loginController } from '../controllers/authController';

const router = Router();

router.post('/login', loginController); // endpoint
router.get('/get', checkAdmin, getBookController);
router.post('/save', checkAdmin, saveBookController);
router.post('/drop', checkAdmin, dropBookController);

export default router;