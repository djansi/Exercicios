function analise(){
    let meses = new Array('Jan','Fev','Mar','Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p>Dia: ${dia}</p>`
    saida.innerHTML += `<p>Mês: ${meses[mes]}</p>`
    saida.innerHTML += `<p>Ano: ${ano}</p>`
    saida.innerHTML += `<p>Dia da Semana: ${sem}</p>`
    saida.innerHTML += `<p>Hora: ${hora}</p>`
    saida.innerHTML += `<p>Minutos: ${min}</p>`
    saida.innerHTML += `<p>Segundos: ${seg}</p>`






}