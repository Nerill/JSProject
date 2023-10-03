function sortUserNames() //Task 1
{
    const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
    let initials;

    initials = new Array();
    for (let fullName of userNames)
    {
        let name = fullName.split(' '); 
        initials.push(`${name[0][0]}.${name[1][0]}.${name[2][0]}.`);  
    }
    initials.sort();

    console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
}

function filterByConditionConstruct() //Task 2.1
{
    const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
    let filteredNames;

    filteredNames = new Array();
    for (let fName of userNames)
    {
        if(fName[0] == 'А' || fName[0] == 'Е' || fName[0] == 'О' || fName[0] == 'У'
        || fName[0] == 'Є' || fName[0] == 'Ю' || fName[0] == 'І' || fName[0] == 'Ї'
        || fName[0] == 'Я')
        {
            filteredNames.push(fName);
        }
    }

    console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
}

function filterByInBuildFunc() //Task 2.2
{
    const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
    let filteredNames;
 
    filteredNames = userNames.filter((fName) => 
        fName[0] == 'А'
        || fName[0] == 'Е'
        || fName[0] == 'О'
        || fName[0] == 'У'
        || fName[0] == 'Є'
        || fName[0] == 'Ю'
        || fName[0] == 'І'
        || fName[0] == 'Ї'
        || fName[0] == 'Я');

    console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
}

function reversNumbers() //Task 3
{
    const currentMaxValue = 4589;
    let reverseMaxValue;

    let valueString = currentMaxValue.toString();
    let arrValue = new Array();
    for(let idx = 0; idx < valueString.length; idx++)
    {
        arrValue.push(valueString[idx]);
    }
    arrValue.reverse();    
    reverseMaxValue = Number(arrValue.join(''));

    console.log(reverseMaxValue); // 9854
    console.log(typeof reverseMaxValue); // 'number'
}

function multiplyArrayItems() //Task 4
{
    const resultsArray = [1, 2, [3, [4]]];
    let productOfArray;

    productOfArray = resultsArray.flat(Infinity).reduce((prev, nxt) => prev * nxt);

    console.log(productOfArray); // 24
}