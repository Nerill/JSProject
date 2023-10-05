//Task 1 --------------------------------------------------------------------------------------------
{
    const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
    let initials = [];
    
    for (let fullName of userNames)
    {
        let name = fullName.split(' ');  
        initials.push(name.map((x)=>x[0]).join('.'));
    }
    initials.sort();

    console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
}
//---------------------------------------------------------------------------------------------------


//Task 2.1 ------------------------------------------------------------------------------------------
{
    const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
    let filteredNames=[];
    const letters = ['А','Е','О','У','Є','Ю','І','Ї','Я'];

    for (let fName of userNames)
    {
        if(letters.includes(fName[0]))
        {
            filteredNames.push(fName);
        }
    }

    console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
}
//----------------------------------------------------------------------------------------------------

//Task 2.2 -------------------------------------------------------------------------------------------
{
    const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
    let filteredNames;
    const letters = ['А','Е','О','У','Є','Ю','І','Ї','Я']; 
 
    filteredNames = userNames.filter((fName) => letters.includes(fName[0]));

    console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
}
//----------------------------------------------------------------------------------------------------

//Task 3 ---------------------------------------------------------------------------------------------
{
    const currentMaxValue = 4589;
    let reverseMaxValue;

    let valueString = currentMaxValue.toString();
    let arrValue = valueString.split('');
    arrValue.reverse();    
    reverseMaxValue = Number(arrValue.join(''));

    console.log(reverseMaxValue); // 9854
    console.log(typeof reverseMaxValue); // 'number'
}
//------------------------------------------------------------------------------------------------------

//Task 4 -----------------------------------------------------------------------------------------------
{
    const resultsArray = [1, 2, [3, [4]]];
    let productOfArray;

    productOfArray = resultsArray.flat(Infinity).reduce((prev, nxt) => prev * nxt);

    console.log(productOfArray); // 24
}
//-------------------------------------------------------------------------------------------------------