//create an array of the answers
const correctAns = ['B','B','B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

//add an event listener to the form.
form.addEventListener('submit', e =>{
    e.preventDefault();

    //create a variable for the answers
    let score = 0;

    //create a reference of the inputs of the form.
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers.
    userAns.forEach((answer, index) =>{
        if(answer === correctAns[index]){
            score +=25;
        } 
    });

    //show results
    scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);





});