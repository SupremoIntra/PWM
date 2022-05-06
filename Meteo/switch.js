    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");

        const obj = {
            darkMode: state,
            date: new Date().getTime() / (60 * 24 * 24 * 3),
        }
        console.log(obj);
        itemN = Object.keys(localStorage).length + 1;
        localStorage.setItem('mode' + itemN, JSON.stringify(obj));


        console.log('Cliccato');
        state = localStorage.getItem(obj.darkMode);

        //da sistemare

    }