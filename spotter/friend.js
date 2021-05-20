const request = require("request");

const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  },
  {
    name: "Laurel",
    phone: "123 22456 7890",
    email: "laurelaas@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
];


const findFriendInfo = (contactsList, contactName, contactInfo) => {
  let myFriend = contactsList.filter(contact => contact.name === contactName);
  if (myFriend.length > 0) {
    let friendsFriend = myFriend[0].friends[0];
    let friendsFriendInfo = contactsList.filter(contact => contact.name === friendsFriend);
    if (!friendsFriendInfo[0][contactInfo]) return 'Not found';
    return `{ name: ${friendsFriend}, ${contactInfo}: ${friendsFriendInfo[0][contactInfo]} }`;
  }
  return 'Not found';
  
}

console.log(findFriendInfo(contacts, 'Abbott', 'phone'))
console.log(findFriendInfo(contacts, "Buster", "email"))
console.log(findFriendInfo(contacts, "Bob", "phone"))
console.log(findFriendInfo(contacts, "Costello", "birthday"))