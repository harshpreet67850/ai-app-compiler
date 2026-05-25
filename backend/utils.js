// utils.js

export function isValidJSON(obj) {
  try {
    JSON.stringify(obj);
    return true;
  } catch (e) {
    return false;
  }
}

export function deepMerge(target, source) {
  for (let key in source) {
    if (source[key] && typeof source[key] === "object") {
      target[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

export function hasAllKeys(obj, keys) {
  return keys.every(k => obj.hasOwnProperty(k));
}