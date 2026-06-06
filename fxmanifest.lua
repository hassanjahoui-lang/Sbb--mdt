fx_version 'cerulean'
game 'gta5'

author 'Stonebridge bay'
description 'Universal MDT (ESX/QBCore/Qbox) - iPad Pro 11" Style'
version '1.0.0'

shared_scripts {
    'config.lua'
}

client_scripts {
    'client/main.lua'
}

server_scripts {
    'server/main.lua'
}

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/img/*.png' -- Crea una cartella img per le icone delle app
}
