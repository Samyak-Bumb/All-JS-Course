let cnt = 0;

document.getElementById("decBtn").onclick = function () {
  cnt -= 1;
  document.getElementById("cntLbl").innerHTML = cnt;
}
document.getElementById("resetBtn").onclick = function () {
  cnt = 0;
  document.getElementById("cntLbl").innerHTML = cnt;
}
document.getElementById("incBtn").onclick = function () {
  cnt += 1
  document.getElementById("cntLbl").innerHTML = cnt;
}
