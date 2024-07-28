function Customrender(domElement,container){
    const newElement = document.createElement(domElement.type);
    newElement.innerHTML = domElement.children;
    const attributes = domElement.props;

    for(const key in attributes){
       if(key == 'children')
       continue;
       newElement.setAttribute(key,attributes[key]);
    }

    container.appendChild(newElement);
    
}


const domElement ={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to visit google"
}

const container = document.getElementById("root");
Customrender(domElement,container);
container.appendChild(`<h1> Hello World </h1>`);

