function customReact(react, container) {
    const newElement = document.createElement(react.type);
    /*
    newElement.setAttribute("href",react.props.href);
    newElement.setAttribute("target",react.props.target);
    newElement.innerHTML = react.text;

    container.appendChild(newElement);
    */
    newElement.innerHTML = react.text;
    for(const prop in react.props) {
        newElement.setAttribute(prop,react.props[prop]);
    }

    container.appendChild(newElement);
}

const container = document.querySelector("#root");

const react = {
    type: "a",
    props: {
        href:"https://www.google.com",
        target: "_blank"
    },
    text: "Visit Google"
}

customReact(react,container);