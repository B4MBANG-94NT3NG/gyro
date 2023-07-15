// NOTE  \\

// BASE ORI BY SALSA OFC \\
// JANGAN NGAKU� BASE LU DECK WOWKWOK \\
// RENAME GPP TAPI TOLONG HARGAIN PEMBUAT NYA \\
// JANGAN DI JUAL !!! \\

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs');
const os = require('os')
const util = require('util');
const { JSDOM } = require('jsdom')
const qs = require('qs')
const chalk = require('chalk');
const ytdl = require('ytdl-core')
const cheerio = require('cheerio')
const cookie = require('cookie')
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const FormData = require("form-data");
const { fromBuffer } = require('file-type')
const { fetchBuffer, clockString } = require("./lib/myfunc2")
const textpro = require("./scraper/textpro")
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const totalFitur = () =>{
var mytext = fs.readFileSync("./store.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

// DATABASE GAME
const _family100 = {}
const tebakgambar = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkota = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
//-\\
const similarity = require('similarity')
const threshold = 0.72

const jawabanBenar = (tebak) => {
	return` ${tebak} \n\nJawaban Benar \nSelamat Kamu Ga Dapet Apa-Apa🗿`
}
const waktuHabis = (jawaban) => {
	return `Waktu Habis\nJawaban:  ${jawaban}`
}

const { smsg, fetchJson, getBuffer } = require('./lib/simple')
const { 
  updateResponList,
  delResponList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
  isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome,
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup,
    addPay,
    updatePay
} = require("./lib/store")

async function getGroupAdmins(participants){
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        } 
        return admins || []
}

const _prem = require("./lib/premium");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));

function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

function msToDate(mse) {
               temp = mse
               days = Math.floor(mse / (24 * 60 * 60 * 1000));
               daysms = mse % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = mse % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = mse % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }
            
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const jsonformat = (string) => {
	return JSON.stringify(string, null, 2)
}

