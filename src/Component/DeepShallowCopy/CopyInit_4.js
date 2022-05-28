let developer1 = {
    title: 'Lokesh',
    skills: { primary: 'React', secondary: 'CSS' },
    calculateAge : function(){
        return 25;
    },
    joiningDate: new Date()
}

/**Way 4*/
/**Deep Copy*/
/** new copy object of developer1 will be received */
let developer2 = JSON.parse(JSON.stringify(developer1));

/**assign scenario works fine for direct Object and nested functions  */
developer2.title = 'Mohan'
developer2.skills.primary = 'JAVA';

/**Way 4 problem */
/**If previous Obj contains any function or data,it will not be copied and date will be copied as string */

console.log(developer1);
/**checking on the date type */
console.log(typeof(developer1.joiningDate));

console.log(developer2);
/**checking on the date type */
console.log(typeof(developer2.joiningDate));

/**
 * By Using Parse/stringify we will receive the copy object without its functions and we may loose certain type of objects 
 * 
 * we can use this if no function or date objects used
*/