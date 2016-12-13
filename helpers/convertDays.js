function convertDays(name) {
    switch (name) {
    case 'monday':
        return 'Lunedì';
    case 'tuesday':
        return 'Martedì';
    case 'wednesday':
        return 'Mercoledì';
    case 'thursday':
        return 'Giovedì';
    case 'friday':
        return 'Venerdì';
    case 'saturday':
        return 'Sabato';
    case 'sunday':
        return 'Domenica';
    default:
        return '';
    }
}

module.exports = convertDays;