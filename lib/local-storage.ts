export const StorageKeys = {
    WK_USER_TOKEN: "wk-user-token",
    WK_DARK_MODE: "wk-dark-mode",
};

const localStorageUtil = {
    setItem: (key: string, value: unknown): void => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error setting item in localStorage", error);
        }
    },
    getItem: <T>(key: string): T | null => {
        try {
            const item = localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : null;
        } catch (error) {
            console.error("Error getting item from localStorage", error);
            return null;
        }
    },
    removeItem: (key: string): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing item from localStorage", error);
        }
    }
};

export default localStorageUtil;

