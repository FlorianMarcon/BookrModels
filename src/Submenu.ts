import {Place} from "./Place";
import {Food} from "./Food";

export interface Submenu {

	_id				:	number;

	name			:	string;

	quantity		:	number;

	idMenu			:	number;

	place			:	Place;

	foods			:	Array<Food>;
}
