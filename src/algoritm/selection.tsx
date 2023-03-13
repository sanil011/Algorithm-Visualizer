const Selection = (arr: { value: Number, id: String, style?: string }[], length:number) => {
  var result: { value: Number, id: String, style?:string }[];
   result = [];
  
  for (let i = 0; i < length; i++) {
    let min = i;
    // compare bar 
    arr[i].style = "bar-swap"; 
    for (let j = i + 1; j < length; j++){
      if (arr[min].value > arr[j].value) {
        arr[min].style = "bar";
        min = j;
      }
      arr[j].style = "bar-swap";
      arr[min].style = "bar-min";
      result.push(JSON.parse(JSON.stringify(arr)));
      arr[j].style = "bar";
    }
    arr[i].style = "bar";
    [arr[i], arr[min]] = [arr[min], arr[i]];
    arr[i].style = "bar-sorted";
    result.push(JSON.parse(JSON.stringify(arr)));
  }
  result.push(JSON.parse(JSON.stringify(arr)));
  console.log(result);
  return result;
}

export default Selection
