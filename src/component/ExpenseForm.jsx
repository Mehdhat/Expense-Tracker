import React from 'react';
import { useForm } from "react-hook-form";

function ExpenseForm({addExpense}) {
    const { register, handleSubmit, formState:{errors} } = useForm();

    return (
        <form className='mb-5' onSubmit={handleSubmit(addExpense)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input id="description" type="text" className="form-control" {...register("description", {minLength:6 , required:true})}/>
                {errors.description?.type == "required" && <p className='text-danger'>This field is required</p>}
                {errors.description?.type == "minLength" && <p className='text-danger'>This field requires at least 6 characters</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input id="amount" type="number" className="form-control" {...register("amount", {required:true})}/>
                {errors.amount?.type == "required" && <p className='text-danger'>This field is required</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select id="category" name="category" className='form-select' {...register("category", {required:true})}>
                    <option value=""></option>
                    <option value="utilities">Utilities</option>
                    <option value="beauty products">Beauty Products</option>
                    <option value="groceries">Groceries</option>
                    {/* Add other categories as needed */}
                </select>
                {errors.category?.type == "required" && <p className='text-danger'>This field is required</p>}
            </div>

            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default ExpenseForm;
