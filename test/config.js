seajs.config({
    base : "../lib",
    plugins : ['shim', 'text'],
    alias : {
        "jQuery" : {
            src : "jQuery/jquery-1.10.2",
            exports : "jQuery"
        }
    },
});
