"use strict";

// const handleTabClick = (e) => {
//     const element = e.target;

//     //remove current displaying tab

//     const allTabBodies = document.querySelectorAll('.tab-body')

//     allTabBodies.forEach(tabBody =>
//         tabBody.style.display = 'none'
//     )

//     //show corresponding tab content

//     const tabIdData = element.dataset.id;

//     const tabBody = document.querySelector(`#${tabIdData} > .tab-body`);
//     tabBody.style.display = 'block';
// };

// const tabHeaders = document.querySelectorAll('.tab-header');
// tabHeaders.forEach(tabHeader => {
//     tabHeader.addEventListener('click', handleTabClick)
//     tabHeader.addEventListener('click', () => {
//         tabHeaders.forEach((tabHeader) => tabHeader.classList.remove("active"));
//         tabHeader.classList.add("active");
//     })
// })

const handleTabClick = (e) => {
  const element = e.target;

  // remove current displaying tab content
  const allTabBodies = document.querySelectorAll(".tab-body");
  allTabBodies.forEach((tabBody) => (tabBody.style.display = "none"));

  // Show corresponding tab content
  const tabIdData = element.dataset.id;
  const tabBody = document.querySelector(`.tab-body[data-id="${tabIdData}"]`);
  if (tabBody) {
    tabBody.style.display = "block";
  }

  const tabHeaders = document.querySelectorAll(".tab-header");
  tabHeaders.forEach((tabHeader) => tabHeader.classList.remove("active"));
  element.classList.add("active");
};

const tabHeaders = document.querySelectorAll(".tab-header");
tabHeaders.forEach((tabHeader) => {
  tabHeader.addEventListener("click", handleTabClick);
});

// Optionally, show the first tab-body by default on page load
document.addEventListener("DOMContentLoaded", () => {
  if (tabHeaders.length > 0) {
    tabHeaders[0].click();
  }
});

const workspaceIcons = document.querySelectorAll(".workspace-icon");

workspaceIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    workspaceIcons.forEach((icon) => {
      icon.classList.remove("clicked");
    });
    icon.classList.add("clicked");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (workspaceIcons.length > 0) {
    workspaceIcons[3].click();
  }
});

const callerName = document.querySelector(".name");
const callerIdentity = document.querySelector(".caller-id");
const inputField = document.querySelector(".input");
const identityWrapper = document.querySelector(".identity-wrapper");

callerIdentity.addEventListener("click", () => {
  const inputBox = inputField.value;
  console.log("clicked");
  if (inputBox == "") {
    return alert("Input cannot be empty!");
  }
  // callerName.textContent = inputField.value;
  identityWrapper.innerHTML += `<div class="identity-container">
            <p class="identity">${inputBox}</p>
            <button class="text-close"><i class="fa-solid fa-x"></i></button>
        </div>`;

  inputField.value = "";

  const closeButtons = document.querySelectorAll(".text-close");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      const request = prompt(
        "Are you sure you want to delete this ID? Please type Yes or click on cancel to return."
      );
      if (request.toLocaleLowerCase() == "yes") {
        closeButton.parentElement.remove();
      } else {
        return;
      }

      // closeButton.parentElement.remove();
      // alert('Sure?');
    });
  });
});

const recordingCompliant = document.querySelector(".recording-compliant");
const ratesWrapper = document.querySelector(".rates-wrapper");

const closeCompliantsBtn = document.querySelector(".close-compliant");
closeCompliantsBtn.addEventListener("click", () => {
  // closeCompliantsBtn.parentElement.remove();
  slider.style.left = "1px";
  slider.style.right = "auto";
  switchOne.style.background = "black";
  recordingCompliant.style.display = "none";
  alert("Are you sure you want to remove this?");
});

const switchOne = document.querySelector(".switch-one");
const slider = document.querySelector(".slider-one");

switchOne.addEventListener("click", () => {
  if (slider.style.left == "1px") {
    slider.style.right = "1px";
    slider.style.left = "auto";
    switchOne.style.background = "blue";
    recordingCompliant.style.display = "block";
  } else {
    slider.style.left = "1px";
    slider.style.right = "auto";
    switchOne.style.background = "black";
    recordingCompliant.style.display = "none";
  }
});

const switchTwo = document.querySelector(".switch-two");
const sliderTwo = document.querySelector(".slider-two");

switchTwo.addEventListener("click", () => {
  if (sliderTwo.style.left == "1px") {
    sliderTwo.style.right = "1px";
    sliderTwo.style.left = "auto";
    switchTwo.style.background = "blue";
    ratesWrapper.style.display = "flex";
  } else {
    sliderTwo.style.left = "1px";
    sliderTwo.style.right = "auto";
    switchTwo.style.background = "black";
    ratesWrapper.style.display = "none";
  }
});

const messageSwitch = document.querySelector(".switch-message")
const messageSlider = document.querySelector(".slider-message")

messageSwitch.addEventListener("click", () => {
  if (messageSlider.style.left == "1px") {
    messageSlider.style.right = "1px";
    messageSlider.style.left = "auto";
    messageSwitch.style.background = "blue";
  } else {
    messageSlider.style.left = "1px";
    messageSlider.style.right = "auto";
    messageSwitch.style.background = "black";
  }
});

const switchIntegrationOne = document.querySelector('.switch-integration-one');
const switchIntegrationTwo = document.querySelector('.switch-integration-two');
const sliderIntegrationOne = document.querySelector('.slider-integration-one');
const sliderIntegrationTwo = document.querySelector('.slider-integration-two');

switchIntegrationOne.addEventListener("click", () => {
  if (sliderIntegrationOne.style.left == "1px") {
    sliderIntegrationOne.style.right = "1px";
    sliderIntegrationOne.style.left = "auto";
    switchIntegrationOne.style.background = "blue";
  } else {
    sliderIntegrationOne.style.left = "1px";
    sliderIntegrationOne.style.right = "auto";
    switchIntegrationOne.style.background = "black";
  }
});

switchIntegrationTwo.addEventListener("click", () => {
  if (sliderIntegrationTwo.style.left == "1px") {
    sliderIntegrationTwo.style.right = "1px";
    sliderIntegrationTwo.style.left = "auto";
    switchIntegrationTwo.style.background = "blue";
  } else {
    sliderIntegrationTwo.style.left = "1px";
    sliderIntegrationTwo.style.right = "auto";
    switchIntegrationTwo.style.background = "black";
  }
});


const signatureInput = document.querySelector('#signature-input');
const signaturePreview = document.querySelector('.signature-preview')
const signaturePreviewText = document.querySelector('#signature-preview-text');
const addSignatureBtn = document.querySelector('.add-signature-btn');
const signatureOutputText = document.querySelector('.signature-output-text');


signatureInput.addEventListener('input', () => {
  signaturePreviewText.textContent = signatureInput.value;
});


addSignatureBtn.addEventListener('click', () => {
  if (signatureInput.value === '') {
    return alert('Error! Please enter a signature.')
  } else {
    signatureOutputText.textContent = `Signature: ${signatureInput.value}`;
  }

  signatureInput.value = "";
  signaturePreviewText.textContent = '';
});






const mobileHamburger = document.querySelector(".hamburger");
const asideBar = document.querySelector(".aside-bar");
const hamburgerClose = document.querySelector(".aside-bar-close");

mobileHamburger.addEventListener("click", () => {
  console.log("button clicked");
  asideBar.style.display = "block";
});

hamburgerClose.addEventListener("click", () => {
  asideBar.style.display = "none";
  // hamburgerClose.parentElement.remove();
});
