
export class Loki {
    static save(data) {
        localStorage.setItem('token', data);
    }

    static authCheck() {
        let item = localStorage.getItem('token');
        if (item != null && item != undefined) {
            return true;
        }
        return false;
    }
    static get() {
        return localStorage.getItem('token');
    }
    static remove() {
        localStorage.removeItem('token');
    }
}