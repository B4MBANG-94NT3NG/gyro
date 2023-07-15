const fs = require('fs')
const chalk = require('chalk')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'TPOMXgVf', // ISI APIKEY LU
}

global.lolhuman = 'APOLOZEA'
global.namabot = "Gyro-MD" // UBAH JADI NAMA LUPA
global.ttname = "Gyro-MD"
global.prefix = '/'
global.gcwa = 'https://chat.whatsapp.com/E0UfVWCWv5x45t7rUUfbJf'
global.namaowner = "BAMBANG TRI RAHARJO" // NAMA OWNER
global.footer_text = "© Gyro-MD" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync('./image/p.jpg') // FOTO BOT MAX 50KB BIAR GA DELLAY
global.thumb = fs.readFileSync('./image/p.jpg')
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['62895412691100','62895412691100'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// PEMISAH \\
global.ownerNumber = '62895412691100'
global.sessionName = 'session' // GAK USAH UB
//global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.prefa = ['', '!', '.', '#', '$', ',']
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.donasi = ("JANGAN LUPA DONASI BANG 😅🤙") // QRIS SAMA FOTO DONASI UDAH CONNECT TINGGAL GANTI FOTO QRIS AJA
global.script = ("https://youtu.be/GyHK5VyBeQ NO ENC ? BUY") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://chat.whatsapp.com/KTXtrESxZCg8TUbP62c6d" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/KTXtrESxZCg8aTUbP2c6d`) // GANTI LINK GRUB BOT LU \\
global.gabolehtoxic = ("./gabolehtoxic.mp3")

// FALSE OR TRUE \\
global.premium = false // UBAH JADI TRUE AGAR SEMUA FITUR KHUSUS PREMIUM
global.autoTyping = false // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = true // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

// PEMISAH \\
global.packname = '© Gyro-MD' //sticker wm ubah
global.author = 'Di Buat Oleh BAMBANG TRI RAHARJO' //sticker wm ganti nama kalian
// UBAH AJA NAMA NYA \\

// BUY NO ENC 60K CHAT ME
https://wa.me/62895412691100

global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

module.exports.helpMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *MENU* 」
│
│⭔ ${prefix}allmenu
│⭔ ${prefix}searchmenu
│⭔ ${prefix}groupmenu
│⭔ ${prefix}downloadermenu
│⭔ ${prefix}asupanmenu
│⭔ ${prefix}cerpenmenu 
│⭔ ${prefix}phootoxymenu
│⭔ ${prefix}ephotomenu
│⭔ ${prefix}randommenu
│⭔ ${prefix}gamesmenu
│⭔ ${prefix}textpromenu
│⭔ ${prefix}cecanmenu
│⭔ ${prefix}coganmenu
│⭔ ${prefix}logomenu
│⭔ ${prefix}primbonmenu 
│
╰───────────◈☽ `
}

module.exports.searchMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *SEARCH  & QUOTES* 」 
│
│⭔ ${prefix}ytsearch  
│⭔ ${prefix}google  
│⭔ ${prefix}bucin
│⭔ ${prefix}bacot
│⭔ ${prefix}citacita
│⭔ ${prefix}senja
│⭔ ${prefix}pantun
│⭔ ${prefix}galau
│⭔ ${prefix}gombal
│⭔ ${prefix}dilan
│⭔ ${prefix}hacker
│⭔ ${prefix}nyindir
│⭔ ${prefix}motivasi
│⭔ ${prefix}quotesjawa
│⭔ ${prefix}puisi
│⭔ ${prefix}sadquotes
│⭔ ${prefix}katailham
│⭔ ${prefix}islam
│⭔ ${prefix}renungan
│⭔ ${prefix}ngawur
│⭔ ${prefix}taugasih
│⭔ ${prefix}quote-ilmuan
│⭔ ${prefix}quotes
│⭔ ${prefix}fiersa
│⭔ ${prefix}faktaunix
│
╰───────────◈☽`
}

module.exports.ownerMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *OWNER MENU* 」
│
│⭔ ${prefix}addprem  
│⭔ ${prefix}delprem  
│⭔ ${prefix}listprem  
│⭔ ${prefix}block  
│⭔ ${prefix}unblock  
│⭔ ${prefix}public  
│⭔ ${prefix}self  
│⭔ ${prefix}out  
│⭔ ${prefix}kosong  
│⭔ ${prefix}join  
│⭔ ${prefix}addsewa  
│⭔ ${prefix}delsewa  
│⭔ ${prefix}setnamabot  
│⭔ ${prefix}setbiobot  
│⭔ ${prefix}broadcastvid  
│⭔ ${prefix}bctext  
│⭔ ${prefix}bcimage  
│⭔ ${prefix}pushkon
│⭔ ${prefix}anticall
│⭔ ${prefix}setexif
│⭔ ${prefix}runtime  
│⭔ ${prefix}groupbot  
│⭔ ${prefix}developer  
│⭔ ${prefix}gitclone  
│⭔ ${prefix}setwelcome  
│⭔ ${prefix}changewelcome  
│⭔ ${prefix}delsetwelcome  
│⭔ ${prefix}setleft  
│⭔ ${prefix}changeleft  
│⭔ ${prefix}delsetleft  
│
╰───────────◈☽
 `
}

module.exports.groupMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *GROUP MENU* 」 
│
│⭔ ${prefix}antiwame  
│⭔ ${prefix}antiwame2  
│⭔ ${prefix}antilink  
│⭔ ${prefix}antilink2  
│⭔ ${prefix}welcome  
│⭔ ${prefix}goodbye  
│⭔ ${prefix}group open
│⭔ ${prefix}group close
│⭔ ${prefix}hidetag  
│⭔ ${prefix}kick  
│⭔ ${prefix}linkgc  
│⭔ ${prefix}resetlinkgc  
│⭔ ${prefix}delete  
│⭔ ${prefix}listonline  
│⭔ ${prefix}setnamegc  
│⭔ ${prefix}setdesc  
│⭔ ${prefix}add  
│⭔ ${prefix}promote  
│⭔ ${prefix}demote  
│⭔ ${prefix}antilinkall  
│⭔ ${prefix}tagall  
│
╰───────────◈☽
`
}

