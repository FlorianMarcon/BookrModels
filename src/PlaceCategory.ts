export interface PlaceCategory {

	_id					:	number;
	
	name				:	string;

	imageUrl			:	string;

	index				:	number;

	/**
	 * FIELD RESOLVER
	 */
	placeCount			:	number;
}

export interface ICreatePlaceCategoryInput {
	name				:	string;
}

export interface IUpdatePlaceCategoryInput {
	name?				:	string;
}