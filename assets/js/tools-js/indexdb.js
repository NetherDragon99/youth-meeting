export const indexdb = await new Promise((resolve, reject) => {
  const requestdb = indexedDB.open('youth-meeting', 1);
  requestdb.onupgradeneeded = function (e) {
    const db = e.target.result;

    if (!db.objectStoreNames.contains('photos')) {
      db.createObjectStore('photos', { keyPath: 'id' })
    }
  }
  requestdb.onsuccess = e => {
    resolve(e.target.result)
  }

  requestdb.onerror = e => {
    reject(e.target.error)
  }
})

export function addDBItem(data, name) {
  return new Promise((resolve, reject) => {
    const tx = indexdb.transaction(name, 'readwrite');
    tx.objectStore(name).put(data);

    tx.oncomplete = e => {
      resolve('added');
    }
    tx.onerror = e =>{
      reject(e.target.error)
    }
  })
}

export function getDBItem(id, name) {
  return new Promise((resolve, reject) => {
    const tx = indexdb.transaction(name, 'readonly');
    const request = tx.objectStore(name).get(id);

    request.onsuccess = e => {
      resolve(e.target.result);
    }
    request.onerror = e =>{
      reject(e.target.error)
    }
  })
}

export function deleteDBItem(id, name) {
  return new Promise((resolve, reject) => {
    const tx = indexdb.transaction(name, 'readwrite');
    tx.objectStore(name).delete(id);

    tx.oncomplete = e => {
      resolve('deleted');
    }
    tx.onerror = e =>{
      reject(e.target.error)
    }
  })
}