async function UploadDulu(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new FormData()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://tenaja.zeeoneofc.repl.co/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

const tanggal = (numer) => {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

module.exports = alpha = async (alpha, m, chatUpdate, store, opengc, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, sewa, _welcome, _left, db_respon_list, ) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' //omzee
        var budy = (typeof m.text == 'string' ? m.text : '')
        const isCmd = /^[���׶������_=|~!?#/$%^&.+-,\\\�^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await alpha.decodeJid(alpha.user.id)
        const isCreator = ["62895412691100@s.whatsapp.net",botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const from = mek.key.remoteJid
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isPremium = _prem.checkPremiumUser(m.sender, premium)
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
      	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
      	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
      	const isSewa = checkSewaGroup(m.chat, sewa)
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false  
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false  
const isWelcome = _welcome.includes(m.chat)
const isLeft = _left.includes(m.chat)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

const reply = async (text) =>{
	return await alpha.sendFakeLink(m.chat, text, salam, pushname, m)
}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot Created By SALSA Ofc\n`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;rulzxdBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/33e79ab21ec0446cc3e4f.jpg' }}}}
function parseMention(text = '') {
	return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const fakestatus = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": `${ttname}`,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": thumb,
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
}

//,function ephoto360

function stickersearch(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://getstickerpack.com/stickers?query=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const source = [];
                const link = [];
                $('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
                    source.push($(b).attr('href'))
                })
                axios.get(source[Math.floor(Math.random() * source.length)])
                    .then(({
                        data
                    }) => {
                        const $$ = cheerio.load(data)
                        $$('#stickerPack > div > div.row > div > img').each(function(c, d) {
                            link.push($$(d).attr('src').replace(/&d=200x200/g,''))
                        })
                        result = {
                            status: 200,
                            author: '@ Rominaru Dev',
                            title: $$('#intro > div > div > h1').text(),
                            sticker_url: link
                        }
                        resolve(result)
                    })
            }).catch(reject)
    })
}


let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = true
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
                if (!('templateLocation' in setting)) setting.templateLocation = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: true,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
                templateLocation: false,
            }

async function cerpen (category) {
return new Promise(async (resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "")
let judul = title.replace(/\s/g, "-")
let page = Math.floor(Math.random() * 5)
axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
.then((get) => {
let $ = cheerio.load(get.data)
let link = []
$('article.post').each(function (a, b) {
link.push($(b).find('a').attr('href'))
})
let random = link[Math.floor(Math.random() * link.length)]
axios.get(random)
.then((res) => {
let $$ = cheerio.load(res.data)
let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
cerita: $$('#content > article > p').text()
}
resolve(hasil)
})
})
})
}

var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];


async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
url: url,
method: "POST",
data: form,
headers: {
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
...form.getHeaders()
}
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}

        if (m.text.includes('🗿')) {
    alpha.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
        
        // Push Message To Console && Auto Read
        if (m.message) {
            alpha.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await alpha.updateProfileStatus(`I am ${namabot} | Aktif Selama ${uptime} ⏳ | Mode : ${alpha.public ? 'Public-Mode 👥' : 'Self-Mode 👤'} | User : ${Object.keys(global.db.data.users).length} 👥| Jangan Telp Bot 📞 | © Created ᴮᵃᵐᵇᵃⁿᵍ ᵀʳⁱ ᴿᵃʰᵃʳʲᵒ`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	}
	
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: alpha.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, alpha.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        alpha.ev.emit('messages.upsert', msg)
        }
  
  
       

//endfunction

const fvn = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "audioMessage": {
            "mimetype": "audio/ogg; codecs=opus",
            "seconds": 359996400,
            "ptt": "true"
        }
    }
}

async function getGcName(groupID) {
            try {
                let data_name = await alpha.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
        
if(m.isGroup){
    expiredCheck(alpha, sewa)
    }
        function pickRandom(list) {
        	return list[Math.floor(Math.random() * list.length)]
        }
        
        //autotyper all
        if (global.autoTyping) { if (m.chat) { alpha.sendPresenceUpdate('composing', m.chat) }
       }
            
      if (isAntiLink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiLink2) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return //reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        }
        }
      if (isAntiWame) {
        if (budy.match(`wa.me/`)) {
        reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiWame2) {
        if (budy.match(`wa.me/`)) {
        if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        }
        }
      if (isAntiWame) {
        if (budy.includes((`Wa.me/`) || (`Wa.me/`))) {
        reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        if (isAlreadyResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                alpha.sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                alpha.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
        
        _prem.expiredCheck(alpha, premium)

        //antilink all by xeon
        if (AntiLinkAll)
        if (budy.includes("https://")){
        	if (!isBotAdmins) (bvl)
        bvl = `\`\`\`ã€Œ Link Detected ã€\`\`\`\n\nAdmin has sent a link, admin is free to send any linkðŸ˜‡`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        await alpha.sendMessage(m.chat,
        {
        	delete: {
        	remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
        }
        })
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        alpha.sendMessage(from, {text:`\`\`\`ã€Œ Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
        } else {
        	}
        
        if (('family100' + m.chat in _family100) && !isCmd) {
        	kuis = true
        let room = _family100['family100' + m.chat]
        let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
        let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (!isSurender) {
        	let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
        if (room.terjawab[index]) return !0
        room.terjawab[index] = m.sender
        }
        let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
        let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
alpha.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
	return _family100['family100' + m.chat].pesan = mesg
	}).catch(_ => _)
	if (isWin || isSurender) delete _family100['family100' + m.chat]
	}
	if (tebakgambar[m.chat] && !isCmd && m.quoted) {
		if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
			let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
			jawaban = json.jawaban.toLowerCase().trim()
			if (m.text.toLowerCase() == jawaban) {
				reply(jawabanBenar("Tebakgambar", tebakgambar[m.chat][2]) + "\n\nKirim perintah .tebakgambar untuk bermain lagi")
				clearTimeout(tebakgambar[m.chat][3])
				delete tebakgambar[m.chat]
				}
				else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
				reply(`_Ya, Dikit Lagi!_`)
				else reply(m.chat, "❌ Jawaban salah", footer_text, '.tega', 'Hint', '.ytega', 'Nyerah', m)
				}
			}
			if (tebakkata[m.chat] && !isCmd && m.quoted) {
				if (m.quoted.id == tebakkata[m.chat][0].key.id) {
					let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
					jawaban = json.jawaban.toLowerCase().trim()
					if (m.text.toLowerCase() == jawaban) {
						reply(jawabanBenar("Tebak Kata", tebakkata[m.chat][2]) + "\n\nKirim perintah .tebakkata untuk bermain lagi")
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.teka -- _Bantuan_\n.yteka -- _Nyerah_")
					}
				}
				if (tebakbendera[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
						jawaban = json.name.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Bendera", tebakbendera[m.chat][2]) + "\n\nKirim perintah .tebakbendera untuk bermain lagi")
							clearTimeout(tebakbendera[m.chat][3])
							delete tebakbendera[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.tebe -- _Bantuan_\n.ytebe -- _Nyerah_")
					}
				}
				if (caklontong[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == caklontong[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Cak Lontong", caklontong[m.chat][2]) + "\n\nKirim perintah .caklontong untuk bermain lagi")
							clearTimeout(caklontong[m.chat][3])
							delete caklontong[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.telo -- _Bantuan_\n.ytelo -- _Nyerah_")
					}
				}
				if (susunkata[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == susunkata[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Susun Kata", susunkata[m.chat][2]) + "\n\nKirim perintah .susunkata untuk bermain lagi")
							clearTimeout(susunkata[m.chat][3])
							delete susunkata[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.tesuka -- _Bantuan_\n.ytesuka -- _Nyerah_")
					}
				}
				if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Kalimat", tebakkalimat[m.chat][2]) + "\n\nKirim perintah .tebakkalimat untuk bermain lagi")
							clearTimeout(tebakkalimat[m.chat][3])
							delete tebakkalimat[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.tekatu -- _Bantuan_\n.ytekatu -- _Nyerah_")
					}
				}
				if (siapaaku[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == siapaaku[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Siapa", siapaaku[m.chat][2]) + "\n\nKirim perintah .tebaksiapa untuk bermain lagi")
							clearTimeout(siapaaku[m.chat][3])
							delete siapaaku[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.tesi -- _Bantuan_\n.ytesi -- _Nyerah_")
					}
				}
		const kontak = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: `6283136505591-1614953337@g.us`
					} : {})
				},
				message: {
					'contactMessage': {
						'displayName': `${pushname}`,
						'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
						'jpegThumbnail': pp_bot,
						thumbnail: pp_bot,
						sendEphemeral: true
					}
				}
			}
			
        switch(command) {
          
         case 'bucin': case 'bacot': case 'citacita': case 'galau': case 'dilan': case 'gombal': case 'hacker': case 'nyindir': case 'motivasi': case 'pantun':  case 'quotesjawa': case 'katailham': case 'sadquotes':{
         if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
        SALSA_dev = await fetchJson(`https://raw.githubusercontent.com/B4MBANG-94NT3NG/Databasee/main/text/${command}.json`)
          let random = SALSA_dev[Math.floor(Math.random() * SALSA_dev.length)]
          reply(random)
         }
         break
    case 'senja': case 'renungan':  case 'islam': case 'ngawur': case 'taugasih': case 'fiersa':  case 'quotes': case 'faktaunix':{
         if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
        SALSA_dev = await fetchJson(`https://raw.githubusercontent.com/B4MBANG-94NT3NG/Databasee/main/text/${command}.json`)
          let random = SALSA_dev[Math.floor(Math.random() * SALSA_dev.length)]
          reply(random)
         }
         break
         case 'puisi':{
     if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
        SALSA_dev = await fetchJson(`https://raw.githubusercontent.com/B4MBANG-94NT3NG/Databasee/main/text/puisi.json`)
          let random = SALSA_dev[Math.floor(Math.random() * SALSA_dev.length)]
          random1 = random.puisi
          reply(random1)
         }
         break
    case 'quote_ilmuan':{
     if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
        SALSA_dev = await fetchJson(`https://raw.githubusercontent.com/B4MBANG-94NT3NG/Databasee/main/text/quote-ilmuan.json`)
          let random = SALSA_dev[Math.floor(Math.random() * SALSA_dev.length)]
          random1 = `${random.author}\n${random.quotes}`
          reply(random1)
         }
         break
         case 'owner':
         case 'creator': {
            alpha.sendContact(m.chat, global.owner, m)
         }
         break
         case 'menu': case 'help': case '?': {
         	alpha.sendMessage(m.chat, {image: pp_bot, caption: require("./settings").helpMenu(pushname)}, {quoted:m})
          }
          break
			case'welcome':{
			if ((global.welcome || isWelcome)){ }
            if (!m.isGroup) return reply('Fitur Khusus Group!')
			if (!isAdmins) return reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isWelcome) return reply(`Udah on`)
                _welcome.push(m.chat)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses mengaktifkan welcome di grup ini')
            } else if (args[0] === "off") {
               if (!isWelcome) return reply(`Udah off`)
                let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses menonaktifkan welcome di grup ini')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
			}
			quoted: kontak
			}
            break
        case'left': case 'goodbye':{
        	if ((global.left || isLeft)){ }
            if (!m.isGroup) return reply('Fitur Khusus Group!')
			if (!isAdmins) return reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isLeft) return reply(`Udah on`)
                _left.push(m.chat)
                fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                reply('Sukses mengaktifkan goodbye di grup ini')
            } else if (args[0] === "off") {
               if (!isLeft) return reply(`Udah off`)
                let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                reply('Sukses menonaktifkan goodbye di grup ini')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
        }
        break
case'antiwame':{
            if (!m.isGroup) return reply('Fitur Khusus Group!')
				if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
             if (args[0] === "on") {
                if (isAntiWame) return reply(`Udah aktif`)
                antiwame.push(m.chat)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Activate Antiwame In This Group')
            } else if (args[0] === "off") {
                if (!isAntiWame) return reply(`Udah nonaktif`)
                let anu = antiwame.indexOf(m.chat)
                antiwame.splice(anu, 1)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Disabling Antiwame In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
}
break
case'antilink':{
            if (!m.isGroup) return reply('Fitur Khusus Group!')
				if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Bot harus menjadi admin")
            if (args[0] === "on") {
               if (isAntiLink) return reply(`Udah aktif`)
                antilink.push(m.chat)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Activate Antilink In This Group')
            } else if (args[0] === "off") {
               if (!isAntiLink) return reply(`Udah nonaktif`)
                let anu = antilink.indexOf(m.chat)
                antilink.splice(anu, 1)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Disabling Antilink In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
  
}
		    break
         case 'h':
         case 'hidetag':{
            if (!m.isGroup) return reply("Khusus grup")
            if (!(isAdmins || isCreator)) return reply("Fitur khusus admin")
   let tek = m.quoted ? quoted.text : (text ? text : "")
            alpha.sendMessage(m.chat, {
               text: tek ,
               mentions: participants.map(a => a.id)
            }, {
            	quoted: kontak
            })
         }
         break
         case 'sewa':{
         	reply(sewabot)
         }
         break
         case 'jadibot':{
         	reply(`JASA JADIBOT CHAT OWNER AJA KAK`)
         }
         break
         case 'donasi': case 'donate':{
         	alpha.sendMessage(m.chat, {image: qris, caption: donasi}, {quoted:m})
         }
         break
         case 'q':{
         	reply ("On Kok Kak Bot Nya")
         }
         break
         case 'kick':{
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat())).catch((err) => reply(jsonformat)())
         }
         break
         case 'add': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'promote': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         case 'demote': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'sc':
         case 'script':{
         	reply("SCRIPT ORI BY SALSA OFC \n\nBASE NY SALSA OFC")
         }
         break
         case 'tqto':
         case 'thanksto':{
         	reply(`╭─❒ 「 THANKS TO 」 
│○ Allah Swt.
│○ Myparents
│○ Hads
│○ VinzDev
│○ Misel
│○ Fatih Arridho
│○ Ferdiz
│○ Zeeoneofc
│○ SALSAOfc
│○ All Creator Bot
╰❒`) // MAU MAMBAHIN NAMA LU? 
// SILAHKAN TAPI TOLONG JANGAN HAPUS SALAH SATU NAMA DI ATAS ITU
         }
         break
         case 'setppbot':{
         	if (!m.key.fromMe && !isCreator) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Owner")
         if (!/image/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
         if (/webp/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
         let media = await alpha.downloadAndSaveMediaMessage(qmsg)
         await alpha.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
         }
         break
         case 'jasrun':{
         	reply(`Mau jasrun ? silahkan hubungi Owner`)
         }
         break
         case 'join':{
         	if (!isCreator) return reply(`Fitur Ini Hanya Dapat Di Gunakan Oleh Owner`)
         if (!text) return reply(`Masukan Link Group !`)
         if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Link Eror !`)
         reply("Sedang Di Proses")
         let result = args[0].split('https://chat.whatsapp.com/')[1]
         await alpha.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case "tiktoknowm":
         case "tiktok":{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply("Sedang Di Proses")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         alpha.sendMessage(from, {video:{url: result.nowm}, mimetype:"video/mp4", caption: `DONE`}, {quoted:m})
         }
         break
         case "tiktokaudio":{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply("Sedang Di Proses")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         alpha.sendMessage(from, {audio:{url: result.audio}, mimetype:"audio/mpeg", caption: `DONE`}, {quoted:m})
         }
         break
         case 'tiktokaudio2':{
         	if (!text) return reply( `Example : ${prefix + command} link`)
         if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply("Sedang Di Proses")
         require('./lib/tiktok').Tiktok(q).then( data => {
         	alpha.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
         })
         }
         break
         case "tiktokvn":{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         if (!isUrl(args[0])  && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply("Sedang Di Proses")
         let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {url: args[0]}, 'apikey'))
         if (!res.ok) throw await res.text()
         var result = await res.json()
         var result = result.result 
         alpha.sendMessage(from, {audio:{url: result.audio}, mimetype:"audio/mpeg", ptt:true, caption: `DONE`}, {quoted:m})
         }
         break
         case "patrick":
         case "popoci":
         case "sponsbob":
         case "kawan-sponsbob":
         case "awoawo":
         case "chat":
         case "benedict":
         case "dbfly":
         case "dino-kuning":
         case "doge":
         case "gojosatoru":
         case "hope-boy":
         case "jisoo":
         case "kr-robot":
         case "kucing":
         case "lonte":
         case "manusia-lidi":
         case "menjamet":
         case "meow":
         case "nicholas":
         case "tyni": {
         reply("Sedang Di Proses")
      let res = await fetch(global.api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
         if (!res.ok) throw await res.text()
         let stc = await res.buffer()
         let savestik = await alpha.sendImageAsSticker(m.chat, stc, m, {
         	packname: packname,
         author: author
         })
         await fs.unlinkSync(savestik)
         }
         break
         case 'ttp':
         case 'attp':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         if (!text) return reply(`Kirim perintah:\n${prefix+command} teks\n\nContoh penggunaan\n${prefix+command} saya robok anda goblok`)
         let res = await fetch(global.api('alfa', '/api/canvas/' + command, {text: text}, 'apikey'))
         if (!res.ok) throw await res.text()
         let img = await res.buffer()
         let encmedia = await alpha.sendMediaAsSticker(m.chat, img, m, {
         	packname: global.packname,
         author: author
         })
         await fs.unlinkSync(encmedia)
         }
         break
         case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
         reply("Sedang Di Proses")
         let response = await alpha.groupInviteCode(m.chat)
         alpha.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
         reply("Itu Link Group Nya Kak")
         }
         break
         case 'revoke':
         case 'resetlink':
         case 'resetlinkgrup':
         case 'resetlinkgroup':
         case 'resetlinkgc':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
         if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
         reply("Sedang Di Proses")
         alpha.groupRevokeInvite(m.chat)
         reply(`Done Reset Link Gc Nya Kak`)
         }
         break
         case 'delete': case 'del':{
         	if (!m.quoted) throw false
         let { chat, fromMe, id, isBaileys } = m.quoted
         if (!isBaileys) return 'Pesan Itu Bukan Di kirim Oleh Bot'
         alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         reply("Sukses Delete Pesan ✅")
         }
         break
         case 'kosong':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         	reply(`
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         `)
         }
         break
         case 'out':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         await alpha.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'listonline': case 'onlinelist':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
         let online = [...Object.keys(store.presences[id]), botNumber]
         alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, {
         	mentions: online
         })
         }
         break
         case 'public':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         alpha.public = true
         reply('*Sukses Ganti Bot Ke Mode Public*')
         }
         break
         case 'self':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         alpha.public = false 
         reply('*Sukses Ganti Bot Ke mode Self, Jika Mau Ganti Bot  Ke Mode Public Silahkan Ke Nomor Bot Ketik .public*')
         }
         break
         case 'tiktokkayes':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply("Sedang Di Proses")
         var but = [{ buttonId: `grubbot`, buttonText: { displayText: `GROUP BOT` }, type: 1 }]
         var kayes = JSON.parse(fs.readFileSync('./RANDOM/kayes.json'))
         var hasil = pickRandom(kayes)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokgirl':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply("Sedang Di Proses")
         var asupan = JSON.parse(fs.readFileSync('./RANDOM/tiktokgirl.json'))
         var hasil = pickRandom(asupan)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokghea':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var gheayubi = JSON.parse(fs.readFileSync('./RANDOM/gheayubi.json'))
         var hasil = pickRandom(gheayubi)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokbocil':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var bocil = JSON.parse(fs.readFileSync('./RANDOM/bocil.json'))
         var hasil = pickRandom(bocil)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokukhty':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var ukhty = JSON.parse(fs.readFileSync('./RANDOM/ukhty.json'))
         var hasil = pickRandom(ukhty)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktoksantuy':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var santuy = JSON.parse(fs.readFileSync('./RANDOM/santuy.json'))
         var hasil = pickRandom(santuy)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokpanrika':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var rikagusriani = JSON.parse(fs.readFileSync('./RANDOM/panrika.json'))
         var hasil = pickRandom(rikagusriani)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktoknotnot':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply("Sedang Di Proses")
         var notnot = JSON.parse(fs.readFileSync('./RANDOM/notnot.json'))
         var hasil = pickRandom(notnot)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokgabagtha':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply("Sedang Di Proses")
         var gabagtha = JSON.parse(fs.readFileSync('./RANDOM/tiktokgabagtha.json'))
         var hasil = pickRandom(gabagtha)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'block':{
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'unblock':{
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setnamegc':
         case 'setnamagc':{
         if (!m.isGroup) return(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) return(`Bot Bukan Admin`)
         if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
         if (!text) throw 'Text Nya ?'
         await alpha.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setdesc': case 'setdesk':{
         	if (!m.isGroup) return(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) return(`Bot Bukan Admin`)
         if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
         if (!text) throw 'Text Nya ?'
         await alpha.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'gitclone':{
         	if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/SALSA-MD/SALSAxxx`)
         if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Eror Bang Link Nya`)
         let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
         let [, user, repo] = args[0].match(regex1) || []
         repo = repo.replace(/.git$/, '')
         let url = `https://api.github.com/repos/${user}/${repo}/zipball`
         let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
         alpha.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("Sukses"))
         }
         break
         case 'developer': case 'dev': {
         	reply(`SALSA-MD DEVELOPER\n\n\n©2021-2023 SALSA-MD.\n\nWhatshapp\nSALSA: wa.me/62895412691100`)
         }
         break
case 'delprem':

         case 'unprem':

         case 'delpremium': {

            if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
            if (!text) return reply(`*Kek gini bang*\n\n• ${prefix + command} number\n*Contoh:* ${prefix + command} 62887435047326\n\natau\n\n• ${prefix + command} @tag\n*Contoh:* ${prefix + command} @62887435047326`)

            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            if (users) {

               premium.splice(_prem.getPremiumPosition(users, premium), 1)

               fs.writeFileSync('./database/premium.json', JSON.stringify(premium))

               reply("Sukses del premium")

            } else {

               var cekpr = await alpha.onWhatsApp(args[0] + "@s.whatsapp.net")

               if (cekpr.length == 0) return reply(`Nomor ${args[0]} tidak terdaftar di WhatsApp`)

               premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)

               fs.writeFileSync('./database/premium.json', JSON.stringify(premium))

               reply("Sukses del premium")

            }

         }

         break
         case 'addprem':{
         if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
         
            const swn = args.join(" ")

            const pcknm = swn.split("|")[0];

            const atnm = swn.split("|")[1];

            if (!(pcknm && atnm)) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${command} @62887435047326|30d`)

            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            if (users) {

               _prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)

               reply("Sukses add premium")

            } else {

               var cekap = await alpha.onWhatsApp(pcknm + "@s.whatsapp.net")

               if (cekap.length == 0) return reply(`Nomor ${pcknm} tidak terdaftar di WhatsApp`)

               _prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)

               reply("Sukses add premium")

            }
         }
         break
         case 'listpremium': case 'listprem':{

            let txt = ""

            let men = [];

            for (let i of premium) {

               men.push(i.id)

               txt += `*🆔 ID:* @${i.id.split("@")[0]}\n`

               if (i.expired === 'PERMANENT') {

                  let cekvip = 'PERMANENT'

                  txt += `*⏰ Expired:* PERMANENT\n\n`

               } else {

                  let cekvip = i.expired - Date.now()

                  txt += `*⏰ Expired:* ${msToDate(cekvip)}`

               }

            }

            alpha.sendMessage(m.chat, { text: `「 *PREMIUM USER LIST* 」\n\n*👑 Total Premium : ${premium.length} user*\n\n${txt}` }, { mentions: men, quoted: m })

         }

         break
         case 'buyprem':{
         	alpha.sendContact(m.chat, global.owner,), reply(`Buy Premium Chat Owner`)
         }
         break
         case'antiwame2':{
         	if (!m.isGroup) return reply('Fitur Khusus Group!')
         if (!isAdmins) return reply('Fitur Khusus admin!')
         if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
         if (args[0] === "on") {
         	if (isAntiWame2) return reply(`Udah aktif`)
         antiwame2.push(m.chat)
         fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
         reply('Successfully Activate antiwame2 In This Group')
         } else if (args[0] === "off") {
         	if (!isAntiWame2) return reply(`Udah nonaktif`)
         let anu = antiwame2.indexOf(m.chat)
         antiwame2.splice(anu, 1)
         fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
         reply('Successfully Disabling antiwame2 In This Group')
         } else {
         	reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
         }
}
break
case'antilink2':{
	if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
	if (!isAdmins) return reply('Fitur Khusus admin!')
	if (!isBotAdmins) return reply("Bot harus menjadi admin")
	if (args[0] === "on") {
		if (isAntiLink2) return reply(`Udah aktif`)
		antilink2.push(m.chat)
		fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
		reply('Successfully Activate antilink2 In This Group')
		} else if (args[0] === "off") {
			if (!isAntiLink2) return reply(`Udah nonaktif`)
			let anu = antilink2.indexOf(m.chat)
			antilink2.splice(anu, 1)
			fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
			reply('Successfully Disabling antilink2 In This Group')
			} else {
				reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
				}
				}
				break
				case 'groupbot': case 'grubbot': case 'grupbot':{
					reply(grubbot)
					}
						break
						case 'spotify':{ //credit: Ray Senpaiâ¤ï¸ https://github.com/EternityBots/Nezuko
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) return reply(`Mana Link Nya ?`)
						const Spotify = require('./lib/spotify')
						const spotify = new Spotify(text)
						const info = await spotify.getInfo()
						if ((info).error) throw `The link you provided is not spotify link`
						const { name, artists, album_name, release_date, cover_url } = info
						const details = `*Title:* ${name || ''}\n*Artists:* ${(artists || []).join(
						','
						)}\n*Album:* ${album_name}\n*Release Date:* ${release_date || ''}`
						const response = await alpha.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
						const bufferpotify = await spotify.download()
						await alpha.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
					}
					break
					case 'yts': case 'ytsearch': {
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) throw `Contoh : ${prefix + command} story wa anime`
						reply("Sedang Di Proses")
						let yts = require("youtube-yts")
						let search = await yts(text)
						let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
						let no = 1
						for (let i of search.all) {
							teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded : ${i.ago}\nUrl : ${i.url}\n\n`
							}
						alpha.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
					}
					break
					case 'google': {
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) throw `Contoh : ${prefix + command} fatih arridho`
						let google = require('google-it')
						google({'query': text}).then(res => {
							let teks = `Google Search From : ${text}\n\n`
							for (let g of res) {
								teks += `*Title* : ${g.title}\n`
								teks += `*Description* : ${g.snippet}\n`
								teks += `*Link* : ${g.link}\n\nIni Hasil Nya Kak\n\n`
								}
							reply(teks)
						})
					}
					break
					case 'menfess':{
					if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
					if (m.isGroup) return reply(`Fitur Ini Hanya Dapat Di Gunakan Di Private Chat`)
					if (!text) return reply(`*Kayak Gini Kak*\n\Contoh : ${prefix + command} nomor|nama|pesan`)
					let nomor = q.split('|')[0] ? q.split('|')[0] : q
					let saking = q.split('|')[1] ? q.split('|')[1] : q
					let pesan = q.split('|')[2] ? q.split('|')[2] : ''
					if (pesan.length < 1) return reply(`Semua Nya Harus Di Isi ! contoh : menfess 62xxxxxxxxxx|someone|hello KakaAll must be filled in! eg : confess 62xxxxxxxxxx|from|hello dude`)
					let teksnya = `Hi Kak Ada Menfess Nih\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
					alpha.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, footer: namabot })
					reply(`Sukses Kirim Menfess !!`)
					}
						break
						case 'apakah': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                alpha.sendMessage(m.chat, {
                    text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'bisakah': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                alpha.sendMessage(m.chat, {
                    text: `Pertanyaan : bisakah ${q}\nJawaban : ${ga}`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'bagaimanakah': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                alpha.sendMessage(m.chat, {
                    text: `Pertanyaan : bagaimanakah ${q}\nJawaban : ${ya}`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'rate': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                alpha.sendMessage(m.chat, {
                    text: `Rate : rate buatlu ${q}\nJawaban : *${te}%*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'gantengcek':
            case 'cekganteng': {
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                alpha.sendMessage(m.chat, {
                    text: `Nama : ${command} ${q}\nJawaban : *${teng}%*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'cantikcek':
            case 'cekcantik': {
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                alpha.sendMessage(m.chat, {
                    text: `Nama : ${command} ${q}\nJawaban : *${tik}%*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                alpha.sendMessage(m.chat, {
                    text: `Nama : ${command} ${q}\nJawaban : *${sange}%*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'kapankah': {
                if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                alpha.sendMessage(m.chat, {
                    text: `Pertanyaan : kapankah ${q}\nJawaban : *${kapankah}*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'wangy': {
                if (!q) return reply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                reply(awikwok)
                }
                break
            case 'cekmati': {
                if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                }
                break
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) return `Kirim/reply text dengan caption ${prefix + command}`
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
                break
						case 'runtime': case 'speed':{
						reply(`Runtime : ${runtime(process.uptime())}`)
						}
						break
						case 'antilinkall': {
							if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
							if (!isBotAdmins) return reply(`Bot Bukan Admin`)
							if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
							if (args[0] === "on") {
								if (AntiLinkAll) return reply('Already activated')
								ntilinkall.push(from)
								fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
								reply('Success in turning on all antilink in this group')
								var groupe = await alpha.groupMetadata(from)
								var members = groupe['participants']
								var mems = []
								members.map(async adm => {
									mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
									})
									alpha.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
									} else if (args[0] === "off") {
										if (!AntiLinkAll) return reply('Already deactivated')
										let off = ntilinkall.indexOf(from)
										ntilinkall.splice(off, 1)
										fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
										reply('Success in turning off all antilink in this group')
										} else {
											reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
											}
											}
											break
case 'ytmp3': case 'ytaudio': {
	let { yta } = require('./lib/y2mate')
	if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
	let quality = args[1] ? args[1] : '128kbps'
	let media = await yta(text, quality)
	if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
	alpha.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '128kbps'}`, m)
	alpha.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
	let { ytv } = require('./lib/y2mate')
	if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
	let quality = args[1] ? args[1] : '360p'
	let media = await ytv(text, quality)
	if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
	alpha.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '360p'}` }, { quoted: m })
	}
	break
case 'pinterest':{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!text) return reply('Contoh Penggunaan : .pinterest SALSAOfc')
	let { pinterest } = require('./lib/scraper')
	anu = await pinterest(text)
	result = anu[Math.floor(Math.random(), anu.length)]
	alpha.sendMessage(m.chat, { image: { url: result }, caption: `Media Url : `+result }, { quoted: m })
	}
break
case 'bctext': case 'broadcasttext': case 'broadcast':
if (!isCreator) return reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
var data = await store.chats.all()
for (let i of data) {
	alpha.sendMessage(i.id, {text: `${namaowner}'s Broadcast\n\nMessage : ${q}` })
	await sleep(1000)
	}
	break
case 'toimage': case 'toimg': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!quoted) throw 'Reply image'
	if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
	reply("Sedang Di Proses")
	let media = await alpha.downloadAndSaveMediaMessage(quoted)
	let ran = await getRandom('.png')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		fs.unlinkSync(media)
		if (err) throw err
		let bufferimg13x = fs.readFileSync(ran)
		alpha.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
		fs.unlinkSync(ran)
		})
		}
		break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await alpha.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                alpha.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : fvn })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                }
                break
 
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker':{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
	if (/image/.test(mime)) {
		reply("Sedang Di Proses")
		let media = await quoted.download()
		let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
			if ((quoted.msg || quoted).seconds > 11) return reply('*Maximum 10 seconds!*')
			let media = await quoted.download()
			let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
			await fs.unlinkSync(encmedia)
			} else {
				reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
				}
				break
				case 'setnamabot': case 'setnamebot': {
					if (!text) throw `Contoh : ${prefix + command} WhatsApp ✅`
					let name = await alpha.updateProfileName(text)
					reply(`Successfully renamed bot to ${name}`)
					}
					break
