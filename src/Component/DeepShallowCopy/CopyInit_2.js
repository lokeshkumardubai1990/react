let developer1 = {
    title: 'Lokesh',
    skills: { primary: 'React', secondary: 'CSS' }
}

/**Way 2*/
/** Partial Deep Copy*/
/** Assigniing new copy of developer1 */
let developer2 = Object.assign({},developer1);

/**assign scenario works fine for direct Object  */
developer2.title = 'Mohan'

/**Way 2 problem */
/**If I change anything to developer2 if has nested object, developer1 nested Object also gets changed */
developer2.skills.primary = 'JAVA';

console.log(developer1);
console.log(developer2);

/**
 * If there are no nested function objects we can rely on this way of copy
 * 
 */