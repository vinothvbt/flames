document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('flamesForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name1 = document.getElementById('name1').value.toLowerCase().replace(/ /g, '');
        const name2 = document.getElementById('name2').value.toLowerCase().replace(/ /g, '');

        if (!name1 || !name2) {
            document.getElementById('flamesResult').innerText = "Please enter both names!";
            return;
        }

        let commonLetters = name1 + name2;
        for (let char of name1) {
            if (name2.includes(char)) {
                commonLetters = commonLetters.replace(char, '');
                commonLetters = commonLetters.replace(char, '');
            }
        }

        const flames = ["Friendship", "Love", "Affection", "Marriage", "Enemy", "Sibling"];
        let resultIndex = (commonLetters.length % flames.length) - 1;
        resultIndex = resultIndex < 0 ? flames.length - 1 : resultIndex;

        // Show the names directly
        document.getElementById('nameProcessing').innerText = `Processing Names: ${name1} & ${name2}`;

        // Proceed to animate FLAMES letters
        setTimeout(animateFlames, 1000); // Wait for 1 second before starting the FLAMES animation

        function animateFlames() {
            document.getElementById('flamesAnimation').style.opacity = 1; // Make sure it's visible
            document.getElementById('flamesText').innerHTML = ''; // Clear existing text

            // Show the FLAMES text at once
            let flamesText = ["F", "L", "A", "M", "E", "S"];
            flamesText.forEach((letter, index) => {
                let letterSpan = document.createElement('span');
                letterSpan.innerText = letter;
                letterSpan.style.animation = `letterStrike 1s ease forwards ${index * 0.5}s`; // Striking animation with delay
                document.getElementById('flamesText').appendChild(letterSpan);
            });

            setTimeout(() => {
                const result = flames[resultIndex];
                document.getElementById('flamesResult').innerHTML = `
                    <p>The result is: <strong>${result}</strong>!</p>
                `;

                // Change background color based on result
                document.body.classList.remove('friendship', 'love', 'affection', 'marriage', 'enemy', 'sibling');
                document.body.classList.add(result.toLowerCase());
            }, flamesText.length * 500); // Delay before showing the result
        }
    });
});
