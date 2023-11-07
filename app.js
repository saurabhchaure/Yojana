import {
  selectTextArea,
  selectHeader,
  activateProps,
  addEditElement,
  editExisting,
  changeElement,
} from "./public/modules/addHeading.js";

// import setting from "./public/Setting/SETTING.json";

const elements = document.querySelectorAll(".ele");
const pageViewer = document.querySelector(".page-viewer");
const editorPage = document.querySelectorAll(".page-editor");

const setting = await Setting();
console.log(setting);

selectHeader();
addEditElement();
selectTextArea();

// click events

pageViewer.addEventListener("dblclick", editExisting);

for (const ele of elements) {
  ele.addEventListener("click", (e) => {
    const id = e.target.id;

    if (id === "Edit") {
      let modifyElement = document.querySelector(".modify");
      let nodName = modifyElement.nodeName.toLowerCase();
      let btn = document.querySelector(`#${nodName}`);
      let activeHead = document.querySelector(".active-head");
      const txtarea = document.getElementById("txtarea");

      txtarea.value = modifyElement.innerHTML;

      activeHead.classList.remove("active-head");
      btn.classList.add("active-head");
      console.log("editing value");

      console.log(modifyElement.nodeName);
    }

    if (id === "addHeading") {
      activateProps("Heading-prop", "addHeading");
      changeElement("header", "h1");
    } else if (id === "addParagraph") {
      activateProps("para-prop", "addParagraph");
      changeElement("paragraph", "p");
    } else if (id === "addList") {
      activateProps("list-prop", "addList");
    } else if (id === "addTable") {
      activateProps("table-prop", "addTable");
    } else if (id === "addLink") {
      activateProps("image-prop", "addLink");
    } else if (id === "addQuote") {
      activateProps("image-prop", "addQuote");
    } else if (id === "addImage") {
      activateProps("image-prop", "addImage");
    } else if (id === "Add") {
      const txtarea = document.getElementById("txtarea");
      let modifyElement = document.querySelector(".modify");
      let currentActiveElement = document.querySelector(".edit");
      let activeHead = document.querySelector(".active-head");
      let nodName = currentActiveElement.nodeName.toLowerCase();
      let btn = document.querySelector(`#${nodName}`);
      if (modifyElement) {
        modifyElement.classList.remove("modify");
        txtarea.value = currentActiveElement.innerHTML;
        activeHead.classList.remove("active-head");
        btn.classList.add("active-head");
      } else if (
        txtarea.value === "" &&
        !currentActiveElement.classList.contains("space")
      ) {
        alert(
          "Sorry, unable to add value to page, please type something in text area!"
        );
      } else {
        currentActiveElement.classList.remove("edit"),
          addEditElement(),
          (txtarea.value = "");
      }
    } else if (id === "addBreak") {
      let modifyElement = document.querySelector(".modify");
      let currentActiveElement = document.querySelector(".edit");
      modifyElement
        ? (currentActiveElement = modifyElement)
        : currentActiveElement;
      const breakElement = document.createElement("br");
      currentActiveElement.prepend(breakElement);
      breakElement.parentElement.classList.add("space");
    } else if (id === "Delete") {
      const modifyElement = document.querySelector(".modify");
      modifyElement && !modifyElement.classList.contains("edit")
        ? modifyElement.remove()
        : alert(
            "Active element cannot be deleted, please select previous element you want to delete and try agin!"
          );
    }
  });
}

async function Setting() {
  let setting;
  await fetch("./public/setting/SETTING.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setting = data[0];
    });
  return setting;
}
