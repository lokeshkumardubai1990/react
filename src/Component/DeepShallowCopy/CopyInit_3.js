let developer1 = {
    title: 'Lokesh',
    skills: { primary: 'React', secondary: 'CSS' }
}

/**Way 3*/
/** Partial Deep Copy*/
/** Assigniing new copy of developer1 */
let developer2 = {...developer1};

/**If previous Obj contains any function or data,it will not be copied and date will be copied as string */
developer2.title = 'Mohan'
developer2.skills.primary = 'JAVA';

/**Way 3 problem */
/**If I change anything to developer2 if has nested object, developer1 nested Object also gets changed */

console.log(developer1);
console.log(developer2);

/**
 * If there are no nested function objects we can rely on this way of copy
 * 
 */