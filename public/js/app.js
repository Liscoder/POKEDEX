var pokemon = '<div class="row">'+
				  '<div class="col-lg-3" ng-repeat="pokemon in group">'+
					'<div class="pokemon panel panel-primary">'+
					  '<div class="panel-heading">'+
						'<h1>'+
						  '__nombre__'+
						  '<small>Seed Pokémon</small>'+
						  '<span class="label label-primary pull-right">#101</span>'+
						'</h1>'+
					  '</div>'+
					  '<div class="panel-body">'+
						'<a href="/pokemon/bulbasaur">'+
						  '<img class="avatar center-block" src="img/pokemons/bulbasaur.jpg">'+
						'</a>'+
					  '</div>'+
					  '<div class="panel-footer">'+
						'<div class="text-center">'+
						  '<a href="/grass">'+
							'<span class="label type type-grass">'+
							  'Grass'+
							'</span>'+
						  '</a>'+
						  '<a href="/poison">'+
							'<span class="label type type-poison">'+
							 ' Poison'+
							' </span>'+
						  '</a>'+
						'</div>'+
					  '</div>'+
					'</div>'+
				  '</div>'+
				'</div>'



$(document).ready(function() {
	$.get("pokemon.json",function(data) {
	 var totalPokemon=data.length
		for (var i = 0;i<totalPokemon; i++) {
			var pokemonTmp = pokemon.replace('__nombre__',data[i].name)
			$("#lista-pokemon").append(pokemonTmp);
			}

	})
})
