/**
 * using 3rd party library 
 */

const _ = require('lodash');

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
let developer2 = _.cloneWith(developer1);

/**assign scenario works fine for direct Object  */
developer2.title = 'Mohan'

/**Way 4 problem */
/**If previous Obj contains any function or data,it will not be copied and date will be copied as string */
developer2.skills.primary = 'JAVA';

console.log(developer1);
/**checking on the date type */
console.log(typeof(developer1.joiningDate));

console.log(developer2);
/**checking on the date type */
console.log(typeof(developer2.joiningDate));

/**
 * By Using lodash cloneDeep we can acheive what we expected for deep copy
*/

/**
 * 
 * By using lodash clone and cloneWith we can acheive same result as way 2 & 3 but nested function object issue will be there 
 */

/**
 * Similarly like cloneDeep, cloneDeepWith also giving the same result but yet it is to be analysyed further
 */