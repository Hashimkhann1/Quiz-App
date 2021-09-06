const correctAnswer = ['A' , 'B' , 'B' , 'A']

const form = document.querySelector('.quiz-form')

const result = document.querySelector('.result')
form.addEventListener('submit' , (e) => {
	e.preventDefault()
	let score = 0;
	const userAnswer = [form.q1.value , form.q2.value , form.q3.value , form.q4.value]
	userAnswer.forEach((answer , index) => {
		if(answer === correctAnswer[index]){
			score += 25
		}
	})
	result.classList.remove('d-none')
	// result.querySelector('span').textContent = `${score}%`
	scroll(0,0)

	let outPut = 0;
	const timer = setInterval(() => {
		result.querySelector('span').textContent = `${outPut}%`
		if (outPut === score){
			clearInterval(timer)
		}
		else{
			outPut++
		}
	},24)
})