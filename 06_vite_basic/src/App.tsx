import * as React from 'react'
import './asset/style/style.scss'
import DatePicker from './components/datepicker/DatePicker'

function App() {
  React.useEffect(() => {
    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-origin': '*',
      },
      body: JSON.stringify({
        email: 'John@gmail.com',
        username: 'johnd',
        password: 'm38rmF$',
        name: {
          firstname: 'John',
          lastname: 'Doe',
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: '1-570-236-7033',
      }),
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }, [])

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => console.log('products?sort=desc', json))
  }, [])

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=7')
      .then(res => res.json())
      .then(json => console.log('products?limit', json))
  }, [])

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => console.log('categories', json))
  }, [])

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(res => res.json())
      .then(json => console.log('category/electronics', json))
  }, [])

  return (
    <main className="tw-bg-slate-200">
      <h1 className="tw-pt-4 tw-text-lg tw-text-green-500 tw-shadow-md hover:tw-bg-sky-700">
        App
      </h1>
      <p className="tw-text-base">hello app!</p>
      <button className="btn">Submit!</button>
      <DatePicker />
    </main>
  )
}

export default App
