const pageViewer = document.querySelector(".page-viewer");

function changeElement(element, id) {
  let currentActiveElement = document.querySelector(".edit");
  let modify = document.querySelector(".modify");

  modify ? (currentActiveElement = modify) : currentActiveElement;

  const tempData = currentActiveElement.innerHTML;
  const header = document.createElement(id);

  header.innerHTML = tempData;
  header.classList.add(element, modify ? "modify" : "edit");
  pageViewer.appendChild(header);
  pageViewer.insertBefore(header, currentActiveElement);
  currentActiveElement.remove();
}

function selectHeader() {
  const headings = document.querySelector(".Heading-prop").children;
  for (const heading of headings) {
    heading.addEventListener("click", (e) => {
      const h = document.getElementById(e.target.id);
      const iconStyle = document.querySelectorAll(".icon-style");
      changeElement("header", e.target.id);

      h.classList.add("active-head");

      for (const icon of iconStyle) {
        if (icon.id !== e.target.id) {
          icon.classList.remove("active-head");
        }
      }
    });
  }
}
function activateProps(proClass, btnClass) {
  const prop = document.querySelector(`.${proClass}`);
  const activeProp = document.querySelector(".prop-active");
  const activateBtn = document.querySelector(`#${btnClass}`);
  const activeBtn = document.querySelector(".btn-active");

  if (activeBtn) activeBtn.classList.remove("btn-active");
  activateBtn.classList.toggle("btn-active");

  if (activeProp) activeProp.classList.remove("prop-active");
  prop.classList.toggle("prop-active");
}

function addEditElement() {
  const activeBtnId = document.querySelector(".btn-active").id;
  const headerId = document.querySelector(".active-head").id;
  let eleClass;
  let header;
  if (activeBtnId === "addHeading") {
    header = document.createElement(headerId);
    eleClass = "paragraph";
  } else if (activeBtnId === "addParagraph") {
    header = document.createElement("p");
    eleClass = "paragraph";
  } else if (activeBtnId === "addList") {
    header = document.createElement("ul");
    eleClass = "addList";
  }

  header.classList.add(eleClass, "edit");
  pageViewer.appendChild(header);
}

function selectTextArea() {
  const txtarea = document.getElementById("txtarea");
  const editText = (e) => {
    const txtarea = document.getElementById("txtarea");
    const currentActiveElement = document.querySelector(".edit");
    const modify = document.querySelector(".modify");

    if (e.key === "Enter") {
      txtarea.value = txtarea.value + "<br>\n";
    } else if (modify) {
      modify.innerHTML = txtarea.value;
    } else {
      currentActiveElement.innerHTML = txtarea.value;
    }
  };

  txtarea.addEventListener("keyup", editText);
}

const editExisting = (e) => {
  const modify = document.querySelector(".modify");
  modify !== null
    ? modify.classList.remove("modify")
    : e.target.classList.toggle("modify");
};

export {
  selectHeader,
  selectTextArea,
  activateProps,
  addEditElement,
  editExisting,
  changeElement,
};
