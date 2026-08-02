import { getDataAPI } from "./fetching.js";
import { addDBItem, getAllDBItems } from "./indexdb.js";

export let allUsersData = []
export async function getAllUsersData() {
  const oldData = await getAllDBItems('usersData');
  if (oldData.length === 0) {
    const res = await getDataAPI('users');
    console.log(res);
    

    res.data.items.forEach(async userData => {
      await addDBItem(userData, 'usersData');
    })

    addDBItem({
        name: 'allUsersData',
        value: res.data.resHash
      }, 'random')

      
  }

}

getAllUsersData()