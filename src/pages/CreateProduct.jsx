import React from 'react'
import { Form, redirect } from 'react-router-dom'
import axios from 'axios'

export const createProduct = async ({ request }) => {
    console.log(request)
    try {
        const data = await request.formData()

        const submission = {
            title: data.get('title'),
            // right part .. data.get('title'), data.get('description') -> needs to be the same as name
            description: data.get('description'),
            price: data.get('price')
        }

        console.log(submission)
        // TODO post data using axios

        const response = await axios.post('https://dummyjson.com/products/add', submission)
        console.log(response.data)
        return redirect('/products') // After finish redirect to product, 
        // For server action, we cannot use useNavigate
        // useNavigate can only be used in UI, fuction to render UI

    }
    catch (e) {
        console.log(e)
    }

}

const CreateProduct = () => {
    return (
        <div>
            <h2>Create Product</h2>
            <Form method='POST' action="/create-product">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" />
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description" />
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" id="price" />
                <button>Add item</button>
            </Form>
        </div>
    )
}

export default CreateProduct