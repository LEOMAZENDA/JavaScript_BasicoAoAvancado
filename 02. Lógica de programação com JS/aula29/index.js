// fazendo uma função 
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0: diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2: diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3: diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4: diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5: diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6: diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }
}

const data = new Date('1987-04-26 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);


// switch (diaSemana) {
//     case 0: diaSemanaTexto = 'Domingo';
//         break;
//     case 1: diaSemanaTexto = 'Segunda-feira';
//         break;
//     case 2: diaSemanaTexto = 'Terça-feira';
//         break;
//     case 3: diaSemanaTexto = 'Quarta-feira';
//         break;
//     case 4: diaSemanaTexto = 'Quinta-feira';
//         break;
//     case 5: diaSemanaTexto = 'Sexta-feira';
//         break;
//     case 6: diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         diaSemanaTexto = '';
// }

