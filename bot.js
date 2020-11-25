require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const redCard =
	'https://media1.giphy.com/media/3o7qE0gOGwzPbH81Qk/giphy.gif?cid=ecf05e470a7ctdtwpnfyimhfca9emgb30uqp6cqbhjs3dmi1&rid=giphy.gif';
const nice =
	'https://media2.giphy.com/media/sz9y5TVbMOiwE/giphy.gif?cid=ecf05e47vzkeiqvjh6nat2u9w1gzttnt1fqevgocvz04d44w&rid=giphy.gif';

const yesOrNo = () => {
	const ran = Math.floor(Math.random() * 2);
	return ran === 1 ? true : false;
};

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
	if (msg.content.toLowerCase().startsWith('var')) {
		const firstEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Calculando resultado....')
			.setAuthor('Var bot')
			.setImage(
				'https://media4.giphy.com/media/d5FbeKADxF3CSf7y1L/giphy.gif?cid=ecf05e476qt33j6ha61mvtqayq5sn156l636eu8ji1xegt7k&rid=giphy.gif'
			)
			.setTimestamp()
			.setFooter('Hecho por Himar');

		const firstMessage = await msg.channel.send(firstEmbed);

		setTimeout(() => {
			const res = yesOrNo();
			const secondEmbed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle('Resultado Calculado.')
				.setAuthor('Var bot')
				.addFields({
					name: res ? 'La respuesta es SI.' : 'La respuesta es NO.',
					value: res ? 'Enhorabuena crack.' : 'Casi jefe.',
				})
				.setImage(res ? nice : redCard)
				.setTimestamp()
				.setFooter('Hecho por Himar');

			firstMessage.edit(secondEmbed);
		}, 2000);
	}
});

client.login(process.env.BOT_TOKEN);
