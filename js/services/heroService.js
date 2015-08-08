app.factory('heroService', function () {
	var leoric = {
		reanimation: {name: 'Reanimation', image: '/img/abilities/leoric/reanimation.png', abNumber: 4},
		fealty: {name: 'Fealty Unto Death', image: '/img/abilities/leoric/fealty.png', abNumber: 1},
		ossein: {name: 'Osein Renewal', image: '/img/abilities/leoric/ossein.png', abNumber: 4},
		march: {name: 'March of the Black King', image: '/img/abilities/leoric/march.png', abNumber: 2, ult: true},
		burning: {name: 'Burning Rage', image: '/img/abilities/leoric/burning.png', abNumber: 1},
		consume: {name: 'Consume Vitality', image: '/img/abilities/leoric/consume.png', abNumber: 2},
		leech: {name: 'Spectral Leech', image: '/img/abilities/leoric/leech.png', abNumber: 1},
	}
	var nazeebo = {
		ritual: {name: 'Death Ritual', image:'img/abilities/nazeebo/DeathRitual.png', abNumber: 2},
		cluster: {name: 'Spider Cluster', image:'img/abilities/nazeebo/SpiderCluster.png', abNumber: 1},
		gidbinn: {name: 'Gidbinn', image:'img/abilities/nazeebo/Gidbinn.png', abNumber: 1},
		gargantuan: {name: 'Gargantuan', image:'img/abilities/nazeebo/Gargantuan.png', abNumber: 2, ult: true},
		rush: {name: 'Dead Rush', image:'img/abilities/nazeebo/DeadRush.png', abNumber: 1},
		leaping: {name: 'Leaping Spiders', image:'img/abilities/nazeebo/SpiderCluster.png', abNumber: 2},
		humangoid: {name: 'Humongoid', image:'img/abilities/nazeebo/Gargantuan.png', abNumber: 1},
	}
	var butcher = {
		victuals: {name: 'Victuals', image:'img/abilities/butcher/Abattoir.png', abNumber: 4},
		cheap: {name: 'Cheap Shot', image:'img/abilities/butcher/CheapShot.png', abNumber: 1},
		abattoir: {name: 'Abattoir', image:'img/abilities/butcher/Abattoir.png', abNumber: 3},
		furnace: {name: 'Furnace Blast', image:'img/abilities/butcher/FurnaceBlast.png', abNumber: 2, ult: true},
		crave: {name: 'Crave Flesh', image:'img/abilities/butcher/CraveFlesh.png', abNumber: 3},
		frenzy: {name: 'Blood Frenzy', image:'img/abilities/butcher/Abattoir.png', abNumber: 3},
		nexus: {name: 'Nexus Blades', image:'img/abilities/butcher/NexusBlades.png', abNumber: 3},
	}
	var jaina = {
		chill: {name: 'Deep Chill', image:'img/abilities/jaina/DeepChill.png', abNumber: 3},	
		snow: {name: 'Snowstorm', image:'img/abilities/jaina/Snowstorm.png', abNumber: 2},	
		frostbitten: {name: 'Frostbitten', image:'img/abilities/jaina/DeepChill.png', abNumber: 2},
		elemental: {name: 'Summon Water Elemental', image:'img/abilities/jaina/SummonWaterElemental.png', abNumber: 3, ult: true},
		iceblock: {name: 'Improved Ice Block', image:'img/abilities/jaina/ImprovedIceBlock.png', abNumber: 2, three: true},
		northern: {name: 'Northern Exposure', image:'img/abilities/jaina/NorthernExposure.png', abNumber: 3},
		wintermute: {name: 'Wintermute', image:'img/abilities/jaina/SummonWaterElemental.png', abNumber: 2},
	}
	var johanna = {
		knight: {name: 'Knight Takes Pawn', image:'img/abilities/johanna/KnightTakesPawn.png', abNumber: 4},	
		hope: {name: 'Laws of Hope', image:'img/abilities/johanna/LawsofHope.png', abNumber: 4},	
		conviction: {name: 'Conviction', image:'img/abilities/johanna/KnightTakesPawn.png', abNumber: 2},
		shield: {name: 'Blessed Shield', image:'img/abilities/johanna/BlessedShield.png', abNumber: 3, ult: true},
		rage: {name: 'Burning Rage', image:'img/abilities/johanna/BurningRage.png', abNumber: 1},
		hammer: {name: 'Blessed Hammer', image:'img/abilities/johanna/KnightTakesPawn.png', abNumber: 2},
		indestructible: {name: 'Indestructible', image:'img/abilities/johanna/Indestructible.png', abNumber: 3},
	}
	var muradin = {
		reverberation: {name: 'Reverberation', image:'img/abilities/muradin/Reverberation.png', abNumber: 4},	
		thunderburn: {name: 'Thunderburn', image:'img/abilities/muradin/Reverberation.png', abNumber: 4},	
		piercing: {name: 'Piercing Bolt', image:'img/abilities/muradin/PiercingBolt.png', abNumber: 1},
		avatar: {name: 'Avatar', image:'img/abilities/muradin/Avatar.png', abNumber: 2, ult: true},
		rage: {name: 'Burning Rage', image:'img/abilities/muradin/BurningRage.png', abNumber: 1},
		stoneform: {name: 'Stoneform', image:'img/abilities/muradin/Stoneform.png', abNumber: 5, fifth: true},
		unstoppable: {name: 'Unstoppable Force', image:'img/abilities/muradin/Avatar.png', abNumber: 4},
	}
	var rehgar = {
		grace: {name: "Spiritwalker's Grace", image:'img/abilities/rehgar/SpiritwalkersGrace.png', abNumber: 1},	
		feralheart: {name: 'Feral Heart', image:'img/abilities/rehgar/FeralHeart.png', abNumber: 1},	
		earthshield: {name: 'Earth Shield', image:'img/abilities/rehgar/EarthShield.png', abNumber: 2},
		ancestral: {name: 'Ancestral Healing', image:'img/abilities/rehgar/AncestralHealing.png', abNumber: 2, ult: true},
		surge: {name: 'Healing Surge', image:'img/abilities/rehgar/SpiritwalkersGrace.png', abNumber: 1},
		tidal: {name: 'Tidal Waves', image:'img/abilities/rehgar/SpiritwalkersGrace.png', abNumber: 1},
		rewind: {name: 'Rewind', image:'img/abilities/rehgar/Rewind.png', abNumber: 3},
	}
	var zeratul = {
		regen: {name: "Regeneration Master", image:'img/abilities/zeratul/RegenerationMaster.png', abNumber: 4, fifth: true},	
		focused: {name: 'Focused Attack', image:'img/abilities/zeratul/FocusedAttack.png', abNumber: 1, fifth: true},	
		follow: {name: 'Follow Through', image:'img/abilities/zeratul/FollowThrough.png', abNumber: 2, fifth: true},
		void: {name: 'Void Prison', image:'img/abilities/zeratul/VoidPrison.png', abNumber: 3, ult: true},
		assassin: {name: "Assassin's Blade", image:'img/abilities/zeratul/AssassinsBlade.png', abNumber: 3, fifth: true},
		double: {name: 'Double Bombs', image:'img/abilities/zeratul/DoubleBombs.png', abNumber: 3},
		nexus: {name: 'Nexus Blades', image:'img/abilities/zeratul/NexusBlades.png', abNumber: 4},
	}
	var kaelthas = {
		mana: {name: "Mana Addict", image:'img/abilities/kaelthas/ManaAddict.png', abNumber: 1},	
		gathering: {name: 'Gathering Power', image:'img/abilities/kaelthas/GatheringPower.png', abNumber: 3},	
		fission: {name: 'Fission Bomb', image:'img/abilities/kaelthas/FissionBomb.png', abNumber: 2},
		phoenix: {name: 'Phoenix', image:'img/abilities/kaelthas/Phoenix.png', abNumber: 2, ult: true},
		flamethrower: {name: "Flamethrower", image:'img/abilities/kaelthas/Flamethrower.png', abNumber: 1},
		ignite: {name: 'Ignite', image:'img/abilities/kaelthas/Flamethrower.png', abNumber: 1},
		arcane: {name: 'Nexus Blades', image:'img/abilities/kaelthas/ArcanePower.png', abNumber: 4},
	}
	var azmodan = {
		taste: {name: "Taste for Blood", image:'img/abilities/azmodan/TasteforBlood.png', abNumber: 1, fifth: true},	
		bound: {name: 'Bound Minion', image:'img/abilities/azmodan/BoundMinion.png', abNumber: 4, fifth: true},	
		infernal: {name: 'Infernal Globe', image:'img/abilities/azmodan/TasteforBlood.png', abNumber: 3, fifth: true},
		black: {name: 'Black Pool', image:'img/abilities/azmodan/BlackPool.png', abNumber: 3, ult: true},
		march: {name: "March of Sin", image:'img/abilities/azmodan/MarchofSin.png', abNumber: 3},
		battleborn: {name: 'Battleborn', image:'img/abilities/azmodan/TasteforBlood.png', abNumber: 4},
		bolt: {name: 'Bolt of the Storm', image:'img/abilities/azmodan/BoltoftheStorm.png', abNumber: 2},
	}
	var sylvanas = {
		barbed: {name: "Barbed Shot", image:'img/abilities/sylvanas/BarbedShot.png', abNumber: 3},	
		envenom: {name: 'Envenom', image:'img/abilities/sylvanas/Envenom.png', abNumber: 4},	
		unstable: {name: 'Unstable Poison', image:'img/abilities/sylvanas/UnstablePoison.png', abNumber: 3, fifth: true},
		wailing: {name: 'Wailing Arrow', image:'img/abilities/sylvanas/WailingArrow.png', abNumber: 2, ult: true},
		splinter: {name: "Splinter Shot", image:'img/abilities/sylvanas/BarbedShot.png', abNumber: 3},
		cold: {name: 'Cold Embrace', image:'img/abilities/sylvanas/ColdEmbrace.png', abNumber: 2},
		bolt: {name: 'Bolt of the Storm', image:'img/abilities/sylvanas/BoltoftheStorm.png', abNumber: 4},
	}
	var anubarak = {
		regen: {name: "Regeneration Master", image:'img/abilities/anubarak/RegenerationMaster.png', abNumber: 4},	
		legion: {name: 'Legion of Beetles', image:'img/abilities/anubarak/LegionofBeetles.png', abNumber: 4},	
		leeching: {name: 'Leeching Scarab', image:'img/abilities/anubarak/LegionofBeetles.png', abNumber: 2, fifth: true},
		locust: {name: 'Locust Swarm', image:'img/abilities/anubarak/LocustSwarm.png', abNumber: 2, ult: true},
		burning: {name: "Burning Rage", image:'img/abilities/anubarak/BurningRage.png', abNumber: 2},
		imposing: {name: 'Imposing Presence', image:'img/abilities/anubarak/ImposingPresence.png', abNumber: 4},
		hive: {name: 'Hive Master', image:'img/abilities/anubarak/LocustSwarm.png', abNumber: 4},
	}
	var tyrael = {
		purge: {name: "Purge Evil", image:'img/abilities/tyrael/PurgeEvil.png', abNumber: 4},	
		amplified: {name: 'Amplified Healing', image:'img/abilities/tyrael/AmplifiedHealing.png', abNumber: 1},	
		battle: {name: 'Battle Momentum', image:'img/abilities/tyrael/BattleMomentum.png', abNumber: 1, fifth: true},
		judgment: {name: 'Judgment', image:'img/abilities/tyrael/Judgment.png', abNumber: 2, ult: true},
		burning: {name: "Burning Rage", image:'img/abilities/tyrael/BurningRage.png', abNumber: 2},
		blood: {name: 'Blood for Blood', image:'img/abilities/tyrael/BloodforBlood.png', abNumber: 4},
		nexus: {name: 'Nexus Blades', image:'img/abilities/tyrael/NexusBlades.png', abNumber: 4},
	}
	var tassadar = {
		overload: {name: "Overload", image:'img/abilities/tassadar/Overload.png', abNumber: 1},	
		mental: {name: 'Mental Acuity', image:'img/abilities/tassadar/MentalAcuity.png', abNumber: 1, fifth: true},	
		static: {name: 'Static Charge', image:'img/abilities/tassadar/Overload.png', abNumber: 2},
		archon: {name: 'Archon', image:'img/abilities/tassadar/Archon.png', abNumber: 2, ult: true},
		shrink: {name: "Shrink Ray", image:'img/abilities/tassadar/ShrinkRay.png', abNumber: 2, fifth: true},
		second: {name: 'Second Strike', image:'img/abilities/tassadar/Overload.png', abNumber: 4},
		twilight: {name: 'Twilight Archon', image:'img/abilities/tassadar/Archon.png', abNumber: 1},
	}
	var valla = {
		composite: {name: "Composite Arrows", image:'img/abilities/valla/Arsenal.png', abNumber: 3, fifth: true},	
		arsenal: {name: 'Arsenal', image:'img/abilities/valla/Arsenal.png', abNumber: 4},	
		repeating: {name: 'Repeating Arrow', image:'img/abilities/valla/RepeatingArrow.png', abNumber: 2},
		strafe: {name: 'Strafe', image:'img/abilities/valla/Strafe.png', abNumber: 2, ult: true},
		frost: {name: "Frost Shot", image:'img/abilities/valla/Arsenal.png', abNumber: 2},
		blood: {name: 'Blood for Blood', image:'img/abilities/valla/BloodforBlood.png', abNumber: 3},
		nexus: {name: 'Nexus Frenzy', image:'img/abilities/valla/NexusFrenzy.png', abNumber: 3},
	}
	var zagara = {
		reconstitution: {name: "Reconstitution", image:'img/abilities/zagara/Reconstitution.png', abNumber: 3},	
		envenom: {name: 'Envenomed Spines', image:'img/abilities/zagara/EnvenomedSpines.png', abNumber: 1, fifth: true},	
		rapid: {name: 'Rapid Incubation', image:'img/abilities/zagara/RapidIncubation.png', abNumber: 4, fifth: true},
		devouring: {name: 'Devouring Maw', image:'img/abilities/zagara/DevouringMaw.png', abNumber: 2, ult: true},
		mutalisk: {name: "Mutalisk", image:'img/abilities/zagara/Mutalisk.png', abNumber: 1, fifth: true},
		brood: {name: 'Brood Expansion', image:'img/abilities/zagara/Mutalisk.png', abNumber: 2},
		fury: {name: 'Fury of the Storm', image:'img/abilities/zagara/FuryoftheStorm.png', abNumber: 4},
	}
	var tyrande = {
		empower: {name: "Empower", image:'img/abilities/tyrande/Empower.png', abNumber: 4},	
		pierce: {name: 'Pierce', image:'img/abilities/tyrande/Empower.png', abNumber: 1, fifth: true},	
		lunar: {name: 'Lunar Blaze', image:'img/abilities/tyrande/LunarBlaze.png', abNumber: 2},
		starfall: {name: 'Starfall', image:'img/abilities/tyrande/Starfall.png', abNumber: 2, ult: true},
		overflowing: {name: "Overflowing Light", image:'img/abilities/tyrande/OverflowingLight.png', abNumber: 1},
		ranger: {name: 'Ranger', image:'img/abilities/tyrande/Empower.png', abNumber: 3},
		rewind: {name: 'Rewind', image:'img/abilities/tyrande/Rewind.png', abNumber: 5, fifth: true},
	}
	var uther = {
		conjurer: {name: "Conjurer's Pursuit", image:'img/abilities/uther/ConjurersPursuit.png', abNumber: 1},	
		boundless: {name: 'Boundless Conviction', image:'img/abilities/uther/BoundlessConviction.png', abNumber: 4},	
		cleanse: {name: 'Cleanse', image:'img/abilities/uther/Cleanse.png', abNumber: 4, fifth: true},
		divine: {name: 'Divine Shield', image:'img/abilities/uther/DivineShield.png', abNumber: 2, ult: true},
		shrink: {name: "Shrink Ray", image:'img/abilities/uther/ShrinkRay.png', abNumber: 4},
		benediction: {name: 'Benediction', image:'img/abilities/uther/Benediction.png', abNumber: 4},
		redemption: {name: 'Redemption', image:'img/abilities/uther/Redemption.png', abNumber: 3},
	}
	var malfurion = {
		moonburn: {name: "Moonburn", image:'img/abilities/malfurion/Moonburn.png', abNumber: 3},	
		elunes: {name: "Elune's Grace", image:'img/abilities/malfurion/ElunesGrace.png', abNumber: 2},	
		enduring: {name: 'Enduring Growth', image:'img/abilities/malfurion/EnduringGrowth.png', abNumber: 1},
		tranquility: {name: 'Tranquility', image:'img/abilities/malfurion/Tranquility.png', abNumber: 2, ult: true},
		life: {name: "Life Seed", image:'img/abilities/malfurion/EnduringGrowth.png', abNumber: 4},
		tenacious: {name: 'Tenacious Roots', image:'img/abilities/malfurion/TenaciousRoots.png', abNumber: 1},
		storm: {name: 'Storm Shield', image:'img/abilities/malfurion/StormShield.png', abNumber: 5, fifth: true},
	}
	var abathur = {
		pressurized: {name: "Pressurized Glands", image:'img/abilities/abathur/PressurizedGlands.png', abNumber: 1},	
		adrenal: {name: "Adrenal Overload", image:'img/abilities/abathur/AdrenalOverload.png', abNumber: 4},	
		mule: {name: 'Calldown: MULE', image:'img/abilities/abathur/CalldownMULE.png', abNumber: 4},
		evolve: {name: 'Evolve Monstrosity', image:'img/abilities/abathur/EvolveMonstrosity.png', abNumber: 2, ult: true},
		soma: {name: "Soma Transference", image:'img/abilities/abathur/PressurizedGlands.png', abNumber: 4},
		envenomed: {name: 'Envenomed Spikes', image:'img/abilities/abathur/PressurizedGlands.png', abNumber: 1},
		hivemind: {name: 'Hivemind', image:'img/abilities/abathur/Hivemind.png', abNumber: 3},
	}
	var brightwing = {
		hyper: {name: "Hyper Shift", image:'img/abilities/brightwing/HyperShift.png', abNumber: 2},	
		manic: {name: "Manic Pixie", image:'img/abilities/brightwing/ManicPixie.png', abNumber: 1},	
		phase: {name: 'Phase Shield', image:'img/abilities/brightwing/HyperShift.png', abNumber: 2},
		blink: {name: 'Blink Heal', image:'img/abilities/brightwing/BlinkHeal.png', abNumber: 2, ult: true},
		shield: {name: "Shield Dust", image:'img/abilities/brightwing/ManicPixie.png', abNumber: 3},
		greater: {name: 'Greater Polymorph', image:'img/abilities/brightwing/GreaterPolymorph.png', abNumber: 3},
		storm: {name: 'Storm Shield', image:'img/abilities/brightwing/StormShield.png', abNumber: 4, fifth: true},
	}
	var kerrigan = {
		sweeping: {name: "Sweeping Grasp", image:'img/abilities/kerrigan/SweepingGrasp.png', abNumber: 3, fifth: true},	
		envenom: {name: "Envenom", image:'img/abilities/kerrigan/Envenom.png', abNumber: 5, fifth: true},	
		impaling: {name: 'Impaling Swarm', image:'img/abilities/kerrigan/ImpalingSwarm.png', abNumber: 2},
		summon: {name: 'Summon Ultralisk', image:'img/abilities/kerrigan/SummonUltralisk.png', abNumber: 3, ult: true},
		sprint: {name: "Sprint", image:'img/abilities/kerrigan/Sprint.png', abNumber: 4},
		blood: {name: 'Blood for Blood', image:'img/abilities/kerrigan/BloodforBlood.png', abNumber: 3},
		nexus: {name: 'Nexus Blades', image:'img/abilities/kerrigan/NexusBlades.png', abNumber: 4},
	}
	var illidan = {
		shadow: {name: "Shadow Shield", image:'img/abilities/illidan/ShadowShield.png', abNumber: 2},	
		immolation: {name: "Immolation", image:'img/abilities/illidan/Immolation.png', abNumber: 3},	
		first: {name: 'First Aid', image:'img/abilities/illidan/FirstAid.png', abNumber: 5, fifth: true},
		metamorph: {name: 'Metamorphosis', image:'img/abilities/illidan/Metamorphosis.png', abNumber: 2, ult: true},
		giant: {name: "Giant Killer", image:'img/abilities/illidan/GiantKiller.png', abNumber: 5, fifth: true},
		blood: {name: 'Blood for Blood', image:'img/abilities/illidan/BloodforBlood.png', abNumber: 4},
		nexus: {name: 'Nexus Blades', image:'img/abilities/illidan/NexusBlades.png', abNumber: 4},
	}
	var etc = {
		rolling: {name: "Rolling Like a Stone", image:'img/abilities/etc/RollingLikeaStone.png', abNumber: 1},	
		double: {name: "Double-Necked Guitar", image:'img/abilities/etc/RollingLikeaStone.png', abNumber: 1},	
		loud: {name: 'Loud Speakers', image:'img/abilities/etc/LoudSpeakers.png', abNumber: 3},
		mosh: {name: 'Mosh Pit', image:'img/abilities/etc/MoshPit.png', abNumber: 2, ult: true},
		facemelt: {name: "Face Smelt", image:'img/abilities/etc/LoudSpeakers.png', abNumber: 3},
		echo: {name: 'Echo Pedal', image:'img/abilities/etc/EchoPedal.png', abNumber: 2},
		tour: {name: 'Nexus Blades', image:'img/abilities/etc/MoshPit.png', abNumber: 5, fifth: true},
	}
	var arthas = {
		regen: {name: "Regeneration Master", image:'img/abilities/arthas/RegenerationMaster.png', abNumber: 4},	
		destruction: {name: "Destruction", image:'img/abilities/arthas/Destruction.png', abNumber: 2},	
		rune: {name: 'Rune Tap', image:'img/abilities/arthas/RuneTap.png', abNumber: 1},
		army: {name: 'Army of the Dead', image:'img/abilities/arthas/ArmyoftheDead.png', abNumber: 2, ult: true},
		biting: {name: "Biting Cold", image:'img/abilities/arthas/BitingCold.png', abNumber: 4},
		frost: {name: 'Frostmourne Feeds', image:'img/abilities/arthas/Destruction.png', abNumber: 1},
		hardened: {name: 'Hardened Shield', image:'img/abilities/arthas/HardenedShield.png', abNumber: 3},
	}
	var nova = {
		ambush: {name: "Ambush Snipe", image:'img/abilities/nova/AmbushSnipe.png', abNumber: 3},	
		gathering: {name: "Gathering Power", image:'img/abilities/nova/GatheringPower.png', abNumber: 3},	
		anti: {name: 'Anti-Armor Shells', image:'img/abilities/nova/AntiArmorShells.png', abNumber: 3},
		precis: {name: 'Precision Strike', image:'img/abilities/nova/PrecisionStrike.png', abNumber: 3, ult: true},
		lethal: {name: "Lethal Decoy", image:'img/abilities/nova/DoubleFake.png', abNumber: 1},
		double: {name: 'Double Fake', image:'img/abilities/nova/DoubleFake.png', abNumber: 3},
		rewind: {name: 'Rewind', image:'img/abilities/nova/Rewind.png', abNumber: 3},
	}
	var falstad = {
		power: {name: "Power Throw", image:'img/abilities/falstad/PowerThrow.png', abNumber: 1, fifth: true},	
		vampiric: {name: "Vampiric Assault", image:'img/abilities/falstad/VampiricAssault.png', abNumber: 3},	
		secret: {name: 'Secret Weapon', image:'img/abilities/falstad/PowerThrow.png', abNumber: 2, fifth: true},
		hinterland: {name: 'Hinterland Blast', image:'img/abilities/falstad/HinterlandBlast.png', abNumber: 2, ult: true},
		giant: {name: "Giant Killer", image:'img/abilities/falstad/GiantKiller.png', abNumber: 1},
		hammer: {name: 'Hammer Time', image:'img/abilities/falstad/PowerThrow.png', abNumber: 2},
		nexus: {name: 'Nexus Frenzy', image:'img/abilities/falstad/NexusFrenzy.png', abNumber: 3},
	}
	var tychus = {
		armor: {name: "Armor Piercing Rounds", image:'img/abilities/tychus/ArmorPiercingRounds.png', abNumber: 1, fifth: true},	
		spray: {name: "Spray 'n' Pray", image:'img/abilities/tychus/ArmorPiercingRounds.png', abNumber: 3},	
		first: {name: 'First Aid', image:'img/abilities/tychus/FirstAid.png', abNumber: 3},
		drakken: {name: 'Drakken Laser Drill', image:'img/abilities/tychus/DrakkenLaserDrill.png', abNumber: 3, ult: true},
		lead: {name: "Lead Rain", image:'img/abilities/tychus/ArmorPiercingRounds.png', abNumber: 2},
		lock: {name: 'Lock and Load', image:'img/abilities/tychus/LockandLoad.png', abNumber: 2},
		focusing: {name: 'Focusing Diodes', image:'img/abilities/tychus/DrakkenLaserDrill.png', abNumber: 2},
	}
	var lili = {
		timeless: {name: "Timeless Creature", image:'img/abilities/lili/TimelessCreature.png', abNumber: 3},	
		mending: {name: "Mending Serpent", image:'img/abilities/lili/TimelessCreature.png', abNumber: 2},	
		lightning: {name: 'Lightning Serpent', image:'img/abilities/lili/TimelessCreature.png', abNumber: 4},
		jug: {name: 'Jug of 1,000 Cups', image:'img/abilities/lili/Jugof1000Cups.png', abNumber: 2, ult: true},
		hindering: {name: "Hindering Winds", image:'img/abilities/lili/HinderingWinds.png', abNumber: 2},
		serpent: {name: 'Serpent Sidekick', image:'img/abilities/lili/TimelessCreature.png', abNumber: 4},
		kungfu: {name: 'Kung Fu Hustle', image:'img/abilities/lili/KungFuHustle.png', abNumber: 3, fifth: true},
	}
	var vikings = {
		explosive: {name: "Explosive Attacks", image:'img/abilities/vikings/ExplosiveAttacks.png', abNumber: 3},	
		pain: {name: "Pain Don't Hurt", image:'img/abilities/vikings/ExplosiveAttacks.png', abNumber: 1},	
		baelog: {name: 'Baelog the Fierce', image:'img/abilities/vikings/ExplosiveAttacks.png', abNumber: 1},
		play: {name: 'Play Again!', image:'img/abilities/vikings/PlayAgain.png', abNumber: 3, ult: true},
		nordic: {name: "Nordic Attack Squad", image:'img/abilities/vikings/NordicAttackSquad.png', abNumber: 3},
		executioner: {name: 'Executioner', image:'img/abilities/vikings/Executioner.png', abNumber: 4},
		fury: {name: 'Fury of the Storm', image:'img/abilities/vikings/FuryoftheStorm.png', abNumber: 3, fifth: true},
	}
	var gazlowe = {
		scrap: {name: "Scrap-o-matic Smelter", image:'img/abilities/gazlowe/ScrapoMaticSmelter.png', abNumber: 2, fifth: true},	
		reduce: {name: "Reduce, Reuse, Recycle", image:'img/abilities/gazlowe/ScrapoMaticSmelter.png', abNumber: 2, fifth: true},	
		rock: {name: 'Rock-it! Turret XL', image:'img/abilities/gazlowe/RockItTurretXL.png', abNumber: 2},
		grav: {name: 'Grav-o-Bomb 3000', image:'img/abilities/gazlowe/Gravobomb3000.png', abNumber: 3, ult: true},
		turret: {name: "Turret Storage", image:'img/abilities/gazlowe/RockItTurretXL.png', abNumber: 2},
		long: {name: 'Long-Ranged Turrets', image:'img/abilities/gazlowe/RockItTurretXL.png', abNumber: 1},
		miniature: {name: 'Miniature Black Hole', image:'img/abilities/gazlowe/Gravobomb3000.png', abNumber: 2},
	}
	var diablo = {
		soulfeast: {name: "Soul Feast", image:'img/abilities/diablo/SoulFeast.png', abNumber: 2},	
		fire: {name: "Fire Devil", image:'img/abilities/diablo/FireDevil.png', abNumber: 3},	
		soulsteal: {name: 'Soul Steal', image:'img/abilities/diablo/SoulSteal.png', abNumber: 2},
		apocalypse: {name: 'Apocalypse', image:'img/abilities/diablo/Apocalypse.png', abNumber: 2, ult: true},
		firestorm: {name: "Firestorm", image:'img/abilities/diablo/FireDevil.png', abNumber: 2},
		imposing: {name: 'Imposing Presence', image:'img/abilities/diablo/ImposingPresence.png', abNumber: 4},
		lord: {name: 'Lord of Terror', image:'img/abilities/diablo/LordofTerror.png', abNumber: 3},
	}
	var chen = {
		regen: {name: "Regeneration Master", image:'img/abilities/chen/RegenerationMaster.png', abNumber: 4},	
		swift: {name: "Swift Reflexes", image:'img/abilities/chen/SwiftReflexes.png', abNumber: 1},	
		brew: {name: "Brewmaster's Balance", image:'img/abilities/chen/BrewmastersBalance.png', abNumber: 4},
		storm: {name: 'Storm, Fire, Earth', image:'img/abilities/chen/StormEarthFire.png', abNumber: 3, ult: true},
		enough: {name: "Enough to Spare", image:'img/abilities/chen/BrewmastersBalance.png', abNumber: 3},
		bolder: {name: 'Bolder Flavor', image:'img/abilities/chen/BrewmastersBalance.png', abNumber: 4},
		elemental: {name: 'Elemental Conduit', image:'img/abilities/chen/StormEarthFire.png', abNumber: 2},
	}
	var hammer = {
		advanced: {name: "Advanced Artillery", image:'img/abilities/hammer/AdvancedArtillery.png', abNumber: 4, fifth: true},	
		vampiric: {name: "Vampiric Assualt", image:'img/abilities/hammer/VampiricAssault.png', abNumber: 1},	
		first: {name: "First Aid", image:'img/abilities/hammer/FirstAid.png', abNumber: 3},
		napalm: {name: 'Napalm Strike', image:'img/abilities/hammer/NapalmStrike.png', abNumber: 3, ult: true},
		giant: {name: "Giant Killer", image:'img/abilities/hammer/GiantKiller.png', abNumber: 1},
		graduating: {name: 'Graduating Range', image:'img/abilities/hammer/GraduatingRange.png', abNumber: 4, fifth: true},
		nexus: {name: 'Nexus Frenzy', image:'img/abilities/hammer/NexusFrenzy.png', abNumber: 4},
	}
	var stitches = {
		chew: {name: "Chew Your Food", image:'img/abilities/stitches/ChewYourFood.png', abNumber: 2},	
		amplified: {name: "Amplified Healing", image:'img/abilities/stitches/AmplifiedHealing.png', abNumber: 1},	
		tenderizer: {name: "Tenderizer", image:'img/abilities/stitches/Tenderizer.png', abNumber: 1},
		putrid: {name: 'Putrid Bile', image:'img/abilities/stitches/PutridBile.png', abNumber: 2, ult: true},
		relentless: {name: "Relentless", image:'img/abilities/stitches/Relentless.png', abNumber: 1},
		fishing: {name: 'Fishing Hook', image:'img/abilities/stitches/FishingHook.png', abNumber: 2},
		hardened: {name: 'Hardened Shield', image:'img/abilities/stitches/HardenedShield.png', abNumber: 3},
	}
	var sonya = {
		war: {name: "War Paint", image:'img/abilities/sonya/WarPaint.png', abNumber: 1},	
		superiority: {name: "Superiority", image:'img/abilities/sonya/Superiority.png', abNumber: 4},	
		ferocious: {name: "Ferocious Healing", image:'img/abilities/sonya/FerociousHealing.png', abNumber: 4},
		wrath: {name: 'Wrath of the Berserker', image:'img/abilities/sonya/WrathoftheBerserker.png', abNumber: 3, ult: true},
		mystical: {name: "Mystical Spear", image:'img/abilities/sonya/MysticalSpear.png', abNumber: 3},
		nerves: {name: 'Nerves of Steel', image:'img/abilities/sonya/NervesofSteel.png', abNumber: 4},
		ignore: {name: 'Ignore Pain', image:'img/abilities/sonya/IgnorePain.png', abNumber: 4},
	}
	var murky = {
		block: {name: "Block", image:'img/abilities/murky/Block.png', abNumber: 1},	
		living: {name: "Living The Dream", image:'img/abilities/murky/LivingTheDream.png', abNumber: 3},	
		slime: {name: "Slime Advantage", image:'img/abilities/murky/SlimeAdvantage.png', abNumber: 1},
		octo: {name: 'Octo-Grab', image:'img/abilities/murky/OctoGrab.png', abNumber: 3, ult: true},
		wrath: {name: "Wrath of Cod", image:'img/abilities/murky/WrathofCod.png', abNumber: 2},
		slimy: {name: 'Slimy Pufferfish', image:'img/abilities/murky/WrathofCod.png', abNumber: 2},
		shark: {name: '... and a Shark Too!', image:'img/abilities/murky/OctoGrab.png', abNumber: 2},
	}
	var thrall = {
		rolling: {name: "Rolling Thunder", image:'img/abilities/thrall/RollingThunder.png', abNumber: 2},	
		envenom: {name: "Envenom", image:'img/abilities/thrall/Envenom.png', abNumber: 4},	
		wind: {name: "Wind Shear", image:'img/abilities/thrall/WindShear.png', abNumber: 1},
		sundering: {name: 'Sundering', image:'img/abilities/thrall/Sundering.png', abNumber: 2, ult: true},
		grace: {name: "Grace of Air", image:'img/abilities/thrall/WindShear.png', abNumber: 2},
		tempest: {name: 'Tempest Fury', image:'img/abilities/thrall/WindShear.png', abNumber: 2},
		nexus: {name: 'Nexus Blades', image:'img/abilities/thrall/NexusBlades.png', abNumber: 3},
	}
	var raynor = {
		seasoned: {name: "Seasoned Marksman", image:'img/abilities/raynor/SeasonedMarksman.png', abNumber: 2},	
		focused: {name: "Focused Attack", image:'img/abilities/raynor/FocusedAttack.png', abNumber: 1},	
		revolution: {name: "Revolution Overdrive", image:'img/abilities/raynor/RevolutionOverdrive.png', abNumber: 2},
		hyperion: {name: 'Hyperion', image:'img/abilities/raynor/Hyperion.png', abNumber: 2, ult: true},
		giant: {name: "Giant Killer", image:'img/abilities/raynor/GiantKiller.png', abNumber: 1},
		executioner: {name: 'Executioner', image:'img/abilities/raynor/Executioner.png', abNumber: 1, fifth: true},
		nexus: {name: 'Nexus Frenzy', image:'img/abilities/raynor/NexusFrenzy.png', abNumber: 4, fifth: true},
	}
	
	var heroes = [
		{
			name: "Raynor",
			title: 'Renegade Commander',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/raynor_renegadeCommander.jpg?v=58-77',
			wins: 67.7,
			build:[raynor.seasoned, raynor.focused, raynor.revolution, raynor.hyperion, raynor.giant, raynor.executioner, raynor.nexus],
			show: true
		},
		{
			name: "Thrall",
			title: 'Warchief of the Horde',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/thrall_warchiefOfTheHorde.jpg?v=58-77',
			wins: 65.9,
			build:[thrall.rolling, thrall.envenom, thrall.wind, thrall.sundering, thrall.grace, thrall.tempest, thrall.nexus],
			show: true
		},
		{
			name: "Murky",
			title: 'Baby Murloc',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/murky_babyMurloc.jpg?v=58-77',
			wins: 69,
			build:[murky.block, murky.living, murky.slime, murky.octo, murky.wrath, murky.slimy, murky.shark],
			show: true
		},
		{
			name: "Sonya",
			title: 'Wandering Barbarian',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/sonya_wanderingBarbarian.jpg?v=58-77',
			wins: 70.2,
			build:[sonya.war, sonya.superiority, sonya.ferocious, sonya.wrath, sonya.mystical, sonya.nerves, sonya.ignore],
			show: true
		},
		{
			name: "Stitches",
			title: 'Terror of Darkshire',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/stitches_terrorOfDarkshire.jpg?v=58-77',
			wins: 67.4,
			build:[stitches.chew, stitches.amplified, stitches.tenderizer, stitches.putrid, stitches.relentless, stitches.fishing, stitches.hardened],
			show: true
		},
		{
			name: "Sgt. Hammer",
			title: 'Siege Tank Operator',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/sgt-hammer_siegeTankOperator.jpg?v=58-77',
			wins: 71,
			build:[hammer.advanced, hammer.vampiric, hammer.first, hammer.napalm, hammer.giant, hammer.graduating, hammer.nexus],
			show: true
		},
		{
			name: "Chen",
			title: 'Legendary Brewmaster',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/chen_legendaryBrewmaster.jpg?v=58-77',
			wins: 71.7,
			build:[chen.regen, chen.swift, chen.brew, chen.storm, chen.enough, chen.bolder, chen.elemental],
			show: true
		},
		{
			name: "Diablo",
			title: 'Lord of Terror',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/diablo_lordOfTerror.jpg?v=58-77',
			wins: 70.3,
			build:[diablo.soulfeast, diablo.fire, diablo.soulsteal, diablo.apocalypse, diablo.firestorm, diablo.imposing, diablo.lord],
			show: true
		},
		{
			name: "Gazlowe",
			title: 'Boss of Ratchet',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/gazlowe_bossOfRatchet.jpg?v=58-77',
			wins: 64.9,
			build:[gazlowe.scrap, gazlowe.reduce, gazlowe.rock, gazlowe.grav, gazlowe.turret, gazlowe.long, gazlowe.miniature],
			show: true
		},
		{
			name: "The Lost Vikings",
			title: 'Triple Trouble',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/the-lost-vikings_tripleTrouble.jpg?v=58-77',
			wins: 73.2,
			build:[vikings.explosive, vikings.pain, vikings.baelog, vikings.play, vikings.nordic, vikings.executioner, vikings.fury],
			show: true
		},
		{
			name: "Li Li",
			title: 'World Wanderer',
			role: support,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/lili_worldWanderer.jpg?v=58-77',
			wins: 68.8,
			build:[lili.timeless, lili.mending, lili.lightning, lili.jug, lili.hindering, lili.serpent, lili.kungfu],
			show: true
		},
		{
			name: "Tychus",
			title: 'Notorious Outlaw',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/tychus_notoriousOutlaw.jpg?v=58-77',
			wins: 63.2,
			build:[tychus.armor, tychus.spray, tychus.first, tychus.drakken, tychus.lead, tychus.lock, tychus.focusing],
			show: true
		},
		{
			name: "Falstad",
			title: 'Wildhammer Thane',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/falstad_wildhammerThane.jpg?v=58-77',
			wins: 63.8,
			build:[falstad.power, falstad.vampiric, falstad.secret, falstad.hinterland, falstad.giant, falstad.hammer, falstad.nexus],
			show: true
		},
		{
			name: "Nova",
			title: 'Dominion Ghost',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/nova_dominionGhost.jpg?v=58-77',
			wins: 65.9,
			build:[nova.ambush, nova.gathering, nova.anti, nova.precis, nova.lethal, nova.double, nova.rewind],
			show: true
		},
		{
			name: "Arthas",
			title: 'The Lich King',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/arthas_theLichKing.jpg?v=58-77',
			wins: 65.2,
			build:[arthas.regen, arthas.destruction, arthas.rune, arthas.army, arthas.biting, arthas.frost, arthas.hardened],
			show: true
		},
		{
			name: "E.T.C.",
			title: 'Rock God',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/etc_rockGod.jpg?v=58-77',
			wins: 66.3,
			build:[etc.rolling, etc.double, etc.loud, etc.mosh, etc.facemelt, etc.echo, etc.tour],
			show: true
		},
		{
			name: "Illidan",
			title: 'The Betrayer',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/illidan_theBetrayer.jpg?v=58-77',
			wins: 63.3,
			build:[illidan.shadow, illidan.immolation, illidan.first, illidan.metamorph, illidan.giant, illidan.blood, illidan.nexus],
			show: true
		},
		{
			name: "Kerrigan",
			title: 'Queen of Blades',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/kerrigan_queenOfBlades.jpg?v=58-77',
			wins: 67.6,
			build:[kerrigan.sweeping, kerrigan.envenom, kerrigan.impaling, kerrigan.summon, kerrigan.sprint, kerrigan.blood, kerrigan.nexus],
			show: true
		},
		{
			name: "Brightwing",
			title: 'Faerie Dragon',
			role: support,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/brightwing_faerieDragon.jpg?v=58-77',
			wins: 72.8,
			build:[brightwing.hyper, brightwing.manic, brightwing.phase, brightwing.blink, brightwing.shield, brightwing.greater, brightwing.storm],
			show: true
		},
		{
			name: "Abathur",
			title: 'Evolution Master',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/abathur_evolutionMaster.jpg?v=58-77',
			wins: 64.5,
			build:[abathur.pressurized, abathur.adrenal, abathur.mule, abathur.evolve, abathur.soma, abathur.envenomed, abathur.hivemind],
			show: true
		},
		{
			name: "Malfurion",
			title: 'Archdruid',
			role: support,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/malfurion_archdruid.jpg?v=58-77',
			wins: 62.8,
			build:[malfurion.moonburn, malfurion.elunes, malfurion.enduring, malfurion.tranquility,	malfurion.life, malfurion.tenacious, malfurion.storm],
			show: true
		},
		{
			name: "Uther",
			title: 'The Lightbringer',
			role: support,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/uther_theLightbringer.jpg?v=58-77',
			wins: 64.6,
			build:[uther.conjurer,	uther.boundless,	uther.cleanse, uther.divine, uther.shrink,	uther.benediction,	uther.redemption],
			show: true
		},
		{
			name: "Tyrande",
			title: 'High Priestess of Elune',
			role: support,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/tyrande_highPriestessOfElune.jpg?v=58-77',
			wins: 69.1,
			build:[tyrande.empower, tyrande.pierce, tyrande.lunar, tyrande.starfall, tyrande.overflowing, tyrande.ranger, tyrande.rewind],
			show: true
		},
		{
			name: "Zagara",
			title: 'Broodmother of the Swarm',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/zagara_broodmotherOfTheSwarm.jpg?v=58-77',
			wins: 64.8,
			build:[zagara.reconstitution, zagara.envenom, zagara.rapid, zagara.devouring, zagara.mutalisk, zagara.brood, zagara.fury],
			show: true
		},
		{
			name: "Valla",
			title: 'Demon Hunter',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/valla_demonHunter.jpg?v=58-77',
			wins: 63,
			build:[valla.composite, valla.arsenal, valla.repeating, valla.strafe, valla.frost, valla.blood, valla.nexus],
			show: true
		},
		{
			name: "Tassadar",
			title: 'Savior of the Templar',
			role: support,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/tassadar_saviorOfTheTemplar.jpg?v=58-77',
			wins: 60.6,
			build:[tassadar.overload, tassadar.mental, tassadar.static, tassadar.archon, tassadar.shrink, tassadar.second, tassadar.twilight],
			show: true
		},
		{
			name: "Tyrael",
			title: 'Archangel of Justice',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/tyrael_archangelOfJustice.jpg?v=58-77',
			wins: 67.4,
			build:[tyrael.purge, tyrael.amplified, tyrael.battle, tyrael.judgment, tyrael.burning, tyrael.blood, tyrael.nexus],
			show: true
		},
		{
			name: "Anub'arak",
			title: 'Traitor King',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/anubarak_traitorKing.jpg?v=58-77',
			wins: 70.6,
			build:[anubarak.regen, anubarak.legion, anubarak.leeching, anubarak.locust, anubarak.burning, anubarak.imposing, anubarak.hive],
			show: true
		},
		{
			name: "Sylvanas",
			title: 'The Banshee Queen',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/sylvanas_theBansheeQueen.jpg?v=58-77',
			wins: 59.9,
			build:[sylvanas.barbed, sylvanas.envenom, sylvanas.unstable, sylvanas.wailing, sylvanas.splinter, sylvanas.cold, sylvanas.bolt],
			show: true
		},
		{
			name: "Azmodan",
			title: 'Lord of Sin',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/azmodan_lordOfSin.jpg?v=58-77',
			wins: 65.5,
			build:[azmodan.taste, azmodan.bound, azmodan.infernal, azmodan.black, azmodan.march, azmodan.battleborn, azmodan.bolt],
			show: true
		},
		{
			name: "Kael'thas",
			title: 'The Sun King',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/kaelthas_theSunKing.jpg?v=58-77',
			wins: 68.4,
			build:[kaelthas.mana, kaelthas.gathering, kaelthas.fission, kaelthas.phoenix, kaelthas.flamethrower, kaelthas.ignite, kaelthas.arcane],
			show: true
		},
		{
			name: 'Zeratul',
			title: 'Dark Prelate',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/zeratul_darkPrelate.jpg?v=58-77',
			wins: 66.4,
			build:[zeratul.regen, zeratul.focused, zeratul.follow, zeratul.void, zeratul.assassin, zeratul.double, zeratul.nexus],
			show: true
		},
		{
			name: 'Rehgar',
			title: 'Shaman of the Earthen Ring',
			role: support,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/rehgar_shamanOfTheEarthenRing.jpg?v=58-77',
			wins: 62.5,
			build:[rehgar.grace, rehgar.feralheart, rehgar.earthshield, rehgar.ancestral, rehgar.surge, rehgar.tidal, rehgar.rewind],
			show: true
		},
		{
			name: 'Leoric',
			title: 'Skeleton King',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/leoric_theSkeletonKing.jpg?v=58-77',
			wins: 71,
			build:[leoric.reanimation, leoric.fealty, leoric.ossein, leoric.march, leoric.burning, leoric.consume, leoric.leech],
			show: true
		},
		{
			name: 'Nazeebo',
			title: 'Heretic Witch Doctor',
			role: specialist,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/nazeebo_hereticWitchDoctor.jpg?v=58-77',
			wins: 69.8,
			build:[nazeebo.ritual, nazeebo.cluster, nazeebo.gidbinn, nazeebo.gargantuan, nazeebo.rush, nazeebo.leaping, nazeebo.humangoid],
			show: true
		},
		{
			name: 'The Butcher',
			title: 'Flesh Carver',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/the-butcher_fleshCarver.jpg?v=58-77',
			wins: 66.2,
			build:[butcher.victuals, butcher.cheap, butcher.abattoir, butcher.furnace, butcher.crave, butcher.frenzy, butcher.nexus],
			show: true
		},
		{
			name: 'Jaina',
			title: 'Archmage',
			role: assassin,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/jaina_archmage.jpg?v=58-77',
			wins: 65.9,
			build:[jaina.chill, jaina.snow, jaina.frostbitten, jaina.elemental, jaina.iceblock, jaina.northern, jaina.wintermute],
			show: true
		},
		{
			name: 'Johanna',
			title: 'Crusader of Zakarum',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/johanna_crusaderOfZakarum.jpg?v=58-77',
			wins: 68.9,
			build:[johanna.knight, johanna.hope, johanna.conviction, johanna.shield, johanna.rage, johanna.hammer, johanna.indestructible],
			show: true
		},
		{
			name: 'Muradin',
			title: 'Mountain King',
			role: warrior,
			image: 'http://us.battle.net/heroes/static/images/heroes/skins/thumbnails/muradin_mountainKing.jpg?v=58-77',
			wins: 67.2,
			build:[muradin.reverberation, muradin.thunderburn, muradin.piercing, muradin.avatar, muradin.rage, muradin.stoneform, muradin.unstoppable],
			show: true
		}
	];
 
	return heroes;
});
