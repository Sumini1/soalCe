/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
// function getArea(length, width) {
//     let area;
//     // Write your code here
//     area = length * width;
//     return area;
// }

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
// function getPerimeter(length, width) {
//     let perimeter;
//     // Write your code here
//     perimeter = 2 * (length+width)
//     return perimeter;
// }


// //soal 4
// function main() {
//     // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
//     // Print the area of the circle:
//     let r = readLine()

//     const PI = Math.PI;
//     const area = PI*(r**2);
//     console.log(area);
//     // Print the perimeter of the circle:
//     const perimeter = 2 * PI * r;
//     console.log(perimeter);
// }


//soal 6
function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
        case "aiueo".includes(s[0]):
        letter = "A";
        break;
        case "bcdfg".includes(s[0]):
        letter = "B";
        break;
        case "h,j,k,l,m".includes(s[0]):
        letter = "C";
        break;
        case "n,p,q,r,s,t.v.w.x.y.z".includes(s[0]):
        letter = "D";
        break; 
        
    }
    return letter;
}

//soal 8
// function getSecondlargers(nums) {
//     //complete the function
//     let first = nums[0];
//     let second = -1;
//     for (let i = 0; i < array.length; i++) {
//         if (nums [i] > first) {
//             second = first;
//             first = nums[i]
//         }
//         if (nums[i] > second && nums[i] < first) {
//             second = nums[i];
//         }
        
//     }
//     return second;
// }



//soal 10
// function getCount(objects) {
//     let n = 0;
//     for (let o of objects) {
//         n += (o.x == o.y);
//     }
//     return n;
// }



// soal 12
//membuat class rectangle
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    
}

// Menambah function baru bernama area di class Rectangle dengan
// menggunakan javascript prototype

Rectangle.prototype.area = function() {
    return(this.w*this.h);
};

// Menmabah class square yg inherit ke Rectangle class Square extends Rectangle
class Square extends Rectangle {
    constructor(s) {
        super(s);
        this.h = s;
        this.w = s;
    }
};




