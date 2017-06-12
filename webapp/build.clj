(require '[cljs.build.api :as b])

(b/build "src"
 {:output-to "main.js"
  :output-dir "out/"
  :source-map true
  :main 'webapp.core
  :verbose true
  :optimizations :none})