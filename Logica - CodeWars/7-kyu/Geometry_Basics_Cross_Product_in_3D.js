// Description:
// This series of katas will introduce you to basics of doing geometry with computers.

// Vector objects (struct in C) have x, y, and z attributes. x, y and z are floating-point numbers.

// Write a function calculating the cross product of Vector a and Vector b, the result should be a Vector object.

const v1 = {
    x: -3,
    y: 2,
    z: -2
};

const v2 = {
    x: 8,
    y: -3,
    z: 5
};

let vFinal = {
    x: 0,
    y: 0,
    z: 0
};

vFinal.x = (v1.y * v2.z) - (v1.z * v2.y);
vFinal.y = (v1.z * v2.x) - (v1.x * v2.z);
vFinal.z = (v1.x * v2.y) - (v1.y * v2.x);

console.log(vFinal.x + " " + vFinal.y + " " + vFinal.z);