case 'setstatus': case 'setbiobot': case 'setbotbio': {
	if (!text) throw `this is a WhatsApp Bot named SALSAOfc`
	let name = await alpha.updateProfileStatus(text)
	reply(`Successfully changed bot bio status to ${name}`)
	}
	break
case 'play': case 'ytplay':{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!text) throw `Contoh : ${prefix + command} anime whatsapp status`
	reply("Sedang Di Proses")
	let yts = require("youtube-yts")
	let search = await yts(text)
	let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
		caption = `
Title : ${anulay.title}
Ext : Search
ID : ${anulay.videoId}
Duration : ${anulay.timestamp}
Viewers : ${anulay.views}
Upload At : ${anulay.ago}
Author : ${anulay.author.name}
Channel : ${anulay.author.url}
Description : ${anulay.description}
Url : ${anulay.url}

Ketik ${prefix}ytmp4 ${anulay.url} Utk video
Ketik ${prefix}ytmp3 ${anulay.url} Utk audio`
reply(caption)
}
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	let { TelegraPh } = require('./lib/uploader')
	if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
	reply("Sedang Di Proses")
	mee = await alpha.downloadAndSaveMediaMessage(quoted)
	mem = await TelegraPh(mee)
	meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
	memek = await alpha.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
	await fs.unlinkSync(memek)
	}
	break
