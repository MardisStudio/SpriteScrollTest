let frames;
const spriteWindow = document.getElementById("sprite-window"),
  spriteBounding = spriteWindow.getBoundingClientRect(),
  /*
    Change Total Frames
  */
  totalFrames = 34;

const handleScroll = (e) => {
  const movingBounds = spriteWindow.getBoundingClientRect();
  const currentFrame = Math.floor(totalFrames - movingBounds.bottom / frames);
  /*
    Change Image Height
  */
  spriteWindow.style.setProperty("--frame", "-" + currentFrame * 450 + "px");
  console.log(currentFrame);
};

const toggleScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.addEventListener("scroll", handleScroll);
      frames = spriteBounding.bottom / totalFrames;
    } else {
      document.removeEventListener("scroll", handleScroll);
    }
    console.log(entry.isIntersecting);
  });
};
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

let observer = new IntersectionObserver(toggleScroll, options);
let target = document.querySelector("#sprite-window");
observer.observe(target);

const test = document.getElementById("sprite-window");
test.style.setProperty("--frame", "green");

//document.addEventListener("scroll", handleScroll);