module.exports.downloaderMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *DOWNLOAD MENU* 」
│ 
│⭔ ${prefix}tiktok  
│⭔ ${prefix}tiktokvn  
│⭔ ${prefix}tiktokaudio  
│⭔ ${prefix}tiktok2
│⭔ ${prefix}tiktokaudio2
│⭔ ${prefix}spotify  
│⭔ ${prefix}ytmp3  
│⭔ ${prefix}ytmp4  
│⭔ ${prefix}play  
│⭔ ${prefix}playmp3  
│⭔ ${prefix}playmp4  
│⭔ ${prefix}lyrics  
│⭔ ${prefix}igdl  
│⭔ ${prefix}igvideo  
│⭔ ${prefix}instavid
│⭔ ${prefix}igreels
│
╰───────────◈☽`
}

module.exports.asupanMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *ASUPAN MENU* 」
│
│⭔ ${prefix}tiktokkayes  
│⭔ ${prefix}tiktokgirl  
│⭔ ${prefix}tiktokghea  
│⭔ ${prefix}tiktokbocil  
│⭔ ${prefix}tiktokukhty  
│⭔ ${prefix}tiktoksantuy  
│⭔ ${prefix}tiktokpanrika  
│⭔ ${prefix}tiktoknotnot  
│⭔ ${prefix}tiktokgabagtha  
│⭔ ${prefix}jjmeryani 
│⭔ ${prefix}chika
│⭔ ${prefix}delvira
│⭔ ${prefix}ayu
│⭔ ${prefix}bunga
│⭔ ${prefix}aura
│⭔ ${prefix}nisa
│⭔ ${prefix}ziva
│⭔ ${prefix}yana
│⭔ ${prefix}viona
│⭔ ${prefix}syania
│⭔ ${prefix}riri
│⭔ ${prefix}syifa
│⭔ ${prefix}mama_gina
│⭔ ${prefix}alcakenya
│⭔ ${prefix}mangayutri
│⭔ ${prefix}rikagusriani
│
╰───────────◈☽`
}

module.exports.cerpenMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *CERPEN MENU* 」
│
│⭔ ${prefix}cerpen_sejarah
│⭔ ${prefix}cerpen_sedih
│⭔ ${prefix}cerpen_sastra
│⭔ ${prefix}cerpen_romantis
│⭔ ${prefix}cerpen_rohani
│⭔ ${prefix}cerpen_rindu
│⭔ ${prefix}cerpen_remaja
│⭔ ${prefix}cerpen_ramadhan
│⭔ ${prefix}cerpen_petualangan
│⭔ ${prefix}cerpen_persahabatan
│⭔ ${prefix}cerpen_perpisahan
│⭔ ${prefix}cerpen_perjuangan
│⭔ ${prefix}cerpen_penyesalan
│⭔ ${prefix}cerpen_pengorbanan
│⭔ ${prefix}cerpen_pengalaman
│⭔ ${prefix}cerpen_pendidikan
│⭔ ${prefix}cerpen_penantian
│⭔ ${prefix}cerpen_patahhati
│⭔ ${prefix}cerpen_olahraga
│⭔ ${prefix}cerpen_nasionalisme
│⭔ ${prefix}cerpen_nasihat
│⭔ ${prefix}cerpen_motivasi
│⭔ ${prefix}cerpen_misteri
│⭔ ${prefix}cerpen_mengharukan
│⭔ ${prefix}cerpen_malaysia
│⭔ ${prefix}cerpen_liburan
│⭔ ${prefix}cerpen_kristen
│⭔ ${prefix}cerpen_korea
│⭔ ${prefix}cerpen_kisahnyata
│⭔ ${prefix}cerpen_keluarga
│⭔ ${prefix}cerpen_kehidupan
│⭔ ${prefix}cerpen_jepang
│⭔ ${prefix}cerpen_inspiratif
│⭔ ${prefix}cerpen_gokil
│⭔ ${prefix}cerpen_galau
│⭔ ${prefix}cerpen_cintasejati
│⭔ ${prefix}cerpen_cintasegitiga
│⭔ ${prefix}cerpen_cintasedih
│⭔ ${prefix}cerpen_cintaromantis
│⭔ ${prefix}cerpen_cintapertama
│⭔ ${prefix}cerpen_cintaislami
│⭔ ${prefix}cerpen_cinta
│⭔ ${prefix}cerpen_budaya
│⭔ ${prefix}cerpen_bahasasunda
│⭔ ${prefix}cerpen_bahasajawa
│⭔ ${prefix}cerpen_bahasainggris
│⭔ ${prefix}cerpen_bahasadaerah
│⭔ ${prefix}cerpen_anak
│
╰───────────◈☽`
}

module.exports.photooxyMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *PHOTOOXY* 」 
│
│⭔ ${prefix}shadow 
│⭔ ${prefix}write 
│⭔ ${prefix}romantic 
│⭔ ${prefix}burnpaper
│⭔ ${prefix}smoke 
│⭔ ${prefix}narutobanner 
│⭔ ${prefix}love 
│⭔ ${prefix}undergrass
│⭔ ${prefix}doublelove 
│⭔ ${prefix}coffecup
│⭔ ${prefix}underwaterocean
│⭔ ${prefix}smokyneon
│⭔ ${prefix}starstext
│⭔ ${prefix}rainboweffect
│⭔ ${prefix}balloontext
│⭔ ${prefix}metalliceffect
│⭔ ${prefix}embroiderytext
│⭔ ${prefix}flamingtext
│⭔ ${prefix}stonetext
│⭔ ${prefix}writeart
│⭔ ${prefix}summertext
│⭔ ${prefix}wolfmetaltext
│⭔ ${prefix}nature3dtext
│⭔ ${prefix}rosestext
│⭔ ${prefix}naturetypography
│⭔ ${prefix}quotesunder
│⭔ ${prefix}shinetext
│
╰───────────◈☽`
}

