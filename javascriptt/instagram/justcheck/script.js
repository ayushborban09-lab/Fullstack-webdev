const likeBtn = document.querySelector('.like-btn');

likeBtn.addEventListener('click', () => {
  if (likeBtn.classList.contains('fa-solid')) {
    likeBtn.classList.remove('fa-solid');
    likeBtn.classList.add('fa-regular');
    likeBtn.style.color = 'black';
  } else {
    likeBtn.classList.remove('fa-regular');
    likeBtn.classList.add('fa-solid');
    likeBtn.style.color = 'red';
  }
});
