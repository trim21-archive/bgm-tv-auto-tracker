import * as Router from 'koa-router'
import { IRouterContext } from 'koa-router'
import * as Koa from 'koa'
import { Request } from 'koa'
import * as Mongo from 'mongodb'
import * as compose from 'koa-compose'

class TrickyKey {}

interface RequestWithParsedBody extends Request {
    body: any;
}

interface BaseContext {
    render: (templateName: string, data: object) => string;
    db: Mongo.Db;
    mongo: Mongo.MongoClient;
    statistics_missing_bangumi: Mongo.Collection;
    token: Mongo.Collection;
}

export interface KoaContext extends Koa.Context, BaseContext {
    request: RequestWithParsedBody;
}

export declare class MyApplication extends Koa {
    /**
     * Use given middleware.
     *
     * Middleware run in the order they are defined by `.use()`. They are invoked
     * sequentially, requests start at the first middleware and work their way
     * "down" the middleware stack.
     */
    use (middleware: compose.Middleware<KoaContext>): this;
}

export interface MyContext extends IRouterContext, BaseContext {
    request: RequestWithParsedBody;
}

namespace MyKoaRouter {

    export interface IMiddleware {
        (ctx: MyContext, next: () => Promise<any>): any;
    }

}

export declare class MyRouter extends Router {
    /**
     * Use given middleware.
     *
     * Middleware run in the order they are defined by `.use()`. They are invoked
     * sequentially, requests start at the first middleware and work their way
     * "down" the middleware stack.
     */
    use (...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    use (path: string | string[] | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * HTTP get method
     */
    get (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    get (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * HTTP post method
     */
    post (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    post (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * HTTP put method
     */
    put (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    put (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * HTTP delete method
     */
    delete (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    delete (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * Alias for `router.delete()` because delete is a reserved word
     */
    del (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    del (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * HTTP head method
     */
    head (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    head (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * HTTP options method
     */
    options (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    options (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * HTTP path method
     */
    patch (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    patch (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * Register route with all methods.
     */
    all (name: string, path: string | RegExp, ...middleware: Array<MyKoaRouter.IMiddleware>): Router;
    all (path: string | RegExp | (string | RegExp)[], ...middleware: Array<MyKoaRouter.IMiddleware>): Router;

    /**
     * Returns separate middleware for responding to `OPTIONS` requests with
     * an `Allow` header containing the allowed methods, as well as responding
     * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
     */
    allowedMethods (options?: Router.IRouterAllowedMethodsOptions): Koa.Middleware;

    /**
     * Create and register a route.
     */
    register (path: string | RegExp, methods: string[], middleware: MyKoaRouter.IMiddleware, opts?: Object): Router.Layer;

}

