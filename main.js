let games = ["Minecraft","Terraria","Сапер"];
console.log(games);
let chisla = ["1","2","3","4","374","247","1653","989","686","339","649","65","35","23","14","457","14","1231","79","576S",];
console.log(chisla.length);
console.log(chisla);
console.log(chisla.filter(el => el.includes('3')));
chisla.push('666');
console.log(chisla);
for (let chto = 1; chto <= 100; chto++) {
    console.log(chisla[chto]);
}
chisla.pop();
console.log(chisla);
console.log(chisla.find(el => el.includes('6')))
