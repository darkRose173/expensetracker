import IncomeSchema from '../models/incomeModel.js'

//Post Income method
export const addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = IncomeSchema({
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
        res.status(200).json({ message: 'Income successfully added!' })
        await income.save()
        console.log('Saved to DB');
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
    console.log(income);
}

//Get Income method
export const getIncome = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

//Delete Income method
export const deleteIncome = async (req, res) => {
    const {id} = req.params;                        //Retrieve the id of the income
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}