
// const button = document.getElementById('button');

// button.addEventListener('click', function() {
//     window.onload
// }
// ) ;

//location.reload()

function result() {

    
    const input = document.getElementById('input').value;
    const number = parseInt(input);
    const print = document.getElementById('output');

    for (let i = 1; i <= number; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            print.innerHTML += 'FizzBuzz <br/>'

        } else if (i % 3 === 0) {

            print.innerHTML += 'Fizz <br/>'

        } else if (i % 5 === 0) {

            print.innerHTML += 'Buzz <br/>'

        } else {

            print.innerHTML += i + ' <br/>'
        }

    }
}