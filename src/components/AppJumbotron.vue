<script>
export default {
  name: "Jumbotron",
  mounted() {
    

const track = document.getElementById("image-tracker");
console.log(track);

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

  },
};
</script>
<template>
  <h2 class="container">Puoi scegliere tra queste categorie di ristorante:</h2>
  <div
    class="d-flex container"
    id="image-tracker"
    data-mouse-down-at="0"
    data-prev-percentage="0"
  >
    <div class="category image" ></div>
    <div class="category image" ></div>
    <div class="category image" ></div>
    <div class="category image" ></div>
    
 
    <!-- <img src="img/image0_0.jpg" alt="" class="image" draggable="false">
        <img src="img/image1_0.jpg" alt="" class="image" draggable="false">
        <img src="img\image0_0 (1).jpg" alt="" class="image" draggable="false">
        <img src="img\image0_0 (2).jpg" alt="" class="image" draggable="false">
        <img src="img\image0_0 (3).jpg" alt="" class="image" draggable="false">
        <img src="img\image0_0 (4).jpg" alt="" class="image" draggable="false">
        <img src="img\image1_0 (2).jpg" alt="" class="image" draggable="false">
        <img src="img\image1_0 (1).jpg" alt="" class="image" draggable="false"> -->
  </div>
  <!-- <script src="../jumbotron.js"></script> -->
</template>
<style scoped lang="scss">
/* slider di immagini */
#image-tracker {
  gap: 4vmin;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
  user-select: none;
  .category {
    width: 45vmin;
    height: 56vmin;
    border: 5px dashed purple ;
    object-fit: cover;
    object-position: center;
  }
}

</style>
