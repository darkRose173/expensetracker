import express from 'express';
import { getIncome, addIncome, deleteIncome } from '../controllers/income.js';
import { addExpense, deleteExpense, getExpense } from '../controllers/expenses.js';

const router = express.Router();

// Add income API
router.post('/add-income', addIncome)
router.get('/get-incomes',getIncome)
router.delete('/delete-income/:id',deleteIncome)
router.post('/add-expense', addExpense)
router.get('/get-expenses',getExpense)
router.delete('/delete-expense/:id',deleteExpense)

export default router;