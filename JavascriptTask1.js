// variable that stores a name

let name = 'Sharon Koech';

console.log('Printing out my name');
console.log(name);
//variable that stores courses
let courses = ['Front End','Design','Coding'];

//to loop through the array
console.log('Looping through my courses array');
for(i=0;i<courses.length;i++){
    console.log(courses[i]);
};

// to display range of numbers from 1 to 200 with cases for even and odd number of  courses
console.log('Displaying odd numbers from 1 to 200 in the case of odd number of courses');
if ( courses.length % 2 == 1){
    for( i = 1 ; i <= 200 ; i++){
        if( i % 2 == 1){
            console.log(i);
        };
    };

}
else{
    for( i= 1 ; i<= 200 ; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
