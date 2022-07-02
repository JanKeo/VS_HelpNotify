RegisterNetEvent("vsh:opennotify")
AddEventHandler("vsh:opennotify", function(msg)
    SendNUIMessage({
        action = "open",
        message = msg
    })
end)


RegisterNetEvent("vsh:timednotify")
AddEventHandler("vsh:timednotify", function(msg, time)
    SendNUIMessage({
        action = "timed",
        message = msg,
        time = time
    })
end)


RegisterNetEvent("vsh:closenotify")
AddEventHandler("vsh:closenotify", function()
    SendNUIMessage({
        action = "close"
    })
end)


