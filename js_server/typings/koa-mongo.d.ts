declare module 'koa-mongo' {
    import { Middleware } from 'koa'

    interface KoaMongoOptions {
        host?: string,
        port?: number,
        db?: string,
        max?: number,
        min?: number,
        user?: string,
        pass?: string,
    }

    let mongo: (options: KoaMongoOptions) => Middleware
    export = mongo
}

