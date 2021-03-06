import { ApolloLink, Operation, FetchResult, Observable } from 'apollo-link';
import { SubscriptionClient, ClientOptions } from 'subscription-client';
export declare namespace WebSocketLink {
    /**
     * Configuration to use when constructing the subscription client (subscriptions-transport-ws).
     */
    interface Configuration {
        /**
         * The endpoint to connect to.
         */
        uri: string;
        /**
         * Options to pass when constructing the subscription client.
         */
        options?: ClientOptions;
        /**
         * A custom WebSocket implementation to use.
         */
        webSocketImpl?: any;
    }
}
export import WebSocketParams = WebSocketLink.Configuration;
export declare class WebSocketLink extends ApolloLink {
    private subscriptionClient;
    constructor(paramsOrClient: WebSocketLink.Configuration | SubscriptionClient);
    request(operation: Operation): Observable<FetchResult> | null;
}
