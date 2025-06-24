import express from 'express';
import { authMiddleware, roleMiddleware } from '../authMiddleware.js'; 
import CustomerController from '../Controllers/CustomerController.js';

const customerRouter = express.Router();

// **רק מנהל יכול לראות את רשימת כל הלקוחות**
customerRouter.get("/", authMiddleware, roleMiddleware('admin'), CustomerController.getlist);

// **פרופיל אישי - רק המשתמש עצמו יכול לגשת**
customerRouter.get('/profile', authMiddleware, CustomerController.profile);

// **לקוח יכול לקבל את המידע שלו**
// customerRouter.get('/getUserInfo', authMiddleware, CustomerController.getUserInfo);

// קודם הנתיב הספציפי
customerRouter.get("/by-email", authMiddleware, roleMiddleware('admin'), CustomerController.getByEmail);

// ואז הנתיב הדינמי
customerRouter.get("/:id", authMiddleware, CustomerController.getById);

//גם לקוח יכול להירשם בעצמו
customerRouter.post("/", CustomerController.add);

//גם לקוח יכול לעדכן בעצמו
customerRouter.put("/:id", authMiddleware, CustomerController.update);

// **כל משתמש יכול להתחבר**
customerRouter.post('/login', CustomerController.login);


export default customerRouter;
