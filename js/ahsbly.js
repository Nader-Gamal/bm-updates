let mon = 0;
let amount = document.querySelector(".amount");
let alkst = document.querySelector(".alkst");

function selectOption(option) {
  mon = Number(option);
  let fees = document.querySelector(".fees");
  let installment = document.querySelector(".installment");

  document.getElementById("selectedOption").value = option;
  document.querySelector(".dropdown-toggle").innerText = `${option} months`;
  //   console.log(mon);
}

$(".clac").on("click", function () {
  let asty = "";
  if (mon == 3 && Number(amount.value) >= 1000) {
    let amt = (amount.value * 6) / 100;
    let install = amount.value / mon;
    asty += `
    <h6 class="p-2">القسط الشهري : ${install.toFixed(1)}</h6>
    <h6 class="p-2">
    المصروفات الادارية ${amt.toFixed(1)} جنية <span>بنسبة 6%</span>
  </h6>
  <h6 class="p-2">اول قسط: ${(install + amt).toFixed(1)}</h6>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 3 && Number(amount.value) < 1000) {
    asty += `
    <h4 class="p-2 text-danger">الحد الأدنى للتقسيط 1000 جنيه </h4>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 6 && Number(amount.value) >= 1000) {
    let amt = (amount.value * 9) / 100;
    let install = amount.value / mon;
    asty += `
    <h6 class="p-2">القسط الشهري : ${install.toFixed(1)}</h6>
    <h6 class="p-2">
    المصروفات الادارية ${amt.toFixed(1)} جنية <span>بنسبة 9%</span>
  </h6>
  <h6 class="p-2">اول قسط: ${(install + amt).toFixed(1)}</h6>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 6 && Number(amount.value) < 1000) {
    asty += `
    <h4 class="p-2 text-danger">الحد الأدنى للتقسيط 1000 جنيه </h4>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 12 && Number(amount.value) >= 1000) {
    let amt = (amount.value * 13.5) / 100;
    let install = amount.value / mon;
    asty += `
    <h6 class="p-2">القسط الشهري : ${install.toFixed(1)}</h6>
    <h6 class="p-2">
    المصروفات الادارية ${amt.toFixed(1)} جنية <span>بنسبة 13.5%</span>
  </h6>
  <h6 class="p-2">اول قسط: ${(install + amt).toFixed(1)}</h6>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 12 && Number(amount.value) < 1000) {
    asty += `
    <h4 class="p-2 text-danger">الحد الأدنى للتقسيط 1000 جنيه </h4>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 18 && Number(amount.value) >= 2000) {
    let amt = (amount.value * 17.5) / 100;
    let install = amount.value / mon;
    asty += `
    <h6 class="p-2">القسط الشهري : ${install.toFixed(1)}</h6>
    <h6 class="p-2">
    المصروفات الادارية ${amt.toFixed(1)} جنية <span>بنسبة 17.5%</span>
  </h6>
  <h6 class="p-2">اول قسط: ${(install + amt).toFixed(1)}</h6>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 18 && Number(amount.value) < 2000) {
    asty += `
    <h4 class="p-2 text-danger">الحد الأدنى للتقسيط 2000 جنيه </h4>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 24 && Number(amount.value) >= 3500) {
    let amt = (amount.value * 21.5) / 100;
    let install = amount.value / mon;
    asty += `
    <h6 class="p-2">القسط الشهري : ${install.toFixed(1)}</h6>
    <h6 class="p-2">
    المصروفات الادارية ${amt.toFixed(1)} جنية <span>بنسبة 21.5%</span>
  </h6>
  <h6 class="p-2">اول قسط: ${(install + amt).toFixed(1)}</h6>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 24 && Number(amount.value) < 3500) {
    asty += `
    <h4 class="p-2 text-danger">الحد الأدنى للتقسيط 3500 جنيه </h4>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 36 && Number(amount.value) >= 5000) {
    let amt = (amount.value * 29) / 100;
    let install = amount.value / mon;
    asty += `
    <h6 class="p-2">القسط الشهري : ${install.toFixed(1)}</h6>
    <h6 class="p-2">
    المصروفات الادارية ${amt.toFixed(1)} جنية <span>بنسبة 29%</span>
  </h6>
  <h6 class="p-2">اول قسط: ${(install + amt).toFixed(1)}</h6>
    `;
    alkst.innerHTML = asty;
  } else if (mon == 36 && Number(amount.value) < 5000) {
    asty += `
    <h4 class="p-2 text-danger">الحد الأدنى للتقسيط 5000 جنيه </h4>
    `;
    alkst.innerHTML = asty;
  }
});
