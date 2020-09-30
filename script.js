const addElement = (e, node, txt, attr, value) => {
    e.preventDefault()
    const element = document.createElement(node)
    if (txt) {
        const text = document.createTextNode(txt)
        element.appendChild(text)
    }
    if (attr) {
        element.setAttribute(attr, value)
    }

    document.querySelector('.content').appendChild(element)

}

const searchElements = (e, searchingElements) => {
    e.preventDefault()
    const infoElement = document.querySelector('.result')
    infoElement.textContent = '';
    const elements = [...document.querySelectorAll(searchingElements)]
    if (elements.length) {
        infoElement.innerHTML = `<h2 class='result__h2'> In this document you have ${elements.length} elements <strong class='element__strong'> ${searchingElements}</strong>. </h2>`
        showInfo(elements, infoElement)
    } else {
        infoElement.innerHTML = `<h2 class='result__h2'> In this document I can't find <strong class='element__strong'>  ${searchingElements} </strong>elements. </h2>`
        return
    }

}

const showInfo = (elements, infoElement) => {
    console.log(elements);
    elements.forEach(element => {
        const item = document.createElement('div')
        item.className = 'result__info'
        item.innerHTML = `
        <div class='result__item'> element: ${element.nodeName}<div>
        <div class='result__item'> Class Name: ${element.className}<div>
        <div class='result__item'> Height: ${element.offsetHeight}<div>
        <div class='result__item'> Width: ${element.offsetWidth}<div>
        <div class='result__item'> Top: ${element.offsetTop}<div>
        <div class='result__item'> Left: ${element.offsetLeft}<div>
        <div class='result__item'> Scroll Height: ${element.scrollHeight}<div>
        `
        infoElement.appendChild(item)
    })

}

const addForm = document.querySelector('.element--addElement')
addForm.addEventListener('submit', (e) => addElement(e, addForm.elements.element.value, addForm.elements.text.value, addForm.elements.attr.value, addForm.elements.value.value))

const searchForm = document.querySelector('.element--searchElement')
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements.searchingElements.value))