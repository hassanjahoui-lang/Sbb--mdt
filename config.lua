Config = {}

-- Rilevamento automatico del Framework
Config.Framework = "standalone"

if GetResourceState('es_extended') == 'started' then
    Config.Framework = "esx"
elseif GetResourceState('qb-core') == 'started' then
    Config.Framework = "qbcore"
elseif GetResourceState('qbx_core') == 'started' then
    Config.Framework = "qbox"
end

print("^2[Universal MDT] ^0Framework rilevato: ^3" .. Config.Framework .. "^0")
