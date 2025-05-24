
    export type RemoteKeys = 'test_remote/Counter';
    type PackageType<T> = T extends 'test_remote/Counter' ? typeof import('test_remote/Counter') :any;