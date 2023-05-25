let nav = document.querySelector("nav");
let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter');


// NAVBAR CHANGE COLOR ON SCROLL
window.onscroll = () =>{
    if(window.scrollY>500){
        nav.classList.add("changec")
    }
    else{
        nav.classList.remove("changec")
    }
};


// Count-Up Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
      }
      UpdateCounter();
    }); 
  }
);

CounterObserver.observe(section_counter);





