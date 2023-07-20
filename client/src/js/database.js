import { request } from "express";
import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("putDb implemented");

  // connect database
  const connectDb = await openDB("jate", 1);

  // new transaction
  const transaction = connectDb.transaction("jate", "readwrite");

  // open a new objectstore
  const objStore = transaction.objectStore("jate");

  // using add method to pass in our content
  const request = objStore.put({ id: 1, value: content });

  // await rq
  const result = await request;
  console.log("data saved");
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("getDb implemented");

  const connectDb = await openDB("jate", 1);

  const transaction = connectDb.transaction("jate", "readonly");

  const objStore = transaction.objectStore("jate");

  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();
