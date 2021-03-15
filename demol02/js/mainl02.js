'use strict';

let name = prompt('what your name?')
let food = prompt('what your favorite food?, mansaf, maqluba, Mandi, Biryani');
let time = prompt('what your favorite time for dinner? 3 pm, 5 pm')

alert('nice to meet you '+ name)

if(food.toLowerCase()== 'mansaf'|| food.toLowerCase()== 'maqluba' || food.toLowerCase()== 'Mandi' || food.toLowerCase()== 'Biryani' )
{
  alert('git five')
}
else 
{
  alert('in all cases, you own me a mansaf')
}

if(time.toLowerCase()=='3 pm')
{
  alert('at 3 pm will be better for me, so you owe me a '+food)
}
else if(time.toLowerCase()=='5 pm')
{
  alert('at 5 pm will be better for me, so you owe me a '+food)
}
else
{
  alert('in all cases, you own me a mansaf at any time you want')
}

switch(food)
{
case 'mansaf':
  console.log('in all cases, you own me a mansaf!');
  break;
case 'maqluba':
  console.log('in all cases, you own me a maqluba!');
  break;
case 'Mandi':
  console.log('in all cases, you own me a Mandi');
default:
  console.log('in all cases, you own me a Biryani');
  break;

}