module.exports.ephotoMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *EPHOTO* 」 
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
╰───────────◈☽`
}

module.exports.randomMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *RANDOM STICKER* 」 
│
│⭔ ${prefix}patrick  
│⭔ ${prefix}popoci  
│⭔ ${prefix}sponsbob  
│⭔ ${prefix}kawan-sponsbob  
│⭔ ${prefix}awoawo  
│⭔ ${prefix}chat  
│⭔ ${prefix}benedict  
│⭔ ${prefix}dbfly  
│⭔ ${prefix}dino-kuning  
│⭔ ${prefix}doge  
│⭔ ${prefix}gojosatoru  
│⭔ ${prefix}hope-boy  
│⭔ ${prefix}jisoo  
│⭔ ${prefix}kr-robot  
│⭔ ${prefix}kucing   
│⭔ ${prefix}lonte  
│⭔ ${prefix}manusia_lidi  
│⭔ ${prefix}menjamet  
│⭔ ${prefix}meow  
│⭔ ${prefix}nicholas  
│⭔ ${prefix}tyni  
│⭔ ${prefix}cry
│⭔ ${prefix}kill
│⭔ ${prefix}hug
│⭔ ${prefix}pat
│⭔ ${prefix}lick 
│⭔ ${prefix}kiss
│⭔ ${prefix}bite
│⭔ ${prefix}yeet
│⭔ ${prefix}bully
│⭔ ${prefix}bonk
│⭔ ${prefix}wink
│⭔ ${prefix}poke
│⭔ ${prefix}nom
│⭔ ${prefix}slap
│⭔ ${prefix}smile 
│⭔ ${prefix}wave
│⭔ ${prefix}awoo
│⭔ ${prefix}blush
│⭔ ${prefix}smug
│⭔ ${prefix}glomp 
│⭔ ${prefix}happy
│⭔ ${prefix}dance
│⭔ ${prefix}cringe
│⭔ ${prefix}cuddle
│⭔ ${prefix}highfive 
│⭔ ${prefix}shinobu
│⭔ ${prefix}handhold
│
╰───────────◈☽

┌──⭓ 「 *Anonymous MENU* 」 
│
│⭔ ${prefix}menfes
│⭔ ${prefix}confes
│
╰───────────◈☽


┌──⭓ 「 *SOUND MENU* 」 
│
│⭔ ${prefix}sound1 -  sound100
│
╰───────────◈☽

`
}

module.exports.gamesMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *GAMES MENU* 」 
│
│⭔ ${prefix}tebakkata  
│⭔ ${prefix}tebakbendera  
│⭔ ${prefix}caklontong  
│⭔ ${prefix}susunkata  
│⭔ ${prefix}tebakkalimat  
│⭔ ${prefix}jodohku
│⭔ ${prefix}jadian
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│
╰───────────◈☽
`
}

module.exports.textproMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *TEXTPRO* 」 
│
│⭔ ${prefix}glitchtext
│⭔ ${prefix}writetext
│⭔ ${prefix}advancedglow
│⭔ ${prefix}typographytext
│⭔ ${prefix}pixelglitch
│⭔ ${prefix}neonglitch
│⭔ ${prefix}flagtext
│⭔ ${prefix}flag3dtext
│⭔ ${prefix}deletingtext
│⭔ ${prefix}blackpinkstyle
│⭔ ${prefix}glowingtext
│⭔ ${prefix}underwatertext
│⭔ ${prefix}logomaker
│⭔ ${prefix}cartoonstyle
│⭔ ${prefix}papercutstyle
│⭔ ${prefix}watercolortext
│⭔ ${prefix}effectclouds
│⭔ ${prefix}blackpinklogo
│⭔ ${prefix}gradienttext
│⭔ ${prefix}summerbeach
│⭔ ${prefix}luxurygold
│⭔ ${prefix}multicoloredneon
│⭔ ${prefix}sandsummer
│⭔ ${prefix}galaxywallpaper
│⭔ ${prefix}1917style
│⭔ ${prefix}makingneon
│⭔ ${prefix}royaltext
│⭔ ${prefix}freecreate
│⭔ ${prefix}galaxystyle
│⭔ ${prefix}lighteffects
│⭔ ${prefix}candy 
│⭔ ${prefix}christmas 
│⭔ ${prefix}3dchristmas 
│⭔ ${prefix}sparklechristmas
│⭔ ${prefix}deepsea 
│⭔ ${prefix}scifi 
│⭔ ${prefix}rainbow 
│⭔ ${prefix}waterpipe 
│⭔ ${prefix}spooky 
│⭔ ${prefix}pencil 
│⭔ ${prefix}circuit 
│⭔ ${prefix}discovery 
│⭔ ${prefix}metalic 
│⭔ ${prefix}fiction 
│⭔ ${prefix}demon 
│⭔ ${prefix}transformer 
│⭔ ${prefix}berry 
│⭔ ${prefix}thunder 
│⭔ ${prefix}magma 
│⭔ ${prefix}3dstone 
│⭔ ${prefix}neonlight 
│⭔ ${prefix}glitch 
│⭔ ${prefix}harrypotter 
│⭔ ${prefix}brokenglass 
│⭔ ${prefix}papercut 
│⭔ ${prefix}watercolor 
│⭔ ${prefix}multicolor 
│⭔ ${prefix}neondevil 
│⭔ ${prefix}underwater 
│⭔ ${prefix}graffitibike
│⭔ ${prefix}snow 
│⭔ ${prefix}cloud 
│⭔ ${prefix}honey 
│⭔ ${prefix}ice 
│⭔ ${prefix}fruitjuice 
│⭔ ${prefix}biscuit 
│⭔ ${prefix}wood 
│⭔ ${prefix}chocolate 
│⭔ ${prefix}strawberry 
│⭔ ${prefix}matrix 
│⭔ ${prefix}blood 
│⭔ ${prefix}dropwater 
│⭔ ${prefix}toxic 
│⭔ ${prefix}lava 
│⭔ ${prefix}rock 
│⭔ ${prefix}bloodglas 
│⭔ ${prefix}hallowen 
│⭔ ${prefix}darkgold 
│⭔ ${prefix}joker 
│⭔ ${prefix}wicker
│⭔ ${prefix}firework 
│⭔ ${prefix}skeleton 
│⭔ ${prefix}blackpink 
│⭔ ${prefix}sand 
│⭔ ${prefix}glue 
│⭔ ${prefix}1917 
│⭔ ${prefix}leaves
│
╰───────────◈☽
`
}

module.exports.cecanMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *CECAN MENU* 」 
│
│⭔ ${prefix}china
│⭔ ${prefix}indonesia
│⭔ ${prefix}malaysia
│⭔ ${prefix}thailand
│⭔ ${prefix}korea
│⭔ ${prefix}japan
│⭔ ${prefix}vietnam
│⭔ ${prefix}jenni
│⭔ ${prefix}jiiso
│⭔ ${prefix}lisa
│⭔ ${prefix}rose
│
╰───────────◈☽
`
}

module.exports.coganMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *COGAN MENU* 」 
│
│⭔ ${prefix}wuyifan
│⭔ ${prefix}suga
│⭔ ${prefix}parkchanyeol
│⭔ ${prefix}ohsehun
│⭔ ${prefix}luhan
│⭔ ${prefix}kimtaehyung
│⭔ ${prefix}kimseok
│⭔ ${prefix}kimnanjoon
│⭔ ${prefix}kimminseok
│⭔ ${prefix}kimjunmyeon
│⭔ ${prefix}kimjong
│⭔ ${prefix}kimjondae
│⭔ ${prefix}jungkook
│⭔ ${prefix}jimin
│⭔ ${prefix}jhope
│⭔ ${prefix}huangzitao
│⭔ ${prefix}dohkyungsoo
│⭔ ${prefix}baekhyung
│
╰───────────◈☽
`
}

