(require '[cljs.build.api :as b])

(b/build "src"
 {:main 'app.core
  :output-to "main.js"
  :output-dir "out"
  :target :nodejs
  :verbose true})