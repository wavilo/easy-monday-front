export function toPromise(observable) {
  return new Promise((resolve, reject) => {
    observable.subscribe(resolve, reject);
  });
}