module.exports.logoMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *LOGO MENU* 」
│
│⭔ ${prefix}horror
│⭔ ${prefix}game8bit
│⭔ ${prefix}layered
│⭔ ${prefix}glitch2
│⭔ ${prefix}cool-graffiti
│⭔ ${prefix}cool-wall-graffiti
│⭔ ${prefix}realistic
│⭔ ${prefix}space3d
│⭔ ${prefix}glitch-tiktok
│⭔ ${prefix}stone
│⭔ ${prefix}marvel
│⭔ ${prefix}marvel2
│⭔ ${prefix}metal-rose-gold
│⭔ ${prefix}pornhub
│⭔ ${prefix}avengers
│⭔ ${prefix}metal-rainbow
│⭔ ${prefix}metal-gold
│⭔ ${prefix}metal-galaxy
│⭔ ${prefix}lion
│⭔ ${prefix}wolf-black-white
│⭔ ${prefix}wolf-galaxy
│⭔ ${prefix}ninja
│⭔ ${prefix}3dsteel
│⭔ ${prefix}horror2
│⭔ ${prefix}lava
│⭔ ${prefix}bagel
│
╰───────────◈☽
`
}

module.exports.primbonMenu  = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________
┌──⭓ 「 *PRIMBON MENU* 」
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}ramalanjodoh
│⭔ ${prefix}ramalanjodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalancinta
│⭔ ${prefix}artinama
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rejeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}ramalnasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}artitarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}harinaga
│⭔ ${prefix}arahrejeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}sifat
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}shio
│
╰───────────◈☽
`
}

