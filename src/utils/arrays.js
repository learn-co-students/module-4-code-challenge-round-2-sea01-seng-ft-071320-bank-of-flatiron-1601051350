export function sortArray(array, sortBy) {
  const sorted = [...array];

  sorted.sort(sortBy);

  return sorted;
}

export function sortByKey(a, b, key, asc = key === "date" ? true : false) {
  function process(key) {
    return typeof key === "string"
      ? key.toUpperCase().replace(/[ ,&:'-]/g, "")
      : key;
  }
  if (process(a[key]) > process(b[key])) {
    return asc ? -1 : 1;
  } else if (process(a[key]) < process(b[key])) {
    return asc ? 1 : -1;
  } else {
    return 0;
  }
}

export function descByKey(a, b, key) {
  function process(key) {
    // return key.toUpperCase().replace(/[ ,&:']/g, "");
    return key;
  }
  if (process(a[key]) > process(b[key])) {
    return -1;
  } else if (process(a[key]) < process(b[key])) {
    return 1;
  } else {
    return 0;
  }
}

export function ascByKey(a, b, key) {
  function process(key) {
    // return key.toUpperCase().replace(/[ ,&:']/g, "");
    return key;
  }
  if (process(a[key]) > process(b[key])) {
    return 1;
  } else if (process(a[key]) < process(b[key])) {
    return -1;
  } else {
    return 0;
  }
}
