
function List(){
    const fruits = [{name:'Apple', cal:1},
                    {name:'Banana',cal:3},
                    {name:'Cherry', cal:2}, 
                    {name:'Date', cal:4}
                ];
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); reverse alphabetical
    fruits.sort((a, b) => a.cal - b.cal);

    const listFruits = fruits.map(fruit => <li key={fruit.name}>{fruit.name} & {fruit.cal}</li>);
    const lowCalFruits = fruits.filter(fruit => fruit.cal < 3);
    console.log(lowCalFruits);

    return (<ul>{listFruits}</ul>);
}

export default List;