module.exports.allMenu = (pushname, runtime, totalFitur) =>{
	return `Halo Kak 👋 ${pushname}
Kabar Kamu Baik baik aja kan:)
Saya ${namabot}, Saya Adalah Bot WhatsApp YANG
Siap Melayani Anda.

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator        : ${namaowner}
┆❐ Bot Name       :  ${namabot}
┆❐ Nomor Owner    :  ${ownerNumber}
┆❐ Prefix         :  ${prefix}
┆❐ Version        :  V.0.2
┆❐ Library        :  Baileys
┆❐ Runtime        :  ${runtime(process.uptime())}
┆❐ Total Fitur    :  ${totalFitur()}
╰──────────◇
___________________________

┌──⭓ 「 *FREE MENU* 」
│
│⭔ ${prefix}owner  
│⭔ ${prefix}sc  
│⭔ ${prefix}remini
│⭔ ${prefix}ping  
│⭔ ${prefix}donate  
│⭔ ${prefix}jadibot  
│⭔ ${prefix}sewa  
│⭔ ${prefix}q  
│⭔ ${prefix}jasrun  
│⭔ ${prefix}sewa  
│⭔ ${prefix}buyprem  
│⭔ ${prefix}totalfitur
│
╰───────────◈☽ 

┌──⭓ 「 *OWNER MENU* 」
│
│⭔ ${prefix}addprem  
│⭔ ${prefix}delprem  
│⭔ ${prefix}listprem  
│⭔ ${prefix}block  
│⭔ ${prefix}unblock  
│⭔ ${prefix}public  
│⭔ ${prefix}self  
│⭔ ${prefix}out  
│⭔ ${prefix}kosong  
│⭔ ${prefix}join  
│⭔ ${prefix}addsewa  
│⭔ ${prefix}delsewa  
│⭔ ${prefix}setnamabot  
│⭔ ${prefix}setbiobot  
│⭔ ${prefix}broadcastvid  
│⭔ ${prefix}bctext  
│⭔ ${prefix}bcimage  
│⭔ ${prefix}pushkon
│⭔ ${prefix}anticall
│⭔ ${prefix}setexif
│⭔ ${prefix}runtime  
│⭔ ${prefix}groupbot  
│⭔ ${prefix}developer  
│⭔ ${prefix}gitclone  
│⭔ ${prefix}setwelcome  
│⭔ ${prefix}changewelcome  
│⭔ ${prefix}delsetwelcome  
│⭔ ${prefix}setleft  
│⭔ ${prefix}changeleft  
│⭔ ${prefix}delsetleft  
│
╰───────────◈☽

┌──⭓ 「 *FUN MENU*  」 
│
│⭔ ${prefix}memek
│⭔ ${prefix}bego
│⭔ ${prefix}goblok
│⭔ ${prefix}janda
│⭔ ${prefix}perawan
│⭔ ${prefix}babi
│⭔ ${prefix}tolol
│⭔ ${prefix}pinter
│⭔ ${prefix}pintar
│⭔ ${prefix}asu
│⭔ ${prefix}bodoh
│⭔ ${prefix}gay
│⭔ ${prefix}lesby
│⭔ ${prefix}bajingan
│⭔ ${prefix}jancok
│⭔ ${prefix}anjing
│⭔ ${prefix}ngentod
│⭔ ${prefix}ngentot
│⭔ ${prefix}monyet
│⭔ ${prefix}mastah
│⭔ ${prefix}newbie
│⭔ ${prefix}bangsat
│⭔ ${prefix}bangke
│⭔ ${prefix}sange
│⭔ ${prefix}sangean
│⭔ ${prefix}dakjal
│⭔ ${prefix}horny
│⭔ ${prefix}wibu
│⭔ ${prefix}puki
│⭔ ${prefix}peak
│⭔ ${prefix}pantex
│⭔ ${prefix}pantek
│⭔ ${prefix}setan
│⭔ ${prefix}iblis
│⭔ ${prefix}cacat
│⭔ ${prefix}yatim
│⭔ ${prefix}piatu
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}bagaimanakah
│⭔ ${prefix}rate
│⭔ ${prefix}gantengcek
│⭔ ${prefix}cekganteng
│⭔ ${prefix}cantikcek
│⭔ ${prefix}cekcantik
│⭔ ${prefix}sangecek
│⭔ ${prefix}ceksange
│⭔ ${prefix}gaycek
│⭔ ${prefix}cekgay
│⭔ ${prefix}lesbicek
│⭔ ${prefix}ceklesbi
│⭔ ${prefix}kapankah
│⭔ ${prefix}wangy
│⭔ ${prefix}cekmati
│⭔ ${prefix}goblokcek
│⭔ ${prefix}jelekcek
│⭔ ${prefix}gaycek
│⭔ ${prefix}rate
│⭔ ${prefix}lesbicek
│⭔ ${prefix}gantengcek
│⭔ ${prefix}cantikcek
│⭔ ${prefix}begocek
│⭔ ${prefix}suhucek
│⭔ ${prefix}pintercek
│⭔ ${prefix}jagocek
│⭔ ${prefix}nolepcek
│⭔ ${prefix}babicek
│⭔ ${prefix}bebancek
│⭔ ${prefix}baikcek
│⭔ ${prefix}jahatcek
│⭔ ${prefix}anjingcek
│⭔ ${prefix}haramcek
│⭔ ${prefix}pakboycek
│⭔ ${prefix}pakgirlcek
│⭔ ${prefix}sangecek
│⭔ ${prefix}bapercek
│⭔ ${prefix}fakboycek
│⭔ ${prefix}alimcek
│⭔ ${prefix}suhucek
│⭔ ${prefix}fakgirlcek
│⭔ ${prefix}kerencek
│⭔ ${prefix}wibucek
│⭔ ${prefix}pasarkascek
│⭔ ${prefix}kulcek                
│⭔ ${prefix}cekgoblok
│⭔ ${prefix}cekjelek
│⭔ ${prefix}cekgay                
│⭔ ${prefix}ceklesbi
│⭔ ${prefix}cekganteng
│⭔ ${prefix}cekcantik
│⭔ ${prefix}cekbego
│⭔ ${prefix}ceksuhu
│⭔ ${prefix}cekpinter
│⭔ ${prefix}cekjago
│⭔ ${prefix}ceknolep
│⭔ ${prefix}cekbabi
│⭔ ${prefix}cekbeban
│⭔ ${prefix}cekbaik
│⭔ ${prefix}cekjahat
│⭔ ${prefix}cekanjing
│⭔ ${prefix}cekharam
│⭔ ${prefix}cekpakboy
│⭔ ${prefix}cekpakgirl
│⭔ ${prefix}ceksange
│⭔ ${prefix}cekbaper
│⭔ ${prefix}cekfakboy
│⭔ ${prefix}cekalim
│⭔ ${prefix}ceksuhu
│⭔ ${prefix}cekfakgirl
│⭔ ${prefix}cekkeren
│⭔ ${prefix}cekwibu
│⭔ ${prefix}cekpasarkas
│⭔ ${prefix}cekkul
│⭔ ${prefix}cekbapak
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│
╰───────────◈☽

┌──⭓ 「 *GROUP MENU* 」 
│
│⭔ ${prefix}antiwame  
│⭔ ${prefix}antiwame2  
│⭔ ${prefix}antilink  
│⭔ ${prefix}antilink2  
│⭔ ${prefix}welcome  
│⭔ ${prefix}goodbye  
│⭔ ${prefix}group open
│⭔ ${prefix}group close
│⭔ ${prefix}hidetag  
│⭔ ${prefix}kick  
│⭔ ${prefix}linkgc  
│⭔ ${prefix}resetlinkgc  
│⭔ ${prefix}delete  
│⭔ ${prefix}listonline  
│⭔ ${prefix}setnamegc  
│⭔ ${prefix}setdesc  
│⭔ ${prefix}add  
│⭔ ${prefix}promote  
│⭔ ${prefix}demote  
│⭔ ${prefix}antilinkall  
│⭔ ${prefix}tagall  
│
╰───────────◈☽

┌──⭓ 「 *SEARCH  & QUOTES* 」 
│
│⭔ ${prefix}ytsearch  
│⭔ ${prefix}google  
│⭔ ${prefix}bucin
│⭔ ${prefix}bacot
│⭔ ${prefix}citacita
│⭔ ${prefix}senja
│⭔ ${prefix}pantun
│⭔ ${prefix}galau
│⭔ ${prefix}gombal
│⭔ ${prefix}dilan
│⭔ ${prefix}hacker
│⭔ ${prefix}nyindir
│⭔ ${prefix}motivasi
│⭔ ${prefix}quotesjawa
│⭔ ${prefix}puisi
│⭔ ${prefix}sadquotes
│⭔ ${prefix}katailham
│⭔ ${prefix}islam
│⭔ ${prefix}renungan
│⭔ ${prefix}ngawur
│⭔ ${prefix}taugasih
│⭔ ${prefix}quote-ilmuan
│⭔ ${prefix}quotes
│⭔ ${prefix}fiersa
│⭔ ${prefix}faktaunix
│
╰───────────◈☽

┌──⭓ 「 *DOWNLOAD MENU* 」
│ 
│⭔ ${prefix}tiktok  
│⭔ ${prefix}tiktokvn  
│⭔ ${prefix}tiktokaudio  
│⭔ ${prefix}tiktok2
│⭔ ${prefix}tiktokaudio2
│⭔ ${prefix}spotify  
│⭔ ${prefix}ytmp3  
│⭔ ${prefix}ytmp4  
│⭔ ${prefix}play  
│⭔ ${prefix}playmp3  
│⭔ ${prefix}playmp4  
│⭔ ${prefix}lyrics  
│⭔ ${prefix}igdl  
│⭔ ${prefix}igvideo  
│⭔ ${prefix}instavid
│⭔ ${prefix}igreels
│
╰───────────◈☽

┌──⭓ 「 *ASUPAN MENU* 」
│
│⭔ ${prefix}tiktokkayes  
│⭔ ${prefix}tiktokgirl  
│⭔ ${prefix}tiktokghea  
│⭔ ${prefix}tiktokbocil  
│⭔ ${prefix}tiktokukhty  
│⭔ ${prefix}tiktoksantuy  
│⭔ ${prefix}tiktokpanrika  
│⭔ ${prefix}tiktoknotnot  
│⭔ ${prefix}tiktokgabagtha  
│⭔ ${prefix}jjmeryani 
│⭔ ${prefix}chika
│⭔ ${prefix}delvira
│⭔ ${prefix}ayu
│⭔ ${prefix}bunga
│⭔ ${prefix}aura
│⭔ ${prefix}nisa
│⭔ ${prefix}ziva
│⭔ ${prefix}yana
│⭔ ${prefix}viona
│⭔ ${prefix}syania
│⭔ ${prefix}riri
│⭔ ${prefix}syifa
│⭔ ${prefix}mama_gina
│⭔ ${prefix}alcakenya
│⭔ ${prefix}mangayutri
│⭔ ${prefix}rikagusriani
│
╰───────────◈☽

┌──⭓ 「 *CERPEN MENU* 」
│
│⭔ ${prefix}cerpen_sejarah
│⭔ ${prefix}cerpen_sedih
│⭔ ${prefix}cerpen_sastra
│⭔ ${prefix}cerpen_romantis
│⭔ ${prefix}cerpen_rohani
│⭔ ${prefix}cerpen_rindu
│⭔ ${prefix}cerpen_remaja
│⭔ ${prefix}cerpen_ramadhan
│⭔ ${prefix}cerpen_petualangan
│⭔ ${prefix}cerpen_persahabatan
│⭔ ${prefix}cerpen_perpisahan
│⭔ ${prefix}cerpen_perjuangan
│⭔ ${prefix}cerpen_penyesalan
│⭔ ${prefix}cerpen_pengorbanan
│⭔ ${prefix}cerpen_pengalaman
│⭔ ${prefix}cerpen_pendidikan
│⭔ ${prefix}cerpen_penantian
│⭔ ${prefix}cerpen_patahhati
│⭔ ${prefix}cerpen_olahraga
│⭔ ${prefix}cerpen_nasionalisme
│⭔ ${prefix}cerpen_nasihat
│⭔ ${prefix}cerpen_motivasi
│⭔ ${prefix}cerpen_misteri
│⭔ ${prefix}cerpen_mengharukan
│⭔ ${prefix}cerpen_malaysia
│⭔ ${prefix}cerpen_liburan
│⭔ ${prefix}cerpen_kristen
│⭔ ${prefix}cerpen_korea
│⭔ ${prefix}cerpen_kisahnyata
│⭔ ${prefix}cerpen_keluarga
│⭔ ${prefix}cerpen_kehidupan
│⭔ ${prefix}cerpen_jepang
│⭔ ${prefix}cerpen_inspiratif
│⭔ ${prefix}cerpen_gokil
│⭔ ${prefix}cerpen_galau
│⭔ ${prefix}cerpen_cintasejati
│⭔ ${prefix}cerpen_cintasegitiga
│⭔ ${prefix}cerpen_cintasedih
│⭔ ${prefix}cerpen_cintaromantis
│⭔ ${prefix}cerpen_cintapertama
│⭔ ${prefix}cerpen_cintaislami
│⭔ ${prefix}cerpen_cinta
│⭔ ${prefix}cerpen_budaya
│⭔ ${prefix}cerpen_bahasasunda
│⭔ ${prefix}cerpen_bahasajawa
│⭔ ${prefix}cerpen_bahasainggris
│⭔ ${prefix}cerpen_bahasadaerah
│⭔ ${prefix}cerpen_anak
│
╰───────────◈☽

┌──⭓ 「 *RANDOM STICKER* 」 
│
│⭔ ${prefix}patrick  
│⭔ ${prefix}popoci  
│⭔ ${prefix}sponsbob  
│⭔ ${prefix}kawan-sponsbob  
│⭔ ${prefix}awoawo  
│⭔ ${prefix}chat  
│⭔ ${prefix}benedict  
│⭔ ${prefix}dbfly  
│⭔ ${prefix}dino-kuning  
│⭔ ${prefix}doge  
│⭔ ${prefix}gojosatoru  
│⭔ ${prefix}hope-boy  
│⭔ ${prefix}jisoo  
│⭔ ${prefix}kr-robot  
│⭔ ${prefix}kucing   
│⭔ ${prefix}lonte  
│⭔ ${prefix}manusia_lidi  
│⭔ ${prefix}menjamet  
│⭔ ${prefix}meow  
│⭔ ${prefix}nicholas  
│⭔ ${prefix}tyni  
│⭔ ${prefix}cry
│⭔ ${prefix}kill
│⭔ ${prefix}hug
│⭔ ${prefix}pat
│⭔ ${prefix}lick 
│⭔ ${prefix}kiss
│⭔ ${prefix}bite
│⭔ ${prefix}yeet
│⭔ ${prefix}bully
│⭔ ${prefix}bonk
│⭔ ${prefix}wink
│⭔ ${prefix}poke
│⭔ ${prefix}nom
│⭔ ${prefix}slap
│⭔ ${prefix}smile 
│⭔ ${prefix}wave
│⭔ ${prefix}awoo
│⭔ ${prefix}blush
│⭔ ${prefix}smug
│⭔ ${prefix}glomp 
│⭔ ${prefix}happy
│⭔ ${prefix}dance
│⭔ ${prefix}cringe
│⭔ ${prefix}cuddle
│⭔ ${prefix}highfive 
│⭔ ${prefix}shinobu
│⭔ ${prefix}handhold
│
╰───────────◈☽

┌──⭓ 「 *PHOTOOXY* 」 
│
│⭔ ${prefix}shadow 
│⭔ ${prefix}write 
│⭔ ${prefix}romantic 
│⭔ ${prefix}burnpaper
│⭔ ${prefix}smoke 
│⭔ ${prefix}narutobanner 
│⭔ ${prefix}love 
│⭔ ${prefix}undergrass
│⭔ ${prefix}doublelove 
│⭔ ${prefix}coffecup
│⭔ ${prefix}underwaterocean
│⭔ ${prefix}smokyneon
│⭔ ${prefix}starstext
│⭔ ${prefix}rainboweffect
│⭔ ${prefix}balloontext
│⭔ ${prefix}metalliceffect
│⭔ ${prefix}embroiderytext
│⭔ ${prefix}flamingtext
│⭔ ${prefix}stonetext
│⭔ ${prefix}writeart
│⭔ ${prefix}summertext
│⭔ ${prefix}wolfmetaltext
│⭔ ${prefix}nature3dtext
│⭔ ${prefix}rosestext
│⭔ ${prefix}naturetypography
│⭔ ${prefix}quotesunder
│⭔ ${prefix}shinetext
│
╰───────────◈☽


┌──⭓ 「 *RANDOM* 」 
│
│⭔ ${prefix}aesthetic
│⭔ ${prefix}ahegao
│⭔ ${prefix}akira
│⭔ ${prefix}akiyama
│⭔ ${prefix}ana
│⭔ ${prefix}anjing
│⭔ ${prefix}art
│⭔ ${prefix}ass
│⭔ ${prefix}asuna
│⭔ ${prefix}ayuzawa
│⭔ ${prefix}bdsm
│⭔ ${prefix}boneka
│⭔ ${prefix}boruto
│⭔ ${prefix}bts
│⭔ ${prefix}cecan
│⭔ ${prefix}chiho
│⭔ ${prefix}chitoge
│⭔ ${prefix}cogan
│⭔ ${prefix}cosplay
│⭔ ${prefix}cosplayloli
│⭔ ${prefix}cosplaysagiri
│⭔ ${prefix}cuckold
│⭔ ${prefix}cum
│⭔ ${prefix}cyber
│⭔ ${prefix}darkjokes
│⭔ ${prefix}deidara
│⭔ ${prefix}doraemon
│⭔ ${prefix}eba
│⭔ ${prefix}elaina
│⭔ ${prefix}emilia
│⭔ ${prefix}ero
│⭔ ${prefix}erza
│⭔ ${prefix}exo
│⭔ ${prefix}femdom
│⭔ ${prefix}foot
│⭔ ${prefix}freefire
│⭔ ${prefix}gamewallpaper
│⭔ ${prefix}gangbang
│⭔ ${prefix}gifs
│⭔ ${prefix}glasses
│⭔ ${prefix}gremory
│⭔ ${prefix}hekel
│⭔ ${prefix}hentai
│⭔ ${prefix}hestia
│⭔ ${prefix}hijaber
│⭔ ${prefix}hinata
│⭔ ${prefix}husbu
│⭔ ${prefix}inori
│⭔ ${prefix}islamic
│⭔ ${prefix}isuzu
│⭔ ${prefix}itachi
│⭔ ${prefix}itori
│⭔ ${prefix}jahy
│⭔ ${prefix}jeni
│⭔ ${prefix}jiso
│⭔ ${prefix}justina
│⭔ ${prefix}kaga
│⭔ ${prefix}kagura
│⭔ ${prefix}kakasih
│⭔ ${prefix}kaori
│⭔ ${prefix}kartun
│⭔ ${prefix}katakata
│⭔ ${prefix}keneki
│⭔ ${prefix}kotori
│⭔ ${prefix}kpop
│⭔ ${prefix}kucing
│⭔ ${prefix}kurumi
│⭔ ${prefix}lisa
│⭔ ${prefix}loli
│⭔ ${prefix}madara
│⭔ ${prefix}masturbation
│⭔ ${prefix}megumin
│⭔ ${prefix}mikasa
│⭔ ${prefix}mikey
│⭔ ${prefix}miku
│⭔ ${prefix}milf
│⭔ ${prefix}minato
│⭔ ${prefix}mobil
│⭔ ${prefix}motor
│⭔ ${prefix}mountain
│⭔ ${prefix}naruto
│⭔ ${prefix}neko
│⭔ ${prefix}neko2
│⭔ ${prefix}nekonime
│⭔ ${prefix}nezuko
│⭔ ${prefix}onepiece
│⭔ ${prefix}orgy
│⭔ ${prefix}panties
│⭔ ${prefix}pentol
│⭔ ${prefix}pokemon
│⭔ ${prefix}profil
│⭔ ${prefix}programming
│⭔ ${prefix}pubg
│⭔ ${prefix}pussy
│⭔ ${prefix}randblackpink
│⭔ ${prefix}randomnime
│⭔ ${prefix}randomnime2
│⭔ ${prefix}rize
│⭔ ${prefix}rose
│⭔ ${prefix}ryujin
│⭔ ${prefix}sagiri
│⭔ ${prefix}sakura
│⭔ ${prefix}sasuke
│⭔ ${prefix}satanic
│⭔ ${prefix}shina
│⭔ ${prefix}shinka
│⭔ ${prefix}shinomiya
│⭔ ${prefix}shizuka
│⭔ ${prefix}shota
│⭔ ${prefix}tatasurya
│⭔ ${prefix}technology
│⭔ ${prefix}tejina
│⭔ ${prefix}tentacles
│⭔ ${prefix}thighs
│⭔ ${prefix}toukachan
│⭔ ${prefix}tsunade
│⭔ ${prefix}waifu
│⭔ ${prefix}wallhp
│⭔ ${prefix}wallml
│⭔ ${prefix}wallnime
│⭔ ${prefix}yotsuba
│⭔ ${prefix}yuki
│⭔ ${prefix}yulibocil
│⭔ ${prefix}yumeko
│⭔ ${prefix}nsfwloli
│⭔ ${prefix}yuri
│⭔ ${prefix}zettai
│
╰───────────◈☽

┌──⭓ 「 *MAIN MENU* 」 
│
│⭔ ${prefix}sticker  
│⭔ ${prefix}toimage  
│⭔ ${prefix}pinterest  
│⭔ ${prefix}ttp  
│⭔ ${prefix}smeme  
│⭔ ${prefix}attp  
│⭔ ${prefix}emojimix  
│⭔ ${prefix}wm  
│⭔ ${prefix}qc
│⭔ ${prefix}qc2
│
╰───────────◈☽

┌──⭓ 「 *Anonymous MENU* 」 
│
│⭔ ${prefix}menfes
│⭔ ${prefix}confes
│
╰───────────◈☽

┌──⭓ 「 *EPHOTO* 」 
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
╰───────────◈☽

┌──⭓ 「 *TEXTPRO* 」 
│
│⭔ ${prefix}glitchtext
│⭔ ${prefix}writetext
│⭔ ${prefix}advancedglow
│⭔ ${prefix}typographytext
│⭔ ${prefix}pixelglitch
│⭔ ${prefix}neonglitch
│⭔ ${prefix}flagtext
│⭔ ${prefix}flag3dtext
│⭔ ${prefix}deletingtext
│⭔ ${prefix}blackpinkstyle
│⭔ ${prefix}glowingtext
│⭔ ${prefix}underwatertext
│⭔ ${prefix}logomaker
│⭔ ${prefix}cartoonstyle
│⭔ ${prefix}papercutstyle
│⭔ ${prefix}watercolortext
│⭔ ${prefix}effectclouds
│⭔ ${prefix}blackpinklogo
│⭔ ${prefix}gradienttext
│⭔ ${prefix}summerbeach
│⭔ ${prefix}luxurygold
│⭔ ${prefix}multicoloredneon
│⭔ ${prefix}sandsummer
│⭔ ${prefix}galaxywallpaper
│⭔ ${prefix}1917style
│⭔ ${prefix}makingneon
│⭔ ${prefix}royaltext
│⭔ ${prefix}freecreate
│⭔ ${prefix}galaxystyle
│⭔ ${prefix}lighteffects
│⭔ ${prefix}candy 
│⭔ ${prefix}christmas 
│⭔ ${prefix}3dchristmas 
│⭔ ${prefix}sparklechristmas
│⭔ ${prefix}deepsea 
│⭔ ${prefix}scifi 
│⭔ ${prefix}rainbow 
│⭔ ${prefix}waterpipe 
│⭔ ${prefix}spooky 
│⭔ ${prefix}pencil 
│⭔ ${prefix}circuit 
│⭔ ${prefix}discovery 
│⭔ ${prefix}metalic 
│⭔ ${prefix}fiction 
│⭔ ${prefix}demon 
│⭔ ${prefix}transformer 
│⭔ ${prefix}berry 
│⭔ ${prefix}thunder 
│⭔ ${prefix}magma 
│⭔ ${prefix}3dstone 
│⭔ ${prefix}neonlight 
│⭔ ${prefix}glitch 
│⭔ ${prefix}harrypotter 
│⭔ ${prefix}brokenglass 
│⭔ ${prefix}papercut 
│⭔ ${prefix}watercolor 
│⭔ ${prefix}multicolor 
│⭔ ${prefix}neondevil 
│⭔ ${prefix}underwater 
│⭔ ${prefix}graffitibike
│⭔ ${prefix}snow 
│⭔ ${prefix}cloud 
│⭔ ${prefix}honey 
│⭔ ${prefix}ice 
│⭔ ${prefix}fruitjuice 
│⭔ ${prefix}biscuit 
│⭔ ${prefix}wood 
│⭔ ${prefix}chocolate 
│⭔ ${prefix}strawberry 
│⭔ ${prefix}matrix 
│⭔ ${prefix}blood 
│⭔ ${prefix}dropwater 
│⭔ ${prefix}toxic 
│⭔ ${prefix}lava 
│⭔ ${prefix}rock 
│⭔ ${prefix}bloodglas 
│⭔ ${prefix}hallowen 
│⭔ ${prefix}darkgold 
│⭔ ${prefix}joker 
│⭔ ${prefix}wicker
│⭔ ${prefix}firework 
│⭔ ${prefix}skeleton 
│⭔ ${prefix}blackpink 
│⭔ ${prefix}sand 
│⭔ ${prefix}glue 
│⭔ ${prefix}1917 
│⭔ ${prefix}leaves
│
╰───────────◈☽

┌──⭓ 「 *GAMES MENU* 」 
│
│⭔ ${prefix}tebakkata  
│⭔ ${prefix}tebakbendera  
│⭔ ${prefix}caklontong  
│⭔ ${prefix}susunkata  
│⭔ ${prefix}tebakkalimat  
│⭔ ${prefix}jodohku
│⭔ ${prefix}jadian
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│
╰───────────◈☽

┌──⭓ 「 *CECAN MENU* 」 
│
│⭔ ${prefix}china
│⭔ ${prefix}indonesia
│⭔ ${prefix}malaysia
│⭔ ${prefix}thailand
│⭔ ${prefix}korea
│⭔ ${prefix}japan
│⭔ ${prefix}vietnam
│⭔ ${prefix}jenni
│⭔ ${prefix}jiiso
│⭔ ${prefix}lisa
│⭔ ${prefix}rose
│
╰───────────◈☽

┌──⭓ 「 *COGAN MENU* 」 
│
│⭔ ${prefix}wuyifan
│⭔ ${prefix}suga
│⭔ ${prefix}parkchanyeol
│⭔ ${prefix}ohsehun
│⭔ ${prefix}luhan
│⭔ ${prefix}kimtaehyung
│⭔ ${prefix}kimseok
│⭔ ${prefix}kimnanjoon
│⭔ ${prefix}kimminseok
│⭔ ${prefix}kimjunmyeon
│⭔ ${prefix}kimjong
│⭔ ${prefix}kimjondae
│⭔ ${prefix}jungkook
│⭔ ${prefix}jimin
│⭔ ${prefix}jhope
│⭔ ${prefix}huangzitao
│⭔ ${prefix}dohkyungsoo
│⭔ ${prefix}baekhyung
│
╰───────────◈☽

┌──⭓ 「 *LOGO MENU* 」
│
│⭔ ${prefix}horror
│⭔ ${prefix}game8bit
│⭔ ${prefix}layered
│⭔ ${prefix}glitch2
│⭔ ${prefix}cool-graffiti
│⭔ ${prefix}cool-wall-graffiti
│⭔ ${prefix}realistic
│⭔ ${prefix}space3d
│⭔ ${prefix}glitch-tiktok
│⭔ ${prefix}stone
│⭔ ${prefix}marvel
│⭔ ${prefix}marvel2
│⭔ ${prefix}metal-rose-gold
│⭔ ${prefix}pornhub
│⭔ ${prefix}avengers
│⭔ ${prefix}metal-rainbow
│⭔ ${prefix}metal-gold
│⭔ ${prefix}metal-galaxy
│⭔ ${prefix}lion
│⭔ ${prefix}wolf-black-white
│⭔ ${prefix}wolf-galaxy
│⭔ ${prefix}ninja
│⭔ ${prefix}3dsteel
│⭔ ${prefix}horror2
│⭔ ${prefix}lava
│⭔ ${prefix}bagel
│
╰───────────◈☽

┌──⭓ 「 *PRIMBON MENU* 」
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}ramalanjodoh
│⭔ ${prefix}ramalanjodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalancinta
│⭔ ${prefix}artinama
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rejeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}ramalnasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}artitarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}harinaga
│⭔ ${prefix}arahrejeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}sifat
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}shio
│
╰───────────◈☽

┌──⭓ 「 *SOUND MENU* 」 
│
│⭔ ${prefix}sound1 -  sound100
│
╰───────────◈☽

`

// NOTE JIKA MAU KASIH NAMA LU DI TQTO SILAHAKAN
// TAPI TOLONG JANGAN HAPUS SALAH SATU NAMA ITU
// AP LAGI NGAKU² KALO INI BASE LU WOWKWOWK

}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})