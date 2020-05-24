"use strict";

function Feedback(props) {
    Component.call(this, document.createElement("div"));
    this.container.classList.add("feedback");

    var header = document.createElement("h1");
    header.classList.add("feedback__message");
    header.innerText = props.message;

    this.container.append(header);
};

Feedback.extendsFrom(Component);