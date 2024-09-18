// try {
//     // console.log(a);//Gerar um erro
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e deu erro');
//     console.log('Fechei o arquivo');

//     try{
//         console.log(a);//Gerar um erro
//     }catch(e){
//         console.log('Deu um erro aqui também');
//     } finally {
//         console.log('Tambem sou um FINALLY.');
//     }
// } catch {
//     console.log('Tratando o erro');
// } finally {
//     //esse vai executar sempre
//     console.log('FINALLY: Eu sempre sou executado...');
// }


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    //tratar o erro
    console.log(e);
} finally {
    console.log('Tenha uma boa tarde');
}