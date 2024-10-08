export const weakMap = new WeakMap();

const MAX_ENDPOINT_CALLS = 5;

export function queryAPI(endpoint) 
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);
  console.log('Query count for endpoint &{JSON.stringify(endpoint)}');

  if (count >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
