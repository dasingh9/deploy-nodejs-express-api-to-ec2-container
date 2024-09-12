// Sample data for games. 
// Note: The real api application will store data to a database instead of temporary variable
let games = [
    {
        "id": 540,
        "title": "Overwatch 2",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/540\/thumbnail.jpg",
        "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
        "game_url": "https:\/\/www.freetogame.com\/open\/overwatch-2",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Activision Blizzard",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-10-04",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/overwatch-2"
    },
    {
        "id": 517,
        "title": "Lost Ark",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/517\/thumbnail.jpg",
        "short_description": "Smilegate\u2019s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
        "game_url": "https:\/\/www.freetogame.com\/open\/lost-ark",
        "genre": "ARPG",
        "platform": "PC (Windows)",
        "publisher": "Amazon Games",
        "developer": "Smilegate RPG",
        "release_date": "2022-02-11",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/lost-ark"
    },
    {
        "id": 516,
        "title": "PUBG: BATTLEGROUNDS",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/516\/thumbnail.jpg",
        "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
        "game_url": "https:\/\/www.freetogame.com\/open\/pubg",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "KRAFTON, Inc.",
        "developer": "KRAFTON, Inc.",
        "release_date": "2022-01-12",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/pubg"
    },
    {
        "id": 508,
        "title": "Enlisted",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/508\/thumbnail.jpg",
        "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software\u2019s MMO squad-based shooter Enlisted. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/enlisted",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Gaijin Entertainment",
        "developer": "Darkflow Software",
        "release_date": "2021-04-08",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/enlisted"
    },
    {
        "id": 345,
        "title": "Forge of Empires",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/345\/thumbnail.jpg",
        "short_description": "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
        "game_url": "https:\/\/www.freetogame.com\/open\/forge-of-empires",
        "genre": "Strategy",
        "platform": "Web Browser",
        "publisher": "InnoGames",
        "developer": "InnoGames",
        "release_date": "2012-04-17",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/forge-of-empires"
    },
    {
        "id": 475,
        "title": "Genshin Impact",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/475\/thumbnail.jpg",
        "short_description": "If you\u2019ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you\u2019re going to want to check out miHoYo\u2019s Genshin Impact.",
        "game_url": "https:\/\/www.freetogame.com\/open\/genshin-impact",
        "genre": "Action RPG",
        "platform": "PC (Windows)",
        "publisher": "miHoYo",
        "developer": "miHoYo",
        "release_date": "2020-09-28",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/genshin-impact"
    },
    {
        "id": 523,
        "title": "Fall Guys",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/523\/thumbnail.jpg",
        "short_description": "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/fall-guys",
        "genre": "Battle Royale",
        "platform": "PC (Windows)",
        "publisher": "Mediatonic",
        "developer": "Mediatonic",
        "release_date": "2020-08-04",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/fall-guys"
    },
    {
        "id": 340,
        "title": "Game Of Thrones Winter Is Coming",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/340\/thumbnail.jpg",
        "short_description": "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
        "game_url": "https:\/\/www.freetogame.com\/open\/game-of-thrones-winter-is-coming",
        "genre": "Strategy",
        "platform": "Web Browser",
        "publisher": "GTArcade",
        "developer": "YOOZOO Games ",
        "release_date": "2019-11-14",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/game-of-thrones-winter-is-coming"
    },
    {
        "id": 347,
        "title": "Elvenar",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/347\/thumbnail.jpg",
        "short_description": "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
        "game_url": "https:\/\/www.freetogame.com\/open\/elvenar",
        "genre": "Strategy",
        "platform": "Web Browser",
        "publisher": "InnoGames",
        "developer": "InnoGames",
        "release_date": "2015-04-08",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/elvenar"
    },
    {
        "id": 11,
        "title": "Neverwinter",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/11\/thumbnail.jpg",
        "short_description": "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/neverwinter",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Perfect World Entertainment",
        "developer": "Cryptic Studios",
        "release_date": "2013-12-06",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/neverwinter"
    },
    {
        "id": 380,
        "title": "Dark Orbit Reloaded",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/380\/thumbnail.jpg",
        "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
        "game_url": "https:\/\/www.freetogame.com\/open\/darkorbit",
        "genre": "Shooter",
        "platform": "Web Browser",
        "publisher": "Bigpoint",
        "developer": "Bigpoint",
        "release_date": "2006-12-11",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/darkorbit"
    },
    {
        "id": 573,
        "title": "Titan Revenge",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/573\/thumbnail.jpg",
        "short_description": "A 3D Norse-themed browser MMORPG developed and published by Game Hollywood Games",
        "game_url": "https:\/\/www.freetogame.com\/open\/titan-revenge",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "publisher": "Game Hollywood Games",
        "developer": "Game Hollywood Games",
        "release_date": "2023-12-20",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/titan-revenge"
    },
    {
        "id": 521,
        "title": "Diablo Immortal",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/521\/thumbnail.jpg",
        "short_description": "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
        "game_url": "https:\/\/www.freetogame.com\/open\/diablo-immortal",
        "genre": "MMOARPG",
        "platform": "PC (Windows)",
        "publisher": "Blizzard Entertainment",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-06-02",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/diablo-immortal"
    },
    {
        "id": 522,
        "title": "Flyff Universe",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/522\/thumbnail.jpg",
        "short_description": "Get the full Flyff experience on any platform with the free-to-play browser-based MMORPG Flyff Universe.",
        "game_url": "https:\/\/www.freetogame.com\/open\/flyff-universe",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "publisher": "Gala Lab",
        "developer": "Gala Lab",
        "release_date": "2022-06-14",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/flyff-universe"
    },
    {
        "id": 511,
        "title": "Phantasy Star Online 2 New Genesis",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/511\/thumbnail.jpg",
        "short_description": "The legacy of Phantasy Star Online 2 continues a thousand years later!",
        "game_url": "https:\/\/www.freetogame.com\/open\/pso2-new-genesis",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Sega",
        "developer": "Sega",
        "release_date": "2021-06-09",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/pso2-new-genesis"
    },
    {
        "id": 455,
        "title": "Eternal Fury",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/455\/thumbnail.jpg",
        "short_description": "A free-to-play ARPG from R2 Games!",
        "game_url": "https:\/\/www.freetogame.com\/open\/eternal-fury",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "publisher": "R2 Games",
        "developer": "R2 Games",
        "release_date": "2019-05-21",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/eternal-fury"
    },
    {
        "id": 5,
        "title": "Crossout",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/5\/thumbnail.jpg",
        "short_description": "A post-apocalyptic MMO vehicle combat game! ",
        "game_url": "https:\/\/www.freetogame.com\/open\/crossout",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Targem",
        "developer": "Gaijin",
        "release_date": "2017-05-30",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/crossout"
    },
    {
        "id": 9,
        "title": "World of Warships",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/9\/thumbnail.jpg",
        "short_description": "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
        "game_url": "https:\/\/www.freetogame.com\/open\/world-of-warships",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Wargaming",
        "developer": "Wargaming",
        "release_date": "2015-07-02",
        "freetogame_profile_url": "https:\/\/www.freetogame.com\/world-of-warships"
    }
];

class GamesService {
    constructor() {
        this.games = games;
    }

    getGames() {
        return this.games;
    }

    getGameById(id) {
        return this.games.find(game=>game.id === id);
    }
    
    createGame(game) {
        this.games.push(game);
    }

    updateGame(game) {
        const index = games.findIndex(g => g.id === game.id);
        if (index !== -1) {
            games[index] = { ...games[index], ...game };
        } else {
            throw new Error('Game not found');
        }
    }
    
    deleteGame(gameId) {
        this.games = this.games.filter(game => game.id != gameId);
    }
}

module.exports = GamesService;