
const fetchAdvice = async () => {
    const resultado = await fetch("https://api.adviceslip.com/advice")
    const data = await resultado.json()

    const idAdvice = data.slip.id
    const advice = data.slip.advice
    document.getElementById('id-advice').innerHTML = `Advice # ${idAdvice}`
    document.getElementById('advice').innerHTML = `"${advice}"`
}

fetchAdvice()