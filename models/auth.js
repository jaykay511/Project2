module.exports = (seq, dt) => {
    const Auth = seq.define("auth", {
        username: {
            type: dt.STRING,
            allowNull: false,
            validation: {
                isEmail: {
                    args: [true],
                    msg: "must be an email"
                },
                len: {
                    args: [
                        [1, 20]
                    ],
                    msg: "you need from 1 - 20 characters for your username"
                },
                notIn: {
                    args: [
                        [' ']
                    ],
                    msg: "spaces are not allowed"
                }
            }
        },
        password: {
            type: dt.STRING,
            allowNull: false,
            defaultValue: false,
            validation: {
                len: {
                    args: [
                        [1, 20]
                    ],
                    msg: "you need from 1 - 20 characters for your username"
                },
                notIn: {
                    args: [
                        [' ']
                    ],
                    msg: "spaces are not allowed"
                }
            }
        },
        loggedIn: {
            type: dt.BOOLEAN,
            allowNull: false,
        }
    });
    return Auth;
}