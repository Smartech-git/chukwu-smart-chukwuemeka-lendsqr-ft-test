import { openDB } from "@/indexedDB/utils";
import { UserDetailsData } from "@/requests/get-user";

const DB_NAME = "Lendsqr-User-Details";
const DB_VERSION = 1;
const STORE_NAME = "user-details-cache";

const openDBInstance = async () => {
  return await openDB(STORE_NAME, DB_NAME, DB_VERSION);
};

export async function saveUserDetails(userId: string, data: UserDetailsData): Promise<void> {
  const db = await openDBInstance();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);

  const cacheEntry = {
    data,
    timestamp: Date.now(),
  };

  store.put(cacheEntry, userId);

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

export async function getUserDetails(userId: string): Promise<{ data: UserDetailsData; timestamp: number } | undefined> {
  const db = await openDBInstance();
  const transaction = db.transaction(STORE_NAME, "readonly");
  const store = transaction.objectStore(STORE_NAME);
  const request = store.get(userId);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result || undefined);
    request.onerror = () => reject(request.error);
  });
}

export async function deleteUserDetails(userId: string): Promise<void> {
  const db = await openDBInstance();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.delete(userId);

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

export async function clearAllUserDetails(): Promise<void> {
  const db = await openDBInstance();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.clear();

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}
