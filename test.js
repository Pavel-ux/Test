let trap = function(height) {
    let max_left_array = [];
    let max_right_array = [];
    let max_left = 0;
    let max_right = 0;
    const length = height.length;
    let trapped_water = 0;
    for (let i = 0; i < height.length; i++) {
        max_left_array[i] = Math.max(height[i], max_left);
        max_left = max_left_array[i]; 
        max_right_array[length - i - 1] = Math.max(height[length - i - 1], max_right);
        max_right = max_right_array[length - i - 1];
        console.log(max_right);
    }
    for (let i = 0; i < height.length; i++) {
        trapped_water += Math.min(max_left_array[i], max_right_array[i]) - height[i];
    }
    return trapped_water;
};

let arr = [15,0,6,10,11,2,5] ;
console.log(trap(arr));
