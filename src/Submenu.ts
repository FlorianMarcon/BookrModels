import {Place} from "./Place";
import {Food} from "./Food";

export interface Submenu {

	_id				:	string;

	idPlace			:	string;
	
	name			:	string;

	quantity		:	number;

	idFoods			:	Array<string>;

	idMenu			:	string;

	place?			:	Place;

	foods?			:	Array<Food>;
}
