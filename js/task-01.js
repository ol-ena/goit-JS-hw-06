const Categories = document.querySelectorAll('li.item');

const NumbersOfCategories = Categories.length;
console.log(`Number of categories: ${NumbersOfCategories}`);

Categories.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`)
 
    const elements = element.querySelectorAll('li');
    const NumbersOfElements = elements.length;
    console.log(`Elements: ${NumbersOfElements}`);


});

