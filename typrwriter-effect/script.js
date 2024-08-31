document.addEventListener("DOMContentLoaded", function () {
  const typrwriterElement = document.getElementById("typewriter");
  console.log(typrwriterElement);
  const arrayOfWords = [
    "Frontend Developer",
    "Software Engineer",
    "Web Developer",
  ];
  let currentIndex = 0;
  const sleepTime = 100;

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const loopThroughArrayOfWords = async () => {
    while (true) {
      const currentWord = arrayOfWords[currentIndex];

      for (let i = 0; i < currentWord.length; i++) {
        typrwriterElement.innerHTML = currentWord.substring(0, i + 1);
        await sleep(sleepTime);
      }
      await sleep(sleepTime * 10);
      for (let i = currentWord.length; i > 0; i--) {
        typrwriterElement.innerHTML = currentWord.substring(0, i - 1);
        await sleep(sleepTime);
      }
      await sleep(sleepTime * 5);

      if (currentIndex === arrayOfWords.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
    }
  };

  loopThroughArrayOfWords();
});
