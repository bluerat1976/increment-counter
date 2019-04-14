
    var currentCount = (parseInt(prompt('input number')));
    function makeCounter() {
      // возвращаемся к функции
      function counter() {
        return currentCount++;
      }
      return counter;
    }
    var counter = makeCounter();
    var button = document.getElementById('button');
    button.addEventListener('click', func);
    function func() {
      var div = document.getElementById('result');
      div.innerHTML = counter();
    }