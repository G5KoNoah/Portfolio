
$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.carousel').carousel();
});



setInterval(function(){
  $('.carousel').carousel('next')
}, 5000);

const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }else{
        entry.target.classList.remove("visible")
      }
    });
  },
  { threshold: 0.3 }
);

projects.forEach(project => observer.observe(project));

// Filtrage par langage
const buttons = document.querySelectorAll(".filters button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach(project => {
      if (filter === "all" || project.dataset.lang === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});






