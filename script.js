function append(value) {
      document.getElementById("display").value += value;
    }

    function clearDisplay() {
      document.getElementById("display").value = "";
    }

    function deleteLast() {
      let display = document.getElementById("display");
      display.value = display.value.slice(0, -1);
    }

    function check(expression) {
      const validPattern = /^[0-9+\-*/().% ]+$/;
      return validPattern.test(expression);
    }

    function calculate() {
      const display = document.getElementById("display");
      const input = display.value;

      if (check(input)) {
        try {
          display.value = eval(input);
        } catch (e) {
          display.value = "Error";
        }
      } else {
        display.value = "Invalid!";
      }
    }