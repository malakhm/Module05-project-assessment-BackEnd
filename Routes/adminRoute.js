import express from 'express';
import { registerAdmin, loginAdmin, logoutAdmin, getAllAdmins, deleteAdmin } from "../Controllers/adminController.js";
import Verification from '../Middleware/jwt.js';
const router = express.Router();

router.post('/register',registerAdmin);
router.post('/login',loginAdmin);
router.post('/logout',logoutAdmin);
router.get('/',getAllAdmins);
router.delete('/:id',deleteAdmin);

export default router;