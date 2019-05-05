const paragraph = document.querySelector('.paragraph');
const content = document.querySelector('.content');

paragraph.addEventListener('mouseover', () => {
  content.innerHTML += `<p>${paragraph.innerHTML}</p>`;
});
