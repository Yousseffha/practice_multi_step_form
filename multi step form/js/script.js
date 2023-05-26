let nextBtn = document.querySelectorAll("#next");
let steps = document.querySelectorAll("section");
let inputs = document.querySelectorAll(".form-field input");
let errorMessage = document.querySelectorAll(".form-field__error-message");
let plans = document.querySelectorAll(".plans .box");
let planCheck = document.querySelector(".check");
let billingMethods = document.querySelectorAll(".billing-method span");
let goBackBtn = document.querySelectorAll("#back");
let benifits = document.querySelectorAll(".benifits .box");
let checkBox = document.querySelectorAll(".check-box input");
let choice = document.querySelector(".plan-and-change-btn .plan");
let planPrice = document.querySelector(".price");
let changeBtn = document.querySelector(".change-btn");
let benifitName = document.querySelector(".benifit-name");
let benifitPrice = document.querySelector(".benifit-price");
let totalAmount = document.querySelector(".total .plan-price");
let totalPer = document.querySelector(".total .plan-name span");
let StepNumber = document.querySelectorAll(".side-bar .step .step__number");

// first step

nextBtn[0].onclick = function () {
  if (/(\w\s\w)/gi.test(inputs[0].value) === false) {
    errorMessage[0].style.display = "block";
    inputs[0].style.outlineColor = "red";
    inputs[0].style.borderColor = "red";
  }
  if (/(\w+@\w+\.\w+)/gi.test(inputs[1].value) === false) {
    errorMessage[1].style.display = "block";
    inputs[1].style.outlineColor = "red";
    inputs[1].style.borderColor = "red";
  }
  if (/(\+\d{8})/gi.test(inputs[2].value) === false) {
    errorMessage[2].style.display = "block";
    inputs[2].style.outlineColor = "red";
    inputs[2].style.borderColor = "red";
  }
  if (
    /(\w\s\w)/gi.test(inputs[0].value) &&
    /(\w+@\w+\.\w+)/gi.test(inputs[1].value) &&
    /(\+\d{8})/g.test(inputs[2].value)
  ) {
    steps[0].style.display = "none";
    steps[1].style.display = "flex";
    StepNumber[0].classList.remove("active");
    StepNumber[1].classList.add("active");
  }
};

inputs[0].oninput = function () {
  inputs[0].style.borderColor = "var(--InputBorder)";
  inputs[0].style.outlineColor = "var(--Gray)";
  errorMessage[0].style.display = "none";
};
inputs[1].oninput = function () {
  inputs[1].style.borderColor = "var(--InputBorder)";
  inputs[1].style.outlineColor = "var(--Gray)";
  errorMessage[1].style.display = "none";
};
inputs[2].oninput = function () {
  inputs[2].style.borderColor = "var(--InputBorder)";
  inputs[2].style.outlineColor = "var(--Gray)";
  errorMessage[2].style.display = "none";
};

// second step

plans[0].onclick = function () {
  plans[0].style.transition = "0s";
  plans[0].classList.add("clicked");
  plans[1].classList.remove("clicked");
  plans[2].classList.remove("clicked");
  let plan = "arcade";
};
plans[1].onclick = function () {
  plans[1].style.transition = "0s";
  plans[1].classList.add("clicked");
  plans[0].classList.remove("clicked");
  plans[2].classList.remove("clicked");
};
plans[2].onclick = function () {
  plans[2].style.transition = "0s";
  plans[2].classList.add("clicked");
  plans[0].classList.remove("clicked");
  plans[1].classList.remove("clicked");
};

planCheck.onclick = function () {
  planCheck.classList.toggle("checked");
  if (planCheck.classList.contains("checked")) {
    billingMethods[2].style.color = "var(--InfoTitleColor)";
    billingMethods[0].style.color = "#8f8f99";
    billingWay = "yearly";
  } else {
    billingMethods[0].style.color = "var(--InfoTitleColor)";
    billingMethods[2].style.color = "#8f8f99";
  }
};

goBackBtn[0].onclick = function () {
  steps[1].style.display = "none";
  steps[0].style.display = "flex";
};
nextBtn[1].onclick = function () {
  plans.forEach((e) => {
    if (e.classList.contains("clicked")) {
      steps[1].style.display = "none";
      steps[2].style.display = "flex";
    }
  });
  StepNumber[1].classList.remove("active");
  StepNumber[2].classList.add("active");
};

// third and fourth steps

benifits.forEach((e) => {
  e.onclick = function () {
    e.style.transition = "0s";
    e.classList.toggle("selected");
    if (benifits[0].classList.contains("selected")) {
      checkBox[0].setAttribute("checked", "");
    } else {
      checkBox[0].removeAttribute("checked");
    }
    if (benifits[1].classList.contains("selected")) {
      checkBox[1].setAttribute("checked", "");
    } else {
      checkBox[1].removeAttribute("checked");
    }
    if (benifits[2].classList.contains("selected")) {
      checkBox[2].setAttribute("checked", "");
    } else {
      checkBox[2].removeAttribute("checked");
    }
  };
});

