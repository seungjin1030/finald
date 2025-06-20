const slides = document.querySelectorAll(".bg-slide");
const sideLabel = document.getElementById("sideLabel");
const sliderHandle = document.querySelector(".vLine2");

const labels = ["Optimus Gen 3", "Figure 02", "Atlas", "Apollo"];
let current = 0;

function updateSlide(idx) {
  // 1) 이전 슬라이드 → active 제거, prev 추가
  const prev = slides[current];
  prev.classList.remove("active");
  prev.classList.add("prev");

  // 2) 현재 인덱스 갱신 및 active 추가
  current = idx % slides.length;
  const next = slides[current];
  next.classList.add("active");

  // 3) 1초 뒤 prev 클래스 제거 (아래로 내려가는 부분 숨김)
  setTimeout(() => prev.classList.remove("prev"), 1000);

  // 4) 레이블 텍스트 & 위치
  sideLabel.textContent = labels[current];
  sideLabel.style.top = `${30 + current * 10}rem`;

  // 5) 핸들 위치 (레이블보다 0.5rem 위로)
  sliderHandle.style.top = `${19.5 + current * 2}rem`;
}

// 첫 번째 슬라이드 초기화
updateSlide(0);

// 5초마다 슬라이드 + 레이블 갱신
setInterval(() => {
  updateSlide(current + 1);
}, 5000);
