let developer1 = {title:'Lokesh'}

/**Way 1, also called Shallow copy */
/** Taken direct Reference copy of developer1 */
let developer2 = developer1;

/**Way 1 problem */
/**If I change anything to developer2, developer1 also gets changed */
developer2.title = 'Mohan'

console.log(developer1);
console.log(developer2);