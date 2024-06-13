'use strict';
(function() {
    window.addEventListener('load', init);
    function init() {
        id("about").addEventListener('click', () => toPage("about-container"));
        id("education").addEventListener('click', () => toPage("education-container"));
        id("projects").addEventListener('click', () => toPage("projects-container"));
        id("links").addEventListener('click', () => toPage("links-container"));
    }

    /**
   * Toggles the visibility of elements to navigate back to any page.
   * @param {String} page the page that should become visible
   */
  function toPage(page) {
    let visibleItems = classId("visible");
    let hiddenItems = classId("hidden");

    if (visibleItems[0].id !== page) {
      visibleItems[0].classList.toggle("hidden");
      visibleItems[0].classList.toggle("visible");
    }

    for (let i = 0; i < hiddenItems.length; i++) {
      if (hiddenItems[i].id === page) {
        hiddenItems[i].classList.toggle("visible");
        hiddenItems[i].classList.toggle("hidden");
      }
    }
    let buttons = document.querySelectorAll("button");
    let currentButton = page.split("-");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === currentButton[0]) {
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
      }
  }

  /* ------------------------------ Helper Functions  ------------------------------ */
  /**
   * error handle function provided by course
   * @param {String} err error to be displayed
   */
  function handleError(err) {
    document.getElementsByTagName("footer").textConent = "Error occurred, refresh page: " + err;
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * generates an element using a tag
   * @param {String} tag  the element tag
   * @returns {HTMLElement} the element
   */
  function gen(tag) {
    return document.createElement(tag);
  }

  /**
   * generates an array of elements that have the specified class
   * @param {String} id  the element class
   * @returns {HTMLElement} the elements that have the class applied
   */
  function classId(id) {
    return document.getElementsByClassName(id);
  }
})();