case 'emojimix': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	let [emoji1, emoji2] = text.split`+`
	if (!emoji1) throw `Contoh : ${prefix + command} 😅+🤔`
	if (!emoji2) throw `Contoh : ${prefix + command} 😅+🤔`
	let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anumojimix.results) {
		let encmedia = await alpha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		await fs.unlinkSync(encmedia)
		}
		}
		break
		case 'emojimix2': {
			if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
			if (!text) throw `Contoh : ${prefix + command} 😅`
			let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
			for (let res of anumix2.results) {
				let encmedia= await alpha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				await fs.unlinkSync(encmedia)
				}
				}
				break
case 'assalamualaikum':{
	reply(`Waalaikumsalam`)
	}
	break
case 'broadcastvid': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':{
if (!isCreator) return reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
let getGroups = await alpha.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let xeoncast = groups.map(v => v.id)
reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
for (let i of xeoncast) {
	let txt = `${namaowner}'s Broadcast\n\nMessage : ${text}`
	if(/image/.test(mime)) {
		let media = await quoted.download()
		await alpha.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
		}
		if(/video/.test(mime)){
			let media = await quoted.download()
			await alpha.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
			}
			}
			reply(`Sukses Broadcast in ${xeoncast.length} Groups`)      
			}
			break
case 'tagall': {
	if (!m.isGroup) return reply('Fitur Khusus Group!')
	if (!isAdmins) return reply('Fitur Khusus admin!')
	if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
	let teks = `╚» Tag All «╝ 
	
🌿 *Message : ${q ? q : 'empty'}*\n\n`
	for (let mem of participants) {
		teks += `@${mem.id.split('@')[0]}\n`
		}
		alpha.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
		}
		break
