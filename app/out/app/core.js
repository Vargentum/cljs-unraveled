// Compiled by ClojureScript 1.9.36 {:target :nodejs}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
app.core._main = (function app$core$_main(var_args){
var args__3491__auto__ = [];
var len__3488__auto___171 = arguments.length;
var i__3489__auto___172 = (0);
while(true){
if((i__3489__auto___172 < len__3488__auto___171)){
args__3491__auto__.push((arguments[i__3489__auto___172]));

var G__173 = (i__3489__auto___172 + (1));
i__3489__auto___172 = G__173;
continue;
} else {
}
break;
}

var argseq__3492__auto__ = ((((0) < args__3491__auto__.length))?(new cljs.core.IndexedSeq(args__3491__auto__.slice((0)),(0),null)):null);
return app.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3492__auto__);
});

app.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,"Hello world");
});

app.core._main.cljs$lang$maxFixedArity = (0);

app.core._main.cljs$lang$applyTo = (function (seq170){
return app.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq170));
});

cljs.core._STAR_main_cli_fn_STAR_ = app.core._main;

//# sourceMappingURL=core.js.map