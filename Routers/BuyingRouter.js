import express from 'express';
import BuyingController from '../Controllers/BuyingController.js';
import { authMiddleware, roleMiddleware } from '../authMiddleware.js';

const buyingRouter = express.Router();

// **קבלת רשימת כל הסלים**
buyingRouter.get("/", authMiddleware,roleMiddleware('admin'), BuyingController.getList);

// **קבלת כל המוצרים בסל לפי מזהה לקוח**
buyingRouter.get("/products/:customerId", authMiddleware, BuyingController.getProducts);

// **חישוב מחיר הסל**
buyingRouter.get("/total-price", authMiddleware, BuyingController.calculateTotalPrice);

// **קבלת סל ספציפי לפי מזהה**
buyingRouter.get("/my-cart", authMiddleware, BuyingController.getById);

// **הוספת סל חדש**
buyingRouter.post("/", authMiddleware, BuyingController.add);

// **עדכון סל**
buyingRouter.put("/:id", authMiddleware, BuyingController.update);

// **הוספת מוצר לסל קיים**
buyingRouter.post("/add-product", authMiddleware, BuyingController.addProduct);

// **הסרת מוצר מהסל**
buyingRouter.delete("/remove-product/:productId", authMiddleware, BuyingController.removeProduct);

// **מחיקת סל**
buyingRouter.delete('/clear-cart', authMiddleware, BuyingController.clearCart);

export default buyingRouter;