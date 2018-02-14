var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, element)
{
<<<<<<< HEAD
  var newarray = [element, ...array]
  return newarray
}
         
function destructivelyAddElementToBeginningOfArray(array, element)
{

  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element)
{
  var newarray = [...array, element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
  return array
}

function accessElementInArray(array, index)
{
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array)
{
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}

function removeElementFromEndOfArray(array)
{
  var newarray = array.slice(0,array.length - 1)
  return newarray
}

























=======
  newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginingOfArray(array, element)
{
  array = [element, ...array]
  return array
}
>>>>>>> bb57467470ebbeb2eb7196ac1c7755cfbc2a6bc1
