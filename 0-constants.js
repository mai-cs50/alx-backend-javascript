// Use const for taskFirst
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  // Use let for taskNext
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  
  export function getLast() {
    return ' is okay';
  }
