(require '[cljs.repl]
         '[cljs.repl.node])

(cljs.repl/repl
 (cljs.repl.node/repl-env)
 :output-dir "out"
 :cache-analysis true)

; rlwrap java -cp cljs.jar:src clojure.main repl/node-repl.clj