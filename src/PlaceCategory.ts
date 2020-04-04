export interface PlaceCategory {

	_id					:	number;
	
	name				:	string;

	imageUrl			:	string;
}

export interface ICreatePlaceCategoryInput {
	name				:	string;
}

export interface IUpdatePlaceCategoryInput {
	name				:	string;
}