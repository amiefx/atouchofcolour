export default function auth ({ next, store, to }) {
    let authenticated = store.getters['auth/authenticated'];
    if (!authenticated) {
        return next({
            name: 'signin',
            query: {
                redirect: to.fullPath
            }
        })
    }

    return next()
}
