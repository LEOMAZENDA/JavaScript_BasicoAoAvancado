// const h1 = document.querySelector('.container h1');
// data = new Date();


// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0: diaSemanaTexto = 'domingo';
//             return diaSemanaTexto;
//         case 1: diaSemanaTexto = 'segunda-feira';
//             return diaSemanaTexto;
//         case 2: diaSemanaTexto = 'terça-feira';
//             return diaSemanaTexto;
//         case 3: diaSemanaTexto = 'quarta-feira';
//             return diaSemanaTexto;
//         case 4: diaSemanaTexto = 'quinta-feira';
//             return diaSemanaTexto;
//         case 5: diaSemanaTexto = 'sexta-feira';
//             return diaSemanaTexto;
//         case 6: diaSemanaTexto = 'sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//     }
// }

// function getNomeMes(numeroMes) {
//     let mesTexto;
//     switch (numeroMes) {
//         case 0: mesTexto = 'janeiro';
//             return mesTexto;
//         case 1: mesTexto = 'fevereiro';
//             return mesTexto;
//         case 2: mesTexto = 'março';
//             return mesTexto;
//         case 3: mesTexto = 'abril';
//             return mesTexto;
//         case 4: mesTexto = 'maio';
//             return mesTexto;
//         case 5: mesTexto = 'junho';
//             return mesTexto;
//         case 6: mesTexto = 'julho';
//             return mesTexto;
//         case 7: mesTexto = 'agosto';
//             return mesTexto;
//         case 8: mesTexto = 'setembro';
//             return mesTexto;
//         case 9: mesTexto = 'outubro';
//             return mesTexto;
//         case 10: mesTexto = 'novembro';
//             return mesTexto;
//         case 11: mesTexto = 'desembro';
//             return mesTexto;
//         default:
//             mesTexto = '';
//     }
// }


// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDay()} de ${nomeMes} ` +
//         `de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda (data.getMinutes())}`
//     )

// }

// function zeroEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }
// h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// data = new Date();
// const opcoes = {
//     sateStyle: 'full',
//     timeStyle: 'short'
// }; 
// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);


// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//     weekday: 'long',   // Dia da semana completo (segunda-feira, etc.)
//     year: 'numeric',   // Ano com 4 dígitos
//     month: 'long',     // Nome completo do mês (janeiro, etc.)
//     day: 'numeric',    // Dia do mês
//     hour: '2-digit',   // Hora com 2 dígitos
//     minute: '2-digit'  // Minutos com 2 dígitos
// };
// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-PT', { dateStyle: 'full', timeStyle: 'short' });


// function getNomeMeses(numeroMes) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
//         'agosto', 'setembro', 'outubro', 'novembro', 'desembro'];
//     return meses[numeroMes];
// }

// function getDiaSemana(dia) {
//     const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira',
//         'sexta-feira', 'sabado'];
//     return diasSemana[dia];
// }

