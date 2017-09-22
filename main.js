(function function_name() {
    var usualDamage = document.getElementById("usualdamage"),
        criticalDamage = document.getElementById("criticaldamage"),
        calculate = document.getElementById("calculate_button"),
        d12 = document.getElementById("d12"),
        modifier = document.getElementById("modifier"),
        dicesum = document.getElementById("dicesum"),
        tableRef = document.getElementById("results"),
        dicenumber = document.getElementById("dicenumber");

    var modifierRandom = function () {
        return Math.floor(Math.random() * 12 + 1);
    }

    function damage() {
        var max = 2 * dicenumber.value;
        var damage = Math.floor(Math.random() * (max + 1));
        var crit = Math.floor(Math.random() * (damage + 1));

        dicesum.innerHTML = damage;
        criticalDamage.innerHTML = crit;
        criticalDamage.classList.add('show');
        usualDamage.innerHTML = damage - crit;
        usualDamage.classList.add('show');

        if (modifier.checked) {
            d12.innerHTML = modifierRandom;
            d12.classList.add('show');
            d12.classList.remove('hide');
        } else {
            d12.classList.add('hide');
            d12.classList.remove('show');
        }

        // writeInTable
        var newRow = tableRef.insertRow(1);

        var FirstCell = newRow.insertCell(0);
        var SecondCell = newRow.insertCell(1);
        var ThirdCell = newRow.insertCell(2);
        var FourthCell = newRow.insertCell(3);

        FirstCell.innerHTML = damage;
        SecondCell.innerHTML = damage - crit;
        ThirdCell.innerHTML = crit;
        FourthCell.innerHTML = modifier.checked ? modifierRandom : "-";
    }

    function numbersOnly(value) {
        this.value = this.value.replace(/[^\d]/, '');
    }

    dicenumber.addEventListener('keyup', numbersOnly);
    calculate.addEventListener('click', damage);
})();