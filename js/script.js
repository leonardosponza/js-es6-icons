const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

//   milestone1

function print(array){

  array.forEach((element) => {
    console.log(element);

    const {name, prefix, family} = element;

    const elementHTML = `
    <div>
      <i class="${family} ${prefix}${name}"></i>
      <div class="title">${name.toUpperCase()}</div>
    </div>
    `;

    document.getElementById('icons').innerHTML += elementHTML;
  
  });

 }
    // milestone2

function coloreicone(array){
    const color = icons.map((element) => {
        let color = 'purple'
        if(element.type == 'animal'){
            color = 'blue'
        } else if (element.type == 'vegetable'){
            color = 'green'
        }


        return {
           ...element,
           color
        }

    });
    return color
}

const types = [];

// milestone3

let typeIcons = [];
colorIcon.forEach((element) => {
    if(!typeIcons.includes(element.type)){
        typeIcons.push(element.type);
        document.getElementById('filter-select').innerHTML += 
        `<option value=${element.type}>${element.type}</option>`;
    }
});

console.log(typeIcons);


filterType.addEventListener("change", function() {
    let iconsShow;

    iconsShow = colorIcon;
    if(this.value != 'all'){
        iconsShow = colorIcon.filter((element) => element.type == this.value);
    }

    resetHtml();
    printColorIcon(iconsShow);
});