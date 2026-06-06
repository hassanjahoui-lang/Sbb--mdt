local isOpen = false

-- Comando per aprire l'MDT
RegisterCommand('mdt', function()
    ToggleMDT()
end)

function ToggleMDT()
    isOpen = not isOpen
    SetNuiFocus(isOpen, isOpen)
    
    SendNUIMessage({
        action = isOpen and "open" or "close",
        job = "police" -- Qui dovrai inserire la logica per ottenere il lavoro del player dal framework
    })
    
    if isOpen then
        -- Animazione del personaggio che tira fuori il tablet
        TaskStartScenarioInPlace(PlayerPedId(), "WORLD_HUMAN_SEAT_WALL_EATING", 0, true)
    else
        ClearPedTasks(PlayerPedId())
    end
end

-- Callback quando il giocatore chiude l'iPad premendo ESC o il tasto home
RegisterNUICallback('close', function(data, cb)
    ToggleMDT()
    cb('ok')
end)
