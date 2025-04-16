import React from 'react'
import { Form, redirect } from 'react-router-dom'

export const createProduct = async ({request}) => {
    console.log(request)

    const data = await request.formData()

    const submission = {
        title:data.get('title'), 
        // right part .. data.get('title'), data.get('description') -> needs to be the same as name
        description:data.get('description'),
        price:data.get('price')
    }

    console.log(submission)
    // TODO post data using axios

    redirect('/products')
}
const CreateProduct = () => {
  return (
    <div>
        <h2>Create Product</h2>
        <Form method='POST' action="/create-product">
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title"/>
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