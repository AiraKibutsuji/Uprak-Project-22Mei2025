// Jam Digital dengan suara detik
const jamDiv = document.getElementById("jam");
function updateJam() {
  const sekarang = new Date();
  let jam = sekarang.getHours();
  let menit = sekarang.getMinutes();
  let detik = sekarang.getSeconds();
  let ampm = jam >= 12 ? 'PM' : 'AM';
  jam = jam % 12 || 12;
  jamDiv.innerHTML = `${jam.toString().padStart(2, '0')}:${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')} ${ampm}`;

  // Suara detik
  const audio = new Audio('https://youtu.be/ZUUImy4jZrg?si=q7C0XlGVcUCzL7pM');
  audio.volume = 5.0;
  audio.play();
}
setInterval(updateJam, 1000);
updateJam();

// Jam mengikuti scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  jamDiv.style.transform = `translateY(${scrollY}px)`;
});