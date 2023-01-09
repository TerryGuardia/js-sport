function check() {
    let age = prompt('Votre age :');

    if(age == 6 || age == 7) {
        alert('Poussin');
    }
    if(age == 8 || age == 9) {
        alert('Pupille');
    }
    if(age == 10 || age == 11) {
        alert('Minime');
    }
    if(age >= 12 && age <= 17) {
        alert('Cadet');
    }
    if (age > 17 || isNaN(age)) {
        alert('Vous ne remplissez pas les conditions attendues.');
    }
}
