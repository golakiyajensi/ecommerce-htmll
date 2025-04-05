
        document.querySelector('.button1').addEventListener('click', function () {
            document.querySelector('.product-grid').style.gridTemplateColumns = 'repeat(1, 1fr)';
            const images = document.querySelectorAll('.product-image');
            images.forEach(image => {
                image.style.height = '750px';
            });
        });

        document.querySelector('.button2').addEventListener('click', function () {
            document.querySelector('.product-grid').style.gridTemplateColumns = 'repeat(2, 1fr)';
            const images = document.querySelectorAll('.product-image');
            images.forEach(image => {
                image.style.height = '750px';
            });
        });

        document.querySelector('.button3').addEventListener('click', function () {
            document.querySelector('.product-grid').style.gridTemplateColumns = 'repeat(3, 1fr)';
            const images = document.querySelectorAll('.product-image');
            images.forEach(image => {
                image.style.height = '480px';
            });
        });

        document.querySelector('.button4').addEventListener('click', function () {
            document.querySelector('.product-grid').style.gridTemplateColumns = 'repeat(4, 1fr)';
            const images = document.querySelectorAll('.product-image');
            images.forEach(image => {
                image.style.height = '434px';
            });
        });

        document.querySelector('.button5').addEventListener('click', function () {
            document.querySelector('.product-grid').style.gridTemplateColumns = 'repeat(5, 1fr)';
            const images = document.querySelectorAll('.product-image');
            images.forEach(image => {
                image.style.height = '350px';
            });
        });

        document.querySelector('.button6').addEventListener('click', function () {
            document.querySelector('.product-grid').style.gridTemplateColumns = 'repeat(6, 1fr)';
            const images = document.querySelectorAll('.product-image');
            images.forEach(image => {
                image.style.height = '300px';
            });
        });
