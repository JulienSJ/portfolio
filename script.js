// Sélectionner l'élément du texte
        const animatedText = document.getElementById("animatedText");

        // Ajouter un événement de clic pour activer l'animation
        animatedText.addEventListener("click", () => {
            // Ajouter la classe active qui déclenche les animations
            animatedText.classList.add("active");

            // Optionnellement, on peut retirer l'animation après un certain temps
            // en supprimant la classe après 6 secondes
            setTimeout(() => {
                animatedText.classList.remove("active");
            }, 6000); // La durée de l'animation est de 6 secondes
        });
