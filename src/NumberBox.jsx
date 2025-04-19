import React from 'react'

const NumberBox = () => {

  function isPrime(num){
    if (num < 2) return false;
    for (let i=2; i<=Math.sqrt(num); i++){
      if(num % i === 0) return false;
    }
    return true;
  }

  const numbers = []
  for (let i=0; i<=100; i++){
    numbers.push(i);  
  }

  function getColor(num){
    if(isPrime(num)) return "bg-red-500";
    if(num % 2 === 0) return "bg-green-400";
    return "bg-yellow-400";
  }
  
  
  let primeNo = [];
  let evenNo = [];
  let oddNo = [];
  
  function getCounts() {
  
    numbers.forEach(num => {
      if (isPrime(num)) {
        
        primeNo.push(num)
      } else if (num % 2 === 0) {
        evenNo.push(num)
      
      } else {
        oddNo.push(num)
      }
    }); 
  }
  getCounts()
  console.log(primeNo.length, evenNo.length, oddNo.length)
  


  return (
    <div>
      <section>
      <h1>The total number listed below is {numbers.length} having {primeNo.length} prime number, {evenNo.length} number and {oddNo.length} number</h1>
      </section>
      <div className='flex flex-wrap gap-6 justify-center items-center'>
        {
          numbers.map((num, index) => (
            <div className={`${getColor(num)} h-20 w-20 text-2xl text-white font-bold rounded-xl grid place-content-center`} key={index}>
              {num}
            </div>
          ))
        }
      </div>
    
    </div>
  )
}

export default NumberBox
