var count = 0;
        var stage = 1;
        var stage2 = 3;
        var counter = setInterval(timer, 14830); //1000 will  run it every 1 second
        var ref = "Configuring updates";

        function timer() {
            count = count + 1;
            if (count <= 0) {
                clearInterval(counter);
                return;
            }

            document.getElementById("timer").innerHTML = count + '%';



            if (count > 99) {
                stage = stage + 1;
                document.getElementById("stage").innerHTML = stage + '';
                count = 0;
                return;
            }

            if (stage > 3) {
                stage2 = 68;
                ref = "Installing Updates";
                document.getElementById("ref").innerHTML = ref + '';
                document.getElementById("stage2").innerHTML = stage2 + '';
                return;
            }

        }