case 'mediafire': {
	if (!text) throw `Mana Link Nya ?`
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
	const result4 = `*MEDIAFIRE DOWNLOADER*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
alpha.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'igphoto':
case 'instaphoto':
case 'instafoto':
case 'igfoto':
case "ig":
case "igdl":{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
	if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
	reply("Sedang Di Proses")
	let res = await fetch(global.api('alfa', '/api/downloader/instagram-photo', {url: args[0]}, 'apikey'))
	if (!res.ok) throw await res.text()
	var result = await res.json()
	var result = result.result
	for(let i of result.url){
		alpha.sendFile(m.chat, i, 'ig.jpg', `DONE ✅`, m)
		}
		}
		case 'igvideo':
		case 'igvidio':
		case 'igvid':
		case 'instavideo':
		case 'instavid':
		case 'igreels':
		case 'instareels':
		case 'instareel':{
			if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
			if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
			if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
			reply("Sedang Di Proses")
			let res = await fetch(global.api('alfa', '/api/downloader/instagram-video', {url: args[0]}, 'apikey'))
			if (!res.ok) throw await res.text()
			var result = await res.json()
			var result = result.result
			for(let i of result.url){
				alpha.sendFile(m.chat, i, 'ig.mp4', `DONE ✅`, m)
				}
				}
				break
				case 'china':
				case 'indonesia':
				case 'malaysia':
				case 'thailand':
				case 'korea':
				case 'japan':
				case 'vietnam':
				case 'jenni':
				case 'jiiso':
				case 'lisa':
				case 'rose': {
					if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
					reply("Sedang Di Proses")
					let res = await fetch(global.api('alfa', '/api/cecan/' + command, {}, 'apikey'))
					if (!res.ok) throw await res.text()
					let img = await res.buffer()
					alpha.sendFile(m.chat, img, 'cecan.jpg', `CANTIK KAN BANG ISTRI KITA ?`, m)
				}
				break
				case "tebakgambar":{
					if (tebakgambar[m.chat]) return alpha.sendMessage(m.chat, {
					text: "Soal ini belum selesai"
					}, {
						quoted: tebakgambar[m.chat][0]
					})
					var res = await fetch(api('alfa', '/api/game/' + command, {}, 'apikey'))
					if(!res.ok) throw res.text()
					var result = await res.json()
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
					await alpha.sendMessage(m.chat, {image:{url: result.img}, caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`},{quoted: m}
					), result, 4999,
					setTimeout(() => {
					if (tebakgambar[m.chat]) {
									reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebakgambar untuk bermain lagi!")
								delete tebakgambar[m.chat]
							}
						}, 120000)
					]
				}
				break
				case 'tega': {
					if (!(m.chat in tebakgambar)) return
					let json = tebakgambar[m.chat][1]
					alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '� ' + reply, '.ytega', 'Dahlah Nyerah Aja', m)
				}
				case 'ytega': {
					if (!(m.chat in tebakgambar)) return
					clearTimeout(tebakgambar[m.chat][3])
					delete tebakgambar[m.chat]
					return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakgambar', 'Soal baru', m)
				}
				break
				case "tebakkata":{
					if (tebakkata[m.chat]) return alpha.sendMessage(m.chat, {
						text: "Soal ini belum selesai"
						}, {
							quoted: tebakkata[m.chat][0]
							})
							var anu = await fetch(api('alfa', '/api/game/tebakkata', {}, 'apikey'))
							if(!anu.ok) throw anu.text()
							var result = await anu.json()
							var result = result.result
							console.log("Jawaban: " + result.jawaban)
							tebakkata[m.chat] = [
							await alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
							setTimeout(() => {
								if (tebakkata[m.chat]) {
									reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebakkata untuk bermain lagi!")
									delete tebakkata[m.chat]
									}
								}, 120000)
							]
						}
						break
						case 'teka': {
							if (!(m.chat in tebakkata)) return
							let json = tebakkata[m.chat][1]
							reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
						}
						break
						case 'yteka': {
							if (!(m.chat in tebakkata)) return
							clearTimeout(tebakkata[m.chat][3])
							delete tebakkata[m.chat]
							return reply("Payah lu, gitu aja nyerah")
						}
						break
						case "tebakbendera": {
							if (tebakbendera[m.chat]) return alpha.sendMessage(m.chat, {
								text: "Soal ini belum selesai"
								}, {
									quoted: tebakbendera[m.chat][0]
									})
									var anu = await fetch(api('alfa', '/api/game/tebakbendera', {}, 'apikey'))
									if (!anu.ok) throw anu.text()
									var result = await anu.json()
									var result = result.result
									console.log("Jawaban: " + result.name)
									tebakbendera[m.chat] = [
									await alpha.sendMessage(m.chat, {
										image: {
											url: result.img
											},
											caption: `Gamabar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
											}, {
												quoted: m
												}),
												result, 4999,
												setTimeout(() => {
													if (tebakbendera[m.chat]) {
														reply(waktuHabis(result.name) + "\n\nkirim perintah .tebakbendera untuk bermain lagi!")
														delete tebakbendera[m.chat]
													}
												}, 120000)
											]
										}
							break
							case 'tebe': {
								if (!(m.chat in tebakbendera)) return
								let json = tebakbendera[m.chat][1]
								reply(m.chat, '```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytebe', 'Dahlah Nyerah Aja', m)
						}
						break
						case 'ytebe': {
							if (!(m.chat in tebakbendera)) return
							clearTimeout(tebakbendera[m.chat][3])
							delete tebakbendera[m.chat]
							return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakbendera', 'Soal baru', m)
						}
						break
case'qc2': case 'quotely':
                     if (!text) return m.reply(`Kirim perintah *${prefix}qc* teks`)
                     let jsonnya = {
                     type: "quoted",
                     format: "webp",
                     backgroundColor: apiColor,
                     width: 768,
                     height: 768,
                     scale: 2,
                     messages: [
                   {
                   entities: [],
                   avatar: true,
                   from: {
                     id: 1,
                     name: pushname,
                    photo: {
                      url: await alpha.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
                     }
                     },
                     text: text,
                     replyMessage: {},
                     },
                   ],
                 }
                 const post = await axios.post("https://bot.lyo.su/quote/generate",
                  jsonnya,{
                    headers: { "Content-Type": "application/json"},
                  })
                  let buff = await Buffer.from(post.data.result.image, "base64")
                  if (buff == undefined) return reply('error')
                  alpha.sendImageAsSticker(m.chat, buff, mek, { packname, author })
						
                  /**alpha.sendMessage(m.chat, {
				image: buff,
				caption: `*© TioXd*`
			}, {
				quoted: floc2
			})**/
	
			break
            case'qc': {
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await alpha.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            m.reply(mess.wait)
            alpha.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
                    case 'totalfitur':
                    case 'fitur': {
                    let anu = `Total Fitur ${namabot} Adalah ${totalFitur()}`
                    alpha.sendMessage(m.chat, { image: thumb, caption: anu }, { qouted: fkontak })
                    }
                    break
                    case 'tohd':
                    case 'remini': {
                    if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    m.reply(mess.wait)
                    const media = await alpha.downloadAndSaveMediaMessage(quoted)
                    const { TelegraPh } = require('./lib/uploader')
                    const anu = await TelegraPh(media)
                    await 
                    alpha.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=${lolhuman}&img=${anu}` }, caption: mess.done }, { quoted: m})
                    }
                    break
case 'caklontong': { 
	if (caklontong[m.chat]) return alpha.sendMessage(m.chat, {
		text: "Soal ini belum selesai"
		}, {
			quoted: caklontong[m.chat][0]
			})
			var anu = await fetch(api('alfa', '/api/game/caklontong', {}, 'apikey'))
			if(!anu.ok) throw anu.text()
			var result = await anu.json()
			var result = result.result
			console.log("Jawaban: " + result.jawaban)
			caklontong[m.chat] = [
			await alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
			setTimeout(() => {
				if (caklontong[m.chat]) {
					reply(waktuHabis(result.jawaban + '\n' + result.deskripsi) + "\n\nkirim perintah .caklontong untuk bermain lagi!")
					    delete caklontong[m.chat]
						}
					}, 120000)
				]
			}
			break
			case 'telo': {
				if (!(m.chat in caklontong)) return
				let json = caklontong[m.chat][1]
				reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytelo', 'Dahlah Nyerah Aja', m)
			}
			break
			case 'ytelo': {
				if (!(m.chat in caklontong)) return
				clearTimeout(caklontong[m.chat][3])
				delete caklontong[m.chat]
				return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.caklontong', 'Soal baru', m)
			}
			break
			case 'susunkata': {
				if (susunkata[m.chat]) return alpha.sendMessage(m.chat, {
					text: "Soal ini belum selesai"
					}, {
						quoted: susunkata[m.chat][0]
						})
						var anu = await fetch(api('alfa', '/api/game/susunkata', {}, 'apikey'))
						if(!anu.ok) throw anu.text()
						var result = await anu.json()
						var result = result.result
						console.log("Jawaban: " + result.jawaban)
						susunkata[m.chat] = [
						await alpha.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
						setTimeout(() => {
							if (susunkata[m.chat]) {
								reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .susunkata untuk bermain lagi!")
								delete susunkata[m.chat]
								}
							}, 120000)
						]
					}
					break
					case 'tesuka': {
						if (!(m.chat in susunkata)) return
						let json = susunkata[m.chat][1]
						reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytesuka', 'Dahlah Nyerah Aja', m)
					}
					break
					case 'ytesuka': {
						if (!(m.chat in susunkata)) return
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.susunkata', 'Soal baru', m)
					}
					break
					case 'tebakkalimat': {
						if (tebakkalimat[m.chat]) return alpha.sendMessage(m.chat, {
							text: "Soal ini belum selesai"
							}, {
								quoted: tebakkalimat[m.chat][0]
								})
								var anu = await fetch(api('alfa', '/api/game/tebakkalimat', {}, 'apikey'))
								if(!anu.ok) throw anu.text()
								var result = await anu.json()
								var result = result.result
								console.log("Jawaban: " + result.jawaban)
								tebakkalimat[m.chat] = [
								await alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
								setTimeout(() => {
									if (tebakkalimat[m.chat]) {
										reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebakkalimat untuk bermain lagi!")
											delete tebakkalimat[m.chat]
										}
									}, 120000)
								]
							}
							break
							case 'tekatu': {
								if (!(m.chat in tebakkalimat)) return
								let json = tebakkalimat[m.chat][1]
								reply(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', footer_text, '.ytekatu', 'Dahlah Nyerah Aja', m)
							}
							break
							case 'ytekatu': {
								if (!(m.chat in tebakkalimat)) return
								clearTimeout(tebakkalimat[m.chat][3])
								delete tebakkalimat[m.chat]
								return reply(m.chat, 'Payah lu, gitu aja nyerah', footer_text, '.tebakkalimat', 'Soal baru', m)
							}
							case 'tebaksiapa': {
								if (siapaaku[m.chat]) return alpha.sendMessage(m.chat, {
									text: "Soal ini belum selesai"
									}, {
										quoted: siapaaku[m.chat][0]
										})
										var anu = await fetch(api('alfa', '/api/game/siapakahaku', {}, 'apikey'))
										if (!anu.ok) throw anu.text()
										var result = await anu.json()
										var result = result.result
										console.log("Jawaban: " + result.jawaban)
										siapaaku[m.chat] = [
										await alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 4999,
										setTimeout(() => {
											if (siapaaku[m.chat]) {
												reply(waktuHabis(result.jawaban) + "\n\nkirim perintah .tebaksiapa untuk bermain lagi!")
												delete siapaaku[m.chat]
											}
										}, 120000)
									]
							}
							break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return reply(`Example : ${prefix+command} alphaBOTz`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
alpha.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!q) return reply(`Example : ${prefix+command} alphaBOtz`) 
reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
alpha.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'cerpen_anak': {
reply(mess.wait)
let cerpe = await cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen_bahasadaerah':{
reply(mess.wait)
let cerpet = await cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpet.title}\n⭔ _*Author :*_ ${cerpet.author}\n⭔ _*Category :*_ ${cerpet.kategori}\n⭔ _*Pass Moderation :*_ ${cerpet.lolos}\n⭔ _*Story :*_\n${cerpet.cerita}`)
}
break
case 'cerpen_bahasainggris':{
reply(mess.wait)
let cerpez = await cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpez.title}\n⭔ _*Author :*_ ${cerpez.author}\n⭔ _*Category :*_ ${cerpez.kategori}\n⭔ _*Pass Moderation :*_ ${cerpez.lolos}\n⭔ _*Story :*_\n${cerpez.cerita}`)
}
break
case 'cerpen_bahasajawa':{
reply(mess.wait)
let cerpep = await cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpep.title}\n⭔ _*Author :*_ ${cerpep.author}\n⭔ _*Category :*_ ${cerpep.kategori}\n⭔ _*Pass Moderation :*_ ${cerpep.lolos}\n⭔ _*Story :*_\n${cerpep.cerita}`)
}
break
case 'cerpen_bahasasunda':{
reply(mess.wait)
let cerped = await cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerped.title}\n⭔ _*Author :*_ ${cerped.author}\n⭔ _*Category :*_ ${cerped.kategori}\n⭔ _*Pass Moderation :*_ ${cerped.lolos}\n⭔ _*Story :*_\n${cerped.cerita}`)
}
break
case 'cerpen_budaya':{
reply(mess.wait)
let cerper = await cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerper.title}\n⭔ _*Author :*_ ${cerper.author}\n⭔ _*Category :*_ ${cerper.kategori}\n⭔ _*Pass Moderation :*_ ${cerper.lolos}\n⭔ _*Story :*_\n${cerper.cerita}`)
}
break
case 'cerpen_cinta':{
reply(mess.wait)
let cerpem = await cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpem.title}\n⭔ _*Author :*_ ${cerpem.author}\n⭔ _*Category :*_ ${cerpem.kategori}\n⭔ _*Pass Moderation :*_ ${cerpem.lolos}\n⭔ _*Story :*_\n${cerpem.cerita}`)
}
break
case 'cerpen_cintaislami':{
reply(mess.wait)
let cerpel = await cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpel.title}\n⭔ _*Author :*_ ${cerpel.author}\n⭔ _*Category :*_ ${cerpel.kategori}\n⭔ _*Pass Moderation :*_ ${cerpel.lolos}\n⭔ _*Story :*_\n${cerpel.cerita}`)
}
break
case 'cerpen_cintapertama':{
reply(mess.wait)
let cerpes = await cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpes.title}\n⭔ _*Author :*_ ${cerpes.author}\n⭔ _*Category :*_ ${cerpes.kategori}\n⭔ _*Pass Moderation :*_ ${cerpes.lolos}\n⭔ _*Story :*_\n${cerpes.cerita}`)
}
break
case 'cerpen_cintaromantis':{
reply(mess.wait)
let cerpde = await cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpde.title}\n⭔ _*Author :*_ ${cerpde.author}\n⭔ _*Category :*_ ${cerpde.kategori}\n⭔ _*Pass Moderation :*_ ${cerpde.lolos}\n⭔ _*Story :*_\n${cerpde.cerita}`)
}
break
case 'cerpen_cintasedih':{
reply(mess.wait)
let fejdj = await cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${fejdj.title}\n⭔ _*Author :*_ ${fejdj.author}\n⭔ _*Category :*_ ${fejdj.kategori}\n⭔ _*Pass Moderation :*_ ${fejdj.lolos}\n⭔ _*Story :*_\n${fejdj.cerita}`)
}
break
case 'cerpen_cintasegitiga':{
reply(mess.wait)
let frofk = await cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${frofk.title}\n⭔ _*Author :*_ ${frofk.author}\n⭔ _*Category :*_ ${frofk.kategori}\n⭔ _*Pass Moderation :*_ ${frofk.lolos}\n⭔ _*Story :*_\n${frofk.cerita}`)
}
break
case 'cerpen_cintasejati':{
reply(mess.wait)
let frljkek = await cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${frljkek.title}\n⭔ _*Author :*_ ${frljkek.author}\n⭔ _*Category :*_ ${frljkek.kategori}\n⭔ _*Pass Moderation :*_ ${frljkek.lolos}\n⭔ _*Story :*_\n${frljkek.cerita}`)
}
break
case 'cerpen_galau':{
reply(mess.wait)
let cdjfj = await cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cdjfj.title}\n⭔ _*Author :*_ ${cdjfj.author}\n⭔ _*Category :*_ ${cdjfj.kategori}\n⭔ _*Pass Moderation :*_ ${cdjfj.lolos}\n⭔ _*Story :*_\n${cdjfj.cerita}`)
}
break
case 'cerpen_gokil':{
reply(mess.wait)
let vrkfjf = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${vrkfjf.title}\n⭔ _*Author :*_ ${vrkfjf.author}\n⭔ _*Category :*_ ${vrkfjf.kategori}\n⭔ _*Pass Moderation :*_ ${vrkfjf.lolos}\n⭔ _*Story :*_\n${vrkfjf.cerita}`)
}
break
case 'cerpen_inspiratif':{
reply(mess.wait)
let ngkgk = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${ngkgk.title}\n⭔ _*Author :*_ ${ngkgk.author}\n⭔ _*Category :*_ ${ngkgk.kategori}\n⭔ _*Pass Moderation :*_ ${ngkgk.lolos}\n⭔ _*Story :*_\n${ngkgk.cerita}`)
}
break
case 'cerpen_jepang':{
reply(mess.wait)
let vrlgk = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${vrlgk.title}\n⭔ _*Author :*_ ${vrlgk.author}\n⭔ _*Category :*_ ${vrlgk.kategori}\n⭔ _*Pass Moderation :*_ ${vrlgk.lolos}\n⭔ _*Story :*_\n${vrlgk.cerita}`)
}
break
case 'cerpen_kehidupan':{
reply(mess.wait)
let ntlgkt = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${ntlgkt.title}\n⭔ _*Author :*_ ${ntlgkt.author}\n⭔ _*Category :*_ ${ntlgkt.kategori}\n⭔ _*Pass Moderation :*_ ${ntlgkt.lolos}\n⭔ _*Story :*_\n${ntlgkt.cerita}`)
}
break
case 'cerpen_keluarga':{
reply(mess.wait)
let bmflg = await cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${bmflg.title}\n⭔ _*Author :*_ ${bmflg.author}\n⭔ _*Category :*_ ${bmflg.kategori}\n⭔ _*Pass Moderation :*_ ${bmflg.lolos}\n⭔ _*Story :*_\n${bmflg.cerita}`)
}
break
case 'cerpen_kisahnyata':{
reply(mess.wait)
let yptoo = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${yptoo.title}\n⭔ _*Author :*_ ${yptoo.author}\n⭔ _*Category :*_ ${yptoo.kategori}\n⭔ _*Pass Moderation :*_ ${yptoo.lolos}\n⭔ _*Story :*_\n${yptoo.cerita}`)
}
break
case 'cerpen_korea':{
reply(mess.wait)
let jptpgr = await cerpen(`korea`)
reply(`⭔ _*Title :*_ ${jptpgr.title}\n⭔ _*Author :*_ ${jptpgr.author}\n⭔ _*Category :*_ ${jptpgr.kategori}\n⭔ _*Pass Moderation :*_ ${jptpgr.lolos}\n⭔ _*Story :*_\n${jptpgr.cerita}`)
}
break
case 'cerpen_kristen':{
reply(mess.wait)
let yesusanjing = await cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${yesusanjing.title}\n⭔ _*Author :*_ ${yesusanjing.author}\n⭔ _*Category :*_ ${yesusanjing.kategori}\n⭔ _*Pass Moderation :*_ ${yesusanjing.lolos}\n⭔ _*Story :*_\n${yesusanjing.cerita}`)
}
break
case 'cerpen_liburan':{
reply(mess.wait)
let frkfkrk = await cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${frkfkrk.title}\n⭔ _*Author :*_ ${frkfkrk.author}\n⭔ _*Category :*_ ${frkfkrk.kategori}\n⭔ _*Pass Moderation :*_ ${frkfkrk.lolos}\n⭔ _*Story :*_\n${frkfkrk.cerita}`)
}
break
case 'cerpen_malaysia':{
reply(mess.wait)
let mzbdjd = await cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${mzbdjd.title}\n⭔ _*Author :*_ ${mzbdjd.author}\n⭔ _*Category :*_ ${mzbdjd.kategori}\n⭔ _*Pass Moderation :*_ ${mzbdjd.lolos}\n⭔ _*Story :*_\n${mzbdjd.cerita}`)
}
break
case 'cerpen_mengharukan':{
reply(mess.wait)
let bgfngk = await cerpen(`mengharukan`)
reply(`⭔ _*Title :*_ ${bgfngk.title}\n⭔ _*Author :*_ ${bgfngk.author}\n⭔ _*Category :*_ ${bgfngk.kategori}\n⭔ _*Pass Moderation :*_ ${bgfngk.lolos}\n⭔ _*Story :*_\n${bgfngk.cerita}`)
}
break
case 'cerpen_misteri':{
reply(mess.wait)
let lapdoek = await cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${lapdoek.title}\n⭔ _*Author :*_ ${lapdoek.author}\n⭔ _*Category :*_ ${lapdoek.kategori}\n⭔ _*Pass Moderation :*_ ${lapdoek.lolos}\n⭔ _*Story :*_\n${lapdoek.cerita}`)
}
break
case 'cerpen_motivasi':{
reply(mess.wait)
let bltkyj = await cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${bltkyj.title}\n⭔ _*Author :*_ ${bltkyj.author}\n⭔ _*Category :*_ ${bltkyj.kategori}\n⭔ _*Pass Moderation :*_ ${bltkyj.lolos}\n⭔ _*Story :*_\n${bltkyj.cerita}`)
}
break
case 'cerpen_nasihat':{
reply(mess.wait)
let qpeidek = await cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${qpeidek.title}\n⭔ _*Author :*_ ${qpeidek.author}\n⭔ _*Category :*_ ${qpeidek.kategori}\n⭔ _*Pass Moderation :*_ ${qpeidek.lolos}\n⭔ _*Story :*_\n${qpeidek.cerita}`)
}
break
case 'cerpen_nasionalisme':{
reply(mess.wait)
let cdmrgo = await cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cdmrgo.title}\n⭔ _*Author :*_ ${cdmrgo.author}\n⭔ _*Category :*_ ${cdmrgo.kategori}\n⭔ _*Pass Moderation :*_ ${cdmrgo.lolos}\n⭔ _*Story :*_\n${cdmrgo.cerita}`)
}
break
case 'cerpen_olahraga':{
reply(mess.wait)
let qpdiek = await cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${qpdiek.title}\n⭔ _*Author :*_ ${qpdiek.author}\n⭔ _*Category :*_ ${qpdiek.kategori}\n⭔ _*Pass Moderation :*_ ${qpdiek.lolos}\n⭔ _*Story :*_\n${qpdiek.cerita}`)
}
break
case 'cerpen_patahhati':{
reply(mess.wait)
let vrlfor = await cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${vrlfor.title}\n⭔ _*Author :*_ ${vrlfor.author}\n⭔ _*Category :*_ ${vrlfor.kategori}\n⭔ _*Pass Moderation :*_ ${vrlfor.lolos}\n⭔ _*Story :*_\n${vrlfor.cerita}`)
}
break
case 'cerpen_penantian':{
reply(mess.wait)
let aldpek = await cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${aldpek.title}\n⭔ _*Author :*_ ${aldpek.author}\n⭔ _*Category :*_ ${aldpek.kategori}\n⭔ _*Pass Moderation :*_ ${aldpek.lolos}\n⭔ _*Story :*_\n${aldpek.cerita}`)
}
break
case 'cerpen_pendidikan':{
reply(mess.wait)
let xnrjrk = await cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${xnrjrk.title}\n⭔ _*Author :*_ ${xnrjrk.author}\n⭔ _*Category :*_ ${xnrjrk.kategori}\n⭔ _*Pass Moderation :*_ ${xnrjrk.lolos}\n⭔ _*Story :*_\n${xnrjrk.cerita}`)
}
break
case 'cerpen_pengalaman':{
reply(mess.wait)
let hrkgor = await cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${hrkgor.title}\n⭔ _*Author :*_ ${hrkgor.author}\n⭔ _*Category :*_ ${hrkgor.kategori}\n⭔ _*Pass Moderation :*_ ${hrkgor.lolos}\n⭔ _*Story :*_\n${hrkgor.cerita}`)
}
break
case 'cerpen_pengorbanan':{
reply(mess.wait)
let itklog = await cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${itklog.title}\n⭔ _*Author :*_ ${itklog.author}\n⭔ _*Category :*_ ${itklog.kategori}\n⭔ _*Pass Moderation :*_ ${itklog.lolos}\n⭔ _*Story :*_\n${itklog.cerita}`)
}
break
case 'cerpen_penyesalan':{
reply(mess.wait)
let pgrjgo = await cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${pgrjgo.title}\n⭔ _*Author :*_ ${pgrjgo.author}\n⭔ _*Category :*_ ${pgrjgo.kategori}\n⭔ _*Pass Moderation :*_ ${pgrjgo.lolos}\n⭔ _*Story :*_\n${pgrjgo.cerita}`)
}
break
case 'cerpen_perjuangan':{
reply(mess.wait)
let vtlgotk = await cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${vtlgotk.title}\n⭔ _*Author :*_ ${vtlgotk.author}\n⭔ _*Category :*_ ${vtlgotk.kategori}\n⭔ _*Pass Moderation :*_ ${vtlgotk.lolos}\n⭔ _*Story :*_\n${vtlgotk.cerita}`)
}
break
case 'cerpen_perpisahan':{
reply(mess.wait)
let wpfuej = await cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${wpfuej.title}\n⭔ _*Author :*_ ${wpfuej.author}\n⭔ _*Category :*_ ${wpfuej.kategori}\n⭔ _*Pass Moderation :*_ ${wpfuej.lolos}\n⭔ _*Story :*_\n${wpfuej.cerita}`)
}
break
case 'cerpen_persahabatan':{
reply(mess.wait)
let jptoyk = await cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${jptoyk.title}\n⭔ _*Author :*_ ${jptoyk.author}\n⭔ _*Category :*_ ${jptoyk.kategori}\n⭔ _*Pass Moderation :*_ ${jptoyk.lolos}\n⭔ _*Story :*_\n${jptoyk.cerita}`)
}
break
case 'cerpen_petualangan':{
reply(mess.wait)
let qwers = await cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${qwers.title}\n⭔ _*Author :*_ ${qwers.author}\n⭔ _*Category :*_ ${qwers.kategori}\n⭔ _*Pass Moderation :*_ ${qwers.lolos}\n⭔ _*Story :*_\n${qwers.cerita}`)
}
break
case 'cerpen_ramadhan':{
reply(mess.wait)
let vrmfkk = await cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${vrmfkk.title}\n⭔ _*Author :*_ ${vrmfkk.author}\n⭔ _*Category :*_ ${vrmfkk.kategori}\n⭔ _*Pass Moderation :*_ ${vrmfkk.lolos}\n⭔ _*Story :*_\n${vrmfkk.cerita}`)
}
break
case 'cerpen_remaja':{
reply(mess.wait)
let vhptotk = await cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${vhptotk.title}\n⭔ _*Author :*_ ${vhptotk.author}\n⭔ _*Category :*_ ${vhptotk.kategori}\n⭔ _*Pass Moderation :*_ ${vhptotk.lolos}\n⭔ _*Story :*_\n${vhptotk.cerita}`)
}
break
case 'cerpen_rindu':{
reply(mess.wait)
let hptotlltk = await cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${hptotlltk.title}\n⭔ _*Author :*_ ${hptotlltk.author}\n⭔ _*Category :*_ ${hptotlltk.kategori}\n⭔ _*Pass Moderation :*_ ${hptotlltk.lolos}\n⭔ _*Story :*_\n${hptotlltk.cerita}`)
}
break
case 'cerpen_rohani':{
reply(mess.wait)
let zaldjdws = await cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${zaldjdws.title}\n⭔ _*Author :*_ ${zaldjdws.author}\n⭔ _*Category :*_ ${zaldjdws.kategori}\n⭔ _*Pass Moderation :*_ ${zaldjdws.lolos}\n⭔ _*Story :*_\n${zaldjdws.cerita}`)
}
break
case 'cerpen_romantis':{
reply(mess.wait)
let lxprhrh = await cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${lxprhrh.title}\n⭔ _*Author :*_ ${lxprhrh.author}\n⭔ _*Category :*_ ${lxprhrh.kategori}\n⭔ _*Pass Moderation :*_ ${lxprhrh.lolos}\n⭔ _*Story :*_\n${lxprhrh.cerita}`)
}
break
case 'cerpen_sastra':{
reply(mess.wait)
let qpifker = await cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${qpifker.title}\n⭔ _*Author :*_ ${qpifker.author}\n⭔ _*Category :*_ ${qpifker.kategori}\n⭔ _*Pass Moderation :*_ ${qpifker.lolos}\n⭔ _*Story :*_\n${qpifker.cerita}`)
}
break
case 'cerpen_sedih':{
reply(mess.wait)
let bmflgkjt = await cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${bmflgkjt.title}\n⭔ _*Author :*_ ${bmflgkjt.author}\n⭔ _*Category :*_ ${bmflgkjt.kategori}\n⭔ _*Pass Moderation :*_ ${bmflgkjt.lolos}\n⭔ _*Story :*_\n${bmflgkjt.cerita}`)
}
break
case 'cerpen_sejarah':{
reply(mess.wait)
let xwpwifj = await cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${xwpwifj.title}\n⭔ _*Author :*_ ${xwpwifj.author}\n⭔ _*Category :*_ ${xwpwifj.kategori}\n⭔ _*Pass Moderation :*_ ${xwpwifj.lolos}\n⭔ _*Story :*_\n${xwpwifj.cerita}`)
}
break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return reply(`Contoh :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
alpha.downloadAndSaveMediaMessage(quoted, "gifee")
alpha.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'ahegao': case 'ass': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'eba': case 'ero': case 'femdom': case 'foot': case 'gangbang': case 'gifs': case 'glasses': case 'hentai': case 'jahy': case 'manga': case 'masturbation': case 'neko': case 'neko2': case 'nsfwloli': case 'orgy': case 'panties': case 'pussy': case 'tentacles': case 'thighs': case 'yuri': case 'zettai': {
reply(mess.wait)
let heyy = require(`./scraper/nsfw/${command}.json`)
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
alpha.sendImage(m.chat, yeha,'jangan lupa sama dosanya ya kak yang sudah banyak hehe', m)
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
alpha.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'caridoi':
case 'cariteman':
if (!isGroup) return reply(mess.group)
let teman = pickRandom(isGroup)
setTimeout(() => {
reply('Sedang Mencari....')
}, 1000)
setTimeout(() => {
reply('Berhasil Mendapatkan Satu Orang')
}, 5000)
setTimeout(() => {
alpha.sendMessage(m.chat, {text: `Nih Kak @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
break
case "wuyifan":
case "suga":
case "parkchanyeol":
case "ohsehun":
case "luhan":
case "kimtaehyung":
case "kimseok":
case "kimnanjoon":
case "kimminseok":
case "kimjunmyeon":
case "kimjong":
case "kimjondae":
case "jungkook":
case "jimin":
case "jhope":
case "huangzitao":
case "dohkyungsoo":
case "baekhyung": {
/*	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	reply("Sedang Di Proses")
	let res = await fetch(global.api('alfa', '/api/cogan/' + command, {}, 'apikey'))
	if (!res.ok) throw await res.text()
	let img = await res.buffer()
	alpha.sendFile(m.chat, img, 'cogan.jpg', `GANTENG GA KA ?`, m)
	}
	break*/
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	let { pinterest } = require('./lib/scraper')
	anu = await pinterest(`${command}`)
	result = anu[Math.floor(Math.random(), anu.length)]
	alpha.sendMessage(m.chat, { image: { url: result }, caption: 'Ganteng ga kak?'}, { quoted: m })
	}
break
	case 'group': case 'grup': {
		if (!m.isGroup) return reply('Fitur Khusus Group!')
		if (!isAdmins) return reply('Fitur Khusus admin!')
		if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
		if (args[0] === 'close'){
			await alpha.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*Successfully Closed The Group*`)).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'open'){
				await alpha.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*Successfully Opened The Group*`)).catch((err) => reply(jsonformat(err)))
				} else {
					reply(`Kirim perintah ${prefix + command} open/close\n\nContoh: ${prefix + command} open`)
					}
					}
					break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
