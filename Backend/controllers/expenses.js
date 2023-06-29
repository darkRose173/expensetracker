import ExpenseSchema from '../models/expenseModel.js'

//Post Income method
export const addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be Positive!' })
        }
        console.log('200 OK');
        res.status(200).json({ message: 'Expense successfully added!' })
        await income.save()
        console.log('Saved to DB');
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
    console.log(income);
}

//Get Income method
export const getExpense = async (req, res) => {
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

//Delete Income method
export const deleteExpense = async (req, res) => {
    const {id} = req.params;                        //Retrieve the id of the income
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}