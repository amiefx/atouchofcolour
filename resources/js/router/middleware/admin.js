export default function auth ({ next, store }) {
    let admin = store.getters['auth/admin'];
    if (!admin) {
        return next({
            name: 'home'
        })
    }

    return next()
}
