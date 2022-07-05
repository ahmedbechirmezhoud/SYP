import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class CurrentStorage {
    private static storage?: Storage = undefined;
    private static INIT_ERROR = "Cannot initialize storage";

    private constructor() {
        CurrentStorage.storage = new Storage({
            // maximum capacity, default 1000
            size: 9000,

            // Use AsyncStorage for RN apps, or window.localStorage for web apps.
            // If storageBackend is not set, data will be lost after reload.
            storageBackend: AsyncStorage, // for web: window.localStorage

            // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
            // can be null, which means never expire.
            defaultExpires: null,

            // cache data in the memory. default is true.
            enableCache: true,

            // if data was not found in storage or expired data was found,
            // the corresponding sync method will be invoked returning
            // the latest data.
            sync: {
                // Won't be used if no expiration is set
            }
        });
    }

    public static get(key: string): Promise<any> {
        if (!CurrentStorage.storage) new CurrentStorage();
        if (!CurrentStorage.storage) return new Promise((res, rej) => {
            rej(CurrentStorage.INIT_ERROR)
        })

        return CurrentStorage.storage.load(
            {
                key: key
            }
        )
    }

    public static set(key: string, value: any): Promise<void> {
        if (!CurrentStorage.storage) new CurrentStorage();
        if (!CurrentStorage.storage) return new Promise((res, rej) => {
            rej(CurrentStorage.INIT_ERROR)
        })

        return CurrentStorage.storage.save(
            {
                key: key,
                data: value
            }
        )
    }

    public static async isSet(key: string): Promise<boolean | undefined> {
        if (!CurrentStorage.storage) new CurrentStorage();
        if (!CurrentStorage.storage) return;

        try {
            await CurrentStorage.storage.load(
                {
                    key: key
                }
            )
            return true;
        }
        catch (err) {
            return false;
        }
    }
}
