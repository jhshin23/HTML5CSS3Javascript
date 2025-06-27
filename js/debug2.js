var a = 1;
let b = 1;
console.log(a);
        function fn() {
        a = 2;
        b = 2;
        console.log(a, b);
            function fn2(){
                a = 3;
                b = 3;
                console.log(a, b);
                var a = 4;b=4;
                console.log(a, b);
            }
            fn2();
            console.log(a, b);

        }
        fn();
        console.log(a, b);

        //node js/debug2.js