function customRender(reactElement, container) {  // making custom render code for our custom react element
    /*
    let domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */

    let domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue  // continue skips the current iteration and moves on to the next one.
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

let reactElement = {  // React converts JSX into this object format before building the virtual DOM (this is our custom react element)
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

let mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)