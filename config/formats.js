// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////



	{
		name: "Pokecharms Standard",
		section: "Singles",
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Unreleased', 'Illegal']
	},
/*	{
		name: "Battle Spot Singles",
		section: "Singles",
		
		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The necessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 3) return ['You must bring at least three Pokémon.'];
		}
	},
	{
		name: "Maison",
		section: "Singles",
		
		ruleset: ['Pokemon', 'Freedom', 'Team Preview', 'Baton Pass Clause'],
		banlist: ['MU', 'TU', 'Soul Dew']
	},
	{
		name: "No Legendary",
		section: "Singles",
		
		ruleset: ['Pokemon', 'Freedom', 'Team Preview', 'Baton Pass Clause'],
		banlist: ['Leg', 'MU', 'TU', 'Soul Dew']
	}, */
	{
		name: "Anything Goes",
		section: "Singles",
		
		ruleset: ['Pokemon', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal']
	},
	{
		name: "Little Cup",
		section: "Singles",
		
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom', 'Uber', 'SU', 'FM']
	},
	{
		name: "Random Battle",
		section: "Singles",
		
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

		{
		name: "Pokecharms Doubles",
		section: "Doubles",
		
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standarddoubles', 'Team Preview'],
		banlist: ['Soul Dew', 'Unreleased', 'Illegal']
	},
/*	{
		name: "Battle Spot Doubles",
		section: "Doubles",
		
		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pokémon.'];
		}
	}, */
	{
		name: "VGC 2014",
		section: "Doubles",
		
		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standardgbu', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The necessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pokémon.'];
		}
	},
		
	{
		name: "Random Doubles Battle",
		section: "Doubles",
		
		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},

	// XY Triples
	///////////////////////////////////////////////////////////////////


	{
		name: "Pokecharms Triples",
		section: "Triples",
		
		gameType: 'triples',
		ruleset: ['Pokemon', 'Standarddoubles', 'Team Preview'],
		banlist: ['Soul Dew', 'Illegal', 'Unreleased']
	},
	{
		name: "Pokecharms Triples - Pick 3",
		section: "Triples",
		
		gameType: 'triples',
		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standarddoubles', 'Team Preview'],
		banlist: ['Soul Dew', 'Illegal', 'Unreleased']
	},
	
		{
		name: "Random Triples Battle",
		section: "Triples",
		
		gameType: 'triples',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

/*	{
		name: "350 Cup",
		section: "Other Metagames",
		column: 2,
		
		mod: '350cup',
		ruleset: ['Ubers', 'Evasion Moves Clause'],
		banlist: ['Darumaka', 'Pawniard', 'Spritzee', 'DeepSeaScale', 'DeepSeaTooth', 'Light Ball', 'Thick Club'],
		validateSet: function (set) {
			var template = Tools.getTemplate(set.species);
			var item = this.getItem(set.item);
			if (item.name === 'Eviolite' && Object.values(template.baseStats).sum() <= 350) {
				return ['Eviolite is banned on Pokémon with 350 or lower BST.'];
			}
		}
	},
	{
		name: "ORAS OU",
		section: "Other Metagames",
		
		mod: 'oras',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Illegal', 'Uber', 'Floette-Eternal-Flower', 'Hoopa', 'Volcanion', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Soul Dew',
			'Bug Gem', 'Custap Berry', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fighting Gem', 'Fire Gem', 'Flying Gem', 'Ghost Gem',
			'Grass Gem', 'Ground Gem', 'Ice Gem', 'Mail', 'Poison Gem', 'Psychic Gem', 'Rock Gem', 'Steel Gem', 'Water Gem'
		]
	},
	{
		name: "Monotype",
		section: "Other Metagames",
		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Gengarite', 'Kangaskhanite', 'Lucarionite'
		]
	},
	{
		name: "Tier Shift",
		section: "Other Metagames",
		mod: 'tiershift',
		ruleset: ['OU']
	},
	{
		name: "Hidden Type",
		section: "Other Metagames",
		mod: 'hiddentype',
		ruleset: ['OU']
	}, */
];
