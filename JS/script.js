// JS to stop transitions on page load
const body = document.getElementById("body");

function removeTransitions() {
    body.classList.remove("noTransition");
    console.log("Transitions Allowed");
}

(function () {
    removeTransitions();
})();

// end Function