SALSA_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await alpha.sendMessage(m.chat, { audio: SALSA_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'horror':
            case 'game8bit':
            case 'layered':
            case 'glitch2':
            case 'cool-graffiti':
            case 'cool-wall-graffiti':
            case 'realistic':
            case 'space3d':
            case 'glitch-tiktok':
            case 'stone':
            case 'marvel':
            case 'marvel2':
            case "metal-rose-gold":
            case 'pornhub':
            case 'avengers':
            case 'metal-rainbow':
            case 'metal-gold':
            case 'metal-galaxy':
            case 'lion':
            case 'wolf-black-white':
            case 'wolf-galaxy':
            case 'ninja':
            case '3dsteel':
            case 'horror2':
            case 'lava':
            case 'bagel': {
            	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
            	if (!text) return reply(`Kirim perintah:\n${prefix+command} teks1|teks2\n\nContoh penggunaan:\n${prefix+command} SALSA|ofc`)
            if (!text.includes('|')) return reply(`Kirim perintah:\n${prefix+command} teks1|teks2\n\nContoh penggunaan:\n${prefix+command} SALSA|ofc`)
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply("Sedang Di Proses")
            let res = await fetch(global.api("alfa", '/api/textpro/' + command, {
            	text: m1,
            text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', 'DONE', m)
            }
            break
            case 'anticall': {
            	if (!m.key.fromMe && !isCreator) return reply("Fitur khusus owner!")
            if (args[0] === "on") {
            	if (global.anticall === true) return reply(`Sudah Di Aktifkan Sebelumnya`)
            global.anticall = true
            reply(`Berhasil Mengaktifkan Anticall`)
            } else if (args[0] === "off") {
            	if (global.anticall === false) return reply(`Sudah Di Nonaktifkan Sebelumnya`)
            global.anticall = false
            reply(`Sukses Nonaktifkan Anticall`)
            } else {
            	reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
            }
            break
            case 'nomerhoki': case 'nomorhoki': {
            	if (!Number(text)) throw `Contoh : ${prefix + command} 62895412691100`
            let anu = await primbon.nomer_hoki(Number(text))
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nomor HP :* ${anu.message.nomer_hp}\n *Angka Shuzi :* ${anu.message.angka_shuzi}\n *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            	if (!text) throw `Contoh : ${prefix + command} belanja`
            let anu = await primbon.tafsir_mimpi(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Mimpi :* ${anu.message.mimpi}\n *Arti :* ${anu.message.arti}\n *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama Suami :* ${anu.message.suami.nama}\n *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *Nama Istri :* ${anu.message.istri.nama}\n *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            	if (!text) throw `Contoh : ${prefix + command} Dika Ardianta`
            let anu = await primbon.arti_nama(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Life Path :* ${anu.message.life_path}\n *Destiny :* ${anu.message.destiny}\n *Destiny Desire :* ${anu.message.destiny_desire}\n *Personality :* ${anu.message.personality}\n *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	if (!text) throw `Contoh : ${prefix + command} Dika|Novia`
            let [nama1, nama2] = text.split`|`
            let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendImage(m.chat,  anu.message.gambar, ` *Nama Anda :* ${anu.message.nama_anda}\n *Nama Pasangan :* ${anu.message.nama_pasangan}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            	if (!text) throw `Contoh : ${prefix + command} 6, 12, 2020`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Tanggal Pernikahan :* ${anu.message.tanggal}\n *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            	if (!ext)throw `Contoh : ${prefix+ command} 28, 12, 2021`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Rezeki :* ${anu.message.rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Pekerjaan :* ${anu.message.pekerjaan}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	if (!text) throw `Contoh : 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.ramalan_nasib(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Angka Akar :* ${anu.message.angka_akar}\n *Sifat :* ${anu.message.sifat}\n *Elemen :* ${anu.message.elemen}\n *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Sektor :* ${anu.message.sektor}\n *Elemen :* ${anu.message.elemen}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendImage(m.chat, anu.message.image, ` *Lahir :* ${anu.message.tgl_lahir}\n *Simbol Tarot :* ${anu.message.simbol_tarot}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
            let [nama, gender, tahun] = text.split`,`
            let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tahun_lahir}\n *Gender :* ${anu.message.jenis_kelamin}\n *Angka Kua :* ${anu.message.angka_kua}\n *Kelompok :* ${anu.message.kelompok}\n *Karakter :* ${anu.message.karakter}\n *Sektor Baik :* ${anu.message.sektor_baik}\n *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.petung_hari_baik(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Kala Tinantang :* ${anu.message.kala_tinantang}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Hari Naas :* ${anu.message.hari_naas}\n *Info :* ${anu.message.catatan}\n *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Rezeki :* ${anu.message.arah_rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            	if (!text) throw `Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
            let [nama, tgl, bln, thn, untuk] = text.split`,`
            let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.weton_jawa(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Tanggal :* ${anu.message.tanggal}\n *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *Watak Hari :* ${anu.message.watak_hari}\n *Naga Hari :* ${anu.message.naga_hari}\n *Jam Baik :* ${anu.message.jam_baik}\n *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            	if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Tanggal :* ${anu.message.tgl_memancing}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            	if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
            let [tgl, bln, thn, siklus] = text.split`,`
            let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            	if (!text) throw `Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
            let anu = await primbon.shio(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, ` *Hasil :* ${anu.message}`, m)
            }
            break
            //Asupan
            case 'chika':
            case 'rikagusriani':
            case 'bocil':
            case 'geayubi':
            case 'santuy':
            case 'ukhty':
            case 'asupan':
            case 'delvira':
            case 'ayu':
            case 'bunga':
            case 'aura':
            case 'nisa':
            case 'ziva':
            case 'yana':
            case 'viona':
            case 'syania':
            case 'riri':
            case 'syifa':
            case 'mama-gina':
            case 'alcakenya':
            case 'mangayutri': {
            	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
            	reply("Sedang Di Proses")
            let res = await fetch(global.api('alfa', '/api/asupan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'asupan.mp4', 'DONE', m)
            }
            break
            case 'jodohku': {
            	if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Jodoh mu adalah

@${me.split('@')[0]}  @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
await alpha.sendMessage(m.chat, jawab, alpha.user.name, m, {mentions: ments})
}
break
case 'jadian': {
	if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
	let member = participants.map(u => u.id)
	let orang = member[Math.floor(Math.random() * member.length)]
	let jodoh = member[Math.floor(Math.random() * member.length)]
	let jawab = `Ciee yang Jadian Jangan lupa pajak jadiannya

@${orang.split('@')[0]}  @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
await alpha.sendMessage(m.chat, jawab, alpha.user.name, m, {mentions: menst})
}
break
case 'setexif': {
	if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
	if (!text) throw `Contoh : ${prefix + command} packname|author`
	global.packname = text.split("|")[0]
	global.author = text.split("|")[1]
	reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
	}
	break
	case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
	if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
	ter = command[1].toLowerCase()
	tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
	reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
	break
	case 'tiktok2':{ 
		if (!text) return reply( `Example : ${prefix + command} link`)
		if (!q.includes('tiktok')) return reply(`Link Tiktok Bukan Kayak Gtu Cuy !!`)
		reply("Sedang Di Proses")
		require('./lib/tiktok').Tiktok(q).then( data => {
			var button = [{ buttonId: `.tiktokaudio2 ${q}`, buttonText: { displayText: `AUDIO` }, type: 1 }, { buttonId: `.grubbot`, buttonText: { displayText: `GRUB BOT` }, type: 1 }]
			alpha.sendMessage(m.chat, { caption: `DONE!`, video: { url: data.watermark }, buttons: button, footer: namabot, mentions: [m.sender] })
			})
			}
			break
			// Fun Menu
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu':{
	if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
	let member = participants.map((u) => u.id)
	let org = member[Math.floor(Math.random() * member.length)]
	alpha.sendMessage(from, { text: `anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
	}
	break
	case 'goblok':
	case 'gblk':
	case 'kontol':
	case 'kntl':
	case 'kmtl':
	case 'ngtd':
	case 'ngentod':
	case 'ajg':
	case 'anjg':
	case 'anjing':
	case 'mmk':
	case 'memek':
	case 'meki':
	case 'puki':
	case 'jancok':
	case 'babi':
	case 'tolol':
	case 'yapit': 
	case 'yatim':
	case 'piatu':
	case 'bodoh':
	case 'tolol':
	case 'ngentot':
	case 'sange':
	case 'bangsat':
	case 'gblk':
	case 'goblok':
	case 'pantek':
	case 'pantex':
	case 'asu':
	case 'bego':
	case 'sangean':{
	alpha.sendMessage(m.chat, {audio: fs.readFileSync(gabolehtoxic), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
	}
	break
	
            default:
if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(util.format(err))
                    }
                }
       }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})