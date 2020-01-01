  let results = {};
  let reviewBoxes = document.querySelector('.reviews-lists  ').children;
  for (let i = 0; i < reviewBoxes.length; i++){
    let el = reviewBoxes[i];
    let commentText, bottomSectionHTML;
    if (el.children.length > 2) {
      commentText = el.children[2].innerText;
      bottomSectionHTML = el.children[3].innerHTML;
    } else {
      commentText = el.children[0].innerText;
      bottomSectionHTML = el.children[1].innerHTML;
    }

    results[i] = {};
    results[i].comment = commentText;
    results[i].bottomSectionHTML = bottomSectionHTML;
  }
  console.log(JSON.stringify(results));
