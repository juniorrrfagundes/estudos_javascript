const char = {
    name: '',
    level: '',
    race: '',
    type: {
        class: '',
        subclass: ''
    },
    pet: [],
    adicionarPet: function(item){
        this.pet.push(item)
    }
};

char.name = 'Northenred';
char.level = '20';
char.race = 'Nordic';
char.type.class = 'Warrior';
char.type.subclass = 'Kingth';

atributes = ['name', 'level', 'race', 'type'];
list = ['class', 'subclass'];

atributes.forEach(element => {
    if (element == 'type'){
        list.forEach(info =>{console.log(char[element][info])})
    } else{
        console.log(char[element])
    }
});

console.log('--------------')
const listName = ['linzmeier', 'maia'];
const listLevel = ['20', '10'];
for (i = 0; i < listName.length; i++){
    let item = {
        namePet: listName[i],
        levelPet: listLevel[i]
    };
    char.adicionarPet(item);
}

const propsChar = Object.values(char);


const found = propsChar.find(element => element == 'Nordic');
if (found != null){
    console.log(`O ${char.name} é um ${char.race}!`);
    console.log(`Resistência contra frio aumentada!`)
}

