import { Cookie } from 'ng2-cookies/ng2-cookies';


export class AuthenticateComponent {

    session: any;
    currentUser: string;

    //set the session Cookie
    setCookie(sessionKey) {
        Cookie.set('sessionID', sessionKey);
    }

    //retuen the session Cookie
    getCookie(sessionID: string) {
        this.session = Cookie.get(sessionID);
        return this.session
    }

    //retrns the current User
    isActiveUser(sessionID: string) {
        this.getSessionUser(sessionID);
        if ((this.getSessionUser(sessionID).length === 0) || (sessionStorage.getItem('uname').length === 0)) {
            return false;
        }else if (this.getSessionUser(sessionID) === sessionStorage.getItem('uname')) {
            return true;
        } 
    }

    //returns the session Username
    getSessionUser(sessionID: string) {
        this.session = Cookie.get(sessionID);
        let uname = atob(atob(this.session).split('??')[0]);
        return uname;
    }

}