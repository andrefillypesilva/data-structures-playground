# Data Structures Playground
Implementation of the most common data structures in Javascript

## Instalation
After clone this repository you will need to run `npm i` to install all dependencies.

## How to run
To run this application you will need only run `npm run serve`.

## How to play
An initial data structure will be generated when the application starts off. Then you can manipulate this data structure inserting information in the inputs and choosing an action by the buttons.

![Application Example](https://github.com/andrefillypesilva/data-structures-playground/blob/main/application_example.jpg?raw=true)

### Available Actions
**ARRAY**
- **See array**: shows the current state of the array.
- **See array length**: shows the length of the current array.
- **Sort array**: shows the sorted array, using ```Quick sort``` algorithm.
- **Get**: shows the element value for provided index.
- **Push**: pushes the provided value in the current array.
- **Find**: if the current array has the provided value, it returns the finded index, else it returns -1.
- **Unshift**: inserts the provided value in the beginning of the current array.
- **Update**: updates the value for a new provided one in the provided index.
- **Slice**: returns a slice of the current array, based on the start/end indexes provided (if you do not provide the end index, it will consider the length of the current array).
- **Splice**: returns a new array with the provided value inserted in the provided index, shifting the remaining elements to right. However, if you provide a ```n``` value greater than zero in the ```quantity to delete``` argument, it will delete the ```n``` elements after the provided index and replace the value instead of them.
- **Shift**: removes the first element in the current array and shows the new one.
- **Pop**: removes the last element in the current array and shows the new one.

**LINKED LIST**
- **Prepend**: inserts the provided element in the beginning of the linked list and this element becomes the ```head```.
- **Append**: inserts the provided element in the end of the linked list and this element becomes the ```tail```.
- **Lookup**: finds the provided element in the linked list.
- **Insert**: inserts the provided element in the provided index.
- **Delete**: removes an element from the provided index.
- **Get**: returns a string containing the entire linked list.

**QUEUE**
- **Enqueue**: inserts the selected value in the end of the queue.
- **Dequeue**: removes the first element of the queue.
- **Lookup**: finds the selected element in the queue and return it.
- **Peek**: return the first element of the queue.

**STACK**
- **Push**: inserts the provided value in the top of the stack.
- **Pop**: removes the element in the top of the stack.
- **Lookup**: finds the provided element in the stack.
- **Peek**: return the element in the top of the stack.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
