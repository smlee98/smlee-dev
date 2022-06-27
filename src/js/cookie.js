export const getCookie = (key) => {
    key = key + "=";

    const cookie = document.cookie;
    let start = cookie.indexOf(key);
    let value = "";

    if (start !== -1) {
        start += key.length;
        let end = cookie.indexOf(";", start);

        if (end === -1) end = cookie.length;

        value = cookie.substring(start, end);
    }

    return unescape(value);
};

export const setCookie = (key, val, expire) => {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + expire);

    const value =
        escape(val) +
        "; path=/;" +
        (expire == null ? "" : "; expires=" + expireDate.toGMTString());
    document.cookie = key + "=" + value;
};
