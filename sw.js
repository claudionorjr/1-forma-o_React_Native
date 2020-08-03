var cacheName = 'tarefas_pwa'
var filesToCache = [
  '/',
  '/index.html',
  '/src/css/index.css',
  '/src/scripts/index.js',
  '/src/scripts/controller/TaskViewController.js',
  '/src/scripts/controller/TaskController.js',
  '/src/scripts/controller/data/db.js',
  '/src/scripts/controller/model/TaskModel.js',
  '/src/scripts/controller/validators/fields.js'
]

/**
 * Descrição: Vai inciar um Worker, abrir um cache e adicionar os arquivos em cache.
 */
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache)
    })
  )
})

/* Pegar os arquivos em cache e exibir quando estiver offline */
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request)
    })
  )
})