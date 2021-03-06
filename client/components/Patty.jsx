import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions'

function Patty (props) {
  const dispatch = useDispatch()
  const yourBurger = useSelector(state => state.cart)
  const pattysInCart = yourBurger.filter(ingredient => ingredient.type === 'patty')
  const pattyn = props.patty
  function handleClick () {
    if (pattysInCart.length < 2) { dispatch(addToCart(pattyn)) } else { alert('You can only have two patties you greedy pig!') }
    // console.log('clicked')
  }
  return (
    <>
      <p className='font'>
        <img src={`images/patty/${props.patty.name}.jpg` } onClick={handleClick} alt='pattys' className='body-image'/>
        <br></br><br></br>{props.patty.name}  </p>
    </>
  )
}

export default Patty