goBackBtn[1].onclick = function () {
  steps[2].style.display = "none";
  steps[1].style.display = "flex";
};
nextBtn[2].onclick = function () {
  steps[2].style.display = "none";
  steps[3].style.display = "flex";

  let total = 0;
  if (plans[0].classList.contains("clicked")) {
    choice.innerHTML = "Arcade (Monthly)";
    planPrice.innerHTML = "$9";
    total += 9;
  }
  if (plans[1].classList.contains("clicked")) {
    choice.innerHTML = "Advanced (Monthly)";
    planPrice.innerHTML = "$12";
    total += 12;
  }
  if (plans[2].classList.contains("clicked")) {
    choice.innerHTML = "Pro (Monthly)";
    planPrice.innerHTML = "$15";
    total += 15;
  }
  if (
    plans[0].classList.contains("clicked") &&
    planCheck.classList.contains("checked")
  ) {
    choice.innerHTML = "Arcade (Yearly)";
    planPrice.innerHTML = `$${9 * 12}`;
    total = 9 * 12;
  }
  if (
    plans[1].classList.contains("clicked") &&
    planCheck.classList.contains("checked")
  ) {
    choice.innerHTML = "Advanced (Yearly)";
    planPrice.innerHTML = `$${12 * 12}`;
    total = 12 * 12;
  }
  if (
    plans[2].classList.contains("clicked") &&
    planCheck.classList.contains("checked")
  ) {
    choice.innerHTML = "Pro (Yearly)";
    planPrice.innerHTML = `$${15 * 12}`;
    total = 15 * 12;
  }

  if (benifits[0].classList.contains("selected")) {
    let benifitNameContent = document.createElement("div");
    benifitNameContent.className = "service";
    benifitNameContent.innerHTML = benifits[0].querySelector("h4").innerHTML;
    benifitName.append(benifitNameContent);
    if (planCheck.classList.contains("checked")) {
      total += 10 * 12;
    } else {
      total += 10;
    }
  }
  if (benifits[0].classList.contains("selected")) {
    let benifitPriceContent = document.createElement("div");
    benifitPriceContent.className = "servicePrice";
    benifitPriceContent.innerHTML =
      benifits[0].querySelector(".pricing").innerHTML;
    benifitPrice.append(benifitPriceContent);
  }
  if (benifits[1].classList.contains("selected")) {
    let benifitNameContent = document.createElement("div");
    benifitNameContent.className = "storage";
    benifitNameContent.innerHTML = benifits[1].querySelector("h4").innerHTML;
    benifitName.append(benifitNameContent);
    if (planCheck.classList.contains("checked")) {
      total += 20 * 12;
    } else {
      total += 20;
    }
  }
  if (benifits[1].classList.contains("selected")) {
    let benifitPriceContent = document.createElement("div");
    benifitPriceContent.className = "storagePrice";
    benifitPriceContent.innerHTML =
      benifits[1].querySelector(".pricing").innerHTML;
    benifitPrice.append(benifitPriceContent);
  }
  if (benifits[2].classList.contains("selected")) {
    let benifitNameContent = document.createElement("div");
    benifitNameContent.className = "cusomisation";
    benifitNameContent.innerHTML = benifits[2].querySelector("h4").innerHTML;
    benifitName.append(benifitNameContent);
    if (planCheck.classList.contains("checked")) {
      total += 20 * 12;
    } else {
      total += 20;
    }
  }
  if (benifits[2].classList.contains("selected")) {
    let benifitPriceContent = document.createElement("div");
    benifitPriceContent.className = "cusomisationPrice";
    benifitPriceContent.innerHTML =
      benifits[2].querySelector(".pricing").innerHTML;
    benifitPrice.append(benifitPriceContent);
  }
  if (planCheck.classList.contains("checked")) {
    totalAmount.innerHTML = `$${total}/yr`;
  } else {
    totalAmount.innerHTML = `$${total}/mo`;
  }
  if (planCheck.classList.contains("checked")) {
    totalPer.innerHTML = "(per year)";
  } else {
    totalPer.innerHTML = "(per month)";
  }
  StepNumber[2].classList.remove("active");
  StepNumber[3].classList.add("active");
};

goBackBtn[2].onclick = function () {
  steps[3].style.display = "none";
  steps[2].style.display = "flex";
  if (benifits[0].classList.contains("selected")) {
    benifitName.removeChild(benifitName.querySelector(".service"));
    benifitPrice.removeChild(benifitPrice.querySelector(".servicePrice"));
  }
  if (benifits[1].classList.contains("selected")) {
    benifitName.removeChild(benifitName.querySelector(".storage"));
    benifitPrice.removeChild(benifitPrice.querySelector(".storagePrice"));
  }
  if (benifits[2].classList.contains("selected")) {
    benifitName.removeChild(benifitName.querySelector(".cusomisation"));
    benifitPrice.removeChild(benifitPrice.querySelector(".cusomisationPrice"));
  }
};
changeBtn.onclick = function () {
  steps[3].style.display = "none";
  steps[1].style.display = "flex";
  if (benifits[0].classList.contains("selected")) {
    benifitName.removeChild(benifitName.querySelector(".service"));
    benifitPrice.removeChild(benifitPrice.querySelector(".servicePrice"));
  }
  if (benifits[1].classList.contains("selected")) {
    benifitName.removeChild(benifitName.querySelector(".storage"));
    benifitPrice.removeChild(benifitPrice.querySelector(".storagePrice"));
  }
  if (benifits[2].classList.contains("selected")) {
    benifitName.removeChild(benifitName.querySelector(".cusomisation"));
    benifitPrice.removeChild(benifitPrice.querySelector(".cusomisationPrice"));
  }
};
nextBtn[3].onclick = function () {
  steps[3].style.display = "none";
  steps[4].style.display = "flex";
};
