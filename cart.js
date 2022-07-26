///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((x, y) => x + y.price, 0)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    cartTotal = cartTotal * (1+tax)
    cartTotal -= couponValue
    return cartTotal
}

console.log(calcFinalPrice(100, 10, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
If I am going to increase my marketing spend on Instagram for my restaurant, I will need to know who to target
and also what sorts of specials to target toward them. So I would like to know what meal they ordered for sure.
I could also take note of their age, because maybe older folks like a particular meal. I could also note
whether they are a man/woman as maybe men tend to order more of a certain meal than women and vice versa. Lastly,
it could be very helpful to know the price they paid for their meal to make sure my marketing dollars will lead
to a profit.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer =
    {
        price: 20,
        sex: 'male',
        age: 68,
        order: 'omelette',
}