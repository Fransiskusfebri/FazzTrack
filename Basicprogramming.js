let arr = [1,2,3,4,5]
let arr1 =[]
let temp=0
for(let i=0; i<arr.length; i++){
   if(arr[i] !== arr[0]){
    temp +=arr[i]
   }   
}
arr1.push(temp)
// console.log(arr1);
for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[1]){
     temp +=arr[i]
    }   
 }
 let a1 =temp-14
 arr1.push(a1)

 for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[2]){
     temp +=arr[i]
    }   
 }
 let a2 =temp -27
 arr1.push(a2)


 for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[3]){
     temp +=arr[i]
    }   
 }
 let a3 =temp -39
 arr1.push(a3)

 for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[4]){
     temp +=arr[i]
    }   
 }
 let a4 =temp -50
 arr1.push(a4)
 
let max = -Infinity
let min = Infinity
 for(let i=0; i<arr1.length; i++){
    if(arr1[i] > max){
        max= arr1[i]
    }
    if(arr1[i] < min){
        min = arr1[i]
    }
 }
 console.log(`${min},${max}`);