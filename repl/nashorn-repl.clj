(require '[cljs.repl]
         '[cljs.repl.nashorn])

(cljs.repl/repl
 (cljs.repl.nashorn/repl-env)
 :output-dir "out"
 :cache-analysis true)

;  rlwrap java -cp cljs.jar:src clojure.main repl/nashorn-repl.clj