class React {
    static createRoot(rootElement) {

        return {
            render: function(domElement) {
                // type
                const element = document.createElement(domElement['type']);
                // props
                const props = domElement['props']
                for (const prop in props) {
                    element.setAttribute(prop, props[prop]);
                }
                // children
                element.innerHTML = domElement['children'];

                rootElement.appendChild(element);
            }
        }
    }
}

React.createRoot(document.getElementById('root')).render(
    App()
);

function App() {
    // explained below...
    const a = {
        type: 'a',
        props: {
            href: "https://www.google.com",
            target: "_blank",
        },
        children: "Launch Google"
    }

    return a;
}

// Example -
/*
    The jsx 
    <a href="https://www.google.com" target="_blank">Launch Google</a>

    is transpiled into object, so react can understand
    like:
    const a = {
        type: 'a',
        props: {
            href: "https://www.google.com",
            target: "_blank",
        }
        children: "Launch Google"
    }
    
    so this is done internally
    React.createElement('a', {href: "https://www.google.com", target: "_blank"}, "Launch Google")

    to imitate this we will send
    object 'a' to render function
*/