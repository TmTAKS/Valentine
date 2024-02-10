// script.js

// เลือกองค์ประกอบที่จะทำงาน
const noButton = document.getElementById("No");

// เพิ่ม event listener สำหรับเมื่อนำเมาส์ไปวางที่ปุ่ม "No"
noButton.addEventListener("mouseover", function() {
    // สุ่มตำแหน่งใหม่สำหรับปุ่ม "No"
    const newX = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const newY = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));

    // กำหนดตำแหน่งใหม่ใน inline style ของปุ่ม "No"
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
});
