function reset() {

    location.reload()

}


function result() {


    const input = document.getElementById('input').value;
    const number = parseInt(input);
    const print = document.getElementById('output').getElementsByTagName('tbody')[0];


    for (let i = 1; i <= number; i++) {


        if (i % 3 === 0 && i % 5 === 0) {

            print.insertRow().insertCell().innerHTML = 'FizzBuzz'

        } else if (i % 3 === 0) {

            print.insertRow().insertCell().innerHTML = 'Fizz'

        } else if (i % 5 === 0) {

            print.insertRow().insertCell().innerHTML = 'Buzz'

        } else {

            print.insertRow().insertCell().innerHTML = i
        }

    }

}