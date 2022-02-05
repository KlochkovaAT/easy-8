function getRandomLook(max) {
  return window.location.origin + '/images/looks-' + Math.floor(Math.random() * max) + '.png';
}

function getRandomLooks(max) {
  const totalCount = 14;
  const imgs = document.querySelectorAll('.looks__photos-item');
  let srcs = [];
  imgs.forEach(function (item) {
    srcs.push(item.src);
  });

  const countToChange = Math.floor(Math.random() * max) + 1;
  let changedItems = [];
  for (let i = 0; i < countToChange; i++) {
    let itemToChangeIndex = Math.floor(Math.random() * imgs.length);
    while (changedItems.indexOf(itemToChangeIndex) >= 0) {
      itemToChangeIndex = Math.floor(Math.random() * imgs.length);
    }

    let candidate = getRandomLook(totalCount);
    while (srcs.indexOf(candidate) >= 0) {
      candidate = getRandomLook(totalCount);
    }

    imgs[itemToChangeIndex].classList.add("looks__photos-item_hidden");
    srcs[itemToChangeIndex] = candidate;
    setTimeout(function() {
      imgs[itemToChangeIndex].src = candidate;
      imgs[itemToChangeIndex].classList.remove("looks__photos-item_hidden");
    }, 1000)

    changedItems.push(itemToChangeIndex);
  }

  setTimeout(getRandomLooks, 1300, 3)
}

getRandomLooks(3);
