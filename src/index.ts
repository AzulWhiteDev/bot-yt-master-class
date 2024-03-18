import "dotenv/config"
import BotWhatsapp from '@bot-whatsapp/bot'
import database from './database';
import providerWS from '@bot-whatsapp/provider/baileys';
import flow from './flow';
import { initServer } from "./services/http";

/**
 * Funcion principal del bot
 */
const main = async () => {


    const botFLow = BotWhatsapp.addKeyword('hola').addAnswer('Buenas!') as any

    console.log(botFLow.toJson())
    console.log({ botFLow })

    const botInstance = await BotWhatsapp.createBot({
        database: new MockAdapter() ,
        provider: BotWhatsapp.createProvider(providerWS)
        flow: BotWhatsapp.createFlow([])
    })

    initServer(botInstance)
